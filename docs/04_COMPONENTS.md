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

## SearchResults

Descripcion: listado interactivo de resultados locales para tramites y guias.

Responsabilidad:

- Filtrar contenido local disponible.
- Mostrar resultados navegables.
- Evitar sugerir cobertura oficial completa.

Estados:

- Sin busqueda.
- Con resultados.
- Sin resultados.

## ProductShell

Descripcion: layout base para paginas internas del producto.

Responsabilidad:

- Componer Header, contenido principal y Footer.
- Mantener espaciado compatible con el header absoluto.
- Reutilizar la estructura premium de paginas navegables.

## ReferenceNotice

Descripcion: aviso visible de informacion referencial.

Responsabilidad:

- Aclarar que ChileHub no realiza tramites.
- Aclarar que ChileHub no genera cobros.
- Reforzar que la plataforma es gratuita y que los tramites continuan fuera del sitio.

## CalculatorPanel

Descripcion: modulo interactivo de calculadoras referenciales.

Responsabilidad:

- Permitir estimaciones simples.
- Separar claramente resultado referencial de valores oficiales.
- Mantener la interaccion client-side sin backend.

## AccountAccessPanel

Descripcion: panel para entrar con Google y revisar el espacio personal.

Responsabilidad:

- Explicar que ChileHub es gratuito.
- Iniciar sesion con Google mediante Supabase Auth.
- Permitir borrar datos locales.
- Evitar prometer sincronizacion de preparacion mientras siga guardada localmente.

## PersonalDashboard

Descripcion: vista personal local para mis tramites y guardados.

Responsabilidad:

- Mostrar tramites guardados.
- Mostrar historial local.
- Mostrar documentos pendientes.
- Mostrar recordatorios y alertas de revision mensual.
- Permitir borrar datos locales.

## ProcedurePersonalPanel

Descripcion: modulo de preparacion personal dentro de una ficha de tramite.

Responsabilidad:

- Guardar o quitar un tramite.
- Registrar historial local cuando el espacio esta activo.
- Marcar documentos preparados.
- Crear recordatorios locales.
- Aclarar que los datos viven en este navegador.

## SellCarPreparationFlow

Descripcion: flujo guiado real para preparar la venta de un auto.

Responsabilidad:

- Convertir el mockup mobile de landing en una experiencia usable.
- Mostrar progreso paso a paso.
- Permitir marcar documentos necesarios.
- Mostrar pauta referencial dentro de la pantalla.
- Mostrar cierre de preparacion y oficinas donde continuar.
- Mantener claro que ChileHub prepara, pero no ejecuta la transferencia.

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
- Mostrar distancia referencial cuando la experiencia lo requiera.
- Permitir destacar una opcion recomendada o mas cercana.
- Linkear a la fuente externa donde el usuario debe confirmar direccion, agenda y disponibilidad.

Props futuras:

- `name`
- `address`
- `distance`
- `hours`
- `availability`
- `badge`
- `sourceUrl`

Estados:

- Open.
- Closed.
- Recommended.
- Referential.

## NearbyOfficesSection

Descripcion: seccion de oficinas cercanas referenciales para continuar fuera de ChileHub.

Responsabilidad:

- Convertir los mockups de oficinas en una experiencia navegable real.
- Mostrar mapa visual referencial, lista de oficinas, distancia estimada y opcion recomendada.
- Reforzar que ChileHub no agenda, no ejecuta tramites y no reemplaza la confirmacion oficial.

Responsive:

- Mapa y lista lado a lado en desktop.
- Composicion apilada en mobile sin ocultar contenido.

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
