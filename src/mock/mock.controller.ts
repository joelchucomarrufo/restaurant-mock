import {
  Body,
  Controller,
  Headers,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

const VALID_API_KEY = '5eSst?Yt@kkaX6S';

function validateApiKey(headers: Record<string, string | string[] | undefined>) {
  const apiKey = headers['x-api-key'] ?? headers['X-API-Key'] ?? headers['x-api-Key'];
  const value = Array.isArray(apiKey) ? apiKey[0] : apiKey;
  if (value !== VALID_API_KEY) {
    throw new UnauthorizedException('Invalid x-api-key');
  }
}

@ApiTags('Tottem Mock')
@Controller('queries')
export class MockController {
  @Post('stores')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Consultar tiendas' })
  @ApiResponse({
    status: 201,
    description: 'Listado de tiendas mockeado.',
  })
  consultarTiendas(@Headers() headers: Record<string, any>, @Body() _body: any) {
    validateApiKey(headers);
    return {
      tiendas: [
        {
          tienda: 'T104',
          descripcion: 'T104 - Wong Benavides',
          ip: '10.166.218.228:8444',
          unidad: 'Wong',
          direccion: 'Direccion 123',
          zonas: ['A', 'B'],
          imagenes: [
            {
              id: 'cabecera',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXzL5ZXOdHlIGiEXpMRjLWa9Nr0EOpGisgBT+NU84Ze4=',
            },
            {
              id: 'principal',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMColS3F4UfjCxJnuo/TbhOSQfjt+m2M9YixDHmU1mMz8=',
            },
            {
              id: 'opcional',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMX/ltsprAVCplrvijlB+K4mZdmUJJ5nk+mVMzukJOVo4=',
            },
            {
              id: 'inactividad',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMkEfwlwchBw/gkLkOxn7KBH0VaKhMopf4FLXZXVfgP6o=',
            },
          ],
          flujoCupones: false,
        },
        {
          tienda: 'H005',
          descripcion: 'H005 - Hipermercado Metro San Miguel',
          ip: '10.166.218.228:8444',
          unidad: 'Metro',
          direccion: 'Direccion 123',
          zonas: ['A', 'B'],
          imagenes: [
            {
              id: 'cabecera',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMcd1bT0Y/wFgrFoUU7+P7FTCRfccfQP1qfwgEdshz/MA=',
            },
            {
              id: 'principal',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMvaofp4Ih460XHAS65ciwP7oi68Ui8/+YuENAmjcv9vA=',
            },
            {
              id: 'opcional',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMCVrGAYw6/iBhnVmu9atIqSvp0VJfhREdHRNR6XvSdi4=',
            },
            {
              id: 'inactividad',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMQY+twkrBaw+j/+BuiJPIurby20NzT6ifvUpQ/NIzJRY=',
            },
          ],
          flujoCupones: false,
        },
        {
          tienda: 'T106',
          descripcion: 'T106 - Wong Chacarilla',
          ip: '10.166.218.228:8444',
          unidad: 'Wong',
          direccion: 'Direccion 123',
          zonas: ['A', 'B', 'C'],
          imagenes: [
            {
              id: 'cabecera',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMyA2DyuA8DlTAIILYh2x67WehLyWStWT7aWyBOVSpCNE=',
            },
            {
              id: 'principal',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMevuJooB+AKhyD72E0KSx99z5kE5HZs+Pc8bCi+szx/o=',
            },
            {
              id: 'opcional',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMGmuVo7g5uZ0xzRbpD6rNA5fM+v3k/zk/k6T7RWPBAOA=',
            },
            {
              id: 'inactividad',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXR6nZUz6IYyaVT8oC5wjH2BrvvwwRdmgyI/lzu4qCFU=',
            },
          ],
          flujoCupones: false,
        },
        {
          tienda: 'H006',
          descripcion: 'H006 - Hipermercado Metro San Juan de Lurigancho',
          ip: '10.166.218.228:8444',
          unidad: 'Metro',
          direccion: 'Direccion 123',
          zonas: ['A', 'B'],
          imagenes: [
            {
              id: 'cabecera',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMqOu5V2ToW/SHTpaeDo4+W6/sSxlVgduq1XcAyNtafNs=',
            },
            {
              id: 'principal',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMpyAlfxmoIABTIcJQlZlXpDWIN6VmVCuCF9HDcX6N4KI=',
            },
            {
              id: 'opcional',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQM+POSE/tCZvFIsjQ6OCp5wOrANLndU3aZlpg6AwoNrrE=',
            },
            {
              id: 'inactividad',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMrSnCvTnn0a6/dq6OmcCRA9dicTAIZ3f6Y0BKje9CUko=',
            },
          ],
          flujoCupones: false,
        },
        {
          tienda: 'T115',
          descripcion: 'T115 - Wong Aldabas',
          ip: '10.160.179.5:8444',
          unidad: 'Wong',
          direccion: 'Direccion 123',
          zonas: [],
          imagenes: [
            {
              id: 'cabecera',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMlMgCx4AMVZOaxpUSWH+WZXQs6m8vvyQ01T3LJJgU7E8=',
            },
            {
              id: 'principal',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMjl0NRqUGQA5MW4jbb3Lhuv4CBavh6TpAqV4i2cCc/rE=',
            },
            {
              id: 'opcional',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMXWzvR78Ah7SjmoLYFIxxZXzjsUS23fHvStHSCKeD60c=',
            },
            {
              id: 'inactividad',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMQIDeS6auvVTkXzzPq1LyowrHYjYfzc8l3RFZ2DsR4xU=',
            },
          ],
          flujoCupones: false,
        },
        {
          tienda: 'I101',
          descripcion: 'I101 - Evento eCommerce',
          ip: '10.166.218.228:8444',
          unidad: 'Expovino',
          direccion: 'Direccion 123',
          zonas: ['A', 'B'],
          imagenes: [
            {
              id: 'cabecera',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMRdL/jt+dP/gSDEuONvY3t/SYSachCzc2+3UnVgLZ3ek=',
            },
            {
              id: 'principal',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQM3BW6iwUbGMuwHZDe6/Tz4Qy0CoD+2d7P+JzKbjVSowg=',
            },
            {
              id: 'opcional',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQMutcyR50UvxwnRBceVre0dcDqqmx+1KXD7imXA3RX3ew=',
            },
            {
              id: 'inactividad',
              url: 'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFI8Jzx9r1VhNEXE/1pHrQM+8gDgDeYS13zgGBlCLKbYMy/Gfg+o+QV17IoDIm2OF0=',
            },
          ],
          flujoCupones: false,
        },
      ],
    };
  }

  @Post('app-config')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Config app' })
  @ApiBody({
    schema: {
      example: {
        proceso: 'configuracionapp',
      },
    },
  })
  @ApiResponse({ status: 201 })
  configApp(@Headers() headers: Record<string, any>, @Body() _body: any) {
    validateApiKey(headers);
    return {
      proceso: 'configuracionapp',
      config: {
        id: 1,
        appHash: 'DDw3qqYLUBMq/AKNKB6CqISTLQBu0VpozkN5hy+grx0=',
      },
    };
  }

  @Post('login-username')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Login por username' })
  @ApiBody({
    schema: {
      example: {
        proceso: 'login',
        canal: 'TOTTEM',
        username: 'provider',
        password: 'provider123',
      },
    },
  })
  @ApiResponse({ status: 201 })
  loginUsername(@Headers() headers: Record<string, any>, @Body() _body: any) {
    validateApiKey(headers);
    return {
      proceso: 'login',
      canal: 'TOTTEM',
      statusCode: 200,
      message: 'Login exitoso.',
      user: {
        id: 6,
        username: 'provider',
        role: 'MAINTAINER',
        provider: {
          id: 1,
          name: 'vinos',
        },
      },
    };
  }

  @Post('sections')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Consultar secciones' })
  @ApiBody({
    schema: {
      example: {
        proceso: 'secciones',
        canal: 'TOTTEM',
        tienda: 'T106',
        zonificacion: 'B',
        ip: '10.166.218.148:8444',
        trazabilidad: 'TOTTEM.1001',
      },
    },
  })
  @ApiResponse({ status: 201 })
  consultarSecciones(@Headers() headers: Record<string, any>, @Body() body: any) {
    validateApiKey(headers);
    return {
      proceso: 'secciones',
      canal: 'TOTTEM',
      tienda: body?.tienda ?? 'T106',
      ip: body?.ip ?? '10.166.218.148:8444',
      trazabilidad: body?.trazabilidad ?? 'TOTTEM.1001',
      zonificacion: body?.zonificacion ?? 'B',
      secciones: [
        {
          id: '002',
          seccion: 'copas',
          imagen:
            'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFSGYWQFo+JPuddSxqVGA9RakMg6el6zES4ndU+O5fsFw==',
          orden: 1,
        },
        {
          id: '003',
          seccion: 'cubiertos',
          imagen:
            'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFSGYWQFo+JPuddSxqVGA9RvqvyIeGulH9cCG8oV6AFUZmqQArgbjQzQs4Du4VPr84=',
          orden: 2,
        },
        {
          id: '001',
          seccion: 'vinos',
          imagen:
            'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MFSGYWQFo+JPuddSxqVGA9RzOGgjon4z4+Y6AyBIq6LFQ==',
          orden: 4,
        },
      ],
    };
  }

  @Post('detail-sections')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Consultar detalle de sección' })
  @ApiBody({
    schema: {
      example: {
        proceso: 'detalleseccion',
        idSeccion: '001',
        seccion: 'vinos',
        canal: 'TOTTEM',
        tienda: 'H005',
        ip: '10.166.218.148:8444',
        trazabilidad: 'TOTTEM.1001',
      },
    },
  })
  @ApiResponse({ status: 201 })
  consultarDetalleSeccion(@Headers() headers: Record<string, any>, @Body() body: any) {
    validateApiKey(headers);
    return {
      proceso: 'detalleseccion',
      idSeccion: body?.idSeccion ?? '001',
      seccion: body?.seccion ?? 'vinos',
      canal: 'TOTTEM',
      tienda: body?.tienda ?? 'H005',
      ip: body?.ip ?? '10.166.218.148:8444',
      trazabilidad: body?.trazabilidad ?? 'TOTTEM.1001',
      categorias: [
        {
          categoria_id: 1,
          descripcion: 'Vinos tintos',
          imagenCategoria:
            'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MG/ckpVV/O5huO5Q2bmG2T6CNAvnRxn4Kep5iCFFBDJ1g==',
        },
        {
          categoria_id: 2,
          descripcion: 'Vinos blancos',
          imagenCategoria:
            'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MG/ckpVV/O5huO5Q2bmG2T6sN2Rad+OgO1aQoFp1neE8g==',
        },
      ],
      productos: [
        {
          ean: '7755211000020',
          descripcion: 'CERV PACI PK6BT300',
          unidadMedida: 'UND',
          precioUnitario: 8.5,
          stock: 67,
          imagen:
            'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MHbhF0Ygiq+zWxCV7xkvx4BPkkquDJp2zRsRb9T1CIzO5wukTwJ9N1P1YirP5x7DgQ=',
          mayoriaDeEdad: true,
          restriccionhoraria: true,
          rangoHorario: '23:00 - 06:00',
          vtexRefId: null,
          vtexProductId: null,
          categoriaId: 1,
          productoIdTurnera: 0,
        },
        {
          ean: '7755211000044',
          descripcion: 'CER LALOUHO P4L269',
          unidadMedida: 'UND',
          precioUnitario: 8.5,
          stock: 318,
          imagen:
            'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MHbhF0Ygiq+zWxCV7xkvx4BPkkquDJp2zRsRb9T1CIzO0+O4l+SnH0fqecDIvTzt04=',
          mayoriaDeEdad: true,
          restriccionhoraria: true,
          rangoHorario: '23:00 - 06:00',
          vtexRefId: null,
          vtexProductId: null,
          categoriaId: 2,
          productoIdTurnera: 0,
        },
        {
          ean: '7755211000013',
          descripcion: 'CERV PACIFI BOT300',
          unidadMedida: 'UND',
          precioUnitario: 8.5,
          stock: 78,
          imagen:
            'SCeDSL6SDqVway6G8wpwm+anpHo7pNbx7be3meX87MHbhF0Ygiq+zWxCV7xkvx4BPkkquDJp2zRsRb9T1CIzO0n3qBa8oB4TMLl/9KeofcI=',
          mayoriaDeEdad: true,
          restriccionhoraria: true,
          rangoHorario: '23:00 - 06:00',
          vtexRefId: null,
          vtexProductId: null,
          categoriaId: 2,
          productoIdTurnera: 0,
        },
      ],
    };
  }

  @Post('loyalti')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Consultar bonus (loyalty)' })
  @ApiBody({
    schema: {
      example: {
        proceso: 'identificacionbonus',
        canal: 'TOTTEM',
        tienda: 'T104',
        ip: '10.166.218.148:8444',
        trazabilidad: 'TOTTEM.1001',
        tipoDocumentoBonus: 'dni',
        numeroDocumentoBonus: '45478547',
      },
    },
  })
  @ApiResponse({ status: 201 })
  consultarBonus(@Headers() headers: Record<string, any>, @Body() body: any) {
    validateApiKey(headers);
    return {
      proceso: 'identificacionbonus',
      canal: 'TOTTEM',
      trazabilidad: body?.trazabilidad ?? 'TOTTEM.1001',
      tipoDocumentoBonus: body?.tipoDocumentoBonus ?? 'dni',
      numeroDocumentoBonus: body?.numeroDocumentoBonus ?? '45478547',
      tienda: body?.tienda ?? 'T104',
      ip: body?.ip ?? '10.166.218.148:8444',
      mensajeBonus:
        'Hola NOMBRE-1 PRUEBA NOMBRE-2 PRUEBA, tienes 4478 puntos.',
      tarjetaBonus: '7027661000601779651',
      correoBonus: null,
      prime: false,
      colaborator: true,
    };
  }

  @Post('checkout-products')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Checkout de productos' })
  @ApiBody({
    schema: {
      example: {
        proceso: 'checkout',
        canal: 'TOTTEM',
        tienda: 'T104',
        trazabilidad: 'TOTTEM.7102',
        ip: '10.166.218.228:8444',
        cliente: {
          correoBonus: 'GLORIA_702@HOTMAIL.COM',
          loyalty: {
            numeroDocumento: '41254288',
            tipoDocumento: 1,
          },
          tarjetaBonus: '7027661000027531363',
        },
        productos: [
          {
            cantidad: 4,
            ean: '7757419000086',
            idSeccion: '003',
            seccion: 'Cubiertos',
          },
        ],
      },
    },
  })
  @ApiResponse({ status: 201 })
  checkout(@Headers() headers: Record<string, any>, @Body() body: any) {
    validateApiKey(headers);
    return {
      proceso: 'checkout',
      canal: 'TOTTEM',
      tienda: body?.tienda ?? 'T104',
      trazabilidad: body?.trazabilidad ?? 'TOTTEM.7102',
      idLista: 'fc2ee037-cf46-424c-afc2-1235462d50ef',
      productos: [
        {
          ean: '7757419000086',
          cantidad: 4,
          existencia: 1,
          idSeccion: '003',
          seccion: 'Cubiertos',
          precioUnitario: 7.2,
          description: 'ENROLLADO- LECHON   ',
          descuentos: [
            {
              medioDePago: 'Todos',
              descuento: -8.64,
              precioUnitario: 5.04,
            },
          ],
        },
        {
          ean: '7757419000024',
          cantidad: 5,
          existencia: 1,
          idSeccion: '003',
          seccion: 'Cubiertos',
          precioUnitario: 7.2,
          description: 'ENRO PAN ARA/VEGE   ',
          descuentos: [
            {
              medioDePago: 'Todos',
              descuento: -10.8,
              precioUnitario: 5.04,
            },
          ],
        },
        {
          ean: '8714793764927',
          cantidad: 1,
          existencia: 1,
          idSeccion: '005',
          seccion: 'tienda',
          precioUnitario: 44,
          description: 'COPAS VINO BLANCO   ',
          descuentos: [],
        },
        {
          ean: '6943949903725',
          cantidad: 1,
          existencia: 1,
          idSeccion: '005',
          seccion: 'tienda',
          precioUnitario: 44.9,
          description: 'JGO 6COPA V.BLANCO  ',
          descuentos: [],
        },
        {
          ean: '2050004268584',
          cantidad: 1,
          existencia: 1,
          idSeccion: '005',
          seccion: 'tienda',
          precioUnitario: 4.99,
          description: 'ACEITUNA POTE 205g  ',
          descuentos: [
            {
              medioDePago: 'Todos',
              descuento: -1.5,
              precioUnitario: 3.49,
            },
          ],
        },
        {
          ean: '7750243067997',
          cantidad: 1,
          existencia: 1,
          idSeccion: '005',
          seccion: 'tienda',
          precioUnitario: 50,
          description: 'ACEITE PRIMOR PREM  ',
          descuentos: [
            {
              medioDePago: 'Todos',
              descuento: -15,
              precioUnitario: 35,
            },
          ],
        },
        {
          ean: '2050044136980',
          cantidad: 1,
          existencia: 1,
          idSeccion: '005',
          seccion: 'tienda',
          precioUnitario: 0.2,
          description: 'BOLSA COM METRO     ',
          descuentos: [],
        },
      ],
      totales: {
        subtotal: 208.89,
        totalDescuentos: [
          {
            medioDePago: 'Todos',
            descuentoTotal: -35.94,
          },
        ],
        totalPagar: [
          {
            MedioDePago: 'Todos',
            monto: 172.95,
          },
        ],
        cliente: {
          correoBonus: body?.cliente?.correoBonus ?? 'GLORIA_702@HOTMAIL.COM',
          loyalty: body?.cliente?.loyalty ?? {
            numeroDocumento: '41254288',
            tipoDocumento: 1,
          },
          numeroDocumento: null,
          promocionBancaria: body?.cliente?.promocionBancaria ?? [
            {
              BIN: null,
              id_mp: 10,
            },
          ],
          razonSocial: body?.cliente?.razonSocial ?? 'SIN NOMBRE',
          ruc: null,
          tarjetaBonus:
            body?.cliente?.tarjetaBonus ?? '7027661000027531363',
          tipoDocumento: null,
        },
      },
    };
  }
}


