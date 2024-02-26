import { FastifyInstance } from 'fastify'
import { findPetsByCity } from './findPetsByCity'

export async function PetsRoutes(app: FastifyInstance) {
  app.post('/pets/findByCity', findPetsByCity)
}
