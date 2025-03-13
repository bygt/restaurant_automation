import { IsString, IsNumber, IsOptional, IsArray, IsMongoId, Min } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  orderNumber: number;

  @IsString()
  orderType: string; // 'delivery' or 'dinein'

  @IsArray()
  @IsMongoId({ each: true }) // every must be a valid ObjectId 
  orderItems: string[];

  @IsOptional()
  @IsString()
  address?: string; // only for delivery orders

  @IsOptional()
  @IsMongoId()
  waiter?: string; //courier ID for delivery orders
  @IsOptional()
  @IsNumber()
  @Min(0)
  shippingPrice?: number; // only for delivery orders

  @IsOptional()
  @IsNumber()
  tableNumber?: number; // only for dinein orders
  @IsString()
  paymentMethod: string;

  @IsNumber()
  @Min(0)
  itemsPrice: number;  

  @IsOptional()
  @IsNumber()
  @Min(0)
  taxRate?: number; // default value is 18

  @IsNumber()
  @Min(0)
  totalPrice: number;

  @IsOptional()
  @IsString()
  status?: string; // 'pending', 'delivered', 'cancelled', 'processing' || default value is 'pending'

  @IsOptional()
  @IsMongoId()
  user?: string; // only for delivery orders
}
