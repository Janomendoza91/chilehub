# ChileHub - Calidad y accesibilidad

## Proposito

Este documento define el nivel minimo aceptable de calidad para ChileHub. Una pantalla no esta aprobada porque renderiza; esta aprobada cuando respeta la direccion oficial, funciona en los viewports requeridos, es accesible y ayuda al usuario a entender y prepararse sin confusion.

## Gates de calidad

Cada entrega debe pasar:

- Revision visual.
- Revision responsive.
- Revision de accesibilidad.
- Revision de performance.
- Revision de contenido cuando cambie copy o informacion de tramites.
- Revision de regresion en pantallas afectadas.

## Viewports requeridos

Se debe revisar en:

- 320px.
- 375px.
- 768px.
- 1024px.
- 1280px.
- 1440px.
- 1920px.

## Criterios de aceptacion visual

La UI debe:

- Coincidir con la imagen oficial antes que con cualquier interpretacion.
- Preservar whitespace y jerarquia.
- Evitar overflow horizontal.
- Mantener texto dentro de contenedores.
- Preservar ritmo y alineacion de cards.
- Mantener iconografia consistente.
- Usar sombras, bordes y radios definidos por el design system.
- Evitar colores fuera de tokens aprobados.

## Criterios responsive

En cada viewport objetivo:

- Navbar usable.
- Buscador visible y accionable.
- Hero legible.
- Mockups sin deformacion.
- Cards reordenadas sin saturacion.
- Sidebar con comportamiento intencional.
- Footer legible.
- Sin solapamiento incoherente entre elementos.

## Baseline de accesibilidad

ChileHub debe apuntar a WCAG 2.2 AA como baseline.

Requisitos:

- Navegacion por teclado en elementos interactivos.
- Estados de focus visibles.
- Contraste suficiente.
- Jerarquia semantica de headings.
- Semantica correcta de botones y links.
- Labels accesibles para acciones solo con icono.
- Campos con label o nombre accesible.
- Ninguna informacion comunicada solo por color.
- Movimiento sutil y no esencial.

## Accesibilidad de movimiento

Las animaciones deben respetar comodidad del usuario:

- Evitar parallax grande o movimiento constante.
- Evitar flashing.
- Mantener animaciones de entrada breves.
- Considerar reduced motion cuando se implemente comportamiento animado.

## Baseline de performance

Objetivos para landing publica:

- Primer render rapido.
- JavaScript minimo en secciones no interactivas.
- Imagenes optimizadas.
- Evitar Client Components innecesarios.
- No agregar librerias pesadas fuera del stack aprobado.

La performance se debe medir antes de agregar media compleja o logica pesada.

## Checklist de QA visual

- [ ] Comparado contra imagen oficial.
- [ ] Layout desktop revisado.
- [ ] Layout tablet revisado.
- [ ] Layout mobile revisado.
- [ ] Hover states revisados.
- [ ] Focus states revisados.
- [ ] Empty/loading/error states revisados cuando apliquen.
- [ ] Overflow de contenido revisado.
- [ ] Alineacion de iconos revisada.
- [ ] Contraste revisado.
- [ ] Reduced motion revisado cuando aplique.

## Checklist de QA para flujos

- [ ] El usuario entiende para que sirve la pantalla.
- [ ] El usuario entiende la siguiente accion.
- [ ] La informacion requerida no esta escondida.
- [ ] Los estados son claros.
- [ ] Errores o bloqueos explican como recuperarse.
- [ ] El estado de preparacion lista da sensacion de cierre.
