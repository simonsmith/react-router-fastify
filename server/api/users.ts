import type {User} from '@shared/types/user'
import type {FastifyInstance} from 'fastify'

export const usersRouter = async (fastify: FastifyInstance) => {
  fastify.get('/users', async (request, reply) => {
    const users: User[] = [
      {name: 'Alice', role: 'user'},
      {name: 'Bob', role: 'user'},
      {name: 'Charlie', role: 'admin'},
    ]
    reply.status(200).send(users)
  })
}
