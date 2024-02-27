import { PetNotFoundError } from '@/use-cases/error/pet-not-found'
import { MakeFindPetByIdUseCase } from '@/use-cases/factories/make-find-pet-by-id-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findPetById(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = z.object({
    id: z.string(),
  })

  const { id } = bodySchema.parse(request.body)

  const findPetsById = MakeFindPetByIdUseCase()

  try {
    const { pet } = await findPetsById.execute({ petId: id })

    return reply.status(200).send({
      pet,
    })
  } catch (error) {
    if (error instanceof PetNotFoundError) {
      return reply.status(404).send({
        message: error.message,
      })
    }

    return reply.status(500).send({ message: 'Internal server error' })
  }
}
