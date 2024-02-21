import { Pet, Prisma } from '@prisma/client'

export interface PetsRepository {
  register: (data: Prisma.PetUncheckedCreateInput) => Promise<Pet>
  findPetsByCity: (city: string) => Promise<Pet[]>
}
