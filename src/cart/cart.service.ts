import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartSchema, CartDocument } from './cart.model';
import { Model } from 'mongoose';
import { Customer } from 'src/customer/customer.model';
import { Pet } from 'src/pet/pet.model';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}
  async getCartInfo(customerId) {
    const cartInfo = await this.cartModel
      .findOne({ customerId: customerId })
      .populate({ path: 'customerId', model: Customer.name })
      .populate({ path: 'items', model: Pet.name });
    console.log(cartInfo);
    return cartInfo;
  }

  async addToCart(customerId, item) {
    const cart = await this.cartModel.findOne({
      customerId: customerId,
    });

    if (cart) {
      const isAlreadyInCart = await this.cartModel.findOne({
        customerId: customerId,
        items: item,
      });
      if (isAlreadyInCart) {
        return 'Already';
      }

      return await this.cartModel.findOneAndUpdate(
        { customerId: customerId },
        {
          $push: {
            items: item,
          },
        },
      );
    } else {
      const cart = new this.cartModel({
        customerId: customerId,
        items: item,
      });
      await cart.save();
      const cartInfo = await this.cartModel
        .findOne({ customerId: customerId })
        .populate({ path: 'items' })
        .populate({ path: 'customerId' });
      return cartInfo;
    }
  }
}
