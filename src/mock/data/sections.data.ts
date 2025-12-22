import { SectionsResponseDto } from '../dto/sections.dto';

export const sectionsMockData: SectionsResponseDto = {
  proceso: 'secciones',
  canal: 'TOTTEM',
  tienda: 'T106',
  ip: '10.166.218.148:8444',
  trazabilidad: 'TOTTEM.1001',
  zonificacion: 'B',
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






