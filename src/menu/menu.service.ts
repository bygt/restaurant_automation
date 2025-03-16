import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Menu, MenuDocument } from './schemas/menu.schema';
import { Model } from 'mongoose';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu.name) private menuModel: Model<MenuDocument>,
  ) {}

  // Create method to add a new menu item
  async createMenu(createMenuDto: CreateMenuDto): Promise<MenuDocument> {
    const createdMenu = new this.menuModel(createMenuDto);
    return await createdMenu.save();
  }

  // Update method to modify an existing menu item
  async updateMenu(id: string, createMenuDto: CreateMenuDto): Promise<MenuDocument> {
    return await this.menuModel.findByIdAndUpdate(id, createMenuDto, { new: true });
  }
}
