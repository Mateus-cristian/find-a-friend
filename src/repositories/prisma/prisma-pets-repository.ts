import { Prisma } from '@prisma/client'
import { PetsRepository } from '../PetRepository'
import { prisma } from '@/lib/prisma'

export class PrismaPetRepository implements PetsRepository {
  async register(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }
}
