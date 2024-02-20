import { FastifyReply } from 'fastify'

export async function hello(_req: any, reply: FastifyReply) {
  reply.send('Hello world')
}
