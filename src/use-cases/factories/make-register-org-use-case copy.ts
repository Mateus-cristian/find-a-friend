import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { RegisterOrgUseCase } from '../register-org'

export function MakeRegisterOrgUseCase() {
  const orgRepository = new PrismaOrgRepository()
  const useCase = new RegisterOrgUseCase(orgRepository)

  return useCase
}
