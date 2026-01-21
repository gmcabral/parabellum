import { API_BASE_URL } from '../constants';


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
    try {
        const response = await fetch(`${API_BASE_URL}/screener/`)

        if (!response.ok) {
            let errorInfo = 'Error genérico del servidor.';
            try {
                // Intenta obtener un mensaje de error más detallado del cuerpo de la respuesta
                const errorData = await response.json();
                errorInfo = errorData.message || JSON.stringify(errorData);
            } catch (e) {
                // Si el cuerpo del error no es JSON, usa el texto de estado de la respuesta
                errorInfo = response.statusText;
            }
            // Lanza un error más descriptivo
            throw new Error(`Error ${`response.status`}: ${errorInfo}`);
        }

        return response.json();

    } catch (error) {
        // Captura errores de red (ej. sin conexión) o los errores lanzados arriba
        console.error('Falló la solicitud para obtener datos del screener:', error);

        // Vuelve a lanzar el error para que el código que llama a esta función
        // sepa que la operación falló y pueda manejarlo.
        throw error;
    }
}