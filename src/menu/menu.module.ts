import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu, MenuSchema } from './schemas/menu.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
        MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }]),
      ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
