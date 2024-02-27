import { FastifyInstance } from 'fastify'
import { registerOrgController } from './registerOrgController'

export async function OrgsRoutes(app: FastifyInstance) {
  app.post('/org/register', registerOrgController)
}
