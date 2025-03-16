import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) // 'file' is name of file field in the form-data
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const uploadResponse = await this.cloudinaryService.uploadImage(file);
    console.log("formdata", file.path)
    return {
      message: 'File uploaded successfully!',
      data: uploadResponse,
    };
  }
}
