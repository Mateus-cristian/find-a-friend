import fastify from 'fastify'
import { PetsRoutes } from './http/controllers/Pet/routes'
import { OrgsRoutes } from './http/controllers/Organizations/routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import fastifyCookie from '@fastify/cookie'
import { ZodError } from 'zod'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)

app.register(OrgsRoutes)
app.register(PetsRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error',
      issues: error.format(),
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({
    message: 'Internal server error.',
  })
})
