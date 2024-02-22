import { Organization, Prisma } from '@prisma/client'

export interface OrgRepository {
  register: (data: Prisma.OrganizationCreateInput) => Promise<Organization>
  findByEmail: (email: string) => Promise<Organization | null>
}
