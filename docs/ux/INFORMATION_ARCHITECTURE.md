# ChileHub UX - Arquitectura de informacion

## Proposito

Este documento redefine como deben organizarse Landing, Home, navegacion y Hero bajo el nuevo posicionamiento: ChileHub no hace tramites; ayuda a entender y preparar procesos importantes de la vida en Chile.

## Problema con una home basada solo en busqueda

Un buscador como puerta principal es insuficiente porque:

- Asume que el usuario sabe como se llama el proceso.
- Hace que ChileHub parezca Google, ChileAtiende o una wiki.
- Reduce la propuesta de valor a encontrar informacion.
- No comunica organizacion, confianza ni preparacion.
- Pierde usuarios que llegan con situaciones, no nombres tecnicos.

ChileHub debe permitir buscar, pero no debe parecer un buscador.

## Modelo mental correcto

El usuario no llega pensando:

- "Necesito consultar una base de datos de tramites."

El usuario llega pensando:

- "Voy a comprar un auto y no quiero equivocarme."
- "Tengo que renovar algo y no se que llevar."
- "Quiero abrir un negocio y no se por donde partir."
- "Voy a viajar y necesito entender requisitos."
- "Me pidieron un documento y no se como conseguirlo."

La arquitectura debe organizarse por intenciones humanas, no por instituciones.

## Nueva propuesta de valor visible

ChileHub debe comunicar:

"Entiende procesos importantes de tu vida en Chile antes de empezarlos."

Variantes aceptables:

- "Llega preparado a cualquier proceso importante."
- "Todo lo que necesitas revisar antes de avanzar."
- "Documentos, costos, tiempos, errores frecuentes y donde continuar."
- "Claridad para procesos importantes en Chile."

No usar como mensaje principal:

- "Completa cualquier tramite."
- "Haz tus tramites."
- "Gestiona tus tramites."
- "El asistente que hace tramites por ti."

## Landing recomendada

La landing debe funcionar como portada de producto, no como portal institucional.

Orden recomendado:

1. Navbar simple.
2. Hero con promesa de claridad.
3. Entrada por intencion.
4. Rutas por momentos de vida.
5. Vista previa de una guia estructurada.
6. Bloque de confianza: fuentes, fechas, estimaciones y limites.
7. Procesos populares.
8. Errores comunes que ChileHub ayuda a evitar.
9. Mockups mobile como demostracion de preparacion.
10. Footer.

## Hero recomendado

El hero debe responder en segundos:

- Que es ChileHub.
- Para que sirve.
- Que no hace.
- Como empiezo.

Estructura:

- Eyebrow: "Claridad para procesos importantes en Chile."
- Headline: "Entiende que necesitas antes de empezar."
- Subtitulo: "ChileHub organiza documentos, costos, tiempos, errores frecuentes y lugares donde continuar. No hacemos el tramite: te ayudamos a llegar preparado."
- Entrada: "Que proceso necesitas entender?"
- Accesos rapidos: Comprar auto, Renovar licencia, Abrir empresa, Sacar pasaporte.

El mockup del telefono debe mostrar preparacion, no ejecucion:

- Checklist de documentos.
- Costos estimados.
- Errores frecuentes.
- Donde continuar.
- Estado "Listo para ir" o "Preparacion lista".

## Home recomendada

La home debe ser una portada de conocimiento organizado.

Secciones principales:

### 1. Entrada por intencion

Permite escribir preguntas naturales:

- "Que necesito para renovar licencia?"
- "Que revisar antes de comprar un auto usado?"
- "Como abrir empresa en Chile?"

### 2. Momentos de vida

Categorias humanas:

- Comprar o vender vehiculo.
- Viajar.
- Emprender.
- Vivienda.
- Documentos personales.
- Municipalidad y permisos.
- Vivir en Chile siendo extranjero.

### 3. Procesos populares

Cards de procesos:

- Renovar licencia.
- Comprar auto usado.
- Vender auto.
- Abrir empresa.
- Sacar pasaporte.
- Permiso de circulacion.

### 4. Guias de preparacion

Guias editoriales accionables:

- Errores antes de comprar un auto.
- Documentos que suelen faltar.
- Como comparar costos.
- Que revisar si tu comuna cambia requisitos.

### 5. Herramientas

Calculadoras o checklists:

- Costo estimado.
- Checklist de documentos.
- Comparador de alternativas.

### 6. Confianza

Mostrar:

- Fecha de revision.
- Fuente.
- Estimado vs verificado.
- Limites del contenido.

## Navegacion recomendada

Navbar publica:

- Procesos.
- Guias.
- Herramientas.
- Como funciona.

Evitar:

- "Tramites" como unica categoria principal.
- Navegacion institucional.
- Sidebar administrativo en landing publica.

App/Home futura:

- Inicio.
- Procesos guardados.
- Checklists.
- Guias.
- Herramientas.

## Arquitectura de contenido

Entidad principal:

- Proceso.

Un proceso contiene:

- Resumen.
- Para quien aplica.
- Que necesitas.
- Documentos.
- Costos.
- Tiempos.
- Errores frecuentes.
- Variaciones por comuna/institucion.
- Donde continuar.
- Fuentes.
- Fecha de revision.
- Nivel de confianza.

Entidades secundarias:

- Guia.
- Checklist.
- Calculadora.
- Oficina/canal.
- Fuente.
- Advertencia.
- Pregunta frecuente.

## Reglas de contenido para IA y equipos

- Escribir para intenciones humanas.
- No ordenar por institucion salvo cuando ayude.
- Separar "informacion verificada" de "estimacion".
- Mostrar limites del producto.
- Evitar prometer ejecucion.
- Priorizar errores frecuentes y preparacion.

## Criterio de aprobacion

La arquitectura de informacion es correcta si un usuario entiende:

- Que ChileHub no hace tramites.
- Que ChileHub sirve antes de hacerlos.
- Que puede encontrar documentos, costos, tiempos, errores y donde continuar.
- Que la experiencia esta organizada por su situacion, no por burocracia.
