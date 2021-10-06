import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
  @Prop()
  type: String;

  @Prop()
  breed: String;

  @Prop()
  age: String;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
