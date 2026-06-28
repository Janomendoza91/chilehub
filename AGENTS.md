# AGENTS.md

# Constitucion de agentes para ChileHub

Este archivo define como debe trabajar cualquier agente de IA dentro de este repositorio.

No es un brief de producto. No es un documento de diseno. No es una guia de programacion.

Es la constitucion operativa para trabajo asistido por IA en ChileHub.

Todo agente que trabaje en este repositorio debe seguir este archivo antes de hacer cambios.

---

## 1. Identidad del proyecto

ChileHub es un portal inteligente que ayuda a personas en Chile a entender, preparar y organizar procesos importantes de su vida mediante una experiencia premium, visual y paso a paso.

ChileHub existe para reducir confusion, perdida de tiempo e informacion fragmentada entre instituciones, municipalidades, oficinas, sitios web y documentos.

ChileHub debe sentirse:

- Claro.
- Calmo.
- Premium.
- Confiable.
- Rapido.
- Humano.
- Orientado a la accion.

ChileHub nunca debe convertirse en:

- Un portal con apariencia gubernamental.
- Un dashboard administrativo generico.
- Una plantilla Bootstrap o Material UI.
- Una wiki.
- Un directorio de links.
- Un producto centrado en chatbot.
- Una base de datos saturada de tramites.
- Una aplicacion enterprise visualmente pesada.
- Un ejecutor de tramites.
- Un reemplazo de ChileAtiende, Registro Civil, SII, municipalidades, bancos, abogados, contadores o notarios.

La promesa del producto es simple:

El usuario siempre debe entender que necesita, que debe revisar y como llegar preparado al proceso real.

---

## 2. Orden de autoridad

Cuando exista conflicto, ambiguedad o incertidumbre, los agentes deben seguir este orden de autoridad:

1. Referencias visuales oficiales del producto en `design/`.
2. `docs/03_DESIGN_SYSTEM.md`.
3. `docs/02_PRODUCT.md`.
4. `docs/05_ARCHITECTURE.md`.
5. `docs/08_CODING_STANDARDS.md`.
6. `docs/09_DECISIONS.md`.
7. Codigo existente.

Nunca romper este orden.

Si el codigo contradice la documentacion, no asumir que el codigo es correcto.

Si la documentacion contradice una referencia visual oficial en `design/`, gana la referencia y la documentacion debe actualizarse.

Si falta una decision, documentarla antes o junto con la implementacion.

---

## 3. Lectura obligatoria antes de trabajar

Antes de escribir codigo, cambiar UI, cambiar UX, agregar dependencias o modificar arquitectura, los agentes deben leer la documentacion relevante.

Lectura minima por tipo de tarea:

- Producto o UX: `01_PROJECT.md`, `02_PRODUCT.md`, `07_UI_PRINCIPLES.md`, `docs/ux/INFORMATION_ARCHITECTURE.md`.
- Visual/UI: `design/README.md`, referencias aplicables en `design/`, `03_DESIGN_SYSTEM.md`, `04_COMPONENTS.md`, `12_QUALITY_ACCESSIBILITY.md`.
- Arquitectura: `05_ARCHITECTURE.md`, `08_CODING_STANDARDS.md`, `09_DECISIONS.md`.
- Contenido o datos de tramites: `11_CONTENT_AND_DATA_GOVERNANCE.md`.
- Auth, datos de usuario, documentos, pagos, integraciones o IA: `13_SECURITY_PRIVACY.md`.
- Cualquier tarea sustancial: `00_README.md`, `09_DECISIONS.md`, `10_TODO.md`.

No trabajar de memoria cuando existe un documento aplicable.

---

## 4. Reglas para cualquier IA

Antes de escribir codigo:

- Leer la documentacion relevante.
- Entender la estructura actual del repositorio.
- Revisar si el cambio solicitado ya esta cubierto por docs.
- Revisar si ya existe un componente, patron o convencion.
- Identificar si la documentacion debe actualizarse.

Los agentes nunca deben:

- Asumir comportamiento de producto no documentado.
- Inventar UI fuera del Design System.
- Crear componentes que contradigan `04_COMPONENTS.md`.
- Cambiar arquitectura sin actualizar documentacion de arquitectura.
- Cambiar UX sin documentar la decision de producto.
- Cambiar UI sin revisar las referencias visuales oficiales en `design/` y el Design System.
- Agregar librerias sin documentar la razon.
- Tratar contenido generado por IA como fuente de verdad.
- Presentar data mock como oficial o live.
- Priorizar velocidad por sobre consistencia de producto.

Si las instrucciones son ambiguas, preferir el modelo documentado del producto. Si el riesgo es alto, pedir aclaracion.

---

## 5. Modo equipo

Los agentes deben actuar como un equipo, no como un asistente unico.

Antes de implementar una decision relevante, deben validarla desde cinco roles:

- Product Manager.
- UX/UI Designer.
- Frontend Engineer.
- Software Architect.
- QA Engineer.

Cada rol debe revisar una dimension distinta:

- Product Manager: confirma que la decision resuelve el problema correcto, respeta el alcance y aporta valor al usuario.
- UX/UI Designer: confirma que la experiencia es clara, consistente, accesible y alineada con las referencias visuales oficiales en `design/` y el Design System.
- Frontend Engineer: confirma que la implementacion es simple, mantenible, performante y compatible con el stack.
- Software Architect: confirma que la decision respeta limites, escalabilidad, documentacion y convenciones del proyecto.
- QA Engineer: confirma que existen criterios de aceptacion, responsive, accesibilidad, regresion y verificabilidad.

Si hay conflicto entre roles, el agente debe explicarlo antes de avanzar.

Ejemplos de conflicto:

- Una solucion rapida de ingenieria empeora UX.
- Una propuesta visual atractiva rompe accesibilidad.
- Una abstraccion arquitectonica ordena el codigo pero sobreingenieriza V1.
- Una funcionalidad aporta valor futuro pero queda fuera del alcance actual.

Ante conflicto, elegir la alternativa que mejor preserve:

1. Vision oficial del producto.
2. Claridad para el usuario.
3. Fidelidad visual.
4. Mantenibilidad.
5. Calidad verificable.

No implementar una solucion relevante sin haber considerado estos cinco puntos de vista.

---

## 6. Filosofia de ingenieria

La ingenieria de ChileHub debe ser aburrida en el mejor sentido: clara, mantenible y escalable.

Principios:

- Server First.
- Componentes pequenos.
- Alta reutilizacion.
- TypeScript estricto.
- Limites claros.
- Dependencias minimas.
- No abstracciones prematuras.
- No sobreingenieria.
- No componentes gigantes.
- No logica de negocio escondida en primitivos UI.

Arquitectura default:

- Server Components para composicion estatica y render de contenido.
- Client Components solo para interactividad, animacion, formularios o APIs del navegador.
- Estructuras de datos tipadas.
- Primitivos UI independientes del contenido de producto.
- Componentes de producto compuestos desde primitivos.

Si un cambio hace que el codigo sea mas dificil de entender, debe existir una razon fuerte y esa razon debe documentarse.

---

## 7. Filosofia de diseno

ChileHub debe verse y sentirse como un producto premium de startup.

Principios visuales:

- Minimalista.
- Luminoso.
- Limpio.
- Espacioso.
- Preciso.
- Calmo.
- Moderno.

Usar:

- Base blanca.
- Grises extremadamente suaves.
- Azul moderno como color principal de accion.
- Verde solo para estados positivos.
- Tipografia Inter.
- Sombras sutiles.
- Bordes suaves.
- Iconos lineales modernos.
- Jerarquia cuidadosamente controlada.

No usar:

- Estetica Bootstrap.
- Estetica Material UI.
- Apariencia de portal gubernamental.
- Dashboards administrativos densos.
- Secciones oscuras pesadas.
- Gradientes decorativos como lenguaje visual principal.
- Animaciones exageradas.
- Colores aleatorios.
- Estilos de cards no aprobados.

Toda decision visual debe proteger la sensacion premium y espaciosa.

---

## 8. Responsive

ChileHub debe ser una sola experiencia responsive, no productos separados por dispositivo.

Viewports requeridos:

- 320px.
- 375px.
- 768px.
- 1024px.
- 1280px.
- 1440px.
- 1920px.

Los agentes deben preservar:

- Calidad desktop.
- Usabilidad tablet.
- Claridad mobile.
- Sin overflow horizontal.
- Sin texto escapando de contenedores.
- Sin solapamientos incoherentes.
- Sin acciones criticas ocultas.

Un cambio responsive no esta terminado hasta revisar la UI afectada en los breakpoints relevantes.

---

## 9. Componentes

Antes de crear un componente nuevo:

1. Buscar si ya existe.
2. Si existe, reutilizarlo.
3. Si casi existe, preferir extenderlo mediante una variante documentada.
4. Si no existe, actualizar `docs/04_COMPONENTS.md`.
5. Luego implementarlo.

Reglas:

- Cada componente debe tener una responsabilidad clara.
- Los componentes deben ser reutilizables sin volverse genericos sin sentido.
- Los primitivos UI no deben conocer contenido de negocio de ChileHub.
- Los componentes de producto pueden conocer conceptos de producto.
- Las secciones componen componentes pequenos.
- Los datasets estaticos grandes no pertenecen dentro de componentes reutilizables.

No crear un componente nuevo solo para evitar entender uno existente.

---

## 10. Documentacion

La documentacion es parte del producto.

Los agentes deben actualizar documentacion cuando:

- Cambien comportamiento de producto.
- Cambien UX.
- Cambien reglas visuales.
- Agreguen o cambien componentes.
- Cambien arquitectura.
- Agreguen dependencias.
- Definan nuevas estructuras de datos o contenido.
- Introduzcan auth, persistencia, integraciones, pagos, documentos o IA.
- Tomen un tradeoff importante.
- Hagan una refactorizacion significativa.

Las decisiones importantes van en `docs/09_DECISIONS.md`.

Las tareas de ejecucion van en `docs/10_TODO.md`.

Las reglas de contenido y tramites van en `docs/11_CONTENT_AND_DATA_GOVERNANCE.md`.

Los criterios de calidad y accesibilidad van en `docs/12_QUALITY_ACCESSIBILITY.md`.

Las restricciones de seguridad y privacidad van en `docs/13_SECURITY_PRIVACY.md`.

Si documentacion e implementacion se separan, corregir la deriva.

---

## 11. Git

Los commits deben ser:

- Pequenos.
- Descriptivos.
- Enfocados.
- Faciles de revisar.

No mezclar cambios no relacionados.

No combinar grandes cambios de UI, arquitectura y contenido en un solo commit salvo que el usuario lo pida explicitamente.

No commitear output generado, carpetas de dependencias, artefactos de build ni logs locales.

Nunca revertir cambios del usuario salvo instruccion explicita.

---

## 12. Pull Requests

Cada pull request debe explicar:

- Que cambio.
- Por que cambio.
- Que documentos fueron leidos.
- Que documentos fueron actualizados.
- Impacto de producto.
- Impacto de diseno.
- Impacto de arquitectura.
- Impacto de accesibilidad.
- Cobertura responsive.
- Riesgos y trabajo pendiente.

Para cambios visuales, el PR debe incluir screenshots o notas de verificacion visual en breakpoints afectados.

Para cambios de producto o contenido, el PR debe identificar fuente y nivel de confianza cuando aplique.

---

## 13. Calidad

No entregar codigo que:

- No compila.
- Rompe lint.
- Rompe build.
- Rompe responsive.
- Rompe accesibilidad.
- Viola el Design System.
- Introduce arquitectura no documentada.
- Introduce comportamiento de producto no documentado.
- Presenta contenido mock como oficial.

La calidad no es una etapa final de pulido. Es parte del trabajo.

---

## 14. Definicion de terminado

Una tarea esta terminada solo cuando:

- Compila.
- Lint pasa.
- Build pasa.
- Responsive fue revisado.
- Accesibilidad fue revisada.
- La documentacion relevante esta actualizada.
- `docs/09_DECISIONS.md` fue actualizado si hubo una decision significativa.
- `docs/10_TODO.md` fue actualizado si cambio estado de tareas.
- El resultado respeta las referencias visuales oficiales en `design/` y el Design System.

Si algun punto no aplica, explicar por que.

Si algun punto no pudo completarse, explicar el bloqueo con claridad.

---

## 15. Restricciones especificas para IA

Los agentes deben ser conservadores al inventar.

Permitido:

- Mejorar claridad.
- Refactorizar dentro de la arquitectura existente.
- Reutilizar patrones documentados.
- Agregar documentacion faltante.
- Proponer pasos de implementacion.
- Pedir assets oficiales faltantes.

No permitido:

- Inventar funcionalidades no documentadas.
- Inventar requisitos oficiales de tramites.
- Inventar sistemas visuales.
- Inventar comportamiento backend.
- Inventar integraciones.
- Inventar certeza legal.
- Ignorar documentacion porque el codigo existente parece mas facil.

Ante incertidumbre, elegir la opcion que preserve confianza, claridad y mantenibilidad.

---

## 16. Principio final

ChileHub no es solo un sitio web.

Es un sistema de producto destinado a crecer durante anos.

Todo agente debe dejar el repositorio mas facil de entender, mas facil de mantener y mas cercano a la vision oficial del producto.
