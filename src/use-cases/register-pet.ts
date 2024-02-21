import { PetsRepository } from '@/repositories/PetRepository'
import { Pet } from '@prisma/client'

interface RegisterPetUseCaseRequest {
  name: string
  type: string
  size: string
  age: number
  energy_level: number
  dependency_level: number
  environment: string
  city: string
  longitude?: number
  latitude?: string
  description: string
  organization_id: string
}

interface RegisterPetUseCaseResponse {
  pet: Pet
}

export class RegisterPetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    age,
    city,
    dependency_level,
    description,
    energy_level,
    environment,
    latitude,
    longitude,
    name,
    organization_id,
    size,
    type,
  }: RegisterPetUseCaseRequest): Promise<RegisterPetUseCaseResponse> {
    const pet = await this.petsRepository.register({
      age,
      city,
      dependency_level,
      description,
      energy_level,
      environment,
      latitude,
      longitude,
      name,
      organization_id,
      size,
      type,
    })

    return {
      pet,
    }
  }
}
