import { Organization, Prisma } from '@prisma/client'
import { OrgRepository } from '@/repositories/OrgRepository'
import { randomUUID } from 'crypto'
import { OrgAlreadyExistsError } from '@/use-cases/error/org-already-exists'

export class InMemoryOrgRepository implements OrgRepository {
  public items: Organization[] = []

  async register(data: Prisma.OrganizationCreateInput): Promise<Organization> {
    const org = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      address: data.address,
      cep: data.cep,
      whatsapp: data.whatsapp,
      password_hash: data.password_hash,
      latitude: null,
      longitude: null,
    }

    this.items.push(org)

    return org
  }

  async findByEmail(email: string): Promise<Organization | null> {
    const org = this.items.find((org) => org.email === email)

    if (!org) {
      return null
    }

    return org
  }
}
