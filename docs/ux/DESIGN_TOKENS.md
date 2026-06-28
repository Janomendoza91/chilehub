# ChileHub UX - Design Tokens

## Proposito

Este documento define los tokens visuales que deben guiar la experiencia. La imagen oficial tiene prioridad absoluta. Como la imagen oficial aun no esta disponible como archivo medible en el workspace, los valores de este documento son provisionales hasta extraer medidas exactas.

## Estado de tokens

Estado actual:

- Provisional.
- Basado en la direccion visual documentada.
- Pendiente de medicion desde imagen oficial.

Antes de implementar pixel-perfect:

- Agregar imagen oficial al repositorio.
- Registrar ruta en `docs/09_DECISIONS.md`.
- Medir colores, spacing, radius, shadows, tipografia, grid y componentes.
- Actualizar este documento.

## Color tokens

Principios:

- Blanco domina.
- Grises extremadamente suaves.
- Azul moderno para accion principal.
- Verde solo para positivo.
- Nada oscuro o pesado.

Tokens provisionales:

- Background: blanco puro o casi blanco.
- Surface: blanco.
- Surface subtle: gris frio muy suave.
- Border: gris frio de baja presencia.
- Text primary: casi negro, no negro puro.
- Text secondary: gris medio.
- Primary: azul moderno.
- Primary soft: azul muy claro para backgrounds.
- Success: verde sobrio para estados de preparacion lista.
- Success soft: verde muy claro.
- Warning: solo cuando haya riesgo real.
- Error: solo para errores o bloqueos.

Reglas:

- No crear nuevos colores sin actualizar este documento.
- No usar verde para decoracion.
- No usar azul para estados no accionables.

## Spacing tokens

Escala provisional:

- 4px: micro ajuste.
- 8px: separacion interna minima.
- 12px: separacion compacta.
- 16px: padding base de card pequena.
- 20px: margen mobile.
- 24px: separacion entre elementos relacionados.
- 32px: padding de secciones internas.
- 48px: separacion entre bloques.
- 72px: separacion de secciones compactas.
- 96px: separacion de secciones amplias.
- 112px: hero o bloques principales.

Reglas:

- Usar aire generoso.
- No comprimir hero.
- No saturar cards.
- Mantener alineacion con contenedor principal.

## Radius tokens

Provisionales:

- xs: 8px para elementos pequenos.
- sm: 12px para controles compactos.
- md: 16px para icon wrappers.
- lg: 20px a 24px para cards.
- xl: 28px a 36px para contenedores grandes.
- pill: 999px para botones principales.
- phone: radius alto para mockups mobile.

Reglas:

- No mezclar radios sin criterio.
- Cards similares usan mismo radius.
- Botones principales usan pill.

## Shadow tokens

Provisionales:

- Shadow line: sombra casi imperceptible para elevacion minima.
- Shadow card: sombra suave solo en hover o cards destacadas.
- Shadow air: sombra amplia, difusa y premium.
- Shadow phone: sombra mas marcada para mockups.

Reglas:

- Sombras nunca deben parecer pesadas.
- Evitar sombras negras fuertes.
- Usar sombra para jerarquia, no decoracion.

## Border tokens

Provisionales:

- Border subtle: gris frio suave.
- Border active: azul suave o borde primario con baja opacidad.
- Border success: verde suave solo si comunica estado.
- Border error: error solo para bloqueo.

Reglas:

- Bordes deben ser visibles pero silenciosos.
- No usar bordes gruesos salvo mockup o componente especial validado.

## Typography tokens

Fuente:

- Inter.

Escala provisional:

- Hero: 48px mobile hasta 80px+ desktop.
- H1 app/page: 40px a 56px.
- H2 section: 32px a 48px.
- H3 card/section: 18px a 24px.
- Body large: 18px a 20px.
- Body: 14px a 16px.
- Label: 11px a 13px.
- Caption: 12px a 13px.

Pesos:

- Regular: 400.
- Medium: 500.
- Semibold: 600.
- Bold: 700.
- Extra bold: 800 solo para hero o marcas fuertes.

Reglas:

- No usar serif.
- No usar font-size fluido por viewport sin control.
- Texto debe caber en contenedores.
- Labels uppercase solo si ayudan a escaneo.

## Icon size tokens

Provisionales:

- 14px: labels, badges, micro acciones.
- 16px: nav y controles compactos.
- 20px: cards y botones.
- 24px: iconos destacados.
- 32px+: solo ilustracion o estados vacios especiales.

Reglas:

- Usar iconos lineales.
- Iconos deben tener stroke consistente.
- No mezclar estilos visuales.

## Button size tokens

Provisionales:

- Small: 36px alto.
- Default: 44px alto.
- Large: 52px alto.
- Hero/Search action: segun imagen oficial.

Padding:

- Small: 14px a 16px horizontal.
- Default: 18px a 22px horizontal.
- Large: 24px a 32px horizontal.

Reglas:

- Botones deben tener area tactil comoda.
- Texto no debe truncarse en mobile salvo casos definidos.
- Primary Button siempre comunica accion principal.

## Card size tokens

Provisionales:

- ProcedureCard: card mediana con icono, titulo, descripcion y meta.
- GuideCard: horizontal, compacta, escaneable.
- CalculatorCard: valor destacado.
- FloatingStatusCard: pequena, hero-support.
- MockupCard: contenida dentro de telefono.

Reglas:

- Cards no deben competir con hero.
- Cards deben ordenar informacion.
- No poner cards dentro de cards salvo estructura explicitamente aprobada.

## Grid tokens

Provisionales:

- Container max: 1180px a 1240px.
- Mobile margin: 20px.
- Tablet margin: 32px.
- Desktop margin: 40px.
- Home preview desktop: sidebar + contenido flexible.
- Cards: 1 columna mobile, 2 tablet, 3/4 desktop segun contenido.
- Mockups: 1 mobile, 2 tablet, 4 desktop.

Reglas:

- Grillas deben preservar aire.
- No forzar 4 columnas si el contenido se comprime.
- Sidebar no debe romper mobile.

## Container tokens

Provisionales:

- Page container: max 1180px/1240px.
- Hero text container: max 800px/900px.
- Search container: max 640px/720px.
- Dashboard shell: contenedor grande con radius alto.

## Breakpoints

Objetivo de QA:

- 320px.
- 375px.
- 768px.
- 1024px.
- 1280px.
- 1440px.
- 1920px.

Regla:

Los breakpoints tecnicos pueden diferir, pero la UI debe validarse visualmente en estos anchos.

## Motion tokens

Provisionales:

- Hover: 150ms a 220ms.
- Section reveal: 450ms a 650ms.
- Ease: suave, sin rebote.
- Movement: 8px a 20px maximo en entrada.

Reglas:

- No usar movimiento constante.
- Respetar reduced motion cuando aplique.
- Animacion nunca reemplaza informacion.
