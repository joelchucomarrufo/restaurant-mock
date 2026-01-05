import { ReportSalesRequestDto } from '../dto/report-sales.dto';
import { MovementReportResponseItemDto } from '../dto/report-sales.dto';

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
  const normalized = ((seed % 10000) / 10000);
  const value = min + (max - min) * normalized;
  return decimals > 0 ? Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals) : Math.round(value);
}

/**
 * Formatea un número a string con 2 dígitos (para horas)
 */
function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}

/**
 * Genera una hora determinística entre 08:00:00 y 21:59:59
 */
function generateDeterministicHour(seed: number, index: number): string {
  const hourSeed = seed + (index * 100);
  const hour = deterministicRandom(hourSeed, 8, 21, 0);
  const minute = deterministicRandom(hourSeed + 1, 0, 59, 0);
  const second = deterministicRandom(hourSeed + 2, 0, 59, 0);
  return `${padZero(hour)}:${padZero(minute)}:${padZero(second)}`;
}

/**
 * Selecciona un elemento de un array de forma determinística
 */
function deterministicChoice<T>(seed: number, choices: readonly T[]): T {
  const index = seed % choices.length;
  return choices[index];
}

const TARJETAS = ['VISA', 'MASTERCARD', 'AMEX', 'YAPE', 'PLIN'] as const;
const TIPOS_COMPROBANTE = ['BOLETA', 'FACTURA'] as const;

/**
 * Construye un array de movimientos determinísticos basado en el request
 */
export function buildMovementReport(request: ReportSalesRequestDto): MovementReportResponseItemDto[] {
  // Genera semilla única basada en fecha + tienda
  const seedInput = `${request.fecha}-${request.tienda}`;
  const baseSeed = seedFrom(seedInput);

  // Determina el número de items (entre 6 y 12)
  const numItems = deterministicRandom(baseSeed, 6, 12, 0);

  // Base para transaccionepos
  const baseTransaccion = 1000 + (baseSeed % 500);

  const items: MovementReportResponseItemDto[] = [];

  for (let i = 0; i < numItems; i++) {
    const itemSeed = baseSeed + (i * 1000);
    
    // Genera valores determinísticos
    const hora = generateDeterministicHour(baseSeed, i);
    const monto = deterministicRandom(itemSeed, 5.00, 350.00, 2);
    const operadorNum = deterministicRandom(itemSeed + 100, 1, 999, 0);
    const operador = `OP${padZero(Math.floor(operadorNum / 10))}${operadorNum % 10}`;
    const tarjeta = deterministicChoice(itemSeed + 200, TARJETAS);
    const tipoComprobante = deterministicChoice(itemSeed + 300, TIPOS_COMPROBANTE);
    const transaccionepos = baseTransaccion + i;

    items.push({
      hora,
      monto,
      operador,
      tarjeta,
      caja: '300',
      tipo_comprobante: tipoComprobante,
      transaccionepos,
    });
  }

  return items;
}







