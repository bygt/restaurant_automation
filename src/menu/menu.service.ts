import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Menu, MenuDocument } from './schemas/menu.schema';
import { Model } from 'mongoose';

@Injectable()
export class MenuService {
    constructor (@InjectModel(Menu.name) private menuModel : Model<MenuDocument>) {}
}
