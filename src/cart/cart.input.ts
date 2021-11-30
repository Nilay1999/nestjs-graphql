import { InputType, Field } from '@nestjs/graphql';
import * as mongoose from 'mongoose';

@InputType()
export class AddToCartInput {
  @Field(() => String)
  customerId: mongoose.Types.ObjectId;

  @Field(() => [String])
  items: mongoose.Types.ObjectId[];
}

@InputType()
export class GetCartInfo {
  @Field(() => String)
  customerId: mongoose.Types.ObjectId;
}
