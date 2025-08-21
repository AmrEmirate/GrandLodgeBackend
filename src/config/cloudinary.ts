import { v2 as cloudinaryUpload } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinaryUpload.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

export default cloudinaryUpload;