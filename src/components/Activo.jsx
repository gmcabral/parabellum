import './cotizacion.css'

export function Activo({ activo }) {

    const formatPrice = (value) =>
        new Intl.NumberFormat('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value)

    const formatValue = (value) =>
        new Intl.NumberFormat('es-AR', {}).format(value)

    return (
        <div className="activo" key={activo.symbol}>
            <div><strong>{activo.symbol}</strong></div>
            <div><span>Compra: </span>{formatPrice(activo.px_bid / 100)}</div>
            <div><span>Venta: </span>{formatPrice(activo.px_ask / 100)}</div>
            <div><span>Vol: </span>{formatValue(activo.v)}</div>
        </div>
    )
}