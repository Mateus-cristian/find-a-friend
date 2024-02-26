import { Organization, Prisma } from '@prisma/client'
import { OrgRepository } from '../OrgRepository'
import { prisma } from '@/lib/prisma'

export class PrismaOrgRepository implements OrgRepository {
  async register(data: Prisma.OrganizationCreateInput): Promise<Organization> {
    const org = prisma.organization.create({
      data,
    })

    return org
  }

  async findByEmail(email: string): Promise<Organization | null> {
    const org = await prisma.organization.findFirst({
      where: {
        email,
      },
    })

    if (!org) {
      return null
    }

    return org
  }
}
