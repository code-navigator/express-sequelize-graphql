import { GraphQLServer } from 'graphql-yoga'
import User from './models/tables/User'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

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

server.start(() => console.log('Server is running on localhost:4000'))
