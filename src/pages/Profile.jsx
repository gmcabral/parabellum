import { useParams, useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()

    const handleLogin = () => {
        // lógica...
        navigate('/')
    }
    const { id } = useParams()

    return (
        <>
        <h1>Profile: {id}</h1>
        <button onClick={handleLogin}>Volver al Home</button>
        </>
    )
}