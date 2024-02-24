import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { AuthenticateUseCase } from '../authenticate'

export function MakeAuthenticateUseCase() {
  const orgRepository = new PrismaOrgRepository()
  const useCase = new AuthenticateUseCase(orgRepository)

  return useCase
}
