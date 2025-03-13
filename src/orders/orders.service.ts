import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const { orderType, address, user, shippingPrice } = createOrderDto;

    // `orderType` control
    if (!['delivery', 'dinein'].includes(orderType)) {
      throw new BadRequestException('Invalid order type. Must be "delivery" or "dinein".');
    }

    if (orderType === 'delivery') {
      if (!user) throw new BadRequestException('User ID is required for delivery orders.');
      if (!address) throw new BadRequestException('Address is required for delivery orders.');
    }

    const newOrder = new this.orderModel({
      ...createOrderDto,
      taxRate: createOrderDto.taxRate ?? 18,
      shippingPrice: orderType === 'delivery' ? shippingPrice ?? 10 : 0, 
    });

    return await newOrder.save();
  }
}
