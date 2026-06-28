# ChileHub UX - User Flows

## Proposito

Este documento describe flujos pantalla por pantalla, decisiones, fallas, abandono y retorno. Los flujos deben mantener la promesa de ChileHub: el usuario siempre entiende que hacer despues.

## Convenciones

- Pantalla: vista o seccion principal.
- Decision: punto donde el usuario elige una ruta.
- Falla: resultado inesperado recuperable.
- Abandono: usuario sale antes de terminar.
- Retorno: usuario vuelve a un proceso iniciado.

## Flujo base - Buscar y abrir tramite

1. Pantalla: Landing o Home.
2. Usuario escribe una intencion en SearchBar.
3. Sistema muestra resultados sugeridos.
4. Decision: resultado exacto encontrado?

Si si:

5. Usuario abre tramite.
6. Sistema muestra vista de proceso con resumen, preparacion y siguiente accion fuera de ChileHub.

Si no:

5. Sistema muestra estado "No encontramos ese tramite".
6. Usuario puede reformular busqueda, explorar categorias o solicitar que se agregue.

Si falla busqueda:

5. Mostrar error claro.
6. Mantener texto escrito por el usuario.
7. Ofrecer reintentar.

Si abandona:

- V1: no se guarda estado.
- V3+: guardar ultima consulta si el usuario tiene cuenta y autorizacion.

Si vuelve:

- Mostrar busquedas recientes o proceso guardado cuando exista funcionalidad.

## Flujo - Renovar licencia

1. Pantalla: Resultado de busqueda.
2. Usuario selecciona "Renovar licencia".
3. Pantalla: Resumen del tramite.
4. Sistema muestra: descripcion, requisitos generales, tiempo/costo estimado, documentos, pasos.
5. Decision: usuario sabe su municipalidad?

Si si:

6. Mostrar informacion contextual cuando exista.

Si no:

6. Mostrar ruta general y explicar que algunos datos varian por municipalidad.

7. Pantalla: Documentos.
8. Usuario marca documentos listos.
9. Decision: falta documento obligatorio?

Si si:

10. Mostrar documento pendiente y como obtenerlo.

Si no:

10. Pantalla: Siguiente accion.
11. Mostrar "Listo para agendar o asistir".

Fallas:

- Documento vencido: mostrar estado bloqueante y accion para renovarlo.
- Municipalidad sin informacion: mostrar guia general y pedir confirmar en fuente oficial.
- Costo no verificado: mostrar "estimado" y fuente pendiente.

Abandono:

- Guardar preparacion en versiones con cuenta.
- Al volver, mostrar "Continuar renovacion de licencia".

## Flujo - Comprar vehiculo

1. Pantalla: Home.
2. Usuario busca "comprar auto usado".
3. Pantalla: Ruta de compra.
4. Sistema muestra etapas: antes de pagar, verificacion, transferencia, postcompra.
5. Decision: usuario ya eligio vehiculo?

Si no:

6. Mostrar checklist de evaluacion previa.

Si si:

6. Mostrar checklist de verificacion documental.

7. Pantalla: Riesgos.
8. Usuario revisa documentos criticos.
9. Decision: hay senal de riesgo?

Si si:

10. Mostrar alerta: "No sigas sin revisar esto".

Si no:

10. Pantalla: Transferencia.
11. Mostrar pasos para transferencia y costos estimados.

Fallas:

- No sabe datos del vehiculo: explicar donde encontrarlos.
- Costo no calculable: pedir datos faltantes o mostrar rango.
- Fuente no disponible: mostrar advertencia y no inventar informacion.

Abandono:

- Al volver, retomar en etapa mas avanzada marcada.

## Flujo - Abrir empresa

1. Pantalla: Search.
2. Usuario busca "abrir empresa".
3. Pantalla: Introduccion.
4. Sistema explica que hay decisiones legales/tributarias.
5. Decision: usuario sabe que tipo de formalizacion necesita?

Si si:

6. Mostrar ruta correspondiente.

Si no:

6. Mostrar comparacion simple y advertencia de asesoria profesional cuando corresponda.

7. Pantalla: Pasos.
8. Usuario revisa constitucion, inicio de actividades y obligaciones iniciales.
9. Decision: paso requiere informacion sensible?

Si si:

10. Explicar por que se necesita y no guardar sin consentimiento.

Si no:

10. Continuar checklist.

Fallas:

- Usuario no entiende figura legal: mostrar explicacion simple y no recomendar sin contexto.
- Datos insuficientes: mostrar decision pendiente.

Abandono:

- Guardar etapa si existe cuenta.

## Flujo - Sacar pasaporte

1. Pantalla: Search.
2. Usuario busca "pasaporte".
3. Pantalla: Tramite pasaporte.
4. Sistema muestra requisitos, costo, reserva y entrega.
5. Decision: usuario tiene fecha de viaje?

Si si:

6. Mostrar advertencia sobre plazos.

Si no:

6. Continuar ruta normal.

7. Pantalla: Documentos.
8. Usuario confirma cedula/documentos.
9. Pantalla: Oficina/canal.
10. Usuario revisa donde continuar.

Fallas:

- No hay horas disponibles: explicar que ChileHub no controla agenda y sugerir revisar fuente oficial.
- Costo no actualizado: mostrar fuente y fecha de revision.

Abandono:

- Retomar desde documentos o canal.

## Flujo - Estado vacio de busqueda

1. Usuario busca tramite.
2. Sistema no encuentra resultado.
3. Pantalla: Empty state.
4. Mostrar mensaje humano.
5. Ofrecer acciones:

- Revisar escritura.
- Buscar por categoria.
- Ver tramites populares.
- Sugerir tramite futuro.

No hacer:

- Culpar al usuario.
- Mostrar solo "0 resultados".
- Mostrar pantalla en blanco.

## Flujo - Error del servidor futuro

1. Usuario realiza accion.
2. Sistema falla.
3. Mantener datos ingresados.
4. Mostrar mensaje claro.
5. Ofrecer reintentar.
6. Si hay alternativa offline o guia estatica, mostrarla.

Principio:

El usuario nunca debe sentir que perdio el control.
