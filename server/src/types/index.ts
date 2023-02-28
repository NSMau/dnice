export interface Colegio {
  id: string
  codigoDane: string
  nombre: string
  sector: string
  estado: string
  zona: string
  departamento: string
  municipio: string
  barrio: string
  categoria: string
  calendario: string
  direccion: {
    rector?: string
    rectora?: string
  }
  contacto: {
    email?: string
    url?: string
    telefonos: {
      fijos?: string[]
      celulares?: string[]
      fax?: string[]
    }
  }
  idiomas: {
    multiples: boolean
    oferta: string[]
  }
}

// TODO:
// Refactor name for status
// Define all props: fundacion, jornadas, cursos, matriculaPromedio, puntajeIcfes, etc.
