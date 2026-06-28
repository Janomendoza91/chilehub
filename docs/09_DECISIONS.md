# ChileHub - Decision Log

Este documento registra decisiones importantes del proyecto. Toda decision que afecte producto, diseno, arquitectura, stack o roadmap debe quedar documentada aqui.

## Formato

```text
## YYYY-MM-DD - Titulo de la decision

Status: Proposed | Accepted | Rejected | Superseded

Context:
Descripcion del problema o situacion.

Decision:
Que se decidio.

Rationale:
Por que se decidio.

Consequences:
Impactos positivos, negativos y tradeoffs.

Owner:
Responsable de la decision.
```

## 2026-06-27 - Documentacion antes de desarrollo

Status: Accepted

Context:
ChileHub requiere construir una base de producto seria antes de seguir escribiendo codigo. El proyecto debe trabajar con documentos como fuente de verdad.

Decision:
Crear documentacion inicial en `/docs` antes de continuar con nuevas lineas de codigo de producto.

Rationale:
Una documentacion clara evita reinterpretaciones visuales, cambios arbitrarios y deuda de producto.

Consequences:
Las futuras decisiones de UI, arquitectura y roadmap deben respetar estos documentos y la imagen oficial.

Owner:
Product Team.

## 2026-06-27 - La imagen oficial manda

Status: Accepted

Context:
ChileHub tiene una imagen oficial que representa el producto aprobado.

Decision:
La imagen oficial tiene prioridad absoluta sobre interpretaciones, preferencias visuales o decisiones textuales ambiguas.

Rationale:
El objetivo es reproducir el producto aprobado, no crear una variante inspirada.

Consequences:
Toda implementacion visual debe validarse contra la imagen. Si la documentacion contradice la imagen, se actualiza la documentacion.

Owner:
Design/Product.

## 2026-06-27 - Auditoria de documentacion expande gobernanza

Status: Accepted

Context:
La documentacion original cubria producto, diseno, arquitectura y estandares de implementacion, pero no definia propiedad documental, verificacion de contenido/datos, criterios de QA, accesibilidad ni restricciones de privacidad/seguridad.

Decision:
Agregar indice de documentacion, gobierno de contenido/datos, criterios de calidad/accesibilidad y principios de seguridad/privacidad. Aclarar roles documentales en archivos existentes.

Rationale:
ChileHub dependera de confianza, mantenibilidad y consistencia durante anos. Estas areas deben documentarse antes de escalar el producto.

Consequences:
El desarrollo futuro debe consultar mas que los documentos visuales. Contenido, accesibilidad y seguridad pasan a ser restricciones de primer nivel.

Owner:
CTO / Principal Software Architect.

## 2026-06-27 - Principio de arquitectura server-first

Status: Accepted

Context:
ChileHub usa Next.js App Router y tendra muchas superficies estaticas o intensivas en contenido. El exceso de Client Components aumentaria bundle size y complejidad.

Decision:
Usar Server Components por defecto para composicion estatica y Client Components solo para interaccion, animacion o comportamiento exclusivo del navegador.

Rationale:
Esto mantiene el producto rapido, mantenible y mas facil de escalar.

Consequences:
Framer Motion y el comportamiento interactivo deben aislarse en limites client pequenos.

Owner:
Engineering.

## 2026-06-27 - Reposicionamiento como portal inteligente de preparacion

Status: Accepted

Context:
La documentacion inicial sugeria que ChileHub ayudaba a completar o ejecutar tramites. Esa premisa era incorrecta y creaba riesgo de percepcion, confianza y responsabilidad.

Decision:
Reposicionar ChileHub como portal inteligente que organiza y simplifica procesos importantes de la vida en Chile. ChileHub no hace tramites, no ejecuta solicitudes, no reemplaza instituciones ni profesionales y no representa fuentes oficiales. Su rol es ayudar al usuario a entender que necesita, que documentos preparar, cuanto podria costar, cuanto podria demorar, que errores evitar, donde continuar y que cambia segun su caso.

Rationale:
El valor real de ChileHub es vender claridad, confianza y organizacion, no ejecucion. Este posicionamiento reduce riesgo legal, mejora confianza y diferencia el producto de portales institucionales.

Consequences:
Toda documentacion, copy, UX y futura UI debe evitar frases como "completar el tramite" o "hacer el tramite" cuando impliquen ejecucion dentro de ChileHub. El lenguaje correcto es preparar, entender, organizar, revisar, comparar y llegar listo.

Owner:
Product / Design / Architecture.

## 2026-06-27 - V2 navegable con datos locales referenciales

Status: Accepted

Context:
ChileHub necesita pasar de landing visual a producto usable sin introducir backend, autenticacion, APIs, cobros ni ejecucion de tramites.

Decision:
Implementar una primera version navegable con rutas internas para tramites, guias, calculadoras, busqueda frontend y paginas informativas de cuenta/guardados/contacto. Los datos viven localmente en `data/`, incluyen fuentes y fecha de revision, y se presentan siempre como informacion referencial recopilada con IA.

Rationale:
Esto permite probar el valor central del producto: que una persona encuentre un proceso, entienda que preparar, revise errores frecuentes y sepa donde continuar fuera de ChileHub.

Consequences:
La experiencia ya es navegable, pero no debe presentarse como fuente oficial, tramite ejecutable, cotizacion final, asesoría profesional ni servicio pagado. El siguiente paso es fortalecer gobierno editorial, ampliar cobertura y definir validacion de fuentes antes de escalar contenido.

Owner:
Product / Engineering.

## 2026-06-27 - Montos estimados con revision mensual

Status: Accepted

Context:
Las fichas de tramite eran utiles visualmente, pero demasiado genericas para tomar decisiones. El usuario necesita rangos realistas de costo, plazo y bloqueos para prepararse mejor.

Decision:
Mostrar montos y rangos estimados en las fichas cuando aporten claridad, siempre marcados como referenciales, con fecha de revision y proxima revision mensual. Cuando el costo dependa de municipalidad, institucion, tasacion, canal o caso particular, se debe mostrar un rango practico y explicar que variable lo mueve.

Rationale:
La promesa de ChileHub es reducir incertidumbre. Evitar todos los montos por miedo a variacion vuelve el producto poco util. Mostrar rangos honestos con revision periodica entrega mas valor sin fingir oficialidad.

Consequences:
El contenido requiere mantenimiento mensual. Ningun monto debe presentarse como cobro de ChileHub, precio oficial definitivo ni garantia. Las fuentes deben revisarse antes de ampliar cobertura.

Owner:
Product / Content.

## 2026-06-28 - Guias rapidas como fichas accionables

Status: Accepted

Context:
Las guias rapidas entregaban orientacion general, pero su estructura de secciones y checklist era insuficiente para cumplir la promesa de reducir incertidumbre antes de procesos importantes.

Decision:
Elevar el estandar editorial de guias rapidas para incluir conclusiones clave, rangos o variables a revisar, plan de 5 minutos, errores frecuentes y situaciones donde una guia no basta. La guia debe ayudar a tomar una siguiente accion concreta, no solo explicar contexto.

Rationale:
ChileHub compite contra busqueda generica y contenido superficial. La ventaja debe estar en ordenar la decision del usuario con informacion practica, compacta y honesta sobre incertidumbre.

Consequences:
Las nuevas guias requieren mas criterio editorial y mantencion. Cuando una guia toque costos, plazos, derechos, obligaciones o excepciones, debe marcarse como referencial y apuntar a fuentes oficiales o profesionales cuando corresponda.

Owner:
Product / Content.

## 2026-06-28 - Enriquecimiento referencial antes de verificacion individual

Status: Accepted

Context:
ChileHub necesita cubrir muchos procesos con mas utilidad que una tarjeta generica, pero verificar manualmente cada requisito, monto y excepcion contra una pagina oficial concreta requiere un flujo editorial por lotes.

Decision:
Enriquecer todos los tramites generados con preparacion contextual por categoria, canal, documentos, costos estimados, plazos, errores frecuentes, alertas, variaciones y preguntas para la institucion. Mantener la distincion entre contenido referencial enriquecido y contenido oficialmente verificado caso a caso.

Rationale:
La experiencia gana claridad inmediata sin inventar certeza oficial. El usuario recibe una mejor preparacion, pero sigue viendo fuentes, fechas de revision, costos referenciales y advertencias de variacion.

Consequences:
La cobertura amplia queda util para exploracion y preparacion, pero los tramites de mayor uso deben pasar por verificacion oficial individual antes de considerarse contenido validado.

Owner:
Product / Content.

## Backlog de decisiones pendientes

- Definir archivo fuente oficial de la imagen.
- Definir tokens exactos de color desde la imagen.
- Ampliar set inicial de tramites V2.
- Refinar modelo de datos de tramite con estados editoriales.
- Definir estrategia de autenticacion futura.
- Definir estrategia de contenido verificado.
- Definir estrategia comercial SaaS.
- Definir politica de versionado de contenido.
- Definir criterios de cobertura inicial de tramites.
