import { FastifyInstance } from 'fastify'
import { findPetsByCity } from './findPetsByCity'
import { findPetById } from './findPetById'
import { verifyJWT } from '../middlewares/verify-jwt'
import { register } from './register'

export async function PetsRoutes(app: FastifyInstance) {
  app.post('/pets/findByCity', findPetsByCity)
  app.post('/pets/findById', findPetById)

  app.post('/pets/register', { onRequest: [verifyJWT] }, register)
}
