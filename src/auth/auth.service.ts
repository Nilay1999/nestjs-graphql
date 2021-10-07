import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Customer,
  CustomerDocument,
  CustomerSchema,
} from '../customer/customer.schema';
import { Model } from 'mongoose';
import { AuthInput } from './auth.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  jwtService: any;
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}
  async login(authInput: AuthInput) {
    const customer = await this.customerModel.findOne({
      email: authInput.email,
    });
    if (!customer) {
      return 'Unable to find User ! please check your email';
    }
    if (!(await bcrypt.compare(authInput.password, customer.password))) {
      return 'Password incorrect';
    } else {
      return customer;
    }
  }
}
