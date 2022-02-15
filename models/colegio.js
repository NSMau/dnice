const mongoose = require('mongoose')
const colegioSchema = new mongoose.Schema({
  codigo_dane: {
    type: Number,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  barrio: {
    type: String,
    required: true
  },
  municipio: {
    type: String,
    required: true
  },
  departamento: {
    type: String,
    required: true
  },
  zona: {
    type: String,
    required: true
  },
  telefonos: {
    type: [String],
    required: true
  },
  email: {
    type: [String]
  },
  website: {
    type: [String]
  },
  categoria: {
    type: String,
    required: true
  },
  calendario: {
    type: String,
    required: true
  },
  rector: {
    type: String
  },
  rectora: {
    type: String
  }
})

module.exports = mongoose.model('Colegio', colegioSchema)
