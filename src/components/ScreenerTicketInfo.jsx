import { useEffect } from "react"

export function ScreenerTickerInfo({ ticker, onClose }) {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);


    return (
        <section
            onClick={onClose}
            className="
                fixed inset-0 z-1000
                flex items-center justify-center
                bg-black/40
                backdrop-blur-[6px]">
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    w-full max-w-80
                    rounded-xl
                    bg-[#555]
                    p-8
                    shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                    animate-modalFadeIn"
            >
                <p>Ticker: {ticker.Ticker}</p>
                <p>Company: {ticker.Company}</p>
                <p>Sector: {ticker.Sector}</p>
                <p>Industry: {ticker.Industry}</p>
                <p>Country: {ticker.Country}</p>
                <p>Market Cap: {ticker['Market Cap']}</p>
                <p>P/E (Relación Precio-Beneficio): {ticker['P/E']}</p>
                <p>Price: {ticker.Price}</p>
                <p>Change (Pct Cambio): {ticker.Change}</p>
                <p>Volume: {ticker.Volume}</p>
            </div>
        </section>
    )

}