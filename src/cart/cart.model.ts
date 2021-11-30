import { Field, ObjectType } from '@nestjs/graphql';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Customer } from 'src/customer/customer.model';
import { Pet } from 'src/pet/pet.model';

export type CartDocument = Cart & Document;

@ObjectType()
@Schema()
export class Cart {
  @Field(() => Customer)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Customer.name })
  customerId: mongoose.Schema.Types.ObjectId;

  @Field(() => [Pet])
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: Pet.name })
  items: mongoose.Schema.Types.ObjectId[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
