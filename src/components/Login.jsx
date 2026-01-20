import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

export default function Login({ onClose, from }) {
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
        <section
            className="
                fixed inset-0 z-1000
                flex items-center justify-center
                bg-black/40
                backdrop-blur-[6px]"
        >
            <div
                className="
                    w-full max-w-80
                    rounded-xl
                    bg-[#555]
                    p-8
                    shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                    animate-modalFadeIn"
            >
                <form className="flex flex-col gap-4">
                    <label htmlFor="username" className='font-bold text-gray-300'>User</label>
                    <input
                        id="username"
                        placeholder="admin"
                        value={username}
                        onChange={onChangeUsername}
                        className="
                            rounded-md
                            border border-gray-300
                            px-3 py-2.5
                            text-base"
                    />

                    <label htmlFor="password" className='font-bold text-gray-300'>Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={onChangePassword}
                        className="
                            rounded-md
                            border border-gray-300
                            px-3 py-2.5
                            text-base"
                    />
                    <div className="mt-4 flex items-center justify-between gap-2">
                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className="
                                rounded-md
                                bg-blue-600
                                px-4 py-3
                                text-white
                                text-base
                                disabled:cursor-not-allowed
                                disabled:opacity-60"
                        >
                            {loading ? 'Cargando...' : 'Login'}
                        </button>
                        <button
                            onClick={onClose}
                            className="
                                rounded-md
                                border border-gray-400
                                px-4 py-3 text-blue-200
                                text-base bg-blue-900"
                        >Cancel
                        </button>
                    </div>
                </form>
            </div>
        </section>

    )
}