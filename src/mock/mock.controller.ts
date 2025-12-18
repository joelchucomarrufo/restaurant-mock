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
import { StoresRequestDto, StoresResponseDto, TiendaDto } from './dto/stores.dto';
import { AppConfigRequestDto, AppConfigResponseDto, ConfigDto } from './dto/app-config.dto';
import {
  LoginUsernameRequestDto,
  LoginUsernameResponseDto,
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
import { buildTotalReport } from './builders/total-report.builder';
import { buildMovementReport } from './builders/movement-report.builder';

@ApiTags('Tottem Mock')
@Controller('queries')
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
  // Response DTOs
  StoresResponseDto,
  AppConfigResponseDto,
  LoginUsernameResponseDto,
  SectionsResponseDto,
  DetailSectionsResponseDto,
  LoyaltiResponseDto,
  CheckoutProductsResponseDto,
  TotalReportResponseDto,
  MovementReportResponseItemDto,
  HealthResponseDto,
  // Nested DTOs
  TiendaDto,
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
)
export class MockController {
  @Post('stores')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Consultar tiendas' })
  @ApiBody({
    type: StoresRequestDto,
    description: 'Body vacío o objeto vacío',
    required: false,
    examples: {
      empty: {
        value: {},
        description: 'Body vacío',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Listado de tiendas mockeado.',
    type: StoresResponseDto,
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
  consultarTiendas(
    @Body() _body: StoresRequestDto,
  ): StoresResponseDto {
    return storesMockData;
  }

  @Post('app-config')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Config app' })
  @ApiBody({
    type: AppConfigRequestDto,
    examples: {
      default: {
        value: {
          proceso: 'configuracionapp',
        },
        description: 'Ejemplo de request para config app',
      },
    },
  })
  @ApiResponse({
    status: 201,
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
  configApp(@Body() _body: AppConfigRequestDto): AppConfigResponseDto {
    return appConfigMockData;
  }

  @Post('login-username')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Login por username' })
  @ApiBody({
    type: LoginUsernameRequestDto,
    examples: {
      provider: {
        value: {
          proceso: 'login',
          canal: 'TOTTEM',
          username: 'provider',
          password: 'provider123',
        },
        description: 'Login como provider',
      },
      admin: {
        value: {
          proceso: 'login',
          canal: 'TOTTEM',
          username: 'admin',
          password: 'admin123',
        },
        description: 'Login como admin',
      },
    },
  })
  @ApiResponse({
    status: 201,
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
  @HttpCode(HttpStatus.CREATED)
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
    status: 201,
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
  @HttpCode(HttpStatus.CREATED)
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
    status: 201,
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
  @HttpCode(HttpStatus.CREATED)
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
    status: 201,
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
  @HttpCode(HttpStatus.CREATED)
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
    status: 201,
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
  checkout(
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
  @HttpCode(HttpStatus.CREATED)
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
    status: 201,
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
  @HttpCode(HttpStatus.CREATED)
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
    status: 201,
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
    return { ok: 'serv restaurant' };
  }
}
