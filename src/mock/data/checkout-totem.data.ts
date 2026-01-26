import { CheckoutRequestDto, CheckoutResponseDto } from '../dto/checkout-totem.dto';

/**
 * Genera un UUID v4 simple
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Genera el código de orden en formato: ${store}-YYYYMMDD-O000000X
 */
function generateOrderCode(store: string): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;
  const orderNumber = String(Math.floor(Math.random() * 9) + 1).padStart(7, '0');
  return `${store}-${dateStr}-O${orderNumber}`;
}

/**
 * Construye la respuesta de checkout basada en el request
 */
export function buildCheckoutResponse(
  request: CheckoutRequestDto,
): CheckoutResponseDto {
  // Generar IDs únicos
  const orderId = generateUUID();
  const checkoutId = generateUUID();
  const orderCode = generateOrderCode(request.store);

  // Calcular totales basados en los productos
  let subtotal = 0;
  const products = request.products.map((product) => {
    // Precio mock fijo (en producción vendría de la BD)
    const unitPrice = 2.65;
    const quantity = parseFloat(product.quantity) || 1;
    const productTotal = unitPrice * quantity;
    subtotal += productTotal;

    return {
      ean: product.ean,
      quantity: product.quantity,
      description: 'GALL MARGARITA FAM', // Mock description
      unitPrice,
      discounts: [],
    };
  });

  const discounts = 0;
  const total = subtotal - discounts;

  // Construir respuesta del cliente
  const customer = {
    bonusCard: request.customer.bonusCard || null,
    documentType:
      request.customer.documentType !== null && request.customer.documentType !== undefined
        ? request.customer.documentType
        : null,
    document: request.customer.document || null,
    ruc: request.customer.ruc || null,
    companyName: request.customer.companyName || null,
    benefit: request.customer.benefit
      ? {
          documentType: request.customer.benefit.documentType,
          document: request.customer.benefit.document,
          colaborador: request.customer.benefit.collaborator,
          coupons: request.customer.benefit.coupons || [],
          prime: request.customer.benefit.prime,
        }
      : {
          documentType: 0,
          document: '',
          colaborador: false,
          coupons: [],
          prime: false,
        },
    couponsInput: request.customer.couponsInput !== undefined ? request.customer.couponsInput : null,
    bankPromotion: request.customer.bankPromotion || [],
  };

  return {
    store: request.store,
    device: request.device,
    products,
    totals: {
      subtotal,
      discounts,
      total,
    },
    customer,
    order: {
      id: orderId,
      code: orderCode,
      state: 'CREADO',
    },
    idCheckout: checkoutId,
  };
}
