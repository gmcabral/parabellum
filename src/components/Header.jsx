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
            <nav className='mainNavBar'>
                <Link to="/" className='menuItem'>Home</Link>
                <Link to="/calculadora" className='menuItem'>Calculadora</Link>
                <Link to="/cotizaciones" className='menuItem'>Cotizaciones</Link>

                <button
                    className="menuRightItem"
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