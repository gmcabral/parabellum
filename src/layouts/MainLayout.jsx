import { Outlet, Link } from 'react-router-dom'
import './mainlayout.css'

export default function MainLayout() {
    return (
        <>
            <header>
                <nav className='mainNavBar'>
                    <Link to="/" className='menuItem'>Home</Link>
                    <Link to="/cotizacion" className='menuItem'>Cotizaciones</Link>
                    <Link to="/login" className='menuRightItem'>Login</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>


    )
}
