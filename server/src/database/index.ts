import { MongoClient } from 'mongodb'
import { IDatabase } from '../lib/types'

/**
 * A function to connect to MongoDB using the MongoDB Node.js Driver.
 * @see https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb
 */
export default async function connectToDatabase(): Promise<IDatabase> {
  const { DB_NAME, DB_COLLECTION_NAME, DB_USER, DB_PASSWORD, DB_CLUSTER } =
    process.env
  const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.dqabtqb.mongodb.net/?retryWrites=true&w=majority`
  const client = await MongoClient.connect(DB_CONNECTION_STRING)

  const db = client.db(DB_NAME)

  console.log('🚀  Connected to database')

  return {
    colegios: db.collection(DB_COLLECTION_NAME as string)
  }
}
