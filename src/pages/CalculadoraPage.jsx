import { useState } from "react";
import { calcularRiesgo } from "../services/ParabellumServices.js";
import { mapOperacionDtoToOperacion } from "../mappers/calculadoraOperacion.js"

export default function Calculadora() {
    const [capitalTotal, setCapitalTotal] = useState('');
    const [pctRiesgo, setPctRiesgo] = useState('');
    const [ticker, setTicker] = useState('');
    const [operacion, setOperacion] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            CapitalTotal: Number(capitalTotal),
            PorcentajeRiesgo: Number(pctRiesgo),
            ticker: ticker.trim(),
        };

        try {
            const result = await calcularRiesgo(payload);
            setOperacion(mapOperacionDtoToOperacion(result))
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <section className="flex flex-col items-center m-4 align-middle justify-center">
                <h1 className="text-3xl font-bold text-gray-300 mb-4">Calculadora</h1>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="ticker" className="text-sm font-medium">TICKER</label>
                        <input
                            id="ticker"
                            type="text"
                            value={ticker}
                            onChange={(e) => setTicker(e.target.value)}
                            required
                            className="rounded-md border px-3 py-2"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="capitalTotal" className="text-sm font-medium">Capital total</label>
                        <input
                            id="capitalTotal"
                            type="number"
                            value={capitalTotal}
                            onChange={(e) => setCapitalTotal(e.target.value)}
                            required
                            className="rounded-md border px-3 py-2"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="pctRiesgo" className="text-sm font-medium">Porcentaje de Riesgo</label>
                        <input
                            id="pctRiesgo"
                            type="number"
                            value={pctRiesgo}
                            onChange={(e) => setPctRiesgo(e.target.value)}
                            required
                            className="rounded-md border px-3 py-2"
                        />
                    </div>

                    <div className="col-span-full flex justify-center">
                        <button
                            type="submit"
                            className="mt-2 rounded-md bg-blue-900 px-6 py-2 text-white"
                        >
                            Calcular
                        </button>
                    </div>
                </form>
            </section >
            <aside>
                <h1>Operacion en largo</h1>
                <div>
                    <p>Ratio: {operacion?.ratio}</p>
                    <p>Precio de entrada: $ {operacion?.precioEntrada}</p>
                    <p>Take Profit: $ {operacion?.takeProfit}</p>
                    <p>Stop Loss: $ {operacion?.stopLimit}</p>
                </div>
                <div>
                    <p>Cantidad Ganada: {operacion?.cantidadGanada}</p>
                    <p>Cantidad Perdida: {operacion?.cantidadPerdida}</p>
                </div>
            </aside>
        </>
    )

}