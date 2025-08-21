import { PropertyRepository } from '../repositories/property.repository';
import { Property } from '../generated/prisma';
import { GeocodingService } from './geocoding.service';

export const TenantPropertyService = {
  createProperty: async (data: any, tenantId: number): Promise<Property> => {
    const { name, categoryId, description, location, provinsi, zipCode } = data;
    const fullAddress = `${location}, ${provinsi}, ${zipCode}`;
    
    const { latitude, longitude } = await GeocodingService.getFromAddress(fullAddress);

    const propertyData = {
      name,
      categoryId,
      description,
      location,
      provinsi,
      zipCode,
      latitude,
      longitude,
    };

    return await PropertyRepository.create(propertyData, tenantId);
  },

  getPropertiesByTenant: async (tenantId: number): Promise<Property[]> => {
    return await PropertyRepository.findAllByTenantId(tenantId);
  },

  getPropertyDetailForTenant: async (id: number, tenantId: number): Promise<Property> => {
    const property = await PropertyRepository.findByIdAndTenantId(id, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }
    return property;
  },

  updateProperty: async (id: number, tenantId: number, data: any): Promise<Property> => {
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);
    return await PropertyRepository.update(id, data);
  },

  deleteProperty: async (id: number, tenantId: number): Promise<Property> => {
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);
    return await PropertyRepository.softDelete(id);
  },
};