import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema({ timestamps: true })
export class Menu {

  @Prop({ default: 0 })
  name: string;

  @Prop({ required: true})
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  imageUrl: string;
}

export const OrderSchema = SchemaFactory.createForClass(Menu);
