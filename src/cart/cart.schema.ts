import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Pet } from 'src/pet/pet.schema';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop()
  customerId: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }] })
  items: Pet[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
