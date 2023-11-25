import { ObjectId } from 'mongodb'

export const colegios = [
  {
    id: new ObjectId(),
    codigoDANE: '91798000084',
    nombre: 'Escuela Santa Teresita',
    clasificacion: {
      tipoEstablecimiento: 'CENTRO_EDUCATIVO',
      sector: 'OFICIAL',
      caracter: 'NO_APLICA',
      genero: 'MIXTO',
      estratoSocioeconomico: 1,
      categoriaICFES: 'C',
      licencia: 'POR_REVISAR'
    },
    estado: 'ANTIGUO_ACTIVO',
    totalSedes: 1,
    ofertaAcademica: {
      calendario: 'A',
      niveles: ['PREESCOLAR', 'BASICA_PRIMARIA'],
      grados: [0, 1, 2, 3, 4, 5],
      jornadas: ['MAÑANA'],
      modelosEducativos: ['ETNOEDUCACION'],
      idiomas: null,
      etnias: null,
      especialidad: null,
      capacidadesExcepcionales: null,
      internado: false,
      discapacidades: null
    },
    ubicacion: {
      departamento: {
        codigo: 91,
        nombre: 'Amazonas'
      },
      municipio: {
        codigo: 91798,
        nombre: 'Tarapacá'
      },
      zona: 'RURAL',
      barrio: null,
      direccion: 'Comunidad Caña Brava',
      coordenadas: {
        latitud: 'sdfasdgdag',
        longitud: '4534543rfefds',
        ubicacionMapa: 'safdsafsdf'
      }
    },
    rectoria: 'Álex Daimler Rupi',
    contacto: {
      correoElectronico: null,
      paginaWeb: null,
      telefonos: {
        celulares: ['3143750495']
      },
      redesSociales: null
    }
    // prestadorServicios: 'OFICIAL',
    // propiedadPlantaFisica: 'OFICIAL',
    // resguardo: 'PREDIO PUTUMAYO',
    // matriculaContratada: 'SI',
    // secretaria: 'Amazonas'
  }
]
