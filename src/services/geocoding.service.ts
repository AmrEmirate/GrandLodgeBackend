import axios from 'axios';

interface Coords {
  latitude: number | null;
  longitude: number | null;
}

export const GeocodingService = {
  getFromAddress: async (address: string): Promise<Coords> => {
    try {
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: address,
          key: process.env.OPENCAGE_API_KEY,
          limit: 1,
        },
      });

      if (response.data && response.data.results.length > 0) {
        const coords = response.data.results[0].geometry;
        console.log(`Geocoding success for ${address}:`, { latitude: coords.lat, longitude: coords.lng });
        return { latitude: coords.lat, longitude: coords.lng };
      }
      return { latitude: null, longitude: null };
    } catch (error) {
      console.error('Geocoding failed:', error);
      return { latitude: null, longitude: null };
    }
  },
};