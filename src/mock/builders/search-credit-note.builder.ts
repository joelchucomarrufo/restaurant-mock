import {
  SearchCreditNoteRequestDto,
  SearchCreditNoteResponseDto,
  ClientResponseDto,
  BankPromotionResponseDto,
} from '../dto/search-credit-note.dto';

/**
 * Genera una semilla determinística a partir de una cadena de texto
 */
function seedFrom(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash) % 10000;
}

/**
 * Genera un número aleatorio determinístico dentro de un rango
 */
function deterministicRandom(seed: number, min: number, max: number, decimals: number = 0): number {
  const normalized = ((seed % 10000) / 10000);
  const value = min + (max - min) * normalized;
  return decimals > 0
    ? Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
    : Math.round(value);
}

/**
 * Selecciona un elemento de un array de forma determinística
 */
function deterministicChoice<T>(seed: number, choices: readonly T[]): T {
  const index = seed % choices.length;
  return choices[index];
}

/**
 * Genera un hash corto determinístico
 */
function generateHash(seed: number): string {
  const chars = '0123456789ABCDEF';
  let hash = '';
  for (let i = 0; i < 6; i++) {
    const charSeed = seed + (i * 100);
    hash += chars[charSeed % chars.length];
  }
  return hash;
}

/**
 * Construye la respuesta de búsqueda de nota de crédito determinísticamente
 */
export function buildSearchCreditNote(
  request: SearchCreditNoteRequestDto,
): SearchCreditNoteResponseDto {
  // Genera semilla única basada en tienda + transaccion + fecha
  const seedInput = `${request.tienda}-${request.transaccion}-${request.fecha}`;
  const baseSeed = seedFrom(seedInput);

  // Genera referenciaNiubiz
  const hash = generateHash(baseSeed);
  const referenciaNiubiz = `NBZ-${request.tienda}-${request.transaccion}-${hash}`;

  // Determina tipo de documento (DNI o RUC)
  const tipoDocumento = deterministicChoice(baseSeed, ['DNI', 'RUC'] as const);
  const isDNI = tipoDocumento === 'DNI';

  // Genera número de documento
  const docSeed = baseSeed + 1000;
  const numeroDocumento = isDNI
    ? deterministicRandom(docSeed, 10000000, 99999999, 0).toString()
    : deterministicRandom(docSeed, 10000000000, 99999999999, 0).toString();

  // Genera RUC si es RUC, sino un mock estable
  const ruc = isDNI
    ? deterministicRandom(baseSeed + 2000, 10000000000, 99999999999, 0).toString()
    : numeroDocumento;

  // Genera datos del cliente
  const razonSocial = `CLIENTE ${request.tienda}-${request.transaccion}`;
  const correoBonus = `cliente.${request.tienda}.${request.transaccion}@bonus.pe`;
  const tarjetaBonusSeed = baseSeed + 3000;
  const tarjetaBonus = `BONUS-${deterministicRandom(tarjetaBonusSeed, 100000, 999999, 0)}`;

  // Genera promociones bancarias (0-2 items)
  const numPromociones = deterministicRandom(baseSeed + 4000, 0, 2, 0);
  const promocionBancaria: BankPromotionResponseDto[] = [];

  for (let i = 0; i < numPromociones; i++) {
    const promoSeed = baseSeed + 5000 + (i * 100);
    const hasBin = deterministicRandom(promoSeed, 0, 1, 0) === 1;
    const bin = hasBin ? `41111${deterministicRandom(promoSeed + 1, 0, 9, 0)}` : null;
    const id_mp = deterministicRandom(promoSeed + 2, 10, 99, 0);

    promocionBancaria.push({
      BIN: bin,
      id_mp,
    });
  }

  const cliente: ClientResponseDto = {
    correoBonus,
    numeroDocumento,
    razonSocial,
    ruc,
    tarjetaBonus,
    tipoDocumento,
    promocionBancaria,
  };

  return {
    cliente,
    referenciaNiubiz,
    store: request.tienda,
    trx: request.transaccion,
    date: request.fecha,
    cashRegister: request.caja.toString(),
  };
}




