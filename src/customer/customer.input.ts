import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerDto {
  @Field({ nullable: true })
  id: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
