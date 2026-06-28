# ChileHub UX - Complete UX Checklist

## Proposito

Checklist profesional para aprobar cualquier pantalla nueva o cambio relevante de UX/UI. Ninguna pantalla debe considerarse lista si falla criterios basicos de claridad, accesibilidad, responsive o consistencia.

## 1. Product Manager

- [ ] La pantalla ayuda a entender o preparar un problema real del usuario.
- [ ] El objetivo de la pantalla es claro.
- [ ] La pantalla esta dentro del alcance informativo de la version actual.
- [ ] No introduce funcionalidades no documentadas.
- [ ] El usuario entiende el valor sin explicacion externa.
- [ ] Existe una siguiente accion clara.
- [ ] Los estados importantes estan definidos.
- [ ] Las promesas del producto son honestas.

## 2. UX

- [ ] El usuario sabe donde esta.
- [ ] El usuario sabe que hacer despues.
- [ ] La informacion esta en orden de importancia.
- [ ] No hay pasos ambiguos.
- [ ] Las decisiones tienen consecuencias claras.
- [ ] Los bloqueos explican como recuperarse.
- [ ] El flujo contempla abandono.
- [ ] El flujo contempla retorno.
- [ ] El flujo contempla errores.
- [ ] El lenguaje es simple y humano.

## 3. UI

- [ ] Respeta la imagen oficial.
- [ ] Respeta `docs/03_DESIGN_SYSTEM.md`.
- [ ] Usa componentes documentados.
- [ ] No introduce estilos visuales nuevos sin documentarlos.
- [ ] Mantiene whitespace suficiente.
- [ ] Mantiene jerarquia visual.
- [ ] Usa colores aprobados.
- [ ] Usa radios consistentes.
- [ ] Usa sombras sutiles.
- [ ] Usa iconografia consistente.
- [ ] No se ve como portal gubernamental.
- [ ] No se ve como dashboard administrativo generico.

## 4. Responsive

- [ ] Revisado en 320px.
- [ ] Revisado en 375px.
- [ ] Revisado en 768px.
- [ ] Revisado en 1024px.
- [ ] Revisado en 1280px.
- [ ] Revisado en 1440px.
- [ ] Revisado en 1920px.
- [ ] No hay overflow horizontal.
- [ ] Textos no escapan contenedores.
- [ ] Botones siguen siendo tocables.
- [ ] Cards reordenan correctamente.
- [ ] Acciones criticas siguen visibles.

## 5. Accesibilidad

- [ ] Contraste suficiente.
- [ ] Focus visible.
- [ ] Navegacion con teclado posible.
- [ ] Botones y links usan semantica correcta.
- [ ] Icon-only actions tienen nombre accesible.
- [ ] No se comunica informacion solo con color.
- [ ] Estados de error tienen texto.
- [ ] Motion no es esencial para entender.
- [ ] Textos son legibles en mobile.
- [ ] Areas tactiles son comodas.

## 6. Performance

- [ ] No agrega JavaScript innecesario.
- [ ] No convierte secciones estaticas en Client Components sin razon.
- [ ] Imagenes o assets estan optimizados cuando existan.
- [ ] Animaciones son livianas.
- [ ] No introduce dependencia pesada sin decision documentada.
- [ ] La pantalla puede renderizar rapido.

## 7. Consistencia

- [ ] Sigue patrones existentes.
- [ ] Reutiliza componentes existentes.
- [ ] Si agrega componente, actualiza `docs/04_COMPONENTS.md`.
- [ ] Si cambia flujo, actualiza `USER_FLOWS.md`.
- [ ] Si cambia copy, actualiza `MICROCOPY.md`.
- [ ] Si cambia token visual, actualiza `DESIGN_TOKENS.md`.
- [ ] Si cambia decision importante, actualiza `docs/09_DECISIONS.md`.

## 8. Copy

- [ ] Texto claro y directo.
- [ ] No usa jerga institucional innecesaria.
- [ ] No culpa al usuario.
- [ ] No promete certeza si hay incertidumbre.
- [ ] Usa "estimado" cuando corresponde.
- [ ] Botones usan verbos de accion.
- [ ] Errores explican recuperacion.
- [ ] Empty states ayudan a avanzar.

## 9. Estados

- [ ] Default.
- [ ] Loading.
- [ ] Empty.
- [ ] Error.
- [ ] Success.
- [ ] Disabled.
- [ ] Hover.
- [ ] Focus.
- [ ] Mobile.
- [ ] Slow connection cuando aplique.
- [ ] Offline futuro cuando aplique.

## 10. Contenido y datos

- [ ] Los datos de tramites tienen fuente o se declaran mock.
- [ ] Requisitos obligatorios, opcionales y condicionales estan diferenciados.
- [ ] Costos estimados estan marcados como estimados.
- [ ] Fechas o plazos sensibles indican fuente o revision.
- [ ] No hay contenido inventado como oficial.

## 11. Seguridad y privacidad

- [ ] No pide datos sensibles antes de aportar valor.
- [ ] Explica por que pide informacion.
- [ ] No guarda datos sin consentimiento futuro.
- [ ] No expone datos sensibles en UI innecesaria.
- [ ] Casos con documentos, pagos, auth o IA revisan `docs/13_SECURITY_PRIVACY.md`.

## 12. Definicion de aprobado

Una pantalla se aprueba solo si:

- [ ] Cumple el objetivo de producto.
- [ ] Es clara para usuarios no expertos.
- [ ] Respeta imagen oficial y Design System.
- [ ] Funciona en viewports requeridos.
- [ ] Cumple accesibilidad base.
- [ ] Tiene estados principales.
- [ ] Usa copy humano.
- [ ] No introduce deuda documental.
- [ ] Puede ser verificada por QA.
