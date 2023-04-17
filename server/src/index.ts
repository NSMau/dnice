import express from 'express'

import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'

import { connectDatabase } from './database'

import { Db } from 'mongodb'

import { json } from 'body-parser'
import cors from 'cors'
import http from 'http'

import { typeDefs, resolvers } from './schema'

interface Context {
  db?: Db
}

const app = express()

// Tell Apollo Server to "drain" this httpServer,
// enabling our server to shut down gracefully
const httpServer = http.createServer(app)

const startServer = async (db: Db) => {
  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()

  // Set up our Express middleware to handle CORS, body parsing, and
  // our expressMiddleware function from Apollo Server
  app.use(
    '/api',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware<Context>(server, {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      context: async ({ req }) => ({ db })
    })
  )

  const PORT = 4000

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  )

  console.log(`🚀  Query at: http://localhost:${PORT}/api`)

  // const colegios = (await db
  //   .collection('test_colegios')
  //   .find()
  //   .toArray()) as Colegio[]
}

const main = async () => {
  const db = await connectDatabase().catch((error) => console.error(error))

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  await startServer(db!)
}

main().catch((error) => {
  console.error(error)

  process.exit(1)
})
