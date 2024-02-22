import { Pet, Prisma } from '@prisma/client'

import { randomUUID } from 'crypto'
import { PetsRepository } from '../../PetRepository'
import { IPetCharacteristics } from '@/@types/pets'
import { PetNotFoundError } from '@/use-cases/error/pet-not-found'

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = []

  async findPetById(petId: string): Promise<Pet> {
    const pet = this.items.find((pet) => pet.id === petId)

    if (!pet) {
      throw new PetNotFoundError()
    }

    return pet
  }

  async register(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    const pet = {
      id: data.id ?? randomUUID(),
      name: data.name ?? '',
      type: data.type,
      size: data.size,
      age: data.age,
      energy_level: data.energy_level,
      dependency_level: data.dependency_level,
      environment: data.environment,
      city: data.city,
      longitude: new Prisma.Decimal(data.longitude?.toString() ?? '0'),
      latitude: new Prisma.Decimal(data.latitude?.toString() ?? '0'),
      description: data.description,
      organization_id: data.organization_id,
    }

    this.items.push(pet)

    return pet
  }

  async findPetsByCity(city: string): Promise<Pet[]> {
    const pets = this.items.filter((pet) => pet.city === city)

    if (!pets) {
      return [] as Pet[]
    }

    return pets
  }

  async findPetsByCharacteristics(params: IPetCharacteristics): Promise<Pet[]> {
    const pets = this.items
      .filter((pet) => (params.city ? pet.city === params.city : true))
      .filter((pet) => (params.age ? pet.age === params.age : true))
      .filter((pet) =>
        params.energy_level ? pet.energy_level === params.energy_level : true,
      )
      .filter((pet) => (params.size ? pet.size === params.size : true))
      .filter((pet) =>
        params.dependency_level
          ? pet.dependency_level === params.dependency_level
          : true,
      )

    return pets
  }
}
