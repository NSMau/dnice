import { server } from '../../lib/api'

interface ColegiosProps {
  title: string
}

const Colegios = `
  query Colegios {
    colegios {
      id
      nombre
    }
  } 
`

export default function Listings({ title }: ColegiosProps) {
  async function fetchListings () {
    const { data: colegios } = await server.fetch({ query: Colegios })
    console.log(colegios)
  }

  return (
    <div>
      {`Hello from ${title}!`}

      <button onClick={fetchListings}>Fetch Colegios</button>
    </div>
  )
}