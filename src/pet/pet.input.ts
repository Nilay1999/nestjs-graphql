import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PetInput {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  breed: string;

  @Field((type) => Int)
  age: number;
}
