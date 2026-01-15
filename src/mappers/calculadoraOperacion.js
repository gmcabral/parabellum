export function mapOperacionDtoToOperacion(dto) {
    return {
        cantidadGanada: dto.CantidadGanada,
        cantidadPerdida: dto.CantidadPerdida,
        ratio: dto.Ratio,
        stopLimit: dto.StopLimit,
        takeProfit: dto.TakeProfit,
        precioEntrada: dto.precio_entrada
    };
}