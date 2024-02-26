import { OrgAlreadyExistsError } from '@/use-cases/error/org-already-exists'
import { MakeFindPetsByCityUseCase } from '@/use-cases/factories/make-find-pets-by-city-use-case'
import { MakeRegisterOrgUseCase } from '@/use-cases/factories/make-register-org-use-case copy'
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

  return reply.status(200).send({
    pets,
  })
}
