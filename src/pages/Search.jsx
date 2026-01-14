import { useSearchParams } from 'react-router-dom'

export default function Search() {
    const [params] = useSearchParams()
    console.log(params.values())
    const term = params.get('test')

    return <h1>Buscando: {term}</h1>
}