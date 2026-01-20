import { AuthContext } from '../context/AuthContext.js'
import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Login from './Login.jsx'

export function Header() {
    const { token, logout } = useContext(AuthContext)
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const location = useLocation();

    const handleAuthClick = () => {
        if (token) {
            logout();
        } else {
            setIsLoginOpen(true);
        }
    };

    return (
        <header>
            <nav className='flex bg-sky-900 rounded-lg m-4 items-center gap-4 p-4'>
                <Link to="/" className='text-xl font-bold mb-1'>Home</Link>
                <Link to="/screener" className='text-xl font-bold mb-1'>Screener</Link>
                <Link to="/calculadora" className='text-xl font-bold mb-1'>Calculadora</Link>
                <Link to="/cotizaciones" className='text-xl font-bold mb-1'>Cotizaciones</Link>

                <button
                    className="ml-auto text-xl font-bold mb-1"
                    onClick={handleAuthClick}
                >
                    {token ? 'Logout' : 'Login'}
                </button>

                {!token && isLoginOpen && (
                    <Login
                        onClose={() => setIsLoginOpen(false)}
                        from={location.pathname}
                    />
                )}
            </nav>
        </header>
    )
}