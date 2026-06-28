# ChileHub - Indice de documentacion

## Proposito

Esta carpeta es la fuente oficial de verdad para ChileHub. Producto, diseno, arquitectura, ingenieria, contenido, QA y futuros asistentes de IA deben usar estos documentos antes de hacer cambios.

Ninguna decision de implementacion debe tomarse de memoria cuando exista un documento relevante en `/docs`.

## Idioma

El idioma canonico de la documentacion es espanol. Se permiten terminos tecnicos en ingles cuando sean estandar de la industria, por ejemplo `Server Components`, `Client Components`, `pull request`, `feature flag` o `design tokens`.

La interfaz final del producto debe usar espanol claro para usuarios en Chile.

## Orden de autoridad

Cuando dos documentos entren en conflicto, usar este orden:

1. Imagen oficial del producto, una vez almacenada en el repositorio.
2. `03_DESIGN_SYSTEM.md` para decisiones visuales.
3. `02_PRODUCT.md` para alcance de producto y experiencia de usuario.
4. `05_ARCHITECTURE.md` para estructura tecnica.
5. `08_CODING_STANDARDS.md` para detalles de implementacion.
6. `09_DECISIONS.md` para excepciones aceptadas e historial.

Si la imagen oficial contradice la documentacion, se actualiza la documentacion. No se reinterpreta la imagen.

## Mapa de documentos

- `01_PROJECT.md`: fundamento del producto, mision, usuarios y vision de largo plazo.
- `02_PRODUCT.md`: superficie del producto, modulos, flujos y alcance por version.
- `03_DESIGN_SYSTEM.md`: sistema visual y reglas pixel-perfect.
- `04_COMPONENTS.md`: inventario de componentes reutilizables y responsabilidades.
- `05_ARCHITECTURE.md`: estructura del proyecto, limites y reglas de escalabilidad.
- `06_ROADMAP.md`: plan de entrega por fases.
- `07_UI_PRINCIPLES.md`: reglas para preservar identidad visual.
- `08_CODING_STANDARDS.md`: estandares de ingenieria para implementacion futura.
- `09_DECISIONS.md`: registro de decisiones.
- `10_TODO.md`: checklist de ejecucion.
- `11_CONTENT_AND_DATA_GOVERNANCE.md`: precision de contenido, fuentes y principios de datos.
- `12_QUALITY_ACCESSIBILITY.md`: QA, responsive, accesibilidad y criterios de aceptacion.
- `13_SECURITY_PRIVACY.md`: seguridad, privacidad y confianza.
- `ux/INFORMATION_ARCHITECTURE.md`: arquitectura de informacion para landing, home, navegacion y hero.
- `ux/PERSONAS.md`: perfiles de usuario.
- `ux/USER_JOURNEYS.md`: recorridos de usuario.
- `ux/USER_FLOWS.md`: flujos pantalla por pantalla.
- `ux/MICROCOPY.md`: tono y textos base.

## Flujo requerido antes de cualquier trabajo

Antes de disenar, programar o cambiar contenido:

1. Leer los documentos relevantes.
2. Revisar `09_DECISIONS.md`.
3. Confirmar si el cambio afecta producto, diseno, arquitectura, datos/contenido o seguridad.
4. Actualizar el documento relevante en el mismo cambio si modifica comportamiento, alcance o criterios.
5. Registrar una decision cuando el cambio sea arquitectonico, estrategico, dificil de revertir o pueda afectar a equipos futuros.

## Estado actual de la documentacion

La documentacion esta lista para guiar el proyecto, con una dependencia critica:

- La imagen oficial debe incorporarse al repositorio y referenciarse desde los documentos.
- Antes de declarar una implementacion pixel-perfect, deben extraerse medidas exactas de color, espaciado, layout, tipografia, radius y sombras desde esa imagen.

Hasta que eso ocurra, la documentacion visual es autoritativa en direccion, pero no definitiva en medidas exactas.
