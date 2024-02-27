import { FastifyInstance } from 'fastify'
import { findPetsByCityController } from './findPetsByCityController'
import { findPetByIdController } from './findPetByIdController'

export async function PetsRoutes(app: FastifyInstance) {
  app.post('/pets/findByCity', findPetsByCityController)
  app.post('/pets/findById', findPetByIdController)
}
