import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pets/entities/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {

  @PrimaryGeneratedColumn()
  @Field(type => Int, { description: 'Identifier field (placeholder)' })
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pet, pet => pet.owner)
  @Field(type => [Pet, { nullable: true }])
  pets?: Pet[]

}
