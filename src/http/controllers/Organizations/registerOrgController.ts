import { OrgAlreadyExistsError } from '@/use-cases/error/org-already-exists'
import { MakeRegisterOrgUseCase } from '@/use-cases/factories/make-register-org-use-case copy'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerOrgController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cep: z
      .string()
      .min(8, 'Cep deve conter 8 números')
      .max(8, 'Cep deve conter 8 números'),
    address: z.string(),
    whatsapp: z.number(),
    password: z.string(),
  })

  const { address, cep, email, name, password, whatsapp } = bodySchema.parse(
    request.body,
  )

  const registerOrgUseCase = MakeRegisterOrgUseCase()

  try {
    await registerOrgUseCase.execute({
      address,
      cep,
      email,
      name,
      password,
      whatsapp,
    })
  } catch (err) {
    if (err instanceof OrgAlreadyExistsError) {
      return reply.status(409).send({
        message: err.message,
      })
    }

    throw err
  }

  return reply.status(201).send()
}
