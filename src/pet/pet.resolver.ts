import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Pet } from './pet.model';
import { PetServices } from './pet.service';
import { CreatePetDto } from './pet.input';

@Resolver()
export class PetResolver {
  constructor(private petService: PetServices) {}

  @Query(() => [Pet])
  async pets() {
    return this.petService.findAll();
  }

  @Query(() => Pet)
  async pet(@Args('id') id: string) {
    return this.petService.findOne(id);
  }

  @Mutation(() => Pet)
  async createPets(@Args('input') input: CreatePetDto) {
    return this.petService.createPet(input);
  }

  @Mutation(() => Pet)
  async deletePet(@Args('id') id: string) {
    return this.petService.deleteOne(id);
  }
}
