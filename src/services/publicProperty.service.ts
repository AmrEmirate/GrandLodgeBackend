import { prisma } from '../config/prisma';
import { startOfMonth, endOfMonth } from 'date-fns';

export const PublicPropertyService = {
  /**
   * Mengambil daftar properti dengan filter, paginasi, dan sortir.
   * Hanya properti, kategori, dan kota yang aktif (tidak di-soft delete) yang akan ditampilkan.
   */
  getProperties: async (filters: any) => {
    const { page = 1, limit = 10, sortBy = 'name', order = 'asc', search, category, location, startDate, endDate } = filters;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = { deletedAt: null };

    if (search) where.name = { contains: search, mode: 'insensitive' };
    if (category) where.category = { name: category, deletedAt: null };
    if (location) {
      where.city = {
        name: {
          contains: location,
          mode: 'insensitive',
        },
        deletedAt: null,
      };
    }

    // Filter berdasarkan ketersediaan kamar
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      where.rooms = {
        some: {
          deletedAt: null, // Pastikan kamarnya juga aktif
          availabilities: {
            none: {
              date: {
                gte: start,
                lte: end,
              },
              isAvailable: false,
            },
          },
        },
      };
    }

    const properties = await prisma.property.findMany({
      where,
      skip,
      take: Number(limit),
      orderBy: { name: sortBy === 'name' ? order : undefined },
      include: {
        category: true,
        city: true,
        // Hanya ambil satu kamar aktif dengan harga termurah sebagai preview
        rooms: { 
          where: { deletedAt: null },
          orderBy: { basePrice: 'asc' }, 
          take: 1 
        },
      },
    });

    const totalProperties = await prisma.property.count({ where });

    return {
      data: properties,
      meta: { total: totalProperties, page: Number(page), limit: Number(limit), totalPages: Math.ceil(totalProperties / Number(limit)) },
    };
  },
  
  /**
   * Mengambil detail satu properti berdasarkan ID-nya.
   * Semua data relasi seperti kamar, fasilitas, dan ulasan juga difilter
   * untuk hanya menampilkan yang aktif.
   * @param id - ID properti (UUID).
   */
  getPropertyById: async (id: string) => {
    const property = await prisma.property.findFirst({
      where: { id, deletedAt: null },
      include: {
        // PERBAIKAN: Hapus 'where' dari relasi to-one (satu-ke-satu)
        category: true,
        city: true,
        tenant: { 
          include: { 
            user: { 
              select: { fullName: true, profilePicture: true } 
            }
          } 
        },
        
        // 'where' tetap ada di relasi to-many (satu-ke-banyak)
        rooms: { where: { deletedAt: null } },
        amenities: { where: { deletedAt: null } },
        reviews: {
          where: { deletedAt: null }, // Filter ulasan yang aktif
          include: {
            user: { // Ambil info user yang memberikan ulasan
              select: { fullName: true, profilePicture: true }
            }
          }
        },
      },
    });

    // Validasi manual setelah mengambil data
    if (property && (property.category?.deletedAt || property.city?.deletedAt || property.tenant?.deletedAt)) {
      return null; // Anggap properti tidak ditemukan jika relasinya sudah di-soft delete
    }

    return property;
  },
  
  /**
   * Mengambil data ketersediaan dan harga terendah bulanan untuk sebuah properti.
   * @param propertyId - ID properti (UUID).
   * @param month - Bulan (1-12).
   * @param year - Tahun.
   */
  getMonthlyAvailability: async (propertyId: string, month: number, year: number) => {
    const startDate = startOfMonth(new Date(year, month - 1));
    const endDate = endOfMonth(new Date(year, month - 1));

    const rooms = await prisma.room.findMany({
      where: { propertyId: propertyId, deletedAt: null },
      select: { id: true, basePrice: true },
    });
    if (rooms.length === 0) return [];
    
    const roomIds = rooms.map(room => room.id);
    const roomAvailabilities = await prisma.roomAvailability.findMany({
      where: { roomId: { in: roomIds }, date: { gte: startDate, lte: endDate } },
    });

    const availabilityMap = new Map();
    for (const ra of roomAvailabilities) {
      const dateStr = ra.date.toISOString().split('T')[0];
      if (!availabilityMap.has(dateStr)) {
        availabilityMap.set(dateStr, { lowestPrice: Infinity, isAvailable: false });
      }
      const current = availabilityMap.get(dateStr);
      if (ra.isAvailable) {
        current.isAvailable = true;
        if (ra.price < current.lowestPrice) {
          current.lowestPrice = ra.price;
        }
      }
    }

    const defaultLowestPrice = Math.min(...rooms.map(r => r.basePrice));
    const result = [];
    for (let day = new Date(startDate); day <= endDate; day.setDate(day.getDate() + 1)) {
        const dateStr = day.toISOString().split('T')[0];
        const availability = availabilityMap.get(dateStr);
        result.push({
            date: dateStr,
            isAvailable: availability ? availability.isAvailable : true,
            price: availability && availability.lowestPrice !== Infinity ? availability.lowestPrice : defaultLowestPrice
        });
    }
    return result;
  },

  /**
   * Mengambil semua kota yang aktif.
   */
  getCities: async () => {
    return await prisma.city.findMany({
      where: { deletedAt: null },
      orderBy: {
        name: 'asc'
      }
    });
  },
};