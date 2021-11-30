import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { PetResolver } from './pet.resolver';
import { Pet, PetSchema } from './pet.model';
import { PetServices } from './pet.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pet.name,
        schema: PetSchema,
      },
    ]),
  ],
  providers: [PetResolver, PetServices],
})
export class PetModule {}
