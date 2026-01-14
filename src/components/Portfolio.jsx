import './portfolio.css'
import { useState } from 'react';

export function Portfolio({ portfolioName, earnings }) {
    const [isPesos, setIsPesos] = useState(false);
    const [convertedEarnings, setConvertedEarnings] = useState(earnings);

    const currency = isPesos ? "ARS" : "USD";
    const buttonText = isPesos ? "En ARS" : "En USD";
    const buttonClassName = isPesos ? "pf-button is-pesos" : "pf-button";

    const handleClick = () => {
        setIsPesos(!isPesos);
    }

    return (
        <article className='portfolio-card'>
            <header>
                <div>
                    <strong>{portfolioName}</strong>

                    <p>Gané {convertedEarnings} <span>{currency}</span></p>
                </div>
            </header>

            <aside>
                <button
                    className={buttonClassName}
                    onClick={handleClick}>
                    {buttonText}
                </button>
            </aside>
        </article>
    );
}
