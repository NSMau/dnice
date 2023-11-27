import 'dotenv/config'

import { ApolloServer } from 'apollo-server-express'
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core'

import connectToDatabase from './database'

import express, { type Application } from 'express'
import http from 'http'

import { resolvers, typeDefs } from './graphql'

async function startApolloServer(app: Application): Promise<void> {
  const db = await connectToDatabase()

  const { PORT } = process.env
  const httpServer = http.createServer(app)
  // The http server handles the request and response cycle made to/from the Express app
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      // Instructs Apollo Server to drain the HTTP server's existing sockets,
      // enabling graceful shutdown.
      ApolloServerPluginDrainHttpServer({ httpServer }),
      // Recommended settings to use Apollo Server. For production,
      // use ApolloServerPluginLandingPageProductionDefault instead.
      ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ]
  })

  await server.start()

  server.applyMiddleware({ app, path: '/api' })

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  ).catch((error) => {
    console.log(`❌ Server failed to start due to error: ${error}`)
    process.exit(1)
  })

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )

  // const colegios = await db.colegios.find({}).toArray()
  // console.log(colegios)
}

startApolloServer(express()).catch((error) => {
  console.log(`❌ Server failed to start due to error: ${error}`)
  process.exit(1)
})
