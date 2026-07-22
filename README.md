# RCO Living OS v0.8 — Acceso Privado

## Nueva función
El Centro de Operaciones ahora tiene una puerta de acceso separada del sitio público.

### Acceso de prueba
- Usuario: `administrador`
- Contraseña: `RCO2026`

### Flujo
Sitio público → botón circular R → login privado → Centro de Operaciones → cerrar sesión.

## Incluye
- Pantalla corporativa de acceso.
- Sesión temporal durante la navegación.
- Bloqueo de acceso directo a `control.html`.
- Identificación del administrador.
- Botón para cerrar sesión.
- Conserva todas las funciones de la v0.7.

## Importante
Esta es una protección de demostración ejecutada en el navegador. No debe considerarse seguridad real porque el usuario y la contraseña forman parte de los archivos públicos de GitHub Pages.

Para operar con clientes reales será necesario:
- autenticación en servidor;
- contraseñas cifradas;
- permisos por usuario;
- base de datos real;
- registro de accesos;
- recuperación segura de contraseña.
