import express from 'express'

import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'

import { json } from 'body-parser'
import cors from 'cors'
import http from 'http'

import { typeDefs, resolvers } from './schema'

const app = express()
const PORT = 4000

// Tell Apollo Server to "drain" this httpServer,
// enabling our server to shut down gracefully
const httpServer = http.createServer(app)

// Apollo creates the schema behind the scenes
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

// Ensure we await for the server to start
;(async () => {
  await server.start()

  // Set up our Express middleware to handle CORS, body parsing, and
  // our expressMiddleware function from Apollo Server
  app.use('/api', cors<cors.CorsRequest>(), json(), expressMiddleware(server))
})()

// Start the server
;(async () => {
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  )

  console.log(`🚀  Server ready at: http://localhost:${PORT}`)
})()
