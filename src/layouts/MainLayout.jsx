import { Outlet, Link } from 'react-router-dom'
import { Header } from '../components/Header'
import './mainlayout.css'


export default function MainLayout() {


    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>


    )
}
