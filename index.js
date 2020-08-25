import { config } from 'dotenv'
import { GraphQLServer } from 'graphql-yoga'
import User from './models/tables/User'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

config()

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers: {
    Query,
    Mutation
  },
  context: {
    User
  }
})

server.start(() => console.log('Server is running on http://localhost:4000'))
