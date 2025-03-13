import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/restaurant_automation'),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('✅ Connected to MongoDB');
  }
}
