import { fetchBonosArg } from '../services/fetchBonos.js'
import { useState, useEffect } from 'react'
import './cotizacion.css'
import { Activo } from './Activo.jsx'

export function Cotizacion() {

    const [bonosList, setBonosList] = useState([])

    useEffect(() => {
        const loadBonos = async () => {
            try {
                const bonos = await fetchBonosArg()
                setBonosList(bonos)
            }
            catch (error) {
                console.error("Error al cargar bonos: ", error)
            }
        }
        loadBonos();

    }, [])

    return (
        <div className="activos">
            {bonosList.length > 0
                ? bonosList.filter(bono => bono.v > 90000000).map(bono => <Activo key={bono.symbol} activo={ bono } />
                    )
                : "Cargando bonos..."
            }
        </div>
    )
}