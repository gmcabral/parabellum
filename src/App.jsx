import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Search from './pages/Search.jsx'
import Profile from './pages/Profile.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import CotizacionesPage from './pages/CotizacionesPage.jsx';
import CalculadoraPage from './pages/CalculadoraPage.jsx';

export function App() {

    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/calculadora" element={<CalculadoraPage />} />
                <Route path="/cotizaciones" element={<CotizacionesPage />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/search" element={<Search />} />

                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    )
}

export default App;