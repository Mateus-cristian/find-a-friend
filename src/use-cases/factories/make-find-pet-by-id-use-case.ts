import { PrismaPetRepository } from '@/repositories/prisma/prisma-pets-repository'
import { RegisterPetUseCase } from '../register-pet'

export function MakeFindPetByIdUseCase() {
  const petRepository = new PrismaPetRepository()
  const useCase = new RegisterPetUseCase(petRepository)

  return useCase
}
