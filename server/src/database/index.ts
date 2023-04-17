import { Db, MongoClient } from 'mongodb'

const USER = 'psihipqua'
const PASSWORD = 'NkaDiqPqAzWxVN9g'
const CLUSTER = 'cluster0'
const URI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.dqabtqb.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(URI)

/**
 * A function to connect to MongoDB using the MongoDB Node.js Driver.
 * @see https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb
 */
export async function connectDatabase(): Promise<Db> {
  await client.connect()

  const db = client.db('omnis')

  console.log('🚀  Connected to database')

  return db
}
