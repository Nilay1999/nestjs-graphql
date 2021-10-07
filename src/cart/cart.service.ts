import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartSchema, CartDocument } from './cart.schema';
import { Model } from 'mongoose';
import { CreateCartDto } from './create-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}
  async getCartInfo(customerId) {
    const cartInfo = await this.cartModel
      .findOne({ customerId: customerId })
      .populate('pet');
    return cartInfo;
  }

  async addToCart(createCartDto: CreateCartDto) {
    const cart = await this.cartModel.findOne({
      customerId: createCartDto.customerId,
    });

    if (cart) {
      return await this.cartModel.findOneAndUpdate(
        { customerId: createCartDto.customerId },
        {
          $push: {
            items: createCartDto.items,
          },
        },
      );
    } else {
      const cart = new this.cartModel({
        customerId: createCartDto.customerId,
        items: createCartDto.items,
      });
      return cart;
    }
  }
}
