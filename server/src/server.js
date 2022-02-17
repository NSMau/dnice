require('dotenv').config()

const colegiosRouter = require('./routes/colegios')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const process = require('process')

const app = express()
const PORT = process.env.PORT || 3000

app.disable('x-powered-by')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to Database 🔌'))

app.use('/api/colegios', colegiosRouter)

const startServer = () =>
  app.listen(PORT, () =>
    console.log(`REST API available at http://localhost:${PORT}/api`)
  )

module.exports = {
  startServer
}
