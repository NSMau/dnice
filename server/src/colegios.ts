import { Colegio } from './types'

export const colegios: Colegio[] = [
  {
    id: '001',
    codigoDane: '0A00001B430',
    nombre: 'Colegio 1',
    sector: 'publico',
    estado: 'operando',
    zona: 'TBD',
    departamento: 'Atlántico',
    municipio: 'Barranquilla',
    barrio: 'El Golf',
    categoria: 'Superior',
    calendario: 'B',
    direccion: {
      rector: 'Juan Barrera',
      rectora: undefined
    },
    contacto: {
      email: 'contacto@domain.com',
      url: 'colegio.com',
      telefonos: {
        fijos: ['3042173', '3042174'],
        celulares: ['3126052700', '3126052701'],
        fax: ['']
      }
    },
    idiomas: {
      multiples: true,
      oferta: ['Inglés', 'Alemán']
    }
  },
  {
    id: '002',
    codigoDane: 'FA00001B430',
    nombre: 'Colegio 2',
    sector: 'publico',
    estado: 'operando',
    zona: 'TBD',
    departamento: 'Atlántico',
    municipio: 'Barranquilla',
    barrio: 'El Golf',
    categoria: 'Superior',
    calendario: 'B',
    direccion: {
      rector: undefined,
      rectora: 'María López'
    },
    contacto: {
      email: 'contacto@domain.com',
      url: 'colegio.com',
      telefonos: {
        fijos: ['3042173', '3042174'],
        celulares: ['3126052700', '3126052701'],
        fax: ['']
      }
    },
    idiomas: {
      multiples: true,
      oferta: ['Inglés', 'Alemán']
    }
  }
]
