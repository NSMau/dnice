import { colegios } from '../colegios'

export const resolvers = {
  Query: {
    getAllColegios: () => colegios
  }
}
