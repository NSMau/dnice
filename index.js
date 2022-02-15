require('dotenv').config()

const process = require('process')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to Database 🔌'))

const colegiosRouter = require('./routes/colegios')

app.use('/colegios', colegiosRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
