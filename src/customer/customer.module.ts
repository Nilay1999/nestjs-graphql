import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerResolver } from './customer.resolver';
import { Customer, CustomerSchema } from './customer.model';
import { CustomerService } from './customer.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
    ]),
  ],
  providers: [CustomerResolver, CustomerService],
})
export class CustomerModule {}
