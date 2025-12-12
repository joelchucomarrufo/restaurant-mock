import { DetailSectionsResponseDto } from '../dto/detail-sections.dto';

export const detailSectionsMockData: DetailSectionsResponseDto = {
  proceso: 'detalleseccion',
  idSeccion: '001',
  seccion: 'vinos',
  canal: 'TOTTEM',
  tienda: 'H005',
  ip: '10.166.218.148:8444',
  trazabilidad: 'TOTTEM.1001',
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


