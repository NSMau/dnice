import { Collection, ObjectId } from 'mongodb'

export interface IColegio {
  _id: ObjectId
  nombre: string
  codigoDANE: string
  clasificacion: IClasificacion
  estado: Estado
  totalSedes: number
  ofertaAcademica: IOfertaAcademica
  ubicacion: IUbicacion
  rectoria: string
  contacto: IContacto
}

export interface IDatabase {
  colegios: Collection<IColegio>
}

export interface IClasificacion {
  tipoEstablecimiento: TipoEstablecimiento
  sector: Sector
  caracter: Caracter
  genero: Genero
  estratoSocioeconomico: EstratoSocioeconomico
  categoriaICFES: CategoriaICFES
  licencia: Licencia
}

export enum TipoEstablecimiento {
  CENTRO_EDUCATIVO = 'Centro Educativo',
  INSTITUCION_EDUCATIVA = 'Institución Educativa'
}

export enum Sector {
  NO_OFICIAL = 'No Oficial',
  OFICIAL = 'Oficial'
}

export enum Caracter {
  ACADEMICO = 'Académico',
  TECNICO = 'Técnico',
  NO_APLICA = 'No Aplica'
}

export enum Genero {
  FEMENINO = 'Femenino',
  MASCULINO = 'Masculino',
  MIXTO = 'Mixto'
}

enum EstratoSocioeconomico {
  ESTRATO_0,
  ESTRATO_1,
  ESTRATO_2,
  ESTRATO_3,
  ESTRATO_4,
  ESTRATO_5,
  ESTRATO_6,
  ESTRATO_7
}

export enum CategoriaICFES {
  A_PLUS = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
}

export enum Licencia {
  POR_REVISAR = 'Por Revisar',
  RECONOCIMIENTO_OFICIAL = 'Reconocimiento Oficial'
}

export enum Estado {
  NUEVO_ACTIVO = 'Nuevo Activo',
  ANTIGUO_ACTIVO = 'Antiguo Activo',
  CIERRE_DEFINITIVO = 'Cierre Definitivo',
  CIERRE_TEMPORAL = 'Cierre Temporal'
}

export interface IOfertaAcademica {
  calendario: Calendario
  niveles: Nivel[]
  grados: Grado[]
  jornadas: Jornada[]
  modelosEducativos: ModeloEducativo[]
  idiomas?: Idioma[]
  etnias?: Etnia[]
  especialidad?: Especialidad[]
  capacidadesExcepcionales?: CapacidadExcepcional[]
  internado: boolean
  discapacidades?: Discapacidad[]
}

export enum Calendario {
  A = 'A',
  B = 'B'
}

export enum Nivel {
  PREESCOLAR = 'Preescolar',
  BASICA_PRIMARIA = 'Básica Primaria',
  BASICA_SECUNDARIA = 'Básica Secundaria',
  MEDIA = 'Media'
}

export enum Grado {
  GRADO_0,
  GRADO_1,
  GRADO_2,
  GRADO_3,
  GRADO_4,
  GRADO_5,
  GRADO_6,
  GRADO_7,
  GRADO_8,
  GRADO_9,
  GRADO_10,
  GRADO_11
}

export enum Jornada {
  MANANA = 'Mañana',
  TARDE = 'Tarde',
  NOCTURNA = 'Nocturna',
  COMPLETA = 'Completa',
  FIN_DE_SEMANA = 'Fin de Semana',
  UNICA = 'Única'
}

export enum ModeloEducativo {
  A_CRECER = 'A Crecer',
  ACELERACION_DEL_APRENDIZAJE = 'Aceleración del Aprendizaje',
  CAFAM = 'CAFAM',
  EDUCACION_TRADICIONAL = 'Educación Tradicional',
  ESCUELA_NUEVA = 'Escuela Nueva',
  ETNOEDUCACION = 'Etnoeducación',
  POST_PRIMARIA = 'Post Primaria',
  PROGRAMA_PARA_JOVENES_EN_EXTRAEDAD_Y_ADULTOS = 'Programa para Jóvenes en Extraedad y Adultos',
  SECUNDARIA_ACTIVA = 'Secundaria Activa'
}

export enum Idioma {
  ALEMAN = 'Alemán',
  FRANCES = 'Francés',
  INGLES = 'Inglés',
  ITALIANO = 'Italiano'
}

export enum Etnia {
  AFRODESCENDIENTE = 'Afrodescendiente',
  ANDOQUE = 'Andoque',
  BORA = 'Bora',
  COCAMA = 'Cocama',
  CUBEO = 'Cubeo',
  INGA = 'Inga',
  KARAPANA_CARAPANA = 'Karapana (Carapana)',
  KARIJONA_CARIJONA = 'Karijona (Carijona)',
  KAWIYARI_CABIYARI = 'Kawiyari (Cabiyari)',
  LETUAMA = 'Letuama',
  MAKUNA = 'Makuna',
  MATAPA = 'Matapá',
  MIRANA = 'Mirana',
  MUINANE = 'Muinane',
  NONUYA = 'Nonuya',
  OCAINA = 'Ocaina',
  TANIMUKA = 'Tanimuka',
  TIKUNA = 'Tikuna',
  TUKANO = 'Tukano',
  WITOTO_HUITOTO = 'Witoto (Huitoto)',
  YAGUA = 'Yagua',
  YAUNA = 'Yauna',
  YUCUNA = 'Yucuna'
}

export enum Especialidad {
  TBD = 'TBD'
}

export enum CapacidadExcepcional {
  TBD = 'TBD'
}

export enum Discapacidad {
  TBD = 'TBD'
}

export interface IUbicacion {
  departamento: IDepartamento
  municipio: IMunicipio
  zona: Zona
  barrio?: string
  direccion: string
  coordenadas: ICoordenadas
}

export interface IDepartamento {
  codigo: number
  nombre: string
}

export interface IMunicipio {
  codigo: number
  nombre: string
}

export enum Zona {
  RURAL = 'Rural',
  URBANA = 'Urbana'
}

export interface ICoordenadas {
  latitud: string
  longitud: string
  ubicacionMapa: string
}

export interface IContacto {
  correoElectronico?: string
  paginaWeb?: string
  telefonos: ICentralita
  redesSociales?: IRedSocial
}

export interface ICentralita {
  fijos?: string[]
  celulares?: string[]
}

export interface IRedSocial {
  facebook: string
  instagram: string
  tiktok: string
  x: string
}
