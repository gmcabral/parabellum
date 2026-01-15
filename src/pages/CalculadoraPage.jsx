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
            <section>
                <h1>Calculadora</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="capitalTotal">Capital total</label>
                    <input
                        id="capitalTotal"
                        type="number"
                        value={capitalTotal}
                        onChange={(e) => setCapitalTotal(e.target.value)}
                        required
                    />

                    <label htmlFor="pctRiesgo">Pct Riesgo</label>
                    <input
                        id="pctRiesgo"
                        type="number"
                        value={pctRiesgo}
                        onChange={(e) => setPctRiesgo(e.target.value)}
                        required
                    />

                    <label htmlFor="ticker">TICKER</label>
                    <input
                        id="ticker"
                        type="text"
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)}
                        required
                    />

                    <button type="submit">Calcular</button>
                </form>
            </section>
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