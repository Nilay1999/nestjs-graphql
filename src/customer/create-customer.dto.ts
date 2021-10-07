import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CreateCustomerDto {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;
}
