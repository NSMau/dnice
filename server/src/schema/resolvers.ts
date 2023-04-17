import { colegios } from '../colegios'

export const resolvers = {
  Query: {
    getAllColegios: () => colegios,
    findColegioByCodigoDANE: (codigoDANE: string) => {
      try {
        const index = colegios.findIndex(
          (colegio) => colegio.codigoDANE === codigoDANE
        )

        return colegios[index]
      } catch (error) {
        return `ERROR: No existe ninguna institución o centro educativo cuyo código DANE coincida con el valor que has provisto (${codigoDANE}). Por favor verifica el código ingresado e intenta nuevamente.\n${error}`
      }
    }
  },

  Mutation: {
    eliminarColegioPorID: (codigoDANE: string) => {
      const indexToRemove = colegios.findIndex(
        (colegio) => colegio.codigoDANE === codigoDANE
      )

      if (!indexToRemove) {
        return `ERROR: No existe ninguna institución o centro educativo cuyo código DANE coincida con el valor que has provisto (${codigoDANE}). Por favor verifica el código ingresado e intenta nuevamente.`
      }

      return colegios.splice(indexToRemove, 1)
    }
  }
}
