import { FastifyInstance } from 'fastify'
import { findPetsByCity } from './findPetsByCity'
import { findPetById } from './findPetById'

export async function PetsRoutes(app: FastifyInstance) {
  app.post('/pets/findByCity', findPetsByCity)
  app.post('/pets/findById', findPetById)
}
