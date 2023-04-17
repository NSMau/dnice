import { ObjectId } from 'mongodb'

export interface Colegio {
  _id: ObjectId
  nombre: string
  codigoDANE: string
}

// export interface ColegioCollection {
//   test_colegios: Collection<Colegio>
// }
