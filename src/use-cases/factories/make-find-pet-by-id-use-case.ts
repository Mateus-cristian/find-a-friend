import { PrismaPetRepository } from '@/repositories/prisma/prisma-pets-repository'
import { FindPetsByIdUseCase } from '../find-pet-by-id'

export function MakeFindPetByIdUseCase() {
  const petRepository = new PrismaPetRepository()
  const useCase = new FindPetsByIdUseCase(petRepository)

  return useCase
}
