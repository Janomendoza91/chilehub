# ChileHub - UI Principles

## Rol del documento

Este documento define reglas de decision UI para el dia a dia. Los tokens visuales detallados pertenecen a `03_DESIGN_SYSTEM.md`; los criterios de accesibilidad pertenecen a `12_QUALITY_ACCESSIBILITY.md`.

## Regla principal

La imagen oficial manda. Ningun nuevo componente, seccion o pantalla puede contradecir la direccion visual aprobada.

## Permitido

- Base blanca.
- Mucho espacio negativo.
- Grises suaves.
- Azul como accion principal.
- Verde solo para estados positivos.
- Iconografia lineal moderna.
- Cards limpias con bordes suaves.
- Sombras sutiles.
- Animaciones discretas.
- Tipografia Inter.
- Jerarquia clara.

## Prohibido

- Apariencia gubernamental.
- Apariencia administrativa antigua.
- Bootstrap.
- Material UI.
- Plantillas genericas.
- Fondos oscuros dominantes.
- Gradientes pesados.
- Sombras fuertes.
- Componentes saturados.
- Demasiados colores.
- Texto excesivo en cards.
- Animaciones exageradas.
- Layouts inventados que no respeten la imagen.

## Como disenar nuevos componentes

Cada nuevo componente debe responder:

- Que problema resuelve?
- Donde vive en la jerarquia?
- Que accion facilita?
- Que variante existente puede reutilizar?
- Como se comporta en mobile?
- Que estados necesita?

No se debe crear un componente nuevo si una variante existente resuelve el caso.

## Consistencia

Reglas:

- Usar la misma escala de spacing.
- Usar la misma familia tipografica.
- Mantener radios consistentes.
- Mantener iconos del mismo set.
- Mantener botones con variantes definidas.
- Evitar estilos unicos no reutilizables.

## Espacios

La interfaz debe respirar.

Reglas:

- No pegar elementos al borde.
- No llenar todos los espacios.
- Priorizar claridad sobre densidad.
- Usar separacion vertical generosa entre secciones.
- Mantener padding interno suficiente en cards.

## Identidad

ChileHub debe sentirse:

- Moderno.
- Claro.
- Confiable.
- Premium.
- Cercano.
- Rapido.

No debe sentirse:

- Burocratico.
- Frio.
- Pesado.
- Amateur.
- Experimental sin control.

## Texto en UI

Reglas:

- Frases cortas.
- Lenguaje directo.
- Evitar jerga institucional.
- Explicar acciones, no decorar.
- No usar textos instructivos innecesarios.

## Reglas de copy de producto

- Prefer verbs that move the user forward.
- Usar "proceso" como concepto principal. Usar "tramite" solo cuando el nombre comun del proceso lo requiera.
- Say "estimado" when a cost, time or requirement is not exact.
- Avoid implying that ChileHub is the official institution.
- Avoid fear-based copy.

## Estados

Estados visuales permitidos:

- Default.
- Hover.
- Focus.
- Active.
- Loading.
- Empty.
- Error.
- Success.

Cada estado debe ser accesible y discreto.

## Accesibilidad visual

Reglas:

- Contraste suficiente.
- Focus visible.
- Textos legibles en mobile.
- Botones con areas clickeables comodas.
- No depender solo del color para comunicar estado.

La accesibilidad no es pulido opcional. Una pantalla visualmente perfecta que no pueda usarse con teclado, bases de screen reader o contraste suficiente no se acepta.

## Responsive

Reglas:

- Mobile primero en legibilidad.
- Desktop primero en composicion premium.
- No permitir overflow horizontal.
- No ocultar contenido critico.
- Reordenar con intencion.

## Animacion

La animacion debe reforzar calidad, no llamar la atencion.

Permitido:

- Fade.
- Slide leve.
- Hover con elevacion minima.

Prohibido:

- Rebotes.
- Rotaciones innecesarias.
- Loops constantes.
- Microinteracciones que dificulten uso.
