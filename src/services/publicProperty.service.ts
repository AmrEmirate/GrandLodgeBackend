import { prisma } from '../config/prisma';
import { startOfMonth, endOfMonth } from 'date-fns';

export const PublicPropertyService = {
  getProperties: async (filters: any) => {
    const { page = 1, limit = 10, sortBy = 'name', order = 'asc', search, category, location, startDate, endDate } = filters;
    const skip = (page - 1) * limit;

    const where: any = { deletedAt: null };

    if (search) where.name = { contains: search, mode: 'insensitive' };
    if (category) where.category = { name: category };
    
    if (location) {
        where.city = {
            name: {
                contains: location,
                mode: 'insensitive'
            }
        };
    }

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      where.rooms = {
        some: {
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
        rooms: { orderBy: { basePrice: 'asc' }, take: 1 },
      },
    });

    const totalProperties = await prisma.property.count({ where });

    return {
      data: properties,
      meta: { total: totalProperties, page: Number(page), limit: Number(limit), totalPages: Math.ceil(totalProperties / limit) },
    };
  },
  
  getPropertyById: async (id: number) => {
    return await prisma.property.findUnique({
      where: { id, deletedAt: null },
      include: {
        category: true,
        city: true,
        rooms: true,
        amenities: true,
        tenant: { include: { user: { select: { fullName: true, profilePicture: true } } } },
      },
    });
  },
  
  getMonthlyAvailability: async (propertyId: number, month: number, year: number) => {
    const startDate = startOfMonth(new Date(year, month - 1));
    const endDate = endOfMonth(new Date(year, month - 1));

    const rooms = await prisma.room.findMany({
      where: { propertyId: propertyId },
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

  getCities: async () => {
    return await prisma.city.findMany({
      orderBy: {
        name: 'asc'
      }
    });
  },
};