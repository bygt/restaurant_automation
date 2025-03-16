import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';


@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('create')
  async createMenu(@Body() createMenuDto: CreateMenuDto) {
    const createdMenu = await this.menuService.createMenu(createMenuDto);
    return {
      message: 'Menu item created successfully!',
      data: createdMenu,
    };
  }

  @Put('update/:id')
  async updateMenu(@Param('id') id: string, @Body() createMenuDto: CreateMenuDto) {
    const updatedMenu = await this.menuService.updateMenu(id, createMenuDto);
    return {
      message: 'Menu item updated successfully!',
      data: updatedMenu,
    };
  }
}

