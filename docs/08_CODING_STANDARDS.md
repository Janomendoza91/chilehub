# ChileHub - Coding Standards

## Rol del documento

Este documento define estandares de implementacion para codigo futuro. No autoriza programacion por si mismo; cualquier trabajo de producto debe respetar el flujo solicitado y el alcance vigente.

## Principios

El codigo de ChileHub debe ser claro, modular y escalable. Cada archivo debe tener una responsabilidad concreta. El objetivo es que el proyecto pueda crecer durante anos sin deuda innecesaria.

## TypeScript

Reglas:

- Usar TypeScript estricto.
- Evitar `any`.
- Definir tipos compartidos en `types/`.
- Tipar props explicitamente.
- Preferir tipos simples y legibles.
- No sobreabstraer tipos prematuramente.
- Preferir `unknown` sobre `any` cuando la forma del dato no se conoce.
- Modelar estados de dominio con unions explicitas cuando sea posible.

## React

Reglas:

- Componentes funcionales.
- Componentes pequenos.
- Props claras.
- Evitar logica compleja dentro del JSX.
- Separar listas de datos fuera del componente cuando sean estaticas.
- Usar composition antes que props demasiado complejas.

## Next.js

Reglas:

- Usar App Router.
- Mantener `page.tsx` como composicion de secciones.
- Usar metadata por ruta cuando corresponda.
- Diferenciar Server Components y Client Components con intencion.
- Usar `"use client"` solo cuando sea necesario.
- No mover paginas completas al cliente solo por conveniencia de animacion.

## Tailwind CSS

Reglas:

- Usar tokens globales para colores base.
- Mantener clases ordenadas y legibles.
- Evitar valores arbitrarios excesivos.
- Usar `cn()` para combinar clases condicionales.
- Extraer componentes cuando se repiten patrones.
- No usar CSS global para estilos locales salvo necesidad real.
- Preferir design tokens documentados sobre valores arbitrarios cuando los tokens esten finalizados.

## Naming

Archivos:

- `kebab-case.tsx`
- `kebab-case.ts`

Componentes:

- `PascalCase`

Funciones:

- `camelCase`

Hooks:

- `useSomething`

Tipos:

- `PascalCase`
- `ComponentNameProps` para props.

## Imports

Reglas:

- Usar alias `@/` para imports internos.
- Agrupar imports externos primero.
- Luego imports internos.
- Evitar imports circulares.
- No importar desde rutas profundas innecesarias si existe barrel controlado.

## Hooks

Reglas:

- Hooks en `hooks/`.
- Un hook por archivo cuando tenga logica relevante.
- No usar hooks para ocultar logica trivial.
- Mantener side effects controlados.

## Performance

Reglas:

- Evitar renders innecesarios.
- Evitar componentes client cuando pueden ser server.
- Optimizar imagenes reales con `next/image`.
- Mantener bundles pequenos.
- No agregar librerias sin decision documentada.
- Medir antes de optimizar agresivamente.
- Mantener limites de animacion pequenos.
- Evitar estado client-side en secciones estaticas de marketing.

## Accesibilidad

Reglas:

- Botones reales para acciones.
- Links reales para navegacion.
- Labels accesibles cuando haya inputs.
- `aria-label` para botones icon-only.
- Focus visible.
- Contraste suficiente.
- Navegacion usable con teclado.
- No eliminar outlines sin reemplazarlos por focus styles visibles.
- Usar landmarks semanticos para regiones principales cuando corresponda.

## Componentes

Reglas:

- Un componente no debe hacer demasiadas cosas.
- Separar variantes con props controladas.
- No hardcodear listas grandes dentro de componentes.
- Evitar duplicar markup visual.
- Mantener API simple.

## Estado

V1:

- Estado local solo para interacciones visuales si se necesita.

V2:

- Estado de busqueda y filtros con hooks simples.

V3:

- Definir estrategia de estado global solo si existe necesidad real.

## Comentarios

Reglas:

- Comentar decisiones no obvias.
- No comentar lo evidente.
- Documentar tradeoffs importantes en `09_DECISIONS.md`.

## Testing futuro

Cuando el producto avance:

- Tests unitarios para helpers.
- Tests de componentes criticos.
- Tests de accesibilidad.
- Tests visuales para pantallas principales.
- Tests e2e para flujos de tramite.

## Expectativas para pull requests futuros

Los PRs futuros deberian incluir:

- Que cambio.
- Por que cambio.
- Que documentos se consultaron o actualizaron.
- Screenshots para cambios visuales.
- Viewports probados.
- Notas de accesibilidad para cambios interactivos.
- Riesgos o trabajo pendiente.
