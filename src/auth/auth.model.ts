import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthDto {
  @Field()
  email: string;

  @Field()
  password: string;
}
