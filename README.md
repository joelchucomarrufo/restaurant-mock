## Tottem Mock API (NestJS + TypeScript + Swagger + Docker)

API mock que replica las respuestas de la colección Postman proporcionada, construida con NestJS y desplegable en Docker.

### Requisitos

- Node.js 18+ (recomendado 20)
- npm
- Docker y Docker Compose (para despliegue en contenedor)

### Instalación

```bash
npm install
```

### Compilar y ejecutar en local

- **Compilar:**

```bash
npm run build
```

- **Ejecutar compilado:**

```bash
npm start
```

- **Ejecución en modo desarrollo (ts-node-dev):**

```bash
npm run start:dev
```

La API se expone por defecto en `http://localhost:3000`.

- Swagger UI: `http://localhost:3000/api-docs`

### Endpoints principales

Todos los endpoints usan prefijo `/api` (configurado en Nest), por lo que quedan así:

- `POST /api/queries/stores`
- `POST /api/queries/app-config`
- `POST /api/queries/login-username`
- `POST /api/queries/sections`
- `POST /api/queries/detail-sections`
- `POST /api/queries/loyalti`
- `POST /api/queries/checkout-products`

Todos requieren el header:

- `x-api-key: 5eSst?Yt@kkaX6S`

Los cuerpos y respuestas están mockeados según la colección Postman.

### Despliegue con Docker (local)

Para desarrollo local:

```bash
docker compose up --build
```

La API quedará disponible en:

- `http://localhost:3000`
- Swagger UI: `http://localhost:3000/api-docs`

### Despliegue en Ocean Digital

Ocean Digital maneja HTTPS automáticamente, por lo que no necesitas configurar certificados SSL.

#### Pasos para desplegar:

1. **Conecta tu repositorio de GitHub a Ocean Digital**
   - Ve a tu panel de Ocean Digital
   - Crea una nueva aplicación
   - Conecta tu repositorio: `https://github.com/joelchucomarrufo/restaurant-mock`

2. **Configuración del despliegue:**
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Puerto:** `3000` (o el que configure Ocean Digital)
   - **Variables de entorno:** No se requieren certificados SSL

3. **Una vez desplegado:**
   - Tu API estará disponible en HTTPS automáticamente
   - Ejemplo: `https://tu-app.ocean-digital.com/api`
   - Swagger UI: `https://tu-app.ocean-digital.com/api-docs`

