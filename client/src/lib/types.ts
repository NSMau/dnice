export interface Colegio {
  id: string
  codigoDANE: string
  nombre: string
  clasificacion: {
    tipoEstablecimiento: string
    sector: string
    caracter: string
    genero: string
    estratoSocioeconomico: string
    categoriaICFES: string
    licencia: string
  }
  estado: string
  totalSedes: number
  ofertaAcademica: {
    calendario: string
    niveles: string[]
    grados: string[]
    jornadas: string[]
    modelosEducativos: string[]
    idiomas: string[]
    etnias: string[]
    especialidad: string[]
    capacidadesExcepcionales: string[]
    internado: boolean
    discapacidades: string[]
  }
  ubicacion: {
    departamento: {
      codigo: string
      nombre: string
    }
    municipio: {
      codigo: string
      nombre: string
    }
    zona: string
    barrio: string
    direccion: string
    coordenadas: {
      latitud: string
      longitud: string
      ubicacionMapa: string
    }
  }
  rectoria: string
  contacto: {
    correoElectronico: string
    paginaWeb: string
    telefonos: {
      fijos: string[]
      celulares: string[]
    }
    redesSociales: {
      facebook: string
      instagram: string
      tiktok: string
      x: string
    }
  }
}

export interface ColegiosData {
  colegios: Colegio[]
}
