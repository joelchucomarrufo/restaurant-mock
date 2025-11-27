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

### Despliegue con Docker (HTTPS)

#### 1. Generar certificados SSL (self-signed para desarrollo)

Si no tienes certificados, puedes generarlos con `mkcert` o `openssl`:

**Opción A: Usando mkcert (recomendado para desarrollo local)**

```bash
# Instalar mkcert (si no lo tienes)
# Windows: choco install mkcert
# macOS: brew install mkcert
# Linux: ver https://github.com/FiloSottile/mkcert

# Crear carpeta certs
mkdir certs

# Generar certificado para localhost
mkcert -key-file certs/localhost+4-key.pem -cert-file certs/localhost+4.pem localhost 127.0.0.1 ::1
```

**Opción B: Usando OpenSSL**

```bash
# Crear carpeta certs
mkdir certs

# Generar certificado autofirmado
openssl req -x509 -newkey rsa:4096 -keyout certs/localhost+4-key.pem -out certs/localhost+4.pem -days 365 -nodes -subj "/CN=localhost"
```

#### 2. Construir y levantar el contenedor

```bash
docker compose up --build
```

La API quedará disponible en:

- `https://localhost` (puerto 443)
- Swagger UI: `https://localhost/api-docs`

> **Nota importante:** 
> - Los certificados **NO se suben a GitHub** (están en `.gitignore` por seguridad)
> - Si el certificado es autofirmado (self-signed), deberás confiar en él en tu navegador o en el dispositivo Android
> - Para Android, puedes instalar el certificado como "CA de usuario" en la configuración del dispositivo

### Endpoints adicionales

- `GET /api/version.json` - Obtener información de versión de la aplicación
- `GET /api/apks/:filename` - Descargar archivo APK (ejemplo: `/api/apks/myapp-v15.apk`)

### Archivos APK

Los archivos APK deben colocarse en la carpeta `public/apks/`:

```bash
# Ejemplo: colocar tu APK en la carpeta
cp mi-app.apk public/apks/myapp-v15.apk
```

**Para Railway:**

1. Los archivos APK deben estar en `public/apks/` en tu repositorio
2. Railway copiará automáticamente la carpeta `public` al desplegar
3. Una vez desplegado, los APKs estarán disponibles en:
   - `https://tu-app.railway.app/api/apks/myapp-v15.apk`
4. Actualiza la URL en `version.json` para que apunte a tu dominio de Railway:
   ```json
   {
     "apkUrl": "https://tu-app.railway.app/api/apks/myapp-v15.apk"
   }
   ```

**Nota:** Si no quieres subir los APKs a GitHub, descomenta la línea en `.gitignore`:
```
public/apks/*.apk
```
En ese caso, deberás subir los APKs manualmente a Railway usando su interfaz o CLI.

