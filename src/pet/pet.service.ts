import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet, PetDocument } from './pet.schema';
import { Model } from 'mongoose';
import { CreatePetDto } from './create-pet.dto';

@Injectable()
export class PetServices {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  async createPet(createPetDto: CreatePetDto) {
    const breed = await this.petModel.findOne({ breed: createPetDto.breed });
    if (!breed) {
      const pet = new this.petModel({
        type: createPetDto.type,
        age: createPetDto.age,
        breed: createPetDto.breed,
      });
      return await pet.save();
    } else {
      return 'Already exists';
    }
  }

  async findAll() {
    return await this.petModel.find({});
  }

  async findOne(id) {
    const pet = await this.petModel.findById(id);
    return pet;
  }
}