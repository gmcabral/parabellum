// el payload tiene que tener esta forma:
// {
//   "CapitalTotal": 1000,
//   "PorcentajeRiesgo": 1,
//   "ticker": "AAPL"
// }
export async function calcularRiesgo(payload) {
    const response = await fetch('https://api.amala.com.ar/calculadora/', {
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

export async function getScreenerData() {
    const response = await fetch('https://api.amala.com.ar/screener/');

    if (!response.ok) {
        throw new Error('Error al obtener los datos');
    }

    return response.json();
}