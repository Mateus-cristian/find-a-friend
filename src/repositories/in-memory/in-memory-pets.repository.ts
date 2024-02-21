import { Pet, Prisma } from '@prisma/client'

import { randomUUID } from 'crypto'
import { PetsRepository } from '../PetRepository'

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = []

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
}
