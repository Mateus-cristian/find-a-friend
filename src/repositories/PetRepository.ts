import { IPetCharacteristics } from '@/@types/pets'
import { Pet, Prisma } from '@prisma/client'

export interface PetsRepository {
  register: (data: Prisma.PetUncheckedCreateInput) => Promise<Pet>
  findPetById: (petId: string) => Promise<Pet>
  findPetsByCity: (city: string) => Promise<Pet[]>
  findPetsByCharacteristics: ({
    age,
    city,
    dependency_level,
    energy_level,
    size,
  }: IPetCharacteristics) => Promise<Pet[]>
}
