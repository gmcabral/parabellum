import { Link, useNavigate } from 'react-router-dom'
import './loginPage.css'
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

export default function LoginPage({ onClose, from }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const onChangeUsername = (event) => {
        const newUsername = event.target.value
        setUsername(newUsername)
    }

    const onChangePassword = (event) => {
        const newPassword = event.target.value
        setPassword(newPassword)
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        setLoading(true)
        const newToken = await login({ username, password })
        if (newToken?.accessToken !== undefined) {
            onClose()
            navigate(from, { replace: true });
        }
        setLoading(false)
    };

    return (
        <section className="modal-overlay">
            <div className="modal">
                <form>
                    <label htmlFor="username">User</label>
                    <input
                        id="username"
                        placeholder="admin"
                        value={username}
                        onChange={onChangeUsername}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={onChangePassword}
                    />

                    <button onClick={handleLogin} disabled={loading}>
                        {loading ? 'Cargando...' : 'Login'}
                    </button>
                </form>

                <Link to="/">Home</Link>
            </div>
        </section>

    )
}