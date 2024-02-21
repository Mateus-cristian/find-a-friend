import { PetsRepository } from '@/repositories/PetRepository'
import { Pet } from '@prisma/client'

interface RegisterPetUseCaseRequest {
  city: string
}

interface RegisterPetUseCaseResponse {
  pets: Pet[]
}

export class FindPetsByCityUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    city,
  }: RegisterPetUseCaseRequest): Promise<RegisterPetUseCaseResponse> {
    const pets = await this.petsRepository.findPetsByCity(city)

    return {
      pets,
    }
  }
}
