import { useState, useEffect } from "react"
import { getScreenerData } from "../services/ParabellumServices.js"


export default function ScreenerPage() {
    const [loading, setLoading] = useState(true)
    const [screener, setScreener] = useState([])

    useEffect(() => {
        const loadScreener = async () => {
            try {
                const screenerData = await getScreenerData()
                setScreener(screenerData)
            }
            catch (error) {
                console.error("Error al cargar datos de Screener: ", error)
            }
            finally {
                setLoading(false)
            }
        }
        loadScreener();
    }, [])
    return (
        <>
            <h1>Screener</h1>
            {loading
                ? <p>Cargando resultado de screener...</p>
                : <table>
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Company</th>
                            <th>Sector</th>
                            <th>Industry</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {screener.data.map(screener =>
                            <tr key={screener.Ticker}>
                                <td>{screener.Ticker}</td>
                                <td>{screener.Company}</td>
                                <td>{screener.Sector}</td>
                                <td>{screener.Industry}</td>
                                <td>{screener.Price}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            }
        </>



    )
}