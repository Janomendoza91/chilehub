# ChileHub - Component Inventory

## Rol del documento

Este documento define componentes reutilizables y sus responsabilidades. No es un archivo de implementacion y no debe forzar props prematuras. Las props listadas son expectativas futuras de interfaz, no codigo obligatorio de V1.

## Reglas de propiedad de componentes

- Los primitivos UI no deben conocer contenido de negocio de ChileHub.
- Los componentes de producto pueden conocer conceptos como tramite, guia o calculadora.
- Los componentes de seccion componen componentes de producto, pero no deben contener datasets estaticos grandes.
- Los componentes mockup son herramientas de comunicacion visual, no apps mobile funcionales.

## Navbar

Descripcion: barra superior principal del sitio.

Responsabilidad:

- Mostrar logo.
- Mostrar navegacion principal.
- Mostrar acciones de acceso e inicio.

Props futuras:

- `items`
- `primaryAction`
- `secondaryAction`
- `isAuthenticated`

Estados:

- Default.
- Sticky/scrolled.
- Mobile collapsed.

Responsive:

- Menu visible en desktop.
- Menu reducido o oculto en mobile.

Variantes:

- Landing.
- App authenticated.

## Logo

Descripcion: identidad visual de ChileHub.

Responsabilidad:

- Dar reconocimiento inmediato de marca.
- Linkear al inicio.

Props futuras:

- `size`
- `showText`
- `href`

Estados:

- Default.
- Compact.

Responsive:

- Puede ocultar texto en espacios reducidos.

## Sidebar

Descripcion: navegacion lateral del home/app.

Responsabilidad:

- Organizar modulos principales.
- Mostrar item activo.

Props futuras:

- `items`
- `activeItem`
- `collapsed`

Estados:

- Active.
- Hover.
- Collapsed.

Responsive:

- Visible en desktop.
- Oculta o reemplazada por navegacion inferior/mobile en pantallas pequenas.

## SearchBar

Descripcion: entrada principal para buscar tramites o procesos.

Responsabilidad:

- Recibir intencion del usuario.
- Ser el punto de partida del producto.

Props futuras:

- `value`
- `placeholder`
- `onChange`
- `onSubmit`
- `variant`
- `suggestions`

Estados:

- Empty.
- Focused.
- Loading.
- With suggestions.
- Error.
- Disabled.

Responsive:

- Grande en hero.
- Compacta en home.

Variantes:

- Hero.
- Compact.
- App.

## PrimaryButton

Descripcion: boton para accion principal.

Responsabilidad:

- Ejecutar acciones prioritarias.

Props futuras:

- `children`
- `icon`
- `loading`
- `disabled`
- `href`

Estados:

- Default.
- Hover.
- Active.
- Disabled.
- Loading.

Responsive:

- Debe mantener texto legible sin overflow.

## SecondaryButton

Descripcion: boton para acciones secundarias.

Responsabilidad:

- Permitir acciones de menor prioridad sin competir con CTA principal.

Props futuras:

- `children`
- `icon`
- `variant`

Estados:

- Default.
- Hover.
- Disabled.

## HeroSection

Descripcion: primera seccion de landing.

Responsabilidad:

- Comunicar la promesa de ChileHub.
- Presentar busqueda y producto visual.

Props futuras:

- `title`
- `subtitle`
- `searchPlaceholder`
- `sideCards`
- `phoneMockup`

Estados:

- Default.
- Loading visual assets.

Responsive:

- Texto centrado.
- Tarjetas laterales ocultas o reubicadas en mobile.
- Mockup mantiene proporcion.

## FloatingStatusCard

Descripcion: tarjeta flotante lateral en el hero.

Responsabilidad:

- Mostrar beneficios o estados concretos del flujo.

Props futuras:

- `icon`
- `eyebrow`
- `title`
- `description`

Estados:

- Default.
- Hover subtle.

Responsive:

- Visible en desktop.
- Oculta o apilada en mobile si la imagen oficial lo requiere.

## PhoneMockup

Descripcion: marco reutilizable para pantallas mobile.

Responsabilidad:

- Presentar experiencias internas del producto.

Props futuras:

- `children`
- `size`
- `variant`

Estados:

- Default.

Responsive:

- Escala sin deformarse.
- Mantiene aspect ratio.

Variantes:

- Hero phone.
- Small mockup.

## PreparationCard

Descripcion: componente que muestra nivel de preparacion para un proceso.

Responsabilidad:

- Comunicar que tan preparado esta el usuario antes de continuar fuera de ChileHub.

Props futuras:

- `readiness`
- `title`
- `steps`
- `currentPreparationStep`

Estados:

- Empty.
- In preparation.
- Ready.

## ProcedureCard

Descripcion: card de proceso popular o recomendado.

Responsabilidad:

- Resumir un proceso importante.
- Permitir abrir una guia estructurada.

Props futuras:

- `title`
- `description`
- `institution`
- `status`
- `icon`
- `href`

Estados:

- Default.
- Hover.
- Featured.
- Disabled/unavailable.

Responsive:

- Grilla desktop.
- Una columna en mobile.

## GuideCard

Descripcion: card para guia editorial accionable.

Responsabilidad:

- Mostrar una guia con tiempo estimado y categoria.

Props futuras:

- `title`
- `label`
- `readingTime`
- `icon`
- `href`

Estados:

- Default.
- Hover.

## CalculatorCard

Descripcion: card para herramienta de calculo.

Responsabilidad:

- Mostrar una estimacion o acceso a calculadora.

Props futuras:

- `title`
- `value`
- `caption`
- `icon`
- `href`

Estados:

- Default.
- Hover.
- Calculating.

## CategoryCard

Descripcion: card futura para agrupar tramites por categoria.

Responsabilidad:

- Ayudar a explorar procesos por tema.

Props futuras:

- `name`
- `description`
- `icon`
- `count`

Estados:

- Default.
- Hover.
- Active.

## DocumentCard

Descripcion: item de documento requerido.

Responsabilidad:

- Mostrar documento, estado y forma de obtenerlo.

Props futuras:

- `title`
- `description`
- `required`
- `status`
- `source`

Estados:

- Pending.
- Ready.
- Required.
- Optional.

## OfficeCard

Descripcion: item de oficina o punto de atencion.

Responsabilidad:

- Mostrar lugar donde continuar un proceso.

Props futuras:

- `name`
- `address`
- `distance`
- `hours`
- `availability`

Estados:

- Open.
- Closed.
- Recommended.

## EmptyState

Descripcion: estado cuando no hay resultados, documentos o tramites disponibles.

Responsabilidad:

- Explicar que ocurrio.
- Dar una accion de recuperacion.

Props futuras:

- `title`
- `description`
- `action`
- `icon`

Estados:

- No results.
- Not available.
- Coming soon.

Responsive:

- Debe mantener lectura clara en mobile.

## StatusBadge

Descripcion: etiqueta de estado para tramites, documentos o pasos.

Responsabilidad:

- Comunicar estado de forma compacta.
- No depender solo del color.

Props futuras:

- `status`
- `label`
- `icon`

Estados:

- Required.
- Optional.
- Ready.
- Pending.
- Blocked.
- Estimated.

Variantes:

- Neutral.
- Success.
- Warning.
- Error.
- Info.

## Footer

Descripcion: cierre informativo del sitio.

Responsabilidad:

- Reforzar confianza.
- Organizar bloques de informacion.

Props futuras:

- `sections`
- `brandDescription`
- `links`

Estados:

- Default.

Responsive:

- Columnas en desktop.
- Bloques apilados en mobile.
