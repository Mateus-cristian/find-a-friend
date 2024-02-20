import { FastifyInstance } from 'fastify'
import { hello } from './hello'

export async function PetsRoutes(app: FastifyInstance) {
  app.get('/hello', hello)
}
