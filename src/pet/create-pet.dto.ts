import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CreatePetDto {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  breed: string;

  @Field((type) => Int)
  age: number;
}
