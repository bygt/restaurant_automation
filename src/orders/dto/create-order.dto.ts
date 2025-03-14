import {  IsArray,  IsMongoId,  IsNotEmpty,  IsNumber,  IsOptional,  IsString,  IsIn,  Min,} from 'class-validator';
import { Types } from 'mongoose';

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty({ message: 'Order items cannot be empty' })
  orderItems: string[]; // ObjectId list for Menu items

  @IsString()
  @IsNotEmpty({ message: 'Order type is required' })
  @IsIn(['delivery', 'dinein'], {
    message: 'Order type must be either delivery or dinein',
  })
  orderType: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsMongoId({ message: 'Invalid user ID' })
  user?: Types.ObjectId; // Only required for delivery orders

  
  @IsMongoId({ message: 'Invalid user ID' })
  waiter: Types.ObjectId; 

  @IsOptional()
  @IsNumber()
  shippingPrice?: number; // Only required for delivery orders

  @IsOptional()
  @IsNumber()
  tableNumber?: number; // Only required for dine-in orders

  @IsString()
  @IsNotEmpty({ message: 'Payment method is required' })
  paymentMethod: string;

  @IsNumber()
  @Min(0, { message: 'Items price must be at least 0' })
  itemsPrice: number;

  @IsNumber()
  @Min(0)
  taxRate: number; // Instead of total tax price, store only percentage

  @IsNumber()
  @Min(0)
  totalPrice: number;
}
