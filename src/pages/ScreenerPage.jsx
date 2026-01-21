import { useState, useEffect } from "react"
import { getScreenerData } from "../services/ParabellumServices.js"
import { ScreenerTicker } from "../components/ScreenerTicker.jsx"
import { ScreenerTickerInfo } from "../components/ScreenerTicketInfo.jsx"

export default function ScreenerPage() {
    const [loading, setLoading] = useState(true)
    const [screeners, setScreener] = useState([])
    const [selectedTicker, setSelectedTicker] = useState(null)

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

    const handleTickerInfo = (ticker) => {
        const tickerObj = screeners.data.find(screener => screener.Ticker === ticker)
        setSelectedTicker(tickerObj)
    }

    const closeModal = () => {
        setSelectedTicker(null)
    }

    return (
        <>
            {loading
                ? <p>Cargando resultado de screener...</p>
                : screeners.length > 0 && screeners.data.length > 0
                    ? <p>Intentelo nuevamente, algo falló</p>
                    : <table className="w-full mx-5 content-between">
                        <thead>
                            <tr className="border-b">
                                <th >Ticker</th>
                                <th>Company</th>
                                <th>Sector</th>
                                <th>Industry</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {screeners.data.map(screener =>
                                <tr key={screener.Ticker} >
                                    <ScreenerTicker handleTickerInfo={handleTickerInfo} ticker={screener.Ticker} />
                                    <td className="border-x border-x-gray-500 px-1">{screener.Company}</td>
                                    <td className="border-x border-x-gray-500 px-1">{screener.Sector}</td>
                                    <td className="border-x border-x-gray-500 px-1">{screener.Industry}</td>
                                    <td className="border-x border-x-gray-500 px-1">{screener.Price}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
            }
            {selectedTicker && <ScreenerTickerInfo ticker={selectedTicker} onClose={closeModal} />}
        </>
    )
}