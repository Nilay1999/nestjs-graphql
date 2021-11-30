import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CustomerDocument = Customer & Document;

@ObjectType()
@Schema()
export class Customer {
  @Field(() => String)
  id: string;

  @Field(() => String)
  @Prop()
  email: string;

  @Field(() => String)
  @Prop()
  username: string;

  @Field(() => String)
  @Prop()
  password: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
