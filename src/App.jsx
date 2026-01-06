import { useState, useEffect } from 'react';
import { Portfolio } from './components/Portfolio';

const URL_BONOS_ARG = 'https://data912.com/live/arg_bonds';

export function App() {

    const [bonosList, setBonosList] = useState([]);

    useEffect(() => {
        fetch(URL_BONOS_ARG)
            .then(response => { console.log(response); return response.json(); })
            .then(data => { console.log(data); return setBonosList(data) })
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