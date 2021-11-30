import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument, CustomerSchema } from './customer.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateCustomerDto } from './customer.input';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const hashPassword = await bcrypt.hash(createCustomerDto.password, 10);
    const customer = new this.customerModel({
      ...createCustomerDto,
      password: hashPassword,
    });
    return customer.save();
  }

  async getCustomerProfile(id) {
    const customer = await this.customerModel.findById(id);
    if (customer) {
      return customer;
    } else {
      return 'Customer not found';
    }
  }
}
