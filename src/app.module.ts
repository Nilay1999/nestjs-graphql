import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './pet/pet.schema';

@Module({
  imports: [
    PetModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),

    MongooseModule.forRoot('mongodb://localhost/nestJS'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
