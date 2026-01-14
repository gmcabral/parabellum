import { AuthContext } from '../context/AuthContext.js'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
    const { token, setToken } = useContext(AuthContext)

    const handleLogout = () => {
        setToken(null)
        console.log({ token })
    }

    const showLogin = () => {
        if (token == undefined) {
            return <Link to="/login" className='menuRightItem'>Login</Link>
        }
        return <button onClick={handleLogout} className='menuRightItem'>Logout</button>

    }

    return (
        <header>
            <nav className='mainNavBar'>
                <Link to="/" className='menuItem'>Home</Link>
                <Link to="/cotizaciones" className='menuItem'>Cotizaciones</Link>
                {showLogin()}
            </nav>
        </header>
    )
}