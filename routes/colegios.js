const express = require('express')
const router = express.Router()
const Colegio = require('../models/colegio')

// GET /colegios - Get all colegios
router.get('/', async (_, res) => {
  try {
    const colegios = await Colegio.find()

    res.json(colegios)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET /colegios/:id - Get a single colegio
router.get('/:id', getColegio, (_, res) => {
  res.json(res.colegio)
})

// POST /colegios - Create a new colegio
router.post('/', async (req, res) => {
  const colegio = new Colegio({
    codigo_dane: req.body.codigo_dane,
    nombre: req.body.nombre,
    sector: req.body.sector,
    estado: req.body.estado,
    direccion: req.body.direccion,
    barrio: req.body.barrio,
    municipio: req.body.municipio,
    departamento: req.body.departamento,
    zona: req.body.zona,
    telefonos: req.body.telefonos,
    categoria: req.body.categoria,
    calendario: req.body.calendario,
    rector: req.body.rector
  })

  try {
    const newColegio = await colegio.save()

    res.status(201).json(newColegio)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// PATCH /colegios/:id - Update a colegio
router.patch('/:id', (_, res) => {
  res.send('You just updated a colegio!')
})

// DELETE /colegios/:id - Delete a colegio
router.delete('/:id', getColegio, async (req, res) => {
  try {
    await res.colegio.remove()
    res.json({ message: 'Colegio deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

async function getColegio(req, res, next) {
  let colegio = null

  try {
    colegio = await Colegio.findById(req.params.id)

    if (colegio == null) {
      return res.status(404).json({ message: 'Cannot find colegio' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

  res.colegio = colegio
  next()
}

module.exports = router
