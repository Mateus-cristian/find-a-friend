import { InMemoryPetsRepository } from '@/repositories/prisma/in-memory/in-memory-pets.repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { FindPetsByCityUseCase } from './find-pets-by-city'

let petsRepository: InMemoryPetsRepository
let sut: FindPetsByCityUseCase

describe('Find by city pets use case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new FindPetsByCityUseCase(petsRepository)
  })

  it('should be able to find pets by city', async () => {
    await petsRepository.register({
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

    await petsRepository.register({
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

    await petsRepository.register({
      name: 'zezinho',
      type: 'Dog',
      size: 'mini',
      age: 5,
      energy_level: 4,
      dependency_level: 3,
      environment: 'living room',
      city: 'chicago',
      description: 'Dog is very funny',
      organization_id: '12345498',
    })

    const { pets } = await sut.execute({ city: 'minnesota' })

    expect(pets).toHaveLength(2)
  })
})
