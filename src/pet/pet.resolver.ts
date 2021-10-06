import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { CreatePetDto } from './create-pet.dto';
import { PetServices } from './pet.service';
import { PetInput } from './pet.input';

@Resolver()
export class PetResolver {
  constructor(private petService: PetServices) {}

  @Query(() => [CreatePetDto])
  async pets() {
    return this.petService.findAll();
  }

  @Query(() => CreatePetDto)
  async pet(@Args('id') id: string) {
    return this.petService.findOne(id);
  }

  @Mutation(() => CreatePetDto)
  async createPets(@Args('input') input: PetInput) {
    return this.petService.createPet(input);
  }
}
