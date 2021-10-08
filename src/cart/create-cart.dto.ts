import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Pet } from 'src/pet/pet.schema';

@ObjectType()
export class CreateCartDto {
  @Field()
  customerId: string;

  @Field()
  items: Pet[];
}
