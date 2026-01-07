import { useState, useEffect } from 'react';
import { Portfolio } from './components/Portfolio';
import { fetchBonosArg } from './services/fetchBonos';

export function App() {

    const [bonosList, setBonosList] = useState([]);

    useEffect( async () => {
        const bonos = await fetchBonosArg();
        setBonosList(bonos)
    }, [])


    return (
        <>
            <div>{bonosList.map(bono =>
                <>
                    <p key={bono.symbol}>{bono.symbol}</p>
                    <p>{bono.px_bid}</p>
                    <p>{bono.px_ask}</p>
                </>)}
            </div>
            <Portfolio portfolioName="Portfolio Acciones" earnings={1000000} />
            <Portfolio portfolioName="Portfolio Bonos" earnings={2340} />
            <Portfolio />
        </>

    )
}

export default App;