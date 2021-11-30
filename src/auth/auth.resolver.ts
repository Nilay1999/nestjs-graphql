import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Response } from '@nestjs/common';
import { AuthDto } from './auth.model';
import { AuthInput } from './auth.input';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Query(() => AuthDto)
  async login(@Args('input') input: AuthInput, @Response() res) {
    if (!input.email || !input.password) {
      return 'Please enter required Field';
    } else {
      const customer = this.authService.login(input);
      const payload = { customer: customer };
      // const jwt = await this.jwtService.signAsync(payload);
      return customer;
    }
  }
}
