import { connectDatabase } from '../src/database'

import { ObjectId } from 'mongodb'

import { Colegio } from '../src/lib/types'

const colegios: Colegio[] = [
  {
    _id: new ObjectId(),
    codigoDANE: '91798000013',
    nombre: 'Puerto Ezequiel'
  },
  {
    _id: new ObjectId(),
    codigoDANE: '91798000050',
    nombre: 'José María Carbonell'
  },
  {
    _id: new ObjectId(),
    codigoDANE: '91798000033',
    nombre: 'Santa Trinidad'
  },
  {
    _id: new ObjectId(),
    codigoDANE: '91798000012',
    nombre: 'Sede Internado Villa Carmen'
  },
  {
    _id: new ObjectId(),
    codigoDANE: '91798000131',
    nombre: 'Escuela Filial Wone'
  }
]

const seedDb = async () => {
  const db = await connectDatabase().catch((err) => {
    console.log(err)
  })

  console.log('Seeding database...')

  for (const colegio of colegios) {
    await db?.collection('test_colegios').insertOne(colegio)

    console.log(`Colegio ${colegio.nombre} - (${colegio.codigoDANE}) inserted`)
  }

  console.log('Done seeding database')
}

seedDb()
