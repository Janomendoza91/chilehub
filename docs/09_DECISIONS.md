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

## 2026-06-28 - Enriquecimiento transversal de contenido

Status: Accepted

Context:
Algunas guias y tramites tenian contenido rico, pero otras fichas mantenian una estructura demasiado simple. Eso producia una experiencia inconsistente y debilitaba la promesa de claridad.

Decision:
Aplicar una capa editorial transversal que enriquece tramites y guias con contexto por categoria, preguntas clave, errores frecuentes, variaciones, proxima accion y criterios de ayuda externa. El enriquecimiento complementa los datos manuales sin reemplazar la verificacion oficial individual.

Rationale:
ChileHub debe entregar valor incluso cuando el usuario entra a una ficha secundaria. La consistencia editorial permite escalar cobertura sin volver a contenido generico.

Consequences:
Los datos base siguen siendo la fuente del contenido especifico, pero toda ficha publicada recibe un minimo de utilidad accionable. La verificacion oficial por ficha sigue siendo necesaria para declarar contenido como validado.

Owner:
Product / Content.

## 2026-06-28 - Espacio personal con Google y persistencia local

Status: Accepted

Context:
Los accesos "Ingresar" y "Registrarte" no tenian finalidad clara mientras ChileHub fuera gratuito y sin backend. El usuario necesita valor concreto si existe un espacio personal.

Decision:
Preparar acceso con Google mediante Supabase Auth para que el producto se comporte como una app web normal. Google queda controlado por `NEXT_PUBLIC_ENABLE_GOOGLE_AUTH` y se activara cuando ChileHub este publicado en Vercel con dominio final autorizado. En esta etapa, guardar tramites, checklist de documentos, historial, recordatorios, documentos pendientes, alertas de revision y seguimiento mensual sigue persistiendo localmente en el navegador. No se suben documentos, no se cobra y no se sincroniza preparacion entre dispositivos todavia.

Rationale:
Esto da sentido inmediato al acceso personal sin inventar contrasenas ni una cuenta falsa. Permite validar valor de personalizacion con identidad real antes de guardar datos sensibles o sincronizar estado en backend.

Consequences:
Requiere configurar `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_ENABLE_GOOGLE_AUTH=true`, Google como provider en Supabase Auth y el redirect URI del dominio definitivo en Google Cloud. Los datos de preparacion pueden perderse si el usuario borra almacenamiento del navegador o cambia de dispositivo. Cualquier sincronizacion futura requerira revision de privacidad, seguridad y arquitectura.

Owner:
Product / Engineering.

## 2026-06-28 - Mockup de venta de auto como flujo real

Status: Accepted

Context:
La landing mostraba una experiencia mobile para vender un auto con progreso, documentos, contrato, finalizacion y oficinas cercanas, pero esa experiencia no existia como producto real.

Decision:
Agregar un flujo guiado real en la ficha `vender-un-auto` que replica esa promesa: paso a paso, documentos marcables, pauta referencial visible, siguiente accion y oficinas donde continuar fuera de ChileHub.

Rationale:
Los mockups de la landing deben representar capacidades reales o claramente futuras. Convertir este caso en flujo usable mejora confianza y muestra el valor central de ChileHub.

Consequences:
El flujo queda acotado a venta de auto. La pauta es referencial, no oficial ni descargable. Otros tramites podran adoptar el mismo patron cuando exista contenido especifico suficiente.

Owner:
Product / Engineering.

## 2026-06-29 - Oficinas cercanas referenciales

Status: Accepted

Context:
El flujo real de venta de auto y los mockups de landing muestran oficinas cercanas como parte del cierre del proceso, pero la pagina `/oficinas` solo mostraba canales externos generales.

Decision:
Crear una experiencia de oficinas cercanas referenciales para Registro Civil, conectada desde el flujo de venta de auto y desde los mockups mobile. La vista destaca una opcion mas cercana, muestra distancias referenciales y envia al sitio oficial para confirmar direccion, horario y disponibilidad.

Rationale:
La promesa visual debe sentirse real dentro del producto. Al mismo tiempo, ChileHub no debe fingir geolocalizacion, agenda oficial ni disponibilidad en vivo.

Consequences:
La pagina `/oficinas` combina una experiencia contextual para venta de auto con cuatro canales externos generales. Las distancias y ubicaciones se presentan como referenciales hasta integrar datos oficiales o geolocalizacion validada.

Owner:
Product / Engineering.

## 2026-06-29 - Paso a paso interactivo para tramites

Status: Accepted

Context:
Las fichas de tramite mostraban documentos y pasos como listas estaticas. El flujo de venta de auto demostraba una experiencia mas clara: progreso, paso actual, documentos marcables y siguiente accion.

Decision:
Aplicar un flujo guiado reutilizable a las fichas de tramite generales usando los datos `steps` y `documents` existentes. `vender-un-auto` mantiene su flujo especifico porque incluye pauta contextual y oficinas cercanas.

Rationale:
ChileHub debe sentirse como una app de preparacion, no como una wiki. El paso a paso reduce texto visible, ordena la accion y hace que el usuario entienda que revisar ahora y que viene despues.

Consequences:
Cada tramite publicado debe tener pasos y documentos utiles. Si una ficha tiene contenido pobre, el flujo lo hara mas evidente y debera enriquecerse editorialmente.

Owner:
Product / Engineering.

## 2026-06-29 - Informacion por capas en mobile

Status: Accepted

Context:
Las fichas de tramite acumulan costos, pasos, documentos, alertas, preguntas, variaciones, errores y fuentes. En mobile, mostrar todo como cards consecutivas genera una experiencia larga y pesada.

Decision:
Usar informacion por capas: primero plan de 5 minutos y paso actual; luego pestañas compactas para revisar antes de empezar, alertas, preguntas, cambios y errores. No se elimina informacion critica, se reorganiza para lectura progresiva.

Rationale:
ChileHub debe sentirse como app de preparacion, no como documento largo. El usuario necesita saber que mirar ahora, no leer todo al mismo tiempo.

Consequences:
Los modulos de contenido denso deben preferir tabs, segmentacion o estados compactos en mobile. Si una ficha necesita mucho texto, debe estar justificado por una decision de preparacion concreta.

Owner:
Product / UX / Engineering.

## 2026-06-29 - Expansion masiva enriquecida de tramites y guias

Status: Accepted

Context:
ChileHub necesita suficiente cobertura para que la busqueda y las categorias se sientan utiles. Agregar solo unas pocas fichas por categoria deja el producto con apariencia de demo.

Decision:
Agregar 10 tramites nuevos por categoria principal y generar 10 guias rapidas relacionadas por categoria desde esos nuevos procesos. El contenido se mantiene como enriquecimiento referencial: costos, plazos, documentos, pasos, errores y fuentes orientativas, sin declararse verificado oficialmente caso a caso.

Rationale:
La cobertura amplia mejora exploracion, busqueda y percepcion de utilidad. Generar guias desde procesos concretos evita guias genericas desconectadas de acciones reales.

Consequences:
El catalogo crece de forma importante y requiere priorizar verificacion oficial individual para los procesos de mayor demanda antes de lanzamiento publico fuerte.

Owner:
Product / Content / Engineering.

## 2026-06-29 - Capa editorial de confirmacion

Status: Accepted

Context:
Aunque los tramites y guias tenian costos, plazos, documentos y pasos, seguian pudiendo sentirse como informacion general. La utilidad aumenta cuando el usuario sabe que confirmar antes de pagar, firmar, reservar hora o continuar fuera de ChileHub.

Decision:
Agregar una capa editorial transversal con punto critico, checklist de confirmacion, escenarios practicos y preguntas para la fuente. Esta capa se genera desde datos existentes y se presenta como preparacion referencial, no como verificacion oficial definitiva.

Rationale:
ChileHub debe ayudar a evitar errores concretos. El usuario necesita saber que dato podria bloquear su caso y que pregunta hacer en la fuente oficial.

Consequences:
Cada ficha y guia queda mas accionable. La verificacion oficial individual sigue siendo necesaria para transformar contenido referencial en contenido validado.

Owner:
Product / Content / Engineering.

## 2026-06-29 - SEO tecnico base

Status: Accepted

Context:
ChileHub ya tiene muchas paginas indexables de tramites y guias, pero faltaban senales tecnicas basicas para buscadores: sitemap, robots, canonical, metadata social, noindex para paginas locales y datos estructurados.

Decision:
Centralizar configuracion SEO, agregar `robots.txt`, `sitemap.xml`, canonical, Open Graph, Twitter metadata, schema JSON-LD para home/tramites/guias y `noindex` para paginas privadas o de estado local. El dominio canonico se toma desde `NEXT_PUBLIC_SITE_URL` y cae a `https://chilehub.cl`.

Rationale:
El potencial SEO de ChileHub depende de que Google descubra e interprete correctamente cientos de paginas long-tail sin indexar superficies de cuenta, busqueda interna o estado local.

Consequences:
Al publicar en Vercel se debe configurar `NEXT_PUBLIC_SITE_URL` con el dominio final. Las paginas referenciales quedan listas para indexacion, pero la verificacion editorial individual sigue siendo necesaria para competir en consultas sensibles.

Owner:
Product / Engineering.

## 2026-06-29 - Hardening tecnico de seguridad

Status: Accepted

Context:
ChileHub empieza a comportarse como app web con espacio personal local y Supabase Auth preparado, aunque todavia no tiene backend propio, pagos, uploads ni APIs. Antes de activar dominio, Google o persistencia remota, la superficie publica debe tener defensas base.

Decision:
Agregar headers de seguridad desde `next.config.ts`, desactivar `X-Powered-By`, limitar permisos del navegador, bloquear framing, definir CSP con origenes permitidos para el producto actual, aplicar HSTS en produccion, limpiar y limitar texto guardado localmente, y agregar un script de auditoria de dependencias productivas.

Rationale:
El producto vende confianza. Aunque la superficie tecnica actual es pequena, una postura defensiva temprana evita que futuras integraciones externas, auth o datos personales se agreguen sin limites claros.

Consequences:
Toda integracion externa futura debe revisar CSP, privacidad y origenes permitidos. La persistencia local sigue siendo solo para datos no sensibles; datos personales sincronizados requieren backend seguro, RLS, politicas de retencion y revision explicita.

Owner:
Engineering / Security / Product.

## 2026-06-29 - Google Analytics controlado por entorno

Status: Accepted

Context:
ChileHub necesita medir trafico y uso basico cuando se conecte el dominio final en Vercel, pero no debe convertir analitica en recoleccion de datos personales ni romper la CSP de seguridad.

Decision:
Agregar Google Analytics mediante `NEXT_PUBLIC_GA_MEASUREMENT_ID`, sin dependencia nueva y sin cargar scripts cuando la variable no existe. Se actualiza CSP para permitir los origenes minimos de GA4 y Google Tag Manager.

Rationale:
La medicion ayuda a priorizar contenido y UX, pero debe estar separada de datos sensibles y de la preparacion personal local.

Consequences:
Antes de produccion se debe configurar el Measurement ID en Vercel. Cualquier evento personalizado futuro debe revisarse para no enviar datos personales, recordatorios, documentos, RUT, correos ni texto ingresado por usuarios.

Owner:
Product / Engineering / Security.

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
