import { PrismaPetRepository } from '@/repositories/prisma/prisma-pets-repository'
import { RegisterPetUseCase } from '../register-pet'

export function MakeRegisterPetUseCase() {
  const petRepository = new PrismaPetRepository()
  const useCase = new RegisterPetUseCase(petRepository)

  return useCase
}
