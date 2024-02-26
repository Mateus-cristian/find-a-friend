import { PrismaPetRepository } from '@/repositories/prisma/prisma-pets-repository'
import { FindPetsByCityUseCase } from '../find-pets-by-city'

export function MakeFindPetsByCityUseCase() {
  const petRepository = new PrismaPetRepository()
  const useCase = new FindPetsByCityUseCase(petRepository)

  return useCase
}
