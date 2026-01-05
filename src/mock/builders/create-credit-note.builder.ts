import {
  CreateCreditNoteRequestDto,
  CreateCreditNoteResponseDto,
  ReceiptAttributesResponseDto,
} from '../dto/create-credit-note.dto';

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
 * Formatea un número a string con 2 dígitos (para horas)
 */
function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}

/**
 * Genera una hora determinística
 */
function generateDeterministicHour(seed: number): string {
  const hour = deterministicRandom(seed, 8, 21, 0);
  const minute = deterministicRandom(seed + 1, 0, 59, 0);
  const second = deterministicRandom(seed + 2, 0, 59, 0);
  return `${padZero(hour)}:${padZero(minute)}:${padZero(second)}`;
}

/**
 * Genera un base64 mock corto (no enorme)
 */
function generateMockBase64(seed: number): string {
  // Base64 mock de un PDF pequeño (solo los primeros caracteres)
  const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let base64 = 'JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iagoxIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAyIDAgUgo+PgplbmRvYmoKNSAwIG9iago8PAovTGVuZ3RoIDQ0Cj4+CnN0cmVhbQpCVAovRjEgMTIgVGYKNzAgNzIwIFRkCihIZWxsbyBXb3JsZCkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCjAwMDAwMDAyNzAgMDAwMDAgbiAKMDAwMDAwMDM1OCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQyNwolJUVPRg==';
  
  // Agregar algunos caracteres variados basados en seed para hacerlo único pero pequeño
  for (let i = 0; i < 20; i++) {
    const charSeed = seed + (i * 10);
    base64 += base64Chars[charSeed % base64Chars.length];
  }
  
  return base64;
}

/**
 * Construye la respuesta de creación de nota de crédito determinísticamente
 */
export function buildCreateCreditNote(
  request: CreateCreditNoteRequestDto,
): CreateCreditNoteResponseDto {
  // Genera semilla única basada en tienda + transaccion + fecha + caja
  const seedInput = `${request.tienda}-${request.transaccion}-${request.fecha}-${request.caja}`;
  const baseSeed = seedFrom(seedInput);

  // Genera código (00 para éxito o CN-XXXX)
  const codigoSeed = baseSeed + 1000;
  const codigo = deterministicRandom(codigoSeed, 0, 9, 0) < 8
    ? '00'
    : `CN-${deterministicRandom(codigoSeed + 1, 1000, 9999, 0)}`;

  // Genera hora determinística
  const hora = generateDeterministicHour(baseSeed + 2000);

  // Genera idLista
  const idListaSeed = baseSeed + 3000;
  const idLista = `LST-${request.tienda}-${request.transaccion}-${deterministicRandom(idListaSeed, 1000, 9999, 0)}`;

  // Genera montoFacturado
  const montoFacturado = deterministicRandom(baseSeed + 4000, 10.00, 800.00, 2);

  // Genera terminal (usar caja o seed basado en caja)
  const terminal = deterministicRandom(baseSeed + 5000, request.caja - 10, request.caja + 10, 0);

  // Genera tiendaEpos
  const tiendaEpos = deterministicRandom(baseSeed + 6000, 100, 999, 0);

  // Genera atributos del comprobante
  const url = `https://mock.tottem.pe/receipts/${request.tienda}/${request.transaccion}.pdf`;
  const base64 = generateMockBase64(baseSeed + 7000);

  const atributoscomprobante: ReceiptAttributesResponseDto = {
    base64,
    url,
  };

  return {
    atributoscomprobante,
    canal: request.canal,
    codigo,
    dia: request.fecha,
    hora,
    idLista,
    ip: request.ip,
    mensaje: 'NOTA DE CRÉDITO GENERADA',
    montoFacturado,
    proceso: request.proceso,
    terminal,
    tienda: request.tienda,
    tiendaEpos,
    transaccion: request.transaccion,
    trazabilidad: request.trazabilidad,
  };
}




