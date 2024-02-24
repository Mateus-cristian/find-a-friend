import { OrgRepository } from '@/repositories/OrgRepository'
import { Organization } from '@prisma/client'
import { InvalidCredentialsError } from './error/InvalidCredentials'
import { compare } from 'bcryptjs'

interface AutheticateRequestUseCase {
  email: string
  password: string
}

interface AutheticateResponsetUseCase {
  org: Organization
}

export class AuthenticateUseCase {
  constructor(private organizationRepository: OrgRepository) {}

  async execute({
    email,
    password,
  }: AutheticateRequestUseCase): Promise<AutheticateResponsetUseCase> {
    const org = await this.organizationRepository.findByEmail(email)

    if (!org) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, org.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      org,
    }
  }
}
