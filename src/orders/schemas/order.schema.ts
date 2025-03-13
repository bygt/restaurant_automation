import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, unique: true, auto: true }) // Auto-increment order number
  orderNumber: number;

  @Prop({ required: true, enum: ['delivery', 'dinein'] }) // Enum for order type
  orderType: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Menu' }], required: true })
  orderItems: Types.ObjectId[];

  @Prop({
    default: '',
    required: function (this: Order) {
      return this.orderType === 'delivery';
    },
  })
  address: string; // Required if orderType is 'delivery'

  @Prop({ type: Types.ObjectId, ref: 'User', default: null })
  waiter: Types.ObjectId; // For delivery, this means courier ID

  @Prop({
    default: 0,
    required: function (this: Order) {
      return this.orderType === 'delivery';
    },
  })
  shippingPrice: number; // Required if orderType is 'delivery'

  @Prop({ default: 0 })
  tableNumber: number;

  @Prop({ required: true, enum: ['cash', 'credit_card', 'online'] }) // Enum for payment method
  paymentMethod: string;

  @Prop({ required: true })
  itemsPrice: number;

  @Prop({ default: 18 })
  taxRate: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({
    default: 'pending',
    enum: ['pending', 'delivered', 'cancelled', 'processing'],
  }) // Enum for status
  status: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: function (this: Order) {
      return this.orderType === 'delivery';
    },
  })
  user: Types.ObjectId;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
