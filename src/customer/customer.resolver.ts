import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './customer.input';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(() => Customer)
  async getProfile(@Args('id') id: string) {
    return this.customerService.getCustomerProfile(id);
  }

  @Mutation(() => Customer)
  async register(@Args('input') input: CreateCustomerDto) {
    return this.customerService.create(input);
  }
}
