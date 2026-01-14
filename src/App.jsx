import { Cotizacion } from './components/Cotizacion';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Search from './pages/Search.jsx'
import Profile from './pages/Profile.jsx';
import MainLayout from './layouts/MainLayout.jsx';

export function App() {

    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/search" element={<Search />} />

                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    )
}

export default App;