import { OrgRepository } from '@/repositories/OrgRepository'
import { Organization } from '@prisma/client'
import { hash } from 'bcryptjs'
import { OrgAlreadyExistsError } from './error/org-already-exists'

interface RegisterOrgUseCaseRequest {
  name: string
  email: string
  cep: string
  address: string
  latitude?: number | null
  longitude?: number | null
  whatsapp: number
  password: string
}

interface RegisterOrgUseCaseResponse {
  org: Organization
}

export class RegisterOrgUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute({
    name,
    email,
    cep,
    address,
    whatsapp,
    password,
  }: RegisterOrgUseCaseRequest): Promise<RegisterOrgUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const orgAlreadyExists = await this.orgRepository.findByEmail(email)

    if (orgAlreadyExists) {
      throw new OrgAlreadyExistsError()
    }

    const org = await this.orgRepository.register({
      name,
      email,
      cep,
      address,
      whatsapp,
      password_hash,
    })

    return {
      org,
    }
  }
}
