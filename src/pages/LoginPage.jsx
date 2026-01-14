import { Link } from 'react-router-dom'
import './loginPage.css'
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { obtenerTokenIOL } from '../services/IOLServices';

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const { setToken } = useContext(AuthContext)

    const onChangeUsername = (event) => {
        const newUsername = event.target.value
        setUsername(newUsername)
    }

    const onChangePassword = (event) => {
        const newPassword = event.target.value
        setPassword(newPassword)
    }

    const handleLogin = async () => {
        setLoading(true); // Empezamos a cargar

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
                setToken(data)
            } else {
                console.error('Error:', data);
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error de red:', error);
        } finally {
            setLoading(false); // Terminamos de cargar
        }
    };

    return (
        <section>
            <form>
                <label htmlFor='username'>User: </label>
                <input id='username' placeholder='admin' value={username} onChange={onChangeUsername}></input>

                <label htmlFor='password'>Password: </label>
                <input id='password' placeholder='password' type='password' value={password} onChange={onChangePassword}></input>

                <button onClick={handleLogin} disabled={loading}>
                    {loading ? 'Cargando...' : 'Login'}
                </button>
            </form>

            <Link to='/' >Home</Link>
        </section>

    )
}