import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { cartInput } from './cart.input';
import { CreateCartDto } from './create-cart.dto';

@Resolver()
export class CartResolver {
  constructor(private cartService: CartService) {}

  @Query(() => CreateCartDto, { nullable: true })
  async getCartInfo(customerId: string) {
    return this.cartService.getCartInfo(customerId);
  }

  @Mutation(() => CreateCartDto, { nullable: true })
  async addToCart(@Args('input') input: cartInput) {
    return this.cartService.addToCart(input);
  }
}
