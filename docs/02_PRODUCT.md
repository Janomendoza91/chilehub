# ChileHub - Product Definition

## Rol del documento

Este documento describe la experiencia y el alcance del producto. Evita intencionalmente detalles de implementacion. La estructura tecnica pertenece a `05_ARCHITECTURE.md`; las reglas visuales pertenecen a `03_DESIGN_SYSTEM.md`.

## Descripcion general

ChileHub es un portal inteligente que transforma procesos importantes de la vida en Chile en experiencias informativas guiadas. La plataforma organiza requisitos, documentos, costos, tiempos, errores frecuentes, alternativas, oficinas y fuentes dentro de una interfaz visual limpia.

El producto debe sentirse como una herramienta premium para entender y preparar decisiones reales, no como un portal institucional ni como un ejecutor de tramites.

## Promesa del producto

ChileHub convierte un proceso confuso en una ruta clara de preparacion: que necesitas, que debes revisar, que documentos llevar, cuanto podria costar, cuanto podria demorar, que errores evitar y donde continuar.

ChileHub no hace el tramite. ChileHub ayuda a llegar preparado.

## Pantallas principales

### Landing

La landing presenta a ChileHub como el lugar donde las personas entienden procesos importantes de su vida en Chile. Debe incluir:

- Navbar con logo, menu y botones de accion.
- Hero con titulo principal, subtitulo y entrada por intenciones.
- Mockup de telefono como pieza visual central.
- Tarjetas laterales que muestran beneficios concretos del flujo.
- Vista previa del producto debajo del hero.
- Mockups mobile adicionales.
- Footer limpio con bloques informativos.

### Home

La home es la portada de conocimiento organizado del usuario. Debe incluir:

- Navegacion por intenciones de vida.
- Busqueda superior para encontrar procesos o preguntas.
- Cards de procesos populares.
- Cards de guias.
- Cards de calculadoras.
- Accesos a documentos requeridos, oficinas/canales, costos, errores frecuentes y alternativas.

### Vista de tramite

Pantalla futura donde el usuario entiende como prepararse para un proceso especifico. Debe incluir:

- Nombre del tramite.
- Estado de preparacion.
- Checklist de preparacion.
- Pasos informativos.
- Documentos requeridos.
- Costos estimados.
- Oficinas o canales disponibles.
- Proxima accion recomendada fuera de ChileHub.

### Documentos

Pantalla para entender y revisar documentos que el usuario podria necesitar llevar o consultar.

Debe incluir:

- Checklist de documentos.
- Estados: pendiente, listo, requerido, opcional.
- Descripcion clara de cada documento.
- Indicaciones sobre donde obtenerlo.

### Oficinas

Pantalla para encontrar puntos fisicos o canales donde continuar un proceso.

Debe incluir:

- Lista de oficinas.
- Distancia o comuna.
- Horarios.
- Requisitos previos.
- Accion recomendada antes de asistir.

### Calculadoras

Modulo para estimar costos o pasos asociados a procesos.

Ejemplos:

- Permiso de circulacion.
- Gastos notariales.
- Transferencia vehicular.
- Costos de constitucion.

## Modulos del producto

### Busqueda guiada

Entrada principal para que el usuario escriba el proceso, duda o situacion que necesita entender.

### Tramites

Biblioteca visual de procesos importantes estructurados.

### Guias

Contenido editorial accionable para procesos que requieren explicacion.

### Calculadoras

Herramientas simples para estimar costos, tiempos o requisitos.

### Documentos

Checklist informativo para preparar documentos.

### Progreso

Visualizacion del nivel de preparacion del usuario antes de continuar fuera de ChileHub.

### Oficinas

Apoyo para entender donde continuar pasos presenciales o digitales.

## Navegacion del usuario

Flujo esperado:

1. Usuario entra a ChileHub.
2. Busca un proceso, pregunta o situacion.
3. Selecciona una ruta recomendada.
4. Revisa requisitos, documentos, costos, tiempos y errores comunes.
5. Organiza su preparacion paso a paso.
6. Consulta calculos, oficinas o guias cuando corresponde.
7. Sale de ChileHub con un resumen claro para continuar en el canal correspondiente.

La navegacion debe priorizar comprension y preparacion, no exploracion infinita.

## Contrato UX principal

Cada pantalla principal debe responder:

- Que proceso estoy intentando entender?
- Que necesito saber antes de empezar?
- Que debo preparar?
- Que documentos o informacion necesito?
- Que errores o bloqueos debo evitar?
- Donde puedo continuar fuera de ChileHub?

Si una pantalla no puede responder estas preguntas, esta incompleta o esta fuera del modelo de producto de ChileHub.

## Experiencias clave

- Buscar un proceso sin conocer el nombre tecnico.
- Entender requisitos en lenguaje claro.
- Ver preparacion visual.
- Saber que documentos faltan.
- Calcular costos antes de avanzar.
- Encontrar donde continuar el proceso.
- Salir con una sensacion de claridad y preparacion.

## Funcionalidades V1

V1 debe enfocarse en frontend premium y experiencia visual:

- Landing completa.
- Home visual.
- Entrada por intenciones no funcional o con estado visual.
- Cards de procesos.
- Cards de guias.
- Cards de calculadoras.
- Mockups mobile.
- Sistema visual responsive.
- Componentes reutilizables.
- Documentacion del producto.

No incluye backend, autenticacion, APIs, base de datos ni IA.

Criterios de aceptacion V1:

- La imagen oficial puede usarse como objetivo de comparacion visual.
- El usuario entiende el producto sin leer documentacion.
- Ningun comportamiento backend se presenta como funcional si es solo visual.
- Los ejemplos visibles de procesos son claramente mock o estaticos hasta que exista gobierno de datos real.

## Funcionalidades V2

V2 debe convertir la interfaz en producto navegable:

- Rutas internas para tramites.
- Detalle de tramite.
- Estados interactivos de preparacion.
- Datos estructurados locales.
- Filtros por categoria.
- Busqueda frontend.
- Paginas de guias.
- Paginas de calculadoras basicas.

Criterios de aceptacion V2:

- Un usuario puede navegar desde landing/home a un detalle de proceso.
- Los datos estaticos siguen el modelo definido en `11_CONTENT_AND_DATA_GOVERNANCE.md`.
- Busqueda y filtros no implican cobertura oficial completa salvo que esa cobertura este definida.

## Funcionalidades V3

V3 debe introducir datos persistentes y personalizacion:

- Cuentas de usuario.
- Guardar procesos consultados.
- Guardar checklist de preparacion.
- Historial de procesos revisados.
- Recomendaciones segun perfil.
- Panel personal.
- Integracion con fuentes de datos confiables cuando sea necesario.

Criterios de aceptacion V3:

- La preparacion del usuario es persistente y comprensible.
- El manejo de datos sensibles sigue `13_SECURITY_PRIVACY.md`.
- Las cuentas aportan valor claro mas alla de guardar estado visual.

## Funcionalidades V4

V4 debe evolucionar hacia plataforma SaaS completa:

- Automatizacion de organizacion y recordatorios, no ejecucion oficial de tramites.
- Integraciones con instituciones o partners.
- Planes pagados.
- Flujos para empresas o gestores.
- Notificaciones.
- IA asistiva controlada por datos verificados.
- API interna para procesos.
- Dashboard administrativo.

Criterios de aceptacion V4:

- Las integraciones tienen propiedad de fuente documentada.
- El comportamiento de IA, si se introduce, esta basado en contenido verificado.
- La funcionalidad SaaS no diluye la claridad del producto para usuarios finales.
