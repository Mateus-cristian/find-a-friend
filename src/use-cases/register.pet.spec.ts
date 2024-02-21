import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets.repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { RegisterPetUseCase } from './register-pet'

let petsRepository: InMemoryPetsRepository
let sut: RegisterPetUseCase

describe('Register pet use case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new RegisterPetUseCase(petsRepository)
  })

  it('should be able to register', async () => {
    const { pet } = await sut.execute({
      name: 'zezinho',
      type: 'Dog',
      size: 'mini',
      age: 5,
      energy_level: 4,
      dependency_level: 3,
      environment: 'living room',
      city: 'minnesota',
      description: 'Dog is very funny',
      organization_id: '12345498',
    })

    expect(pet.id).toEqual(expect.any(String))
  })
})
