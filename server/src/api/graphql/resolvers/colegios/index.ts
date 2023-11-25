import { ObjectId } from 'mongodb'
import { IColegio, IDatabase } from '../../../../lib/types'

export const colegioResolvers = {
  Query: {
    colegios: async (
      _root: undefined,
      _args: Record<string, never>,
      { db }: { db: IDatabase }
    ): Promise<IColegio[]> => await db.colegios.find({}).toArray(),

    colegio: async (
      _root: undefined,
      { codigoDANE }: { codigoDANE: string },
      { db }: { db: IDatabase }
    ): Promise<IColegio> => {
      const colegio = await db.colegios.findOne({ codigoDANE })

      if (!colegio) {
        throw new Error(
          `ERROR: No existe ninguna institución o centro educativo cuyo código DANE coincida con el valor que has provisto (${codigoDANE}). Por favor verifica el código ingresado e intenta nuevamente.`
        )
      }

      return colegio
    }
  },

  Mutation: {
    // This mutation deletes a colegio by its ID or by its codigoDANE
    deleteColegio: async (
      _root: undefined,
      {
        codigoDANE,
        id
      }: { codigoDANE: string | undefined; id: string | undefined },
      { db }: { db: IDatabase }
    ): Promise<IColegio> => {
      const deletionCriteria = codigoDANE
        ? { codigoDANE }
        : { _id: new ObjectId(id) }
      const deletedColegio = await db.colegios.findOneAndDelete({
        deletionCriteria
      })

      if (!deletedColegio) {
        throw new Error(
          `ERROR: No existe ninguna institución o centro educativo cuyo ID coincida con el valor que has provisto (${id}). Por favor verifica el ID ingresado e intenta nuevamente.`
        )
      }

      return deletedColegio
    }
  },

  Colegio: {
    id: (colegio: IColegio) => colegio._id.toString()
  }
}
