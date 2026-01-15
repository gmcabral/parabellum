import { mapTokenDtoToToken } from '../mappers/token.js';

export const obtenerTokenIOL = async ({ username, password }) => {
    const url = '/api-iol/token';
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

        const data = await response.json();

        if (response.ok) {
            return mapTokenDtoToToken(data);
        } else {
            console.error('Error:', data);
            return null;
        }
    } catch (error) {
        console.error('Error de red:', error);
        return null;
    }
};

export async function refreshTokenIOL({ token }) {
    const url = '/api-iol/token';
    const detalles = new URLSearchParams();
    detalles.append('refresh_token', token.refreshToken);
    detalles.append('grant_type', 'refresh_token');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: detalles
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Token refrescado con exito')
            return mapTokenDtoToToken(data);
        } else {
            console.error('Error:', data);
            return null;
        }
    } catch (error) {
        console.error('Error de red:', error);
        return null;

    }
};