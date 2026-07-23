# RCO Living OS v1.1 — Operativa Mejorada

Versión consolidada para subir a GitHub y desplegar en el VPS con Nginx.

## Incluye
- Portada oficial y selector PT/ES/EN.
- Centro de divisiones y formularios para cliente registrado u ocasional.
- Login privado de demostración.
- Centro de Operaciones.
- RCO Core CRM con clientes, propiedades y recursos.
- Biblioteca multimedia piloto.
- Mejoras móviles, accesibilidad, metadatos, página 404, robots.txt y manifiesto web.

## Acceso de demostración
- Usuario: `administrador`
- Contraseña: `RCO2026`

## Importante
Esta versión es operativa como sitio estático, pero los datos se guardan en `localStorage` del navegador. Todavía no hay base de datos central ni autenticación segura de servidor. No cargar documentación sensible ni datos privados definitivos hasta conectar el backend.

## Despliegue estático con Nginx
Copiar todos los archivos al directorio web configurado y usar `index.html` como entrada. No requiere Node.js ni PM2 para servir esta versión estática.
