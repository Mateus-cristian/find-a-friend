import { FastifyInstance } from 'fastify'
import { register } from './register'

export async function OrgsRoutes(app: FastifyInstance) {
  app.post('/org/register', register)
}
