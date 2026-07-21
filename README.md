# RCO Living v0.2 – Portada + Centro de Recepción

Esta versión incorpora la portada corporativa oficial antes del sistema.

## Estructura
- `index.html`: portada de RCO Living con botón INGRESAR.
- `solicitud.html`: Centro de Recepción de Servicios.
- `styles.css`: estilos del sistema.
- `app.js`: funcionamiento del formulario.
- `portada-rco-living.png`: imagen visual de la portada aprobada.

## Flujo
`rcoliving.com`
→ Portada corporativa
→ botón INGRESAR
→ `solicitud.html`
→ selección del servicio
→ datos
→ fotografías
→ calendario mañana/tarde
→ prioridad
→ confirmación RCO-MT-10001

## QR individual por propiedad
Puede utilizar:
`https://rcoliving.com/?propiedad=PG-0048`

La portada conservará el código y lo enviará al formulario:
`solicitud.html?propiedad=PG-0048`

## Publicación
Suba todos los archivos al repositorio conectado con el dominio RCO Living.
`index.html` debe quedar en la raíz del repositorio.

## Estado actual
Es una versión funcional de demostración. Los datos aún se guardan solamente en el navegador.
La próxima etapa será la base de datos y el panel privado de recepción.
