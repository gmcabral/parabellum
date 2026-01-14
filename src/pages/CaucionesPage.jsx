import { useContext, useEffect, useState } from "react"
import { GetCauciones } from "../services/IOLServices"
import { AuthContext } from "../context/AuthContext"
import './caucionesPage.css'

export default function CaucionesPage() {
    const { token } = useContext(AuthContext)

    const [cauciones, setCauciones] = useState([])
    useEffect(() => {
        GetCauciones({ token, setCauciones })
    }, [token])

    return (
        <>
            <h2>Cauciones</h2>
            <ul>
                {cauciones.length > 0 ? cauciones?.map(caucion =>
                    <li key={caucion.montoContado}>
                        <p>Pazo: {caucion.plazo} dia(s)</p>
                        <p>Tasa: {caucion.tasaPromedio}</p>
                        <p>Vencimiento: {caucion.fechaVencimiento}</p>
                        <p>Cantidad operada: {caucion.montoContado} </p>
                    </li>
                ) : <p>Cargando cauciones...</p>}
            </ul>
        </>
    )
}