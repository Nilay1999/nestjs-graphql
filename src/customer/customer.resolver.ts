import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreateCustomerDto } from './create-customer.dto';
import { CustomerService } from './customer.service';
import { CustomerInput } from './customer.input';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(() => CreateCustomerDto)
  async getProfile(@Args('id') id: string) {
    return this.customerService.getCustomerProfile(id);
  }

  @Mutation(() => CreateCustomerDto)
  async register(@Args('input') input: CustomerInput) {
    return this.customerService.create(input);
  }
}
