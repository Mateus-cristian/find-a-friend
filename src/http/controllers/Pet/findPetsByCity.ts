import { CityRequiredError } from '@/use-cases/error/city-required'
import { PetNotFoundError } from '@/use-cases/error/pet-not-found'
import { MakeFindPetsByCityUseCase } from '@/use-cases/factories/make-find-pets-by-city-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findPetsByCity(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = z.object({
    city: z.string(),
  })

  const { city } = bodySchema.parse(request.body)

  const findPetsByCity = MakeFindPetsByCityUseCase()

  const { pets } = await findPetsByCity.execute({ city })
  try {
    return reply.status(200).send({
      pets,
    })
  } catch (error) {
    if (error instanceof CityRequiredError) {
      return reply.status(404).send({
        message: 'City is required',
      })
    }

    return reply.status(500).send({ message: 'Internal server error' })
  }
}
