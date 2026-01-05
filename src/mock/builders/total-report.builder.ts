import {
  SalesReportByStoreRequestDto,
  TotalReportResponseDto,
} from '../dto/sales-report-by-store.dto';

/**
 * Genera una semilla determinística a partir de una cadena de texto
 * @param input - Cadena de entrada (fecha + tienda)
 * @returns Número entero entre 0 y 9999
 */
function seedFrom(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % 10000;
}

/**
 * Genera un número aleatorio determinístico dentro de un rango
 * @param seed - Semilla base
 * @param min - Valor mínimo
 * @param max - Valor máximo
 * @param decimals - Número de decimales (default: 0)
 * @returns Número determinístico
 */
function deterministicRandom(seed: number, min: number, max: number, decimals: number = 0): number {
  // Usa la semilla para generar un número pseudoaleatorio
  const normalized = ((seed % 10000) / 10000);
  const value = min + (max - min) * normalized;
  return decimals > 0 ? Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals) : Math.round(value);
}

/**
 * Construye un reporte total determinístico basado en el request
 */
export function buildTotalReport(request: SalesReportByStoreRequestDto): TotalReportResponseDto {
  // Genera semilla única basada en fecha + tienda
  const seedInput = `${request.fecha}-${request.tienda}`;
  const baseSeed = seedFrom(seedInput);

  // Genera valores determinísticos usando diferentes offsets de la semilla
  const totalComprobantesBoleta = deterministicRandom(baseSeed, 80, 220, 0);
  const totalComprobantesFactura = deterministicRandom(baseSeed + 1000, 5, 40, 0);
  const totalFacturadoBoleta = deterministicRandom(baseSeed + 2000, 6000, 25000, 2);
  const totalFacturadoFactura = deterministicRandom(baseSeed + 3000, 12000, 50000, 2);
  const totalNotasCreditoBoleta = deterministicRandom(baseSeed + 4000, 0, 800, 2);
  const totalNotasCreditoFactura = deterministicRandom(baseSeed + 5000, 0, 1200, 2);

  // Calcula el totalizador
  const totalizador = Math.round(
    (totalFacturadoBoleta + totalFacturadoFactura - totalNotasCreditoBoleta - totalNotasCreditoFactura) * 100
  ) / 100;

  return {
    fecha: request.fecha,
    tienda: request.tienda,
    totalComprobantesBoleta,
    totalComprobantesFactura,
    totalFacturadoBoleta,
    totalFacturadoFactura,
    totalNotasCreditoBoleta,
    totalNotasCreditoFactura,
    totalizador,
    trazabilidad: request.trazabilidad,
  };
}







