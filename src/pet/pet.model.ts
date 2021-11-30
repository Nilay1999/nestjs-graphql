import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PetDocument = Pet & Document;

@ObjectType()
@Schema()
export class Pet {
  @Field(() => String)
  id: string;

  @Field(() => String)
  @Prop()
  type: String;

  @Field(() => String)
  @Prop()
  breed: String;

  @Field(() => String)
  @Prop()
  age: String;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
