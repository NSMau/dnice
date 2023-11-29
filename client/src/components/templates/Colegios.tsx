import { server } from '../../lib/api'
import {Colegio, ColegiosData} from "../../lib/types";

interface ColegiosProps {
  title: string
}

const Colegios = `
  query Colegios {
    colegios {
      id
      codigoDANE
      nombre
      clasificacion {
        tipoEstablecimiento
        sector
        caracter
        genero
        estratoSocioeconomico
        categoriaICFES
        licencia
      }
      estado
      totalSedes
      ofertaAcademica {
        calendario
        niveles
        grados
        jornadas
        modelosEducativos
        idiomas
        etnias
        especialidad
        capacidadesExcepcionales
        internado
        discapacidades
      }
      ubicacion {
        departamento {
          codigo
          nombre
        }
        municipio {
          codigo
          nombre
        }
        zona
        barrio
        direccion
        coordenadas {
          latitud
          longitud
          ubicacionMapa
        }
      }
      rectoria
      contacto {
        correoElectronico
        paginaWeb
        telefonos {
          celulares
          fijos
        }
        redesSociales {
          facebook
          instagram
          tiktok
          x
        }
      }
    }
  }
`


export default function Listings({ title }: ColegiosProps) {
  async function fetchListings () {
    const { data } = await server.fetch<ColegiosData>({ query: Colegios })

    data.colegios.forEach(sanitizeColegioProperties)

    console.log(data.colegios)
  }

  return (
    <div>
      {`Hello from ${title}!`}

      <button onClick={fetchListings}>Fetch Colegios</button>
    </div>
  )
}

function sanitizeColegioProperties(colegio: Colegio) {
  colegio.clasificacion.tipoEstablecimiento = TIPO_ESTABLECIMIENTO_MAP[colegio.clasificacion.tipoEstablecimiento]
  colegio.clasificacion.sector = SECTOR_MAP[colegio.clasificacion.sector]
  colegio.clasificacion.caracter = CARACTER_MAP[colegio.clasificacion.caracter]
  colegio.clasificacion.genero = GENERO_MAP[colegio.clasificacion.genero]
  colegio.clasificacion.estratoSocioeconomico = ESTRATO_SOCIOECONOMICO_MAP[colegio.clasificacion.estratoSocioeconomico]
  colegio.clasificacion.categoriaICFES = CATEGORIA_ICFES_MAP[colegio.clasificacion.categoriaICFES]
  colegio.clasificacion.licencia = LICENCIA_MAP[colegio.clasificacion.licencia]

  // for (const property in Object.keys(SANITIZE_MAP)) {
  //   const map = SANITIZE_MAP[property]
  //   const value = colegio[property]
  //
  //   if (map[value]) {
  //     colegio[property] = map[value]
  //   }
  // }
}

const TIPO_ESTABLECIMIENTO_MAP: {[key: string]: string} = {
  'CENTRO_EDUCATIVO': 'Centro Educativo',
  'INSTITUCION_EDUCATIVA': 'Institución Educativa'
}

const SECTOR_MAP: {[key: string]: string} = {
  'OFICIAL': 'Oficial',
  'NO_OFICIAL': 'No Oficial'
}

const CARACTER_MAP: {[key: string]: string} = {
  'ACADEMICO': 'Académico',
  'TECNICO': 'Técnico',
  'NO_APLICA': 'No Aplica'
}

const GENERO_MAP: {[key: string]: string} = {
  'MIXTO': 'Mixto',
  'MASCULINO': 'Masculino',
  'FEMENINO': 'Femenino'
}

const ESTRATO_SOCIOECONOMICO_MAP: {[key: string]: string} = {
  'ESTRATO_1': '1',
  'ESTRATO_2': '2',
  'ESTRATO_3': '3',
  'ESTRATO_4': '4',
  'ESTRATO_5': '5',
  'ESTRATO_6': '6',
  'ESTRATO_7': '7'
}

const CATEGORIA_ICFES_MAP: {[key: string]: string} = {
  'A_PLUS': 'A+',
  'A': 'A',
  'B': 'B',
  'C': 'C',
  'D': 'D'
}

const LICENCIA_MAP: {[key: string]: string} = {
  'POR_REVISAR': 'Por Revisar',
  'RECONOCIMIENTO_OFICIAL': 'Reconocimiento Oficial'
}

const SANITIZE_MAP: {[key: string]: {[key: string]: string}} = {
  'tipoEstablecimiento': TIPO_ESTABLECIMIENTO_MAP,
  'sector': SECTOR_MAP
}
