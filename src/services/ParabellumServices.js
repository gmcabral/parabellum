// el payload tiene que tener esta forma:
// {
//   "CapitalTotal": 1000,
//   "PorcentajeRiesgo": 1,
//   "ticker": "AAPL"
// }
export async function calcularRiesgo(payload) {
    const response = await fetch('http://127.0.0.1:8000/calculadora', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error('Error al calcular');
    }

    return response.json();
}