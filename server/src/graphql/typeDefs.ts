export const typeDefs = `#graphql
"This query retrieves all colegios in the database"
type Query {
  getAllColegios: [Colegio!]!
}

"This Colegio type defines the queryable fields for every colegio in our data source"
type Colegio {
  id: ID!
  codigoDANE: String!
  nombre: String!
  clasificacion: Clasificacion!
  estado: Estado!
  totalSedes: Int!
  ofertaAcademica: OfertaAcademica!
  ubicacion: Ubicacion!
  # TODO: Define Admin type
  rectoria: String!
  contacto: Contactorio!
  redesSociales: RedesSociales
}

type Clasificacion {
  tipoEstablecimiento: TipoEstablecimiento!
  sector: Sector!
  caracter: Caracter!
  genero: Genero!
  estratoSocioeconomico: EstratoSocioeconomico
  categoriaICFES: CategoriaICFES!
  licencia: Licencia!
}

enum TipoEstablecimiento {
  CENTRO_EDUCATIVO
  INSTITUCION_EDUCATIVA
}

enum Sector {
  NO_OFICIAL
  OFICIAL
}

enum Caracter {
  ACADEMICO
  TECNICO
  NO_APLICA
}

enum Genero {
  FEMENINO
  MASCULINO
  MIXTO
}

enum EstratoSocioeconomico {
  ESTRATO_1
  ESTRATO_2
  ESTRATO_3
  ESTRATO_4
  ESTRATO_5
  ESTRATO_6
  ESTRATO_7
}

"Categoria del colegio con respecto a la clasificación ICFES"
enum CategoriaICFES {
  A_PLUS
  A
  B
  C
  D
}

enum Licencia {
  POR_REVISAR
  RECONOCIMIENTO_OFICIAL
}

enum Estado {
  NUEVO_ACTIVO
  ANTIGUO_ACTIVO
  CIERRE_DEFINITIVO
  CIERRE_TEMPORAL
}

type OfertaAcademica {
  calendario: Calendario
  niveles: [Nivel!]!
  grados: [Grado!]!
  jornadas: [Jornada!]!
  modelosEducativos: [ModeloEducativo!]!
  idiomas: [Idioma]
  etnias: [Etnia]
  especialidad: [Especialidad]
  capacidadesExcepcionales: [CapacidadExcepcional]
  internado: Boolean
  discapacidades: [Discapacidad]
}

enum Calendario {
  A
  B
}

enum Nivel {
  PREESCOLAR
  BASICA_PRIMARIA
  BASICA_SECUNDARIA
  MEDIA
}

enum Grado {
  GRADO_0
  GRADO_1
  GRADO_2
  GRADO_3
  GRADO_4
  GRADO_5
  GRADO_6
  GRADO_7
  GRADO_8
  GRADO_9
  GRADO_10
  GRADO_11
}

enum Jornada {
  COMPLETA
  MANANA
  TARDE
  UNICA
  NOCTURNA
  FIN_DE_SEMANA
}

enum ModeloEducativo {
  A_CRECER
  ACELERACION_DEL_APRENDIZAJE
  CAFAM
  EDUCACION_TRADICIONAL
  ESCUELA_NUEVA
  ETNOEDUCACION
  POST_PRIMARIA
  PROGRAMA_PARA_JOVENES_EN_EXTRAEDAD_Y_ADULTOS
  SECUNDARIA_ACTIVA
}

enum Idioma {
  ALEMAN
  FRANCES
  INGLES
  ITALIANO
}

enum Etnia {
  AFRODESCENDIENTE
  ANDOQUE
  BORA
  COCAMA
  CUBEO
  INGA
  KARAPANA_CARAPANA
  KARIJONA_CARIJONA
  KAWIYARI_CABIYARI
  LETUAMA
  MAKUNA
  MATAPA
  MIRANA
  MUINANE
  NONUYA
  OCAINA
  TANIMUKA
  TIKUNA
  TUKANO
  WITOTO_HUITOTO
  YAGUA
  YAUNA
  YUCUNA
}

enum Especialidad {
  TBD
}

enum CapacidadExcepcional {
  TBD
}

enum Discapacidad {
  TBD
}

type Ubicacion {
  departamento: Departamento!
  municipio: Municipio!
  zona: Zona
  barrio: String!
  direccion: String!
  coordenadas: Coordenadas!
}

type Departamento {
  codigo: Int!
  nombre: String!
}

type Municipio {
  codigo: Int!
  nombre: String!
}

enum Zona {
  RURAL
  URBANA
}

type Coordenadas {
  latitud: String!
  longitud: String!
  ubicacionMapa: String!
}

"Medios de comunicación para contactar al colegio"
type Contactorio {
  correoElectronico: String
  website: String
  telefonos: Centralita
}

type Centralita {
  fijos: [String]
  celulares: [String]
}

type RedesSociales {
  facebook: String
  twitter: String
  instagram: String
  tiktok: String
}

type Mutation {
  agregarColegio(id: ID!, idDANE: String): Colegio
  eliminarColegioPorID(idDANE: String): Colegio
}
`
