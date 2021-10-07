import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { cartInput } from './cart.input';
import { CreateCartDto } from './create-cart.dto';

@Resolver()
export class CartResolver {
  constructor(private cartService: CartService) {}

  @Query(() => CreateCartDto)
  async getCartInfo(@Args('customerId') customerId: string) {
    return this.cartService.getCartInfo(customerId);
  }

  @Mutation(() => CreateCartDto)
  async addToCart(cartInput) {
    return this.cartService.addToCart(cartInput);
  }
}
