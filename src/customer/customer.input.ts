import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CustomerInput {
  @Field({ nullable: true })
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
