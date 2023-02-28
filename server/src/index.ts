import express from 'express'

import bodyParser from 'body-parser'
import { colegios } from './colegios'

const app = express()
const PORT = 9000

// Middleware to handle incoming requests
app.use(bodyParser.json())

app.get('/colegios', (_, res) => res.send(colegios))

app.post('/eliminar-colegio', (req, res) => {
  const id = req.body.id

  colegios.forEach((colegio) => {
    if (colegio.codigoDane === id) {
      res.send(colegios.splice(id, 1))
    }
  })

  return res.send(
    `No existe una institución cuyo código DANE sea ${id}. Verifica el valor ingresado e intenta nuevamente.`
  )
})

// Removing a record from colegios
app.post

app.listen(PORT)

console.log(`App is running on http://localhost:${PORT}`)

// TODO: Review return from line 20 to return an object rather than an array
