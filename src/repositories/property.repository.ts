import { prisma } from '../config/prisma';
import { Property } from '@prisma/client';

export const PropertyRepository = {
  create: async (data: any, tenantId: number): Promise<Property> => {
    return await prisma.property.create({
      data: {
        ...data,
        tenantId: tenantId,
      },
    });
  },

  findAllByTenantId: async (tenantId: number): Promise<Property[]> => {
    return await prisma.property.findMany({
      where: { tenantId: tenantId, deletedAt: null },
      include: {
        category: true,
      },
    });
  },

  findByIdAndTenantId: async (id: number, tenantId: number): Promise<Property | null> => {
    return await prisma.property.findFirst({
      where: { id: id, tenantId: tenantId, deletedAt: null },
    });
  },

  update: async (id: number, data: any): Promise<Property> => {
    return await prisma.property.update({
      where: { id: id },
      data: data,
    });
  },

  softDelete: async (id: number): Promise<Property> => {
    return await prisma.property.update({
      where: { id: id },
      data: {
        deletedAt: new Date(),
      },
    });
  },
};