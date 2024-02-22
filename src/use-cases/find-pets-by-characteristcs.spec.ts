import { InMemoryPetsRepository } from '@/repositories/prisma/in-memory/in-memory-pets.repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { FindPetsByCharacteristicsUseCase } from './find-pets-by-characteristics'
import { IPetCharacteristics } from '@/@types/pets'

let petsRepository: InMemoryPetsRepository
let sut: FindPetsByCharacteristicsUseCase

describe('Find pets by characteristcs use case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new FindPetsByCharacteristicsUseCase(petsRepository)
  })

  it('should be able to find pets by characteristcs', async () => {
    await petsRepository.register({
      name: 'lulu',
      type: 'Cat',
      size: 'mini',
      age: 5,
      energy_level: 4,
      dependency_level: 3,
      environment: 'living room',
      city: 'minnesota',
      description: 'Cat is very funny',
      organization_id: '12345498',
    })

    await petsRepository.register({
      name: 'zezinho',
      type: 'Dog',
      size: 'medium',
      age: 5,
      energy_level: 4,
      dependency_level: 3,
      environment: 'living room',
      city: 'new york',
      description: 'Dog is very funny',
      organization_id: '12345498',
    })

    await petsRepository.register({
      name: 'lucio',
      type: 'Dog',
      size: 'medium',
      age: 5,
      energy_level: 4,
      dependency_level: 3,
      environment: 'living room',
      city: 'new york',
      description: 'Dog is very funny',
      organization_id: '12345498',
    })

    const params: IPetCharacteristics = {
      age: 5,
      energy_level: 4,
      dependency_level: 3,
      city: 'new york',
      size: 'medium',
    }

    const { pets } = await sut.execute({ params })

    expect(pets).toHaveLength(2)
  })
})
