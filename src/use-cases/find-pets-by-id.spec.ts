import { InMemoryPetsRepository } from '@/repositories/prisma/in-memory/in-memory-pets.repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { FindPetsByIdUseCase } from './find-pet-by-id'
import { randomUUID } from 'crypto'

let petsRepository: InMemoryPetsRepository
let sut: FindPetsByIdUseCase

describe('Find pet by id use case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new FindPetsByIdUseCase(petsRepository)
  })

  it('should be able to find pets by id', async () => {
    const pet = await petsRepository.register({
      id: randomUUID(),
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

    const response = await sut.execute({ petId: pet.id })

    expect(response.pet.name).toEqual('zezinho')
    expect(response.pet.age).toEqual(5)
  })
})
