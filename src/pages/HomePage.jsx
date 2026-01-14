import { Link } from 'react-router-dom'
import { Portfolio } from '../components/Portfolio.jsx'

export default function HomePage() {
    return (
        <>
            <Portfolio portfolioName="Portfolio Acciones" earnings={1000000} />
            <Portfolio portfolioName="Portfolio Bonos" earnings={2340} />
            <Portfolio />
            <Link to='/login' >Login</Link>
        </>
    )
}