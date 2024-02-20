import fastify from 'fastify'
import { PetsRoutes } from './http/controllers/Pet/routes'

export const app = fastify()

app.register(PetsRoutes)
