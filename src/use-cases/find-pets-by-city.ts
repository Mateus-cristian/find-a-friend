import { PetsRepository } from '@/repositories/PetRepository'
import { Pet } from '@prisma/client'
import { CityRequiredError } from './error/city-required'

interface FindPetsByCityUseCaseRequest {
  city: string
}

interface FindPetsByCityUseCaseResponse {
  pets: Pet[]
}

export class FindPetsByCityUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    city,
  }: FindPetsByCityUseCaseRequest): Promise<FindPetsByCityUseCaseResponse> {
    if (!city) {
      throw new CityRequiredError()
    }

    const pets = await this.petsRepository.findPetsByCity(city)

    return {
      pets: pets ?? [],
    }
  }
}
