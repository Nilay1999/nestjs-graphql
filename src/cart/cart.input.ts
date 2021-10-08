import { InputType, Field } from '@nestjs/graphql';
import { Pet } from 'src/pet/pet.schema';

@InputType()
export class cartInput {}
