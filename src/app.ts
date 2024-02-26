import fastify from 'fastify'
import { PetsRoutes } from './http/controllers/Pet/routes'
import { OrgsRoutes } from './http/controllers/Organizations/routes'

export const app = fastify()

app.register(OrgsRoutes)
app.register(PetsRoutes)
