import { IPetCharacteristics } from '@/@types/pets'
import { PetsRepository } from '@/repositories/PetRepository'
import { Pet } from '@prisma/client'

interface FindPetsByCharacteristicsUseCaseRequest {
  params: IPetCharacteristics
}

interface FindPetsByCharacteristicsUseCaseResponse {
  pets: Pet[]
}

export class FindPetsByCharacteristicsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    params,
  }: FindPetsByCharacteristicsUseCaseRequest): Promise<FindPetsByCharacteristicsUseCaseResponse> {
    const pets = await this.petsRepository.findPetsByCharacteristics(params)

    return {
      pets,
    }
  }
}
