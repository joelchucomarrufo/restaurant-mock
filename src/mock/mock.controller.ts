import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiExtraModels,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiKeyGuard } from './guards/api-key.guard';
import { Public } from './decorators/public.decorator';
import {
  StoresRequestDto,
  StoresResponseDto,
  TiendaDto,
} from './dto/stores.dto';
import {
  StoresUnitResponseDto,
  StoreResponseDto,
  ImageVideoDto,
} from './dto/stores-v2.dto';
import { AppConfigRequestDto, AppConfigResponseDto, ConfigDto } from './dto/app-config.dto';
import {
  LoginUsernameRequestDto,
  LoginUsernameResponseDto,
  LoginDataDto,
  ProviderDto,
  UserDto,
} from './dto/login-username.dto';
import { SectionsRequestDto, SectionsResponseDto, SeccionDto } from './dto/sections.dto';
import {
  DetailSectionsRequestDto,
  DetailSectionsResponseDto,
  CategoriaDto,
  ProductoDto,
} from './dto/detail-sections.dto';
import { LoyaltiRequestDto, LoyaltiResponseDto } from './dto/loyalti.dto';
import {
  CheckoutProductsRequestDto,
  CheckoutProductsResponseDto,
  ProductoCheckoutRequestDto,
} from './dto/checkout-products.dto';
import {
  SalesReportByStoreRequestDto,
  TotalReportResponseDto,
} from './dto/sales-report-by-store.dto';
import {
  ReportSalesRequestDto,
  MovementReportResponseItemDto,
} from './dto/report-sales.dto';
import { HealthResponseDto } from './dto/health.dto';
import {
  SearchCreditNoteRequestDto,
  SearchCreditNoteResponseDto,
  ClientResponseDto,
  BankPromotionResponseDto,
} from './dto/search-credit-note.dto';
import {
  CreateCreditNoteRequestDto,
  CreateCreditNoteResponseDto,
  ReceiptAttributesResponseDto,
} from './dto/create-credit-note.dto';
import {
  ImagenDto,
  LoyaltyDto,
  PromocionBancariaDto,
  ClienteDto,
  DescuentoDto,
  ProductoCheckoutDto,
  TotalDescuentoDto,
  TotalPagarDto,
  TotalesDto,
} from './dto/shared.dto';
import { storesMockData } from './data/stores.data';
import { appConfigMockData } from './data/app-config.data';
import { loginUsernameMockData } from './data/login-username.data';
import { sectionsMockData } from './data/sections.data';
import { detailSectionsMockData } from './data/detail-sections.data';
import { loyaltiMockData } from './data/loyalti.data';
import { checkoutProductsMockData } from './data/checkout-products.data';
import { storeWorldsMockData } from './data/store-worlds.data';
import { customerBenefitMockData } from './data/customer-benefit.data';
import { rucMockData } from './data/ruc.data';
import { checkoutMockData } from './data/checkout.data';
import { buildBillingResponse } from './data/billing.data';
import { buildTotalReport } from './builders/total-report.builder';
import { buildMovementReport } from './builders/movement-report.builder';
import { buildSearchCreditNote } from './builders/search-credit-note.builder';
import { buildCreateCreditNote } from './builders/create-credit-note.builder';
import { adaptStoresResponseV2 } from './builders/stores-v2.builder';
import {
  StoreWorldsRequestDto,
  StoreWorldsResponseDto,
  WorldDto,
  DishDto,
  CategoryDto,
  ProductDto,
} from './dto/store-worlds.dto';
import {
  CustomerBenefitRequestDto,
  CustomerBenefitResponseDto,
  BenefitRequestDto,
  CouponDto,
} from './dto/customer-benefit.dto';
import { RucRequestDto, RucResponseDto } from './dto/ruc.dto';
import {
  CheckoutRequestDto,
  CheckoutResponseDto,
  CheckoutProductRequestDto,
  OrderDto,
} from './dto/checkout.dto';
import {
  BillingRequestDto,
  BillingResponseDto,
  BillingPaymentDetailsDto,
  BillingCallCustomerDto,
  BillingOrderDto,
  PaymentDetailsDto,
  CallCustomerDto,
  OrderResponseDto,
} from './dto/billing.dto';
import {
  CheckoutRequestDto as CheckoutTotemRequestDto,
  CheckoutResponseDto as CheckoutTotemResponseDto,
  CheckoutProductRequestDto as CheckoutTotemProductRequestDto,
  CheckoutCustomerRequestDto,
  CheckoutBenefitRequestDto,
  CheckoutBankPromotionDto,
  CheckoutProductResponseDto,
  CheckoutTotalsDto,
  CheckoutOrderDto,
  CheckoutCustomerResponseDto,
  CheckoutBenefitResponseDto,
} from './dto/checkout-totem.dto';
import { buildCheckoutResponse } from './data/checkout-totem.data';

@ApiTags('Totem Restaurant')
@Controller('totem-restaurant')
@UseGuards(ApiKeyGuard)
@ApiHeader({
  name: 'x-api-key',
  description: 'API Key requerida para autenticación',
  required: true,
  example: '5eSst?Yt@kkaX6S',
})
@ApiExtraModels(
  // Request DTOs
  StoresRequestDto,
  AppConfigRequestDto,
  LoginUsernameRequestDto,
  SectionsRequestDto,
  DetailSectionsRequestDto,
  LoyaltiRequestDto,
  CheckoutProductsRequestDto,
  ProductoCheckoutRequestDto,
  SalesReportByStoreRequestDto,
  ReportSalesRequestDto,
  SearchCreditNoteRequestDto,
  CreateCreditNoteRequestDto,
  StoreWorldsRequestDto,
  CustomerBenefitRequestDto,
  RucRequestDto,
  CheckoutRequestDto,
  CheckoutProductRequestDto,
  BillingRequestDto,
  BillingPaymentDetailsDto,
  BillingCallCustomerDto,
  CheckoutTotemRequestDto,
  CheckoutTotemProductRequestDto,
  CheckoutCustomerRequestDto,
  CheckoutBenefitRequestDto,
  CheckoutBankPromotionDto,
  // Response DTOs
  StoresResponseDto,
  StoresUnitResponseDto,
  AppConfigResponseDto,
  LoginUsernameResponseDto,
  LoginDataDto,
  SectionsResponseDto,
  DetailSectionsResponseDto,
  LoyaltiResponseDto,
  CheckoutProductsResponseDto,
  TotalReportResponseDto,
  MovementReportResponseItemDto,
  HealthResponseDto,
  SearchCreditNoteResponseDto,
  CreateCreditNoteResponseDto,
  StoreWorldsResponseDto,
  CustomerBenefitResponseDto,
  RucResponseDto,
  CheckoutResponseDto,
  BillingResponseDto,
  BillingOrderDto,
  CheckoutTotemResponseDto,
  CheckoutProductResponseDto,
  CheckoutTotalsDto,
  CheckoutOrderDto,
  CheckoutCustomerResponseDto,
  CheckoutBenefitResponseDto,
  // Nested DTOs
  TiendaDto,
  StoreResponseDto,
  ImageVideoDto,
  ImagenDto,
  ConfigDto,
  ProviderDto,
  UserDto,
  SeccionDto,
  CategoriaDto,
  ProductoDto,
  LoyaltyDto,
  PromocionBancariaDto,
  ClienteDto,
  DescuentoDto,
  ProductoCheckoutDto,
  TotalDescuentoDto,
  TotalPagarDto,
  TotalesDto,
  ClientResponseDto,
  BankPromotionResponseDto,
  ReceiptAttributesResponseDto,
  WorldDto,
  DishDto,
  CategoryDto,
  ProductDto,
  BenefitRequestDto,
  CouponDto,
  OrderDto,
  PaymentDetailsDto,
  CallCustomerDto,
  OrderResponseDto,
)
export class MockController {
  @Get('stores')
  @ApiOperation({ summary: 'Consultar tiendas' })
  @ApiResponse({
    status: 200,
    description: 'Listado de tiendas mockeado.',
    type: StoresUnitResponseDto,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  consultarTiendas(): StoresUnitResponseDto[] {
    return adaptStoresResponseV2(storesMockData);
  }

  @Get('app-config')
  @ApiOperation({ summary: 'Config app' })
  @ApiResponse({
    status: 200,
    description: 'Configuración de la aplicación.',
    type: AppConfigResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  configApp(): AppConfigResponseDto {
    return appConfigMockData;
  }

  @Post('login-username')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login por username' })
  @ApiBody({
    type: LoginUsernameRequestDto,
    examples: {
      provider: {
        value: {
          username: 'provider',
          password: 'provider123',
        },
        description: 'Login como provider',
      },
      admin: {
        value: {
          username: 'admin',
          password: 'admin123',
        },
        description: 'Login como admin',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Login exitoso.',
    type: LoginUsernameResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  loginUsername(
    @Body() _body: LoginUsernameRequestDto,
  ): LoginUsernameResponseDto {
    return loginUsernameMockData;
  }

  @Post('sections')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Consultar secciones' })
  @ApiBody({
    type: SectionsRequestDto,
    examples: {
      default: {
        value: {
          proceso: 'secciones',
          canal: 'TOTTEM',
          tienda: 'T106',
          zonificacion: 'B',
          ip: '10.166.218.148:8444',
          trazabilidad: 'TOTTEM.1001',
        },
        description: 'Ejemplo de request para consultar secciones',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Listado de secciones mockeado.',
    type: SectionsResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  consultarSecciones(
    @Body() body: SectionsRequestDto,
  ): SectionsResponseDto {
    return {
      ...sectionsMockData,
      tienda: body.tienda || sectionsMockData.tienda,
      ip: body.ip || sectionsMockData.ip,
      trazabilidad: body.trazabilidad || sectionsMockData.trazabilidad,
      zonificacion: body.zonificacion || sectionsMockData.zonificacion,
    };
  }

  @Post('detail-sections')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Consultar detalle de sección' })
  @ApiBody({
    type: DetailSectionsRequestDto,
    examples: {
      default: {
        value: {
          proceso: 'detalleseccion',
          idSeccion: '001',
          seccion: 'vinos',
          canal: 'TOTTEM',
          tienda: 'H005',
          ip: '10.166.218.148:8444',
          trazabilidad: 'TOTTEM.1001',
        },
        description: 'Ejemplo de request para consultar detalle de sección',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Detalle de sección con categorías y productos.',
    type: DetailSectionsResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  consultarDetalleSeccion(
    @Body() body: DetailSectionsRequestDto,
  ): DetailSectionsResponseDto {
    return {
      ...detailSectionsMockData,
      idSeccion: body.idSeccion || detailSectionsMockData.idSeccion,
      seccion: body.seccion || detailSectionsMockData.seccion,
      tienda: body.tienda || detailSectionsMockData.tienda,
      ip: body.ip || detailSectionsMockData.ip,
      trazabilidad: body.trazabilidad || detailSectionsMockData.trazabilidad,
    };
  }

  @Post('loyalti')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Consultar bonus (loyalty)' })
  @ApiBody({
    type: LoyaltiRequestDto,
    examples: {
      default: {
        value: {
          proceso: 'identificacionbonus',
          canal: 'TOTTEM',
          tienda: 'T104',
          ip: '10.166.218.148:8444',
          trazabilidad: 'TOTTEM.1001',
          tipoDocumentoBonus: 'dni',
          numeroDocumentoBonus: '45478547',
        },
        description: 'Ejemplo de request para consultar bonus',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Información del bonus del cliente.',
    type: LoyaltiResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  consultarBonus(@Body() body: LoyaltiRequestDto): LoyaltiResponseDto {
    return {
      ...loyaltiMockData,
      trazabilidad: body.trazabilidad || loyaltiMockData.trazabilidad,
      tipoDocumentoBonus:
        body.tipoDocumentoBonus || loyaltiMockData.tipoDocumentoBonus,
      numeroDocumentoBonus:
        body.numeroDocumentoBonus || loyaltiMockData.numeroDocumentoBonus,
      tienda: body.tienda || loyaltiMockData.tienda,
      ip: body.ip || loyaltiMockData.ip,
    };
  }

  @Post('checkout-products')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Checkout de productos' })
  @ApiBody({
    type: CheckoutProductsRequestDto,
    examples: {
      default: {
        value: {
          canal: 'TOTTEM',
          cliente: {
            correoBonus: 'GLORIA_702@HOTMAIL.COM',
            loyalty: {
              numeroDocumento: '41254288',
              tipoDocumento: 1,
            },
            numeroDocumento: null,
            promocionBancaria: [
              {
                BIN: null,
                id_mp: 10,
              },
            ],
            razonSocial: '-',
            ruc: null,
            tarjetaBonus: '7027661000027531363',
            tipoDocumento: null,
          },
          cupones: null,
          ip: '10.166.218.228:8444',
          proceso: 'checkout',
          productos: [
            {
              cantidad: 4,
              ean: '7757419000086',
              idSeccion: '003',
              seccion: 'Cubiertos',
            },
            {
              cantidad: 5,
              ean: '7757419000024',
              idSeccion: '003',
              seccion: 'Cubiertos',
            },
          ],
          tienda: 'T104',
          trazabilidad: 'TOTTEM.7102',
        },
        description: 'Ejemplo de request para checkout',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Checkout procesado exitosamente.',
    type: CheckoutProductsResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  checkoutProducts(
    @Body() body: CheckoutProductsRequestDto,
  ): CheckoutProductsResponseDto {
    return {
      ...checkoutProductsMockData,
      tienda: body.tienda || checkoutProductsMockData.tienda,
      trazabilidad: body.trazabilidad || checkoutProductsMockData.trazabilidad,
      totales: {
        ...checkoutProductsMockData.totales,
        cliente: {
          ...checkoutProductsMockData.totales.cliente,
          correoBonus:
            body.cliente?.correoBonus ||
            checkoutProductsMockData.totales.cliente.correoBonus,
          loyalty:
            body.cliente?.loyalty ||
            checkoutProductsMockData.totales.cliente.loyalty,
          promocionBancaria:
            body.cliente?.promocionBancaria ||
            checkoutProductsMockData.totales.cliente.promocionBancaria,
          razonSocial:
            body.cliente?.razonSocial ||
            checkoutProductsMockData.totales.cliente.razonSocial,
          tarjetaBonus:
            body.cliente?.tarjetaBonus ||
            checkoutProductsMockData.totales.cliente.tarjetaBonus,
        },
      },
    };
  }

  @Post('sales-report-by-store')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reporte de ventas totales por tienda' })
  @ApiBody({
    type: SalesReportByStoreRequestDto,
    examples: {
      default: {
        value: {
          canal: 'TOTTEM',
          fecha: '2025-12-17',
          ip: '192.168.114.154',
          proceso: 'reportes',
          tienda: 'T001',
          trazabilidad: '456',
        },
        description: 'Ejemplo de request para reporte de ventas por tienda',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Reporte de ventas totales generado exitosamente.',
    type: TotalReportResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  salesReportByStore(
    @Body() body: SalesReportByStoreRequestDto,
  ): TotalReportResponseDto {
    return buildTotalReport(body);
  }

  @Post('report-sales')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reporte de movimientos de ventas' })
  @ApiBody({
    type: ReportSalesRequestDto,
    examples: {
      default: {
        value: {
          canal: 'TOTTEM',
          fecha: '2025-12-17',
          ip: '192.168.145.125',
          proceso: 'reportes',
          tienda: 'T005',
          trazabilidad: '852',
        },
        description: 'Ejemplo de request para reporte de movimientos de ventas',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de movimientos de ventas generada exitosamente.',
    type: MovementReportResponseItemDto,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  reportSales(
    @Body() body: ReportSalesRequestDto,
  ): MovementReportResponseItemDto[] {
    return buildMovementReport(body);
  }

  @Get('health')
  @Public()
  @ApiOperation({ summary: 'Health check del servicio mock' })
  @ApiResponse({ status: 200, type: HealthResponseDto })
  health(): HealthResponseDto {
    return { ok: 'serv restaurnat' };
  }

  @Post('search-credit-note')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Buscar nota de crédito' })
  @ApiBody({
    type: SearchCreditNoteRequestDto,
    examples: {
      default: {
        value: {
          caja: 300,
          canal: 'TOTTEM',
          fecha: '2025-12-17',
          ip: '192.168.114.154',
          proceso: 'reportes',
          tienda: 'T001',
          transaccion: 4567,
          trazabilidad: '456',
        },
        description: 'Ejemplo de request para buscar nota de crédito',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Nota de crédito encontrada exitosamente.',
    type: SearchCreditNoteResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  searchCreditNote(
    @Body() body: SearchCreditNoteRequestDto,
  ): SearchCreditNoteResponseDto {
    return buildSearchCreditNote(body);
  }

  @Post('create-credit-note')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Crear nota de crédito' })
  @ApiBody({
    type: CreateCreditNoteRequestDto,
    examples: {
      default: {
        value: {
          caja: 300,
          canal: 'TOTTEM',
          fecha: '2025-12-17',
          ip: '192.168.114.154',
          motivo: 'ANULACIÓN',
          proceso: 'reportes',
          tienda: 'T001',
          transaccion: 4567,
          trazabilidad: '456',
        },
        description: 'Ejemplo de request para crear nota de crédito',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Nota de crédito creada exitosamente.',
    type: CreateCreditNoteResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  createCreditNote(
    @Body() body: CreateCreditNoteRequestDto,
  ): CreateCreditNoteResponseDto {
    return buildCreateCreditNote(body);
  }

  @Post('store-worlds')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener mundos y platos de una tienda' })
  @ApiBody({
    type: StoreWorldsRequestDto,
    examples: {
      default: {
        value: {
          store: 'T104',
          device: 'DEVICE001',
        },
        description: 'Ejemplo de request para obtener mundos y platos',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Mundos y platos obtenidos exitosamente.',
    type: StoreWorldsResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  storeWorlds(
    @Body() body: StoreWorldsRequestDto,
  ): StoreWorldsResponseDto {
    return {
      ...storeWorldsMockData,
      store: body.store,
      device: body.device,
    };
  }

  @Post('customer-benefit')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Consultar beneficios del cliente' })
  @ApiBody({
    type: CustomerBenefitRequestDto,
    examples: {
      default: {
        value: {
          store: 'T104',
          device: 'DEVICE001',
          documentType: 'DNI',
          document: '12345678',
          benefit: [
            {
              type: 'BONUS',
              code: '123456',
            },
          ],
        },
        description: 'Ejemplo de request para consultar beneficios',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Beneficios del cliente obtenidos exitosamente.',
    type: CustomerBenefitResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  customerBenefit(
    @Body() body: CustomerBenefitRequestDto,
  ): CustomerBenefitResponseDto {
    return {
      ...customerBenefitMockData,
      store: body.store,
      device: body.device,
    };
  }

  @Post('ruc')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Validar RUC' })
  @ApiBody({
    type: RucRequestDto,
    examples: {
      default: {
        value: {
          store: 'T104',
          device: 'DEVICE001',
          ruc: '20123456789',
          companyName: 'Empresa Ejemplo S.A.C.',
        },
        description: 'Ejemplo de request para validar RUC',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'RUC validado exitosamente.',
    type: RucResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  ruc(@Body() body: RucRequestDto): RucResponseDto {
    return {
      ...rucMockData,
      store: body.store,
      device: body.device,
      ruc: body.ruc,
      companyName: body.companyName,
    };
  }

  @Post('billing')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Procesar facturación' })
  @ApiBody({
    type: BillingRequestDto,
    examples: {
      default: {
        value: {
          store: 'T104',
          device: 'TOTEM.001',
          ipEpos: '10.166.218.228:8444',
          idCheckout: '2b7c2e12-7f47-4a62-9f3d-2f2a9b2c9b5f',
          paymentDatails: {
            card: '4556430000004333',
            operator: 'Visa',
            referenceNiubiz: '9999',
            approverCode: 'A12332',
          },
          callCustomer: {
            callingDisc: '232323223232323',
            phone: '997087272',
          },
          deliveryMethod: 1,
        },
        description: 'Ejemplo de request para facturación',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Facturación procesada exitosamente.',
    type: BillingResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  billing(@Body() body: BillingRequestDto): BillingResponseDto {
    return buildBillingResponse(body);
  }

  @Post('checkout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Procesar checkout de productos' })
  @ApiBody({
    type: CheckoutTotemRequestDto,
    examples: {
      default: {
        value: {
          store: 'T104',
          device: 'TOTEM.001',
          ipEpos: '10.166.218.228:8444',
          ipStationPrincipal: '192.168.1.11',
          products: [
            {
              ean: '7750243053020',
              quantity: '1',
              idSection: '2b7c2e12-7f47-4a62-9f3d-2f2a9b2c9b5f',
              idCategory: '9a6e8c54-57c0-4f9a-8ed6-0e6c4f0c6f1a',
              comments: 'No mezclar el arroz',
              tagPreferences: ['sin_cebolla'],
              cookingStation: 'estacion1',
              ipStation: '192.168.1.10',
            },
          ],
          customer: {
            bonusCard: '7027661000211092966',
            emailBonus: 'bonus@correo.com',
            documentType: 'dni',
            document: '45478547',
            ruc: '20552103816',
            companyName: 'Cencosud',
            benefit: {
              documentType: 0,
              document: '45478547',
              prime: false,
              collaborator: false,
              coupons: ['string'],
            },
            couponsInput: null,
            bankPromotion: [
              {
                id_mp: 1,
                BIN: '457562',
              },
            ],
          },
        },
        description: 'Ejemplo de request para checkout',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Checkout procesado exitosamente.',
    type: CheckoutTotemResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - API Key inválida o faltante',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid x-api-key',
        error: 'Unauthorized',
      },
    },
  })
  checkout(@Body() body: CheckoutTotemRequestDto): CheckoutTotemResponseDto {
    return buildCheckoutResponse(body);
  }
}
