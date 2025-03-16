import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: "dpfknqwbt",
      api_key: "492625299455638",
      api_secret: "MqL_-0zKPn0Pxo-xz5AQEy_Sz2A",
    });
  }
  async uploadImage(file: Express.Multer.File) {
    console.log(process.env.CLOUDINARY_CLOUD_NAME)
    console.log(process.env.CLOUDINARY_API_KEY)
    console.log(process.env.CLOUDINARY_API_SECRET)
    
    try {
      return await  cloudinary.uploader.upload( file.path, {
        folder: 'restaurant_images',
        resource_type: 'auto',
      });
    } catch (error) {
      console.error('Cloudinary upload error:', error); 
      throw new Error('Cloudinary upload error: ' + error.message);
    }
  }

  
}
