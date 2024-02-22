import { describe, it, expect, beforeEach } from 'vitest'
import { InMemoryOrgRepository } from '@/repositories/prisma/in-memory/in-memory-org.repository'
import { RegisterOrgUseCase } from './register-org'

let orgsRepository: InMemoryOrgRepository
let sut: RegisterOrgUseCase

describe('Register Org use case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgRepository()
    sut = new RegisterOrgUseCase(orgsRepository)
  })

  it('should be able to register', async () => {
    const { org } = await sut.execute({
      name: 'Antonio bandeiras',
      email: 'Antonio@email.com',
      address: 'Rua dos latoreiros,5051',
      cep: '55555478',
      password: '123456',
      whatsapp: 5554991241051,
    })

    expect(org.id).toEqual(expect.any(String))
  })
})
