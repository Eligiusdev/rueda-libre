# Rueda Libre

Sitio estático de demostración para un servicio de alquiler de bicicletas y recorridos guiados en Medellín.

## Estructura

- `index.html`: página de inicio y catálogo.
- `paginas/tarifas.html`: tarifas y recorridos.
- `paginas/reservas.html`: formulario de demostración.
- `css/styles.css`: estilos compartidos.
- `js/`: validación local, selección rápida desde enlaces y animaciones.
- `img/`: imágenes e ilustraciones.

## Ejecutar localmente

Abre la carpeta con un servidor estático local (por ejemplo, Live Server en VS Code) y visita `index.html`. Las rutas relativas están pensadas para servir el repositorio desde su raíz.

## Limitación importante: reservas

El formulario actual valida los campos en el navegador, pero **no envía ni persiste solicitudes**. El mensaje de confirmación es solo una demostración. No debe utilizarse para recibir datos personales reales hasta conectar un backend o un proveedor de formularios confiable, implementar validación del lado del servidor, controles contra abuso y una política de privacidad adecuada.

Los correos con dominio `.example` y algunos enlaces genéricos son marcadores de posición; reemplázalos por datos reales antes de publicar.

## Seguridad y publicación

- No almacenes contraseñas, tokens ni claves privadas en los archivos públicos.
- La validación del navegador mejora la experiencia, pero nunca sustituye la validación del servidor.
- Revisa versiones, integridad y disponibilidad de los recursos CDN antes de publicar.
- Verifica enlaces, formularios, accesibilidad y comportamiento móvil después de cada cambio.
