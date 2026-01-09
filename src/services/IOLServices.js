export const obtenerTokenIOL = async ({ username, password }) => {
    const url = '/api-iol/token';

    // Preparamos los datos en el formato que pide el header x-www-form-urlencoded
    const detalles = new URLSearchParams();
    detalles.append('username', username);
    detalles.append('password', password);
    detalles.append('grant_type', 'password');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: detalles
        });

        if (!response.ok) {
            // IOL suele devolver errores 400 si las credenciales son incorrectas
            const errorData = await response.json();
            console.error('Error de IOL:', errorData);
            return;
        }

        const data = await response.json();
        console.log('Token obtenido con éxito:', data.access_token);
        return data;

    } catch (error) {
        console.error('Error de red o servidor:', error);
    }
};