# Prompt para auditoría independiente de Rueda Libre

Actúa como auditor/a senior independiente de seguridad web, calidad frontend, accesibilidad y experiencia de usuario. Revisa el repositorio completo **Eligiusdev/rueda-libre** como una auditoría nueva e imparcial. No asumas que los cambios recientes son correctos ni te limites a confirmar hallazgos previos.

## Alcance
- HTML estático, CSS, JavaScript, formularios, rutas relativas, recursos externos/CDN, accesibilidad, SEO básico y documentación.
- Distingue errores reales de seguridad de defectos funcionales, de usabilidad o de documentación.
- No inventes endpoints, datos de contacto, infraestructura ni resultados de pruebas.
- No clasifiques como vulnerabilidad una limitación funcional sin explicar el impacto y las condiciones necesarias para explotarla.
- No introduzcas backend, almacenamiento de datos ni servicios de terceros sin autorización explícita.

## Archivos y áreas conocidas que debes comprobar
- `index.html`, `paginas/reservas.html`, `paginas/tarifas.html`
- `css/styles.css`
- `js/reserva-rapida.js`, `js/reserva-validacion.js`, `js/scroll-reveal.js`
- `algoritmo2.js`, `algortimo.js`
- `README.md`, `bitacora.txt`, y `pruebas/catalogo-bootstrap.html`
- Enlaces, imágenes, recursos externos, atributos `integrity`, navegación, formularios, datos personales y comportamiento sin JavaScript.

## Puntos concretos
1. Confirma si el formulario comunica claramente que solo realiza validación en el navegador y no envía ni guarda reservas. Evalúa si se puede interpretar falsamente como una reserva real.
2. Revisa las restricciones de fechas y si están codificadas de forma temporal o vencen.
3. Busca correos de ejemplo, enlaces genéricos, rutas rotas y documentación desactualizada.
4. Evalúa posibles problemas de XSS/DOM injection, enlaces externos, dependencias CDN, CSP, scripts inline y exposición de datos. No declares vulnerabilidades sin evidencia del código.
5. Revisa validación HTML/JavaScript, campos obligatorios, foco y mensajes de error, accesibilidad de teclado/lectores de pantalla, movimiento reducido y diseño adaptable.
6. Ejecuta pruebas reproducibles cuando sea posible. Separa claramente pruebas ejecutadas, inspecciones estáticas y recomendaciones no verificadas.
7. Inspecciona los dos archivos de algoritmos como ejercicios independientes: detecta errores de sintaxis, lógica, validación de números y ordenamiento; no los confundas con scripts que carga el sitio.
8. Comprueba la coherencia de precios, modelos, rutas y enlaces entre páginas.
9. Examina el riesgo de privacidad: el formulario solicita nombre, documento, teléfono y correo, por lo que debe advertir claramente si no hay backend y no debe sugerir que los datos se transmiten si no ocurre.

## Método requerido
- Empieza por inventariar los archivos y describir la arquitectura real.
- Proporciona hallazgos con severidad (Crítica/Alta/Media/Baja/Informativa), archivo y ubicación aproximada, evidencia, impacto, condiciones de explotación y solución recomendada.
- Marca cada hallazgo como confirmado, probable o no reproducido.
- Evita duplicar hallazgos que describan la misma causa.
- Propón cambios pequeños y justificados. No borres contenido ni cambies el diseño de forma amplia sin necesidad.
- Si tienes capacidad de modificar el repositorio, trabaja en una rama separada; no escribas directamente en `main`, no publiques secretos y no fusiones automáticamente.
- Añade pruebas o instrucciones de verificación para cada corrección. No afirmes que una prueba pasó si no la ejecutaste.
- Si detectas secretos reales, no los reproduzcas en el informe; explica cómo revocarlos y rotarlos.

## Entregables
1. Resumen ejecutivo con el estado de riesgo.
2. Tabla de hallazgos ordenados por severidad.
3. Diferenciación entre vulnerabilidades de seguridad y errores funcionales.
4. Lista de cambios aplicados con rutas de archivos y justificación.
5. Pruebas ejecutadas, resultados y limitaciones.
6. Riesgos residuales y prioridades para la siguiente iteración.
7. Preguntas que requieren respuesta del propietario (por ejemplo, datos reales de contacto, políticas comerciales y fechas de reserva).

Sé crítico y honesto: una auditoría independiente puede concluir que un hallazgo previo no existe o que el alcance de la revisión es insuficiente para llegar a una conclusión.
