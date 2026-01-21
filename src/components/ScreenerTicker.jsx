
export function ScreenerTicker({ handleTickerInfo, ticker }) {
    return (
        <td onClick={() => handleTickerInfo(ticker)} className="border-x border-x-gray-500 px-1 cursor-pointer font-bold">{ticker}</td>
    )
}