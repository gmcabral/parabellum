import Portfolio from './Portfolio';

export function App() {

    return (
        <>
            <Portfolio portfolioName="Portfolio Acciones" earnings={1000000} />
            <Portfolio portfolioName="Portfolio Bonos" earnings={2340} />
            <Portfolio />
        </>

    )
}

export default App;