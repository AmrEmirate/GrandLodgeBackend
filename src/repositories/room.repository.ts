import { prisma } from '../config/prisma';
import { Room, RoomCategory, BedOption } from '../generated/prisma';

// Interface ini tidak perlu diubah karena tipe data di dalamnya sudah benar
interface RoomData {
  name: string;
  category: RoomCategory;
  description: string;
  bedOption: BedOption;
  capacity: number;
  basePrice: number;
}

export const RoomRepository = {
  /**
   * Membuat kamar baru untuk properti tertentu.
   * @param propertyId - ID properti (UUID) tempat kamar akan dibuat.
   * @param data - Data untuk kamar baru.
   */
  create: async (propertyId: string, data: RoomData): Promise<Room> => {
    return await prisma.room.create({
      data: {
        propertyId: propertyId, // terhubung ke Property via UUID
        name: data.name,
        category: data.category,
        description: data.description,
        bedOption: data.bedOption,
        capacity: data.capacity,
        basePrice: data.basePrice,
      },
    });
  },

  /**
   * Menemukan semua kamar berdasarkan ID properti.
   * @param propertyId - ID properti (UUID) untuk mencari kamar.
   */
  findAllByPropertyId: async (propertyId: string): Promise<Room[]> => {
    return await prisma.room.findMany({
      where: { propertyId: propertyId },
    });
  },

  /**
   * Menemukan satu kamar berdasarkan ID uniknya.
   * @param roomId - ID unik kamar (UUID).
   */
  findById: async (roomId: string): Promise<Room | null> => {
    return await prisma.room.findUnique({
      where: { id: roomId },
    });
  },

  /**
   * Memperbarui data kamar.
   * @param roomId - ID kamar (UUID) yang akan diperbarui.
   * @param data - Data parsial yang akan diubah.
   */
  update: async (roomId: string, data: Partial<RoomData>): Promise<Room> => {
    return await prisma.room.update({
      where: { id: roomId },
      data: data,
    });
  },

  /**
   * Menghapus kamar dari database.
   * @param roomId - ID kamar (UUID) yang akan dihapus.
   */
  delete: async (roomId: string): Promise<Room> => {
    return await prisma.room.delete({
      where: { id: roomId },
    });
  },

  /**
   * Menambahkan beberapa gambar galeri ke kamar.
   * @param roomId - ID kamar (UUID) tempat gambar akan ditambahkan.
   * @param imageUrls - Array berisi URL gambar yang akan ditambahkan.
   */
  addGalleryImages: async (roomId: string, imageUrls: string[]) => {
    const imageData = imageUrls.map(url => ({
      roomId: roomId,
      imageUrl: url,
    }));

    // Membuat banyak record RoomImage dalam satu transaksi
    await prisma.roomImage.createMany({
      data: imageData,
    });

    // Mengembalikan data kamar terbaru beserta gambar-gambarnya
    return prisma.room.findUnique({
      where: { id: roomId },
      include: { images: true }
    });
  },
};