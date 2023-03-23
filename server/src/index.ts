// import express from 'express'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { typeDefs } from './graphql/typeDefs'
import { resolvers } from './graphql/resolvers'

// const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers
})

// async IIFE
;(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  })

  console.log(`🚀  Server ready at: ${url}`)

  return url
})()
