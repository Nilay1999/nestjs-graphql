import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { AddToCartInput, GetCartInfo } from './cart.input';
import { Cart } from './cart.model';
import { CartService } from './cart.service';

@Resolver()
export class CartResolver {
  constructor(private cartService: CartService) {}

  @Query(() => Cart)
  async getCartInfo(@Args('id') id: string) {
    return this.cartService.getCartInfo(id);
  }

  @Mutation(() => Cart)
  async addToCart(@Args('payload') payload: AddToCartInput) {
    return this.cartService.addToCart(payload.customerId, payload.items);
  }
}
