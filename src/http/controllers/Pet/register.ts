import { MakeRegisterPetUseCase } from '@/use-cases/factories/make-register-pet-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
    type: z.string(),
    size: z.string(),
    age: z.number(),
    energy_level: z.number(),
    dependency_level: z.number(),
    environment: z.string(),
    city: z.string(),
    description: z.string(),
    latitude: z.coerce.number().optional(),
    longitude: z.coerce.number().optional(),
  })

  const {
    age,
    city,
    dependency_level,
    description,
    energy_level,
    environment,
    name,
    size,
    type,
    latitude,
    longitude,
  } = bodySchema.parse(request.body)

  try {
    const registerPetUseCase = MakeRegisterPetUseCase()

    const { pet } = await registerPetUseCase.execute({
      age,
      city,
      dependency_level,
      description,
      energy_level,
      environment,
      name,
      size,
      type,
      latitude,
      longitude,
      organization_id: request.user.sub,
    })

    reply.status(201).send({
      pet,
    })
  } catch (error) {
    return reply.status(500).send({ message: 'Internal server error' })
  }
}
