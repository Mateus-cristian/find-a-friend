import { describe, it, expect, beforeEach } from 'vitest'
import { InMemoryOrgRepository } from '@/repositories/prisma/in-memory/in-memory-org.repository'
import { AuthenticateUseCase } from './authenticate'
import { hash } from 'bcryptjs'

let orgsRepository: InMemoryOrgRepository
let sut: AuthenticateUseCase

describe('Authenticate Org use case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgRepository()
    sut = new AuthenticateUseCase(orgsRepository)
  })

  it('should be able to authenticate org', async () => {
    const password_hash = await hash('123456', 6)

    const createdOrg = await orgsRepository.register({
      name: 'Antonio bandeiras',
      email: 'Antonio@email.com',
      address: 'Rua dos latoreiros,5051',
      cep: '55555478',
      password_hash,
      whatsapp: 5554991241051,
    })

    const { org } = await sut.execute({
      email: createdOrg.email,
      password: '123456',
    })

    expect(org.id).toEqual(expect.any(String))
  })
})
