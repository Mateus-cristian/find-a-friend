import { Prisma } from '@prisma/client'
import { PetsRepository } from '../PetRepository'
import { prisma } from '@/lib/prisma'
import { IPetCharacteristics } from '@/@types/pets'

export class PrismaPetRepository implements PetsRepository {
  async register(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }

  async findPetById(petId: string) {
    const pet = await prisma.pet.findFirst({
      where: {
        id: petId,
      },
    })

    if (!pet) {
      return null
    }

    return pet
  }

  async findPetsByCity(city: string) {
    const pets = await prisma.pet.findMany({
      where: {
        city,
      },
    })

    if (!pets) {
      return null
    }

    return pets
  }

  async findPetsByCharacteristics(data: IPetCharacteristics) {
    const pets = await prisma.pet.findMany({
      where: {
        city: data.city,
        age: data.age,
        energy_level: data.energy_level,
        size: data.size,
        dependency_level: data.dependency_level,
      },
    })

    if (!pets) {
      return null
    }

    return pets
  }
}
