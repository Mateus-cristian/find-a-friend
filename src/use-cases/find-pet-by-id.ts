import { PetsRepository } from '@/repositories/PetRepository'
import { Pet } from '@prisma/client'
import { PetNotFoundError } from './error/pet-not-found'

interface FindPetByIdUseCaseRequest {
  petId: string
}

interface FindPetByIdUseCaseResponse {
  pet: Pet
}

export class FindPetsByIdUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    petId,
  }: FindPetByIdUseCaseRequest): Promise<FindPetByIdUseCaseResponse> {
    const pet = await this.petsRepository.findPetById(petId)

    if (!pet) {
      throw new PetNotFoundError()
    }

    return {
      pet,
    }
  }
}
