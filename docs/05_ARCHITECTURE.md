# ChileHub - Architecture

## Rol del documento

Este documento define la arquitectura tecnica para implementacion futura. Debe ser suficientemente estable para un equipo en crecimiento y suficientemente flexible para evolucionar mediante decisiones documentadas.

## Objetivo arquitectonico

La arquitectura de ChileHub debe permitir crecer durante anos sin perder claridad. El proyecto debe separar UI, datos, configuracion, tipos y logica para que nuevas pantallas y procesos puedan agregarse de forma consistente.

## Principios arquitectonicos

- Claridad de producto antes que ingenieria innecesariamente sofisticada.
- Server-first por defecto en Next.js.
- Client Components solo cuando la interactividad los requiere.
- Estructuras de datos y contenido tipadas.
- Primitivos visuales independientes de datos de producto.
- Ninguna dependencia nueva sin razon documentada.
- Todo limite arquitectonico importante debe ser entendible por un nuevo ingeniero en una primera lectura.

## Stack objetivo

- Next.js 15.
- React 19.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.
- Framer Motion.
- Lucide React.
- Supabase Auth para acceso con Google.
- App Router.
- ESLint.
- Prettier.

## Estructura de carpetas

```text
app/
components/
components/layout/
components/navigation/
components/cards/
components/search/
components/sections/
components/footer/
components/mobile/
components/ui/
hooks/
lib/
styles/
types/
config/
public/
data/
docs/
design/
```

Se pueden agregar carpetas futuras solo cuando introduzcan una responsabilidad clara. No crear arquitectura vacia para necesidades hipoteticas.

## Responsabilidades

### app/

Contiene rutas, layouts y paginas de Next App Router.

Reglas:

- Mantener paginas delgadas.
- Componer secciones.
- No concentrar logica compleja en `page.tsx`.

### components/

Contiene componentes reutilizables.

Reglas:

- Cada componente debe tener responsabilidad clara.
- Evitar componentes gigantes.
- Separar componentes por dominio visual.

### components/layout/

Componentes de estructura:

- Wrappers.
- Reveals.
- Containers.
- Page shells.

### components/navigation/

Componentes de navegacion:

- Navbar.
- Logo.
- Sidebar.
- Menus.

### components/cards/

Cards reutilizables:

- Tramites.
- Guias.
- Calculadoras.
- Oficinas.
- Documentos.

### components/search/

Componentes de busqueda:

- SearchBar.
- Suggestions.
- Search results.

### components/sections/

Secciones completas de pagina:

- Hero.
- Home preview.
- Mobile mockups.
- Feature sections.

### components/footer/

Footer y subcomponentes relacionados.

### components/mobile/

Mockups y pantallas mobile internas del producto.

### components/ui/

Primitivos de UI reutilizables:

- Button.
- Card.
- Input.
- Badge.
- Tabs.
- Tooltip.

Estos componentes deben ser genericos y no conocer contenido de ChileHub.

### hooks/

Hooks reutilizables.

Reglas:

- Prefijo `use`.
- No mezclar UI con side effects complejos.
- Documentar hooks que encapsulen comportamiento relevante.

### lib/

Funciones utilitarias y helpers.

Reglas:

- Funciones puras cuando sea posible.
- Sin dependencias innecesarias de React.

### styles/

Estilos globales, tokens y configuracion CSS.

### types/

Tipos compartidos de TypeScript.

### config/

Configuracion del producto:

- Navegacion.
- Metadata.
- Feature flags futuros.

### public/

Assets publicos:

- Assets que deban ser servidos por la aplicacion.
- Logos.
- Mockups exportados.
- Iconos si fueran necesarios.

Las referencias visuales oficiales de trabajo viven en `design/`, no en `public/`, salvo que una imagen tambien deba mostrarse dentro del producto.

### data/

Datos estaticos o mock data de V1.

Reglas:

- Separar contenido de componentes.
- Mantener estructura tipada.

### config/

Configuracion de nivel producto:

- Navigation.
- Site metadata.
- Static route labels.
- Feature flags when they exist.

`config/` no debe contener datos de usuario, secretos ni datasets grandes de contenido.

### docs/

Documentacion oficial del producto y proyecto.

### design/

Referencias visuales oficiales del producto. Esta carpeta funciona como el equivalente al archivo Figma del proyecto y tiene prioridad sobre el codigo cuando exista una diferencia visual.

Responsabilidades:

- `design/references/`: pantallas completas aprobadas.
- `design/components/`: referencias visuales de partes especificas de UI.
- `design/design-system/`: notas visuales extraidas desde referencias oficiales.
- `design/exports/`: exportaciones temporales o comparativas.

No contiene codigo de aplicacion, componentes React ni assets inventados.

## Convenciones de naming

Archivos:

- Componentes: kebab-case, por ejemplo `hero-section.tsx`.
- Tipos: kebab-case o dominio claro, por ejemplo `chilehub.ts`.
- Hooks: `use-feature-name.ts`.

Componentes:

- PascalCase.
- Nombres descriptivos.
- Evitar nombres genericos como `Box` salvo primitivos UI.

Variables:

- camelCase.
- Nombres que describen intencion, no implementacion visual accidental.

Tipos:

- PascalCase.
- Sufijo `Props` para props.
- Sufijo `Item` o `Config` cuando corresponda.

## Separacion de componentes

Reglas:

- Una seccion puede componer varias cards.
- Una card no debe saber donde se renderiza.
- Un componente UI no debe importar datos de producto.
- Los datos deben vivir fuera de la UI cuando sean listas o contenido repetido.

## Separacion de logica

V1:

- Datos mock en `data/`.
- Sin backend.
- Sin autenticacion.

V2:

- Logica de busqueda frontend en hooks o lib.
- Datos estructurados tipados.

V3:

- Servicios de datos separados.
- Capa de API.
- Persistencia de usuario.

## Politica de Server y Client Components

Default:

- Usar Server Components para secciones estaticas, render de contenido y composicion de paginas.
- Usar Client Components para animacion, input de usuario, interaccion local y APIs solo disponibles en navegador.

Reglas:

- No marcar layouts padres como client-only salvo que sea necesario.
- Mantener Framer Motion aislado en wrappers de animacion o secciones interactivas.
- Evitar pasar datos grandes por limites client.
- Mantener formularios y mutaciones futuras detras de limites server/API explicitos.

## Politica de limites de datos

V1:

- Mock data may live in `data/`.
- La data mock no debe presentarse como live u oficial.

V2:

- La data estatica debe seguir `11_CONTENT_AND_DATA_GOVERNANCE.md`.
- La logica de busqueda/filtros puede vivir en `lib/` o hooks si depende de estado UI.

V3+:

- Introducir modulos de servicio solo cuando exista backend/API.
- Mantener fetching, validacion y transformacion separados de componentes de presentacion.

## Buenas practicas

- TypeScript estricto.
- Componentes pequenos.
- Props explicitas.
- Accesibilidad desde el inicio.
- Tailwind con tokens consistentes.
- Evitar estilos inline salvo casos justificados.
- Evitar duplicacion visual.
- No introducir dependencias sin decision documentada.

## Riesgos de escalabilidad a evitar

- Poner todo el contenido de una pagina en un componente gigante.
- Acoplar cards visuales a una unica fuente de datos.
- Codificar logica especifica de tramites dentro de primitivos UI genericos.
- Agregar estado global antes de que exista estado entre paginas.
- Tratar salida de IA como fuente de verdad.
- Permitir que el contenido crezca sin fuentes ni metadata de revision.

## Escalabilidad

ChileHub debe poder crecer en:

- Cantidad de tramites.
- Cantidad de guias.
- Calculadoras.
- Flujos personalizados.
- Usuarios autenticados.
- Integraciones.
- Planes SaaS.

La arquitectura debe favorecer modularidad y reemplazo gradual.
