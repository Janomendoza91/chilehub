# ChileHub UX - Edge Cases

## Proposito

Este documento lista casos extremos que deben considerarse antes de aprobar pantallas o flujos. Un producto simple no ignora casos dificiles; los reduce a estados claros y recuperables.

## Principios

- No culpar al usuario.
- No mostrar pantallas muertas.
- No perder informacion ingresada si se puede evitar.
- Explicar que paso y que puede hacer ahora.
- No inventar informacion cuando falte una fuente.
- Mantener tono calmo.

## Busqueda sin resultados

Situacion:

El usuario busca un tramite que ChileHub no tiene.

Respuesta UX:

- Mostrar que no se encontro resultado.
- Sugerir reformular busqueda.
- Mostrar categorias o tramites populares.
- Permitir sugerir el tramite.

Copy recomendado:

"No encontramos ese tramite todavia. Prueba con otro nombre o revisa estas opciones."

## Tramite inexistente o fuera de alcance

Situacion:

El usuario busca algo que no corresponde a ChileHub o no es accionable.

Respuesta UX:

- Explicar con claridad.
- Ofrecer alternativa relacionada si existe.
- No forzar resultados irrelevantes.

Copy recomendado:

"Ese proceso no esta disponible en ChileHub por ahora. Podemos ayudarte con tramites relacionados."

## Informacion no verificada

Situacion:

Existe contenido parcial, pero no ha sido verificado.

Respuesta UX:

- Mostrar advertencia visible.
- Marcar datos como estimados o pendientes de verificacion.
- Enlazar fuente si existe.

Copy recomendado:

"Esta informacion esta en revision. Antes de avanzar, confirma el dato en la fuente oficial."

## Documento vencido

Situacion:

El usuario marca o sube un documento que ya no sirve.

Respuesta UX:

- Mostrar estado bloqueante.
- Explicar por que bloquea.
- Mostrar como renovar u obtener documento valido.

Copy recomendado:

"Este documento parece vencido. Necesitas uno vigente para continuar."

## Documento faltante

Situacion:

Falta un documento obligatorio.

Respuesta UX:

- Mostrar documento como requerido.
- No permitir estado "listo" si bloquea el tramite.
- Mostrar donde obtenerlo.

Copy recomendado:

"Falta este documento para avanzar. Te mostramos como conseguirlo."

## Error del servidor

Situacion:

Una accion futura depende de backend y falla.

Respuesta UX:

- Mantener datos ingresados.
- Mostrar reintentar.
- Evitar mensajes tecnicos.
- Registrar error tecnicamente sin exponerlo al usuario.

Copy recomendado:

"No pudimos actualizar la informacion. Tus datos siguen aqui. Intenta nuevamente."

## Conexion lenta

Situacion:

La app carga lento o una accion demora.

Respuesta UX:

- Mostrar skeleton o loading claro.
- No bloquear toda la pantalla si no es necesario.
- Mostrar estado de carga cuando la espera sea larga.

Copy recomendado:

"Cargando informacion del tramite..."

## Modo offline futuro

Situacion:

El usuario pierde conexion.

Respuesta UX:

- Mostrar estado offline.
- Permitir leer contenido ya cargado si es posible.
- Bloquear acciones que requieren servidor.

Copy recomendado:

"Sin conexion. Puedes revisar lo cargado, pero algunas acciones no estaran disponibles."

## Usuario abandona proceso

Situacion:

El usuario sale antes de terminar.

Respuesta UX:

- V1: no prometer guardado.
- V3+: guardar preparacion si esta autenticado y consentido.
- Al volver, mostrar continuar.

Copy recomendado:

"Puedes retomar desde donde quedaste."

## Usuario vuelve despues de mucho tiempo

Situacion:

El contenido pudo cambiar.

Respuesta UX:

- Mostrar alerta si la informacion esta desactualizada o requiere revision.
- No asumir que la preparacion sigue siendo valida.

Copy recomendado:

"Este tramite pudo cambiar desde tu ultima visita. Revisemos los requisitos antes de continuar."

## Datos sensibles solicitados

Situacion:

El flujo futuro pide RUT, direccion, documentos o datos privados.

Respuesta UX:

- Explicar por que se pide.
- Minimizar campos.
- No pedir datos antes de que aporten valor.

Copy recomendado:

"Usaremos este dato solo para mostrarte pasos mas precisos."

## Caso que requiere asesoria profesional

Situacion:

El proceso depende de decisiones legales, tributarias o financieras.

Respuesta UX:

- Orientar sin prometer certeza.
- Recomendar validar con profesional o fuente oficial.

Copy recomendado:

"Esta decision puede depender de tu caso. ChileHub puede orientarte, pero conviene validarlo con un profesional."

## Agenda externa no disponible

Situacion:

ChileHub muestra una oficina o canal, pero la agenda oficial no esta disponible.

Respuesta UX:

- Explicar que depende de la institucion.
- Mantener checklist util.
- Mostrar link/canal cuando exista.

Copy recomendado:

"La disponibilidad depende de la institucion. Te dejamos listo lo que necesitas antes de agendar."
