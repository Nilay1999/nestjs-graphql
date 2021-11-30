import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from 'src/customer/customer.model';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './auth.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [AuthService, JwtStrategy, AuthResolver],
})
export class AuthModule {}
