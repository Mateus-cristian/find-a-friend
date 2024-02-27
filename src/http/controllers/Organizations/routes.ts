import { FastifyInstance } from 'fastify'
import { register } from './register'
import { Authenticate } from './authenticate'

export async function OrgsRoutes(app: FastifyInstance) {
  app.post('/org/register', register)
  app.post('/org/session', Authenticate)
}
