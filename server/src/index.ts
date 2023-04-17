// import express from 'express'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { typeDefs, resolvers } from './schema'

// const app = express()

// Apollo creates the schema behind the scenes
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
