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

## 2026-06-29 - Refuerzo SEO para dominio final

Status: Accepted

Context:
ChileHub ya tiene sitemap, robots, metadata y datos estructurados, pero el dominio final del proyecto es `chilehub.info` y las senales sociales/editoriales necesitaban mayor consistencia antes de indexacion publica.

Decision:
Actualizar el dominio canonico por defecto a `https://chilehub.info`, agregar keywords controladas por ruta, definir metadata global de publisher/creator/category, generar una imagen Open Graph propia, y usar fechas editoriales estables en `sitemap.xml` y schema `Article` en vez de fechas de build.

Rationale:
Google y plataformas sociales necesitan senales consistentes para descubrir, entender y compartir paginas long-tail. Usar fechas de contenido evita que el sitemap parezca actualizado artificialmente en cada deploy y protege confianza editorial.

Consequences:
Las paginas indexables tienen mejor metadata sin cambiar UI. Las paginas privadas o de estado local siguen con `noindex`. El contenido sensible del modo oscuro no se fuerza en sitemap hasta tener una estrategia editorial/SEO especifica.

Owner:
Product / Engineering / Content.

## 2026-06-30 - Vanity domain para Supabase Auth

Status: Accepted

Context:
El login con Google funcionaba mediante Supabase Auth, pero la pantalla de seleccion de cuenta mostraba el identificador tecnico `zztuntqhtsfwubuwgyhj.supabase.co`, lo que se percibe menos confiable y menos alineado con la experiencia premium de ChileHub.

Decision:
Activar el vanity subdomain de Supabase `chilehub.supabase.co` y actualizar `NEXT_PUBLIC_SUPABASE_URL` en local y Vercel para que OAuth use `https://chilehub.supabase.co/auth/v1/callback`. Se preparo DNS `auth.chilehub.info` como CNAME hacia Supabase, pero el custom domain propio queda pendiente hasta habilitar el add-on de Custom Domain en Supabase.

Rationale:
El vanity domain reduce friccion visual y reemplaza un identificador tecnico por una marca reconocible sin introducir una migracion de Auth mas grande. El custom domain `auth.chilehub.info` seria la solucion mas premium, pero requiere habilitacion de billing/add-on fuera del repositorio.

Consequences:
Google Cloud debe autorizar `https://chilehub.supabase.co/auth/v1/callback` como redirect URI. Mientras no exista el add-on de Custom Domain en Supabase, Google seguira mostrando `chilehub.supabase.co` en vez de `auth.chilehub.info`.

Owner:
Product / Engineering / Security.

## 2026-06-30 - Hardening incremental de auth, analitica y estado local

Status: Accepted

Context:
ChileHub ya tenia headers defensivos, Supabase Auth con Google y persistencia local no sensible. Al activar autenticacion publica, conviene reducir superficie antes de incorporar datos remotos o flujos mas sensibles.

Decision:
Restringir la URL publica de Supabase a origenes HTTPS bajo `supabase.co`, limitar el redirect OAuth a rutas internas permitidas, reducir la CSP de Supabase desde wildcard a origen configurado, evitar enviar query strings a Google Analytics, agregar headers defensivos adicionales y normalizar estrictamente el estado leido desde `localStorage`.

Rationale:
Estas defensas reducen riesgo de configuracion incorrecta, open redirects accidentales, filtracion de parametros por analitica y manipulacion local del estado sin cambiar la experiencia del usuario ni introducir dependencias nuevas.

Consequences:
Si ChileHub migra a un custom domain propio de Supabase Auth como `auth.chilehub.info`, la validacion de origen y la CSP deben actualizarse junto con `NEXT_PUBLIC_SUPABASE_URL`. Eventos analiticos futuros no deben reintroducir parametros o datos escritos por usuarios sin revision de privacidad.

Owner:
Engineering / Security / Product.

## 2026-06-30 - Paginas publicas de confianza y health check

Status: Accepted

Context:
ChileHub ya tiene login con Google preparado y una postura de privacidad documentada internamente, pero el sitio publico necesitaba explicar claramente alcance, privacidad, terminos y canal de reportes antes de empujar una adopcion mas amplia.

Decision:
Agregar rutas publicas `/privacidad` y `/terminos`, enlazarlas desde el footer, incluirlas en `sitemap.xml`, publicar `/.well-known/security.txt`, crear `/api/health` como endpoint minimo para monitoreo externo y agregar un smoke test de seguridad sin dependencias nuevas.

Rationale:
Las paginas publicas de confianza reducen ambiguedad para usuarios y revisores externos. `security.txt` facilita reportes responsables sin exponer correos o sistemas internos, y el health check permite medir disponibilidad sin tocar flujos de usuario.

Consequences:
Las paginas son informativas y no reemplazan revision legal formal. Si ChileHub empieza a guardar datos remotos, cobrar, recibir documentos o crear integraciones sensibles, privacidad y terminos deben revisarse antes del lanzamiento. El smoke test valida defensas basicas, pero no reemplaza pentest, revision legal ni auditoria de seguridad completa.

Owner:
Product / Engineering / Security.

## 2026-06-30 - Branding instalable y contacto accionable

Status: Accepted

Context:
ChileHub ya tenia paginas de confianza, health check y security.txt, pero faltaban senales tecnicas de app moderna como manifest e iconos, y la pagina de contacto seguia describiendo canales futuros en vez de orientar reportes concretos.

Decision:
Agregar `manifest.webmanifest`, iconos generados para navegador/iOS, JSON-LD de organizacion en el layout, ampliar el smoke test para validar manifest, sitemap y paginas de confianza, y convertir `/contacto` en una ruta accionable para reportes de contenido, sugerencias y seguridad sin solicitar datos sensibles.

Rationale:
Estas mejoras aumentan confianza percibida, instalabilidad y verificabilidad operativa sin agregar dependencias ni recolectar datos nuevos. Contacto debe orientar al usuario incluso antes de existir un formulario o backend.

Consequences:
Los iconos generados son suficientes para una etapa inicial, pero pueden reemplazarse por assets oficiales cuando exista identidad visual final. Si se agrega formulario real, debe pasar por revision de privacidad y seguridad antes de recibir datos.

Owner:
Product / Engineering / Design / Security.

## 2026-06-30 - Metodologia editorial publica y llms.txt

Status: Accepted

Context:
ChileHub necesita competir en confianza contra contenido generico y contra fuentes oficiales sin fingir oficialidad. La gobernanza editorial existia en documentos internos, pero no habia una pagina publica que explicara como se clasifican fuentes, revisiones y limites.

Decision:
Publicar `/metodologia` con principios y estados editoriales, enlazarla desde footer y sitemap, y agregar `/llms.txt` para declarar alcance, paginas canonicas y uso responsable frente a asistentes o sistemas de recuperacion.

Rationale:
La metodologia publica ayuda a usuarios, buscadores y revisores a entender que ChileHub prepara y ordena, pero no reemplaza confirmacion oficial. `llms.txt` reduce ambiguedad para consumo automatizado sin agregar integraciones ni datos nuevos.

Consequences:
La pagina de metodologia no convierte contenido referencial en verificado. La verificacion oficial individual sigue pendiente para procesos prioritarios y debe reflejarse en datos cuando se implemente.

Owner:
Product / Content / Engineering.

## 2026-06-30 - Presupuesto y reduccion del bundle inicial

Status: Accepted

Context:
Lighthouse reporto JavaScript antiguo en el framework chunk de Next.js y CSS render-blocking inicial de aproximadamente 12 KiB transferidos. El bloque de polyfills detectado corresponde a codigo interno de Next, no a codigo de producto de ChileHub. La portada tambien estaba cargando Framer Motion y el catalogo completo de contenido para animaciones y sugerencias del hero.

Decision:
Agregar `performance:budget` para controlar CSS raw/gzip y JS compartido raw/gzip despues de cada build. Remover Framer Motion de las animaciones de revelado de la landing y evitar que la portada importe `data/content`; el hero usa sugerencias curadas livianas y la busqueda completa queda en `/buscar`. Diferir Google Analytics con `lazyOnload`, desactivar prefetch automatico en links de landing/header y cargar Inter sin preload para no competir con FCP/LCP mobile. Se probo subir target TypeScript y declarar browserslist moderna, pero se descarto porque en Vercel amplio el chunk compartido al activar una ruta de compatibilidad mas pesada.

Rationale:
La mejora mas confiable es reducir trabajo inicial propio: menos dependencias client y menos datos serializados en la portada. No se parchea `node_modules`, no se fuerza browserslist y no se difiere la hoja CSS principal porque eso podria introducir fragilidad o flashes visuales. Un presupuesto automatizado captura regresiones reales de peso antes de deploy.

Consequences:
El aviso de JavaScript antiguo puede seguir apareciendo mientras Next incluya polyfills defensivos internos. El CSS principal sigue siendo render-blocking por diseno, pero queda bajo presupuesto y mantiene estabilidad visual. La portada mantiene sugerencias destacadas; el catalogo completo se carga solo en rutas donde aporta valor directo. Lighthouse mobile subio de 83 a 92 en la medicion local contra produccion, con TBT de 310 ms a 170 ms y LCP/FCP de 2,9 s a 2,5 s.

Owner:
Engineering / Performance.

## 2026-06-30 - Jerarquia clara en fichas de tramites y guias

Status: Accepted

Context:
Las fichas de tramite acumulaban informacion util, pero algunas zonas densas eran dificiles de escanear en mobile. En `ProcedureInsightTabs`, la fila horizontal de tabs podia dejar opciones como "Errores" cortadas o fuera de lectura clara, y varias superficies internas no tenian dark mode completo.

Decision:
Reordenar la ficha de tramite para priorizar: resumen, orden recomendado, preparacion guiada paso a paso, espacio personal, costos, revision por tema y fuentes. Cambiar `ProcedureInsightTabs` a segmentos en grilla responsive, mostrar todos los puntos de la pestaña activa y normalizar light/dark en tramites, flujo especial de vender auto y guias. Agregar una ruta rapida al inicio de cada guia para explicar como leerla antes de entrar en bloques extensos.

Rationale:
ChileHub debe ayudar a entender y preparar, no solo listar informacion. Un orden explicito reduce carga cognitiva, evita scroll exploratorio y hace que errores, alertas, variaciones y preguntas sean encontrables sin depender de una fila horizontal comprimida.

Consequences:
Las fichas crecen levemente en altura, pero ganan claridad y eliminan truncamientos en mobile. La informacion sigue siendo referencial y no cambia el contenido editorial base.

Owner:
Product / UX / Engineering.

## 2026-06-30 - SEO estructurado para catalogos y fichas

Status: Accepted

Context:
ChileHub ya generaba metadata, canonicals, Open Graph, Twitter cards y sitemap para tramites y guias, pero las paginas necesitaban senales estructuradas mas especificas para buscadores a medida que el catalogo crece.

Decision:
Centralizar helpers SEO para descripciones y JSON-LD, mantener `Article` por ficha, agregar `HowTo` a tramites con pasos y documentos de preparacion, y agregar `CollectionPage` con `ItemList` en los indices de tramites y guias. Las descripciones se normalizan a longitud segura y siguen marcando el contenido como preparacion referencial.

Rationale:
Cada tramite y guia debe ser entendible por buscadores como una pagina unica, accionable y trazable sin fingir oficialidad. `HowTo` aplica al flujo de preparacion, no a ejecucion oficial del tramite, y los catalogos necesitan declarar sus items principales.

Consequences:
Los costos y plazos referenciales no se declaran como campos estructurados rigidos cuando son texto variable. Cualquier expansion SEO futura debe preservar canonicals, sitemap y limites de contenido referencial definidos en gobierno editorial.

Owner:
Product / Engineering / Content.

## 2026-06-30 - Ayuda flotante y contacto accionable sin backend

Status: Accepted

Context:
El boton flotante "Ayuda" existia como accion visual y luego se conecto a busqueda, pero la experiencia esperada era un patron tipo chatbot que ayudara a encontrar tramites o guias sin sacar al usuario de la pagina. La pagina de contacto tambien tenia tarjetas que orientaban, pero no preparaban un reporte real.

Decision:
Convertir "Ayuda" en un asistente flotante local disponible en todo el sitio, con input, sugerencias y resultados rapidos de tramites o guias. Convertir `/contacto` en un formulario client-side que arma reportes estructurados, permite copiarlos y genera un email prellenado para enviar a ChileHub desde el cliente de correo del usuario. Los reportes de seguridad se separan visualmente para evitar publicar detalles explotables.

Rationale:
ChileHub necesita ayuda inmediata sin introducir un chatbot remoto, backend, IA ni recoleccion de datos. La busqueda local resuelve la necesidad principal de encontrar procesos rapidamente, y el reporte estructurado mejora la accionabilidad de contacto sin prometer un sistema de soporte que todavia no existe.

Consequences:
La ayuda flotante aumenta el JavaScript de cliente porque carga el catalogo local para buscar. Si el catalogo crece mucho mas, debera moverse a un indice liviano o busqueda dedicada. Contacto no guarda datos en ChileHub; el envio depende del cliente de correo del usuario y debe evitar informacion sensible.

Owner:
Product / UX / Engineering / Security.

## 2026-06-30 - Expansion fidedigna con fuentes primarias

Status: Accepted

Context:
ChileHub necesita seguir ampliando cobertura sin degradar confianza. El usuario pidio mas tramites y guias enriquecidas en modo claro y oscuro, con informacion fidedigna.

Decision:
Agregar una nueva tanda separada de 20 procesos en modo claro, distribuidos por categorias existentes, y 20 guias nuevas de modo oscuro. Cada item usa fuentes primarias u oficiales como Registro Civil, SII, Direccion del Trabajo, SERNAC, SUBTEL, SAG, Fonasa, Superintendencia de Salud, Mercado Publico, INAPI, CMF, CSIRT Chile, PDI, Ministerio Publico, ISP o documentacion oficial de plataformas.

Rationale:
Separar esta expansion en archivos dedicados mantiene el catalogo mantenible y evita seguir inflando seeds anteriores. Las fuentes primarias permiten mayor confianza sin afirmar que cada costo, plazo o requisito fue verificado punto por punto para todos los casos.

Consequences:
El contenido nuevo se publica como preparacion referencial con fuente primaria visible. No debe presentarse como tramite ejecutable ni como informacion oficial definitiva. La verificacion oficial individual por ficha sigue siendo necesaria para declarar una ficha como verificada.

Owner:
Product / Content / Engineering.

## 2026-06-30 - Biblioteca de tramites por categorias

Status: Accepted

Context:
La pagina de tramites tenia buscador local, texto de filtro y botones de categoria. En una biblioteca grande, esa mezcla hacia que la pantalla se sintiera mas como buscador generico que como exploracion guiada.

Decision:
Quitar el buscador/filtro textual de `/tramites` y dejar solo botones de categoria con paginacion. La busqueda por nombre, duda o texto libre queda concentrada en `/buscar` y en el asistente flotante.

Rationale:
La arquitectura de informacion indica que ChileHub debe permitir buscar, pero no parecer un buscador. En la biblioteca de tramites, las categorias ayudan a explorar por tema y reducen ruido visual.

Consequences:
Los usuarios que sepan exactamente que escribir deben usar la busqueda global o el asistente. La pagina `/tramites` queda optimizada para exploracion por categoria.

Owner:
Product / UX / Engineering.

## 2026-06-30 - Escalar catalogo a 1000+ tramites

Status: Accepted

Context:
ChileHub debe ampliar su cobertura hasta una biblioteca de al menos 1000 tramites o procesos preparatorios. El catalogo previo tenia cerca de 440 fichas publicadas y ya usaba enriquecimiento referencial con fuentes primarias, categorias y guias derivadas.

Decision:
Agregar una expansion nacional estructurada con 616 procesos adicionales agrupados por dominios institucionales y nuevas categorias cuando aportan claridad: identidad, migracion, educacion, telecomunicaciones, servicios basicos, finanzas, propiedad intelectual, agricultura y alimentos, medio ambiente, beneficios sociales, justicia, seguridad, viajes y compras publicas, entre otras. Cada dominio define fuente primaria, canal, documentos base, costo/plazo referencial y advertencia comun; cada item aporta slug, titulo y resumen especifico.

Rationale:
Usar dominios generadores evita mantener cientos de objetos repetidos y conserva trazabilidad editorial. La meta se cumple como 1000+ porque truncar categorias para llegar exactamente a 1000 dejaria cobertura artificialmente incompleta.

Consequences:
El contenido nuevo sigue siendo preparacion referencial, no informacion oficial definitiva ni tramite ejecutable dentro de ChileHub. El crecimiento del catalogo puede presionar busqueda, build y bundle; debe monitorearse con build y presupuesto de performance.

Owner:
Product / Content / Engineering.

## 2026-06-30 - Selector compacto de categorias en bibliotecas grandes

Status: Accepted

Context:
Al escalar el catalogo a 1000+ tramites, las categorias de `/tramites` y `/guias` crecieron lo suficiente como para que los chips horizontales se cortaran o quedaran ocultos en pantallas pequenas. La primera correccion con grilla resolvia el corte, pero ocupaba demasiado alto en mobile y no se sentia como un control de app premium.

Decision:
Usar un selector compacto reutilizable para categorias: chips pequenos clickeables en el mismo lugar, mostrando primero categorias principales y una accion "Mas/Menos" persistente para desplegar o contraer el resto. En guias se mantiene el buscador local.

Rationale:
Las categorias son navegacion principal de exploracion, pero no deben dominar la pantalla. Un selector compacto preserva jerarquia, evita overflow horizontal y reduce altura en mobile.

Consequences:
Las categorias principales vuelven a ser pinchables directamente sin ocupar una grilla gigante en mobile. El control debe poder volver a contraerse despues de abrirse. Si a futuro se requiere exploracion visual por categoria, debe ser una seccion dedicada con cards, no una barra de filtros pesada.

Owner:
Product / UX / Engineering.

## 2026-06-30 - Documentos, formularios y respaldos explicitos

Status: Accepted

Context:
Las fichas de tramite indicaban cantidad de documentos y algunos nombres base, pero en catalogos generados seguian quedando demasiado genericas para usuarios que necesitan saber que formulario, certificado, comprobante o respaldo preparar.

Decision:
Enriquecer transversalmente los tramites generados con documentos suplementarios por categoria y por intencion: formularios o solicitudes del canal responsable, comprobantes, folios, certificados, resoluciones, poderes, evidencias, cartolas, boletas, declaraciones, bases o anexos segun el caso. Mostrar en la UI el detalle de cada item y una etiqueta de tipo como formulario, certificado, comprobante, identidad, legal, evidencia o respaldo.

Rationale:
La promesa de ChileHub no es decir solo "te pediran documentos", sino ayudar a anticipar cuales suelen bloquear el proceso y que debe confirmarse en la fuente oficial.

Consequences:
Las listas son mas largas y mas utiles. Siguen siendo referenciales: el nombre exacto, formato, vigencia y canal final deben confirmarse en la institucion responsable.

Owner:
Product / Content / UX / Engineering.

## 2026-06-30 - Indice unico para busqueda local

Status: Accepted

Context:
Despues de escalar el catalogo a 1000+ tramites y cientos de guias, el buscador del hero seguia usando sugerencias curadas antiguas y el asistente flotante usaba su propio indice literal. Eso hacia que entradas nuevas no aparecieran de forma consistente.

Decision:
Crear `data/search-index.ts` como indice local compartido para tramites, guias claras y guias dark. El hero mantiene sugerencias curadas como fallback inicial, pero carga el indice completo de forma diferida cuando el usuario escribe. `/buscar` y el asistente flotante usan el mismo scoring normalizado con soporte para acentos.

Rationale:
Un solo indice reduce deriva entre superficies de busqueda y permite que nuevas tandas de contenido aparezcan automaticamente. La carga diferida evita inflar la landing antes de que el usuario use la busqueda predictiva.

Consequences:
El indice local crece junto al catalogo y debe vigilarse con build y performance budget. Si el catalogo sigue creciendo, convendra generar un indice mas pequeno en build o mover busqueda a una ruta/API dedicada.

Owner:
Product / Engineering.

## 2026-06-30 - Guias dark con temas especificos por dominio

Status: Accepted

Context:
La expansion inicial de 1000 guias dark usaba una matriz de 20 dominios por 50 escenarios transversales. Eso mantenia cobertura, pero generaba combinaciones debiles como apps de citas con recuperacion de cuenta cuando la pagina no desarrollaba ese tema de forma suficiente.

Decision:
Reemplazar la matriz transversal por un generador de temas propios por dominio: cada dominio sensible define 10 temas concretos y 5 momentos editoriales. Las guias resultantes conservan escala 1000+, pero el titulo, resumen, foco y riesgo se construyen desde objetos del mismo dominio. En `/guias`, dark mode usa el mismo sistema de categorias que light mode: "Todas" mas categorias reales, sin grupos ocultos como filtro principal.

Rationale:
ChileHub debe sentirse claro y confiable incluso cuando el catalogo se escala. La cantidad no puede degradar relevancia semantica ni hacer que una ficha prometa resolver un problema que el contenido no aborda.

Consequences:
Las URLs generadas de la tanda dark cambian para reflejar temas especificos. Las guias siguen siendo referenciales y requieren revision individual contra fuentes primarias antes de considerarse verificadas.

Owner:
Product / Content / UX / Engineering.

## 2026-06-30 - Biblioteca dark de guias con patron de tramites

Status: Accepted

Context:
La vista de guias en dark mode seguia usando una seccion editorial con destacadas, buscador interno y un contenedor grande. Despues de escalar a 1000+ guias, esa composicion se sentia menos clara que la biblioteca de tramites en light mode.

Decision:
En dark mode, `/guias` usa el mismo patron de exploracion que `/tramites` en light mode: selector compacto de categorias arriba, grilla directa de cards, paginacion simple y sin bloque de destacadas ni buscador interno dentro de la seccion. La busqueda global y el boton de ayuda siguen cubriendo la busqueda rapida.

Rationale:
Cuando hay muchas entradas, el usuario necesita explorar por categoria y abrir rapido, no navegar una composicion editorial pesada. Un patron compartido mejora consistencia entre bibliotecas y reduce ruido visual.

Consequences:
Las guias dark se presentan como catalogo navegable. El modo claro mantiene su experiencia editorial actual con destacadas y buscador local.

Owner:
Product / UX / Engineering.

## 2026-06-30 - Escalar dark mode a 1000+ guias

Status: Accepted

Context:
El modo claro ya supera 1000 tramites, pero el modo oscuro seguia con una cobertura mucho menor. El usuario pidio aplicar la misma dinamica de expansion al dark mode.

Decision:
Agregar un generador estructurado de 1000 guias dark adicionales mediante 20 dominios sensibles pero legales y 50 escenarios transversales. Los dominios cubren seguridad de cuentas, privacidad en redes, estafas digitales, reputacion online, contenido intimo no consentido, dinero online, inversiones riesgosas, impuestos digitales, plataformas adultas legales, apps de citas, marketplaces, suscripciones, menores online, trabajo digital, dispositivos, nube, mensajeria, IA generativa, juegos/apuestas y salud digital sensible.

Rationale:
El dark mode no debe ser un repositorio de instrucciones riesgosas. Debe ordenar situaciones privadas, adultas o sensibles con foco en privacidad, evidencia, reclamos, soporte oficial, limites y fuente primaria.

Consequences:
Las guias nuevas son preparacion referencial, no instrucciones para evadir reglas, vulnerar cuentas, hacer dano o reemplazar asesoria legal, medica, tributaria o financiera. El crecimiento del indice debe seguir monitoreandose con build y presupuesto de performance.

Owner:
Product / Content / Security / Engineering.

## 2026-06-29 - Expansion cotidiana por categoria

Status: Accepted

Context:
El catalogo necesitaba cubrir procesos que un chileno comun buscaria en situaciones reales: zona franca, importaciones, exportaciones, propiedades, trabajo, salud, documentos, impuestos y operacion de empresas. El contenido anterior ya era amplio, pero todavia dejaba fuera intenciones frecuentes.

Decision:
Agregar 15 nuevos tramites por cada categoria principal mediante una tanda separada de seeds en `data/everyday-procedure-seeds.ts`. Cada tramite nuevo genera automaticamente una guia rapida relacionada usando el generador existente. El contenido se mantiene como preparacion referencial, con costos/plazos estimados y fuentes institucionales a confirmar.

Rationale:
ChileHub debe sentirse util para busquedas comunes, no solo para procesos obvios. Separar esta tanda mantiene mantenibilidad y evita seguir inflando el archivo principal de enriquecimiento.

Consequences:
El catalogo pasa a una escala mayor y requiere priorizar revision editorial mensual por demanda, especialmente en tramites con impuestos, aduana, salud, vivienda, trabajo y empresas.

Owner:
Product / Content / Engineering.

## 2026-06-29 - Modo oscuro como universo de contenido

Status: Accepted

Context:
El usuario definio que el dark mode de ChileHub no debe ser solo una preferencia visual. Debe activar una segunda experiencia de contenido para temas digitales, adultos y sensibles que las personas buscan en internet, manteniendose dentro de la legalidad y sin reemplazar fuentes, profesionales ni plataformas externas.

Decision:
El toggle de modo oscuro cambia tema visual y tambien el contenido visible de la landing: headline, navegacion superior, accesos rapidos, sugerencias del buscador, cards destacadas y footer. El universo oscuro cubre privacidad digital, plataformas adultas legales, ingresos online, seguridad de cuentas, cannabis medicinal con enfoque medico/legal, apuestas legales y reputacion online. El contenido se trata como guia referencial de reduccion de incertidumbre, no como instrucciones para evadir reglas, comprar productos, realizar actividades ilegales ni obtener resultados medicos, legales o tributarios.

El acceso al modo oscuro requiere una confirmacion local de mayoria de edad. ChileHub guarda solo una preferencia booleana en el navegador para no volver a pedir el consentimiento en cada visita; no solicita fecha de nacimiento, documento, nombre ni datos personales.

Rationale:
Esto diferencia a ChileHub de un portal de tramites tradicional: el modo claro prepara procesos formales; el modo oscuro ordena temas reales que la gente suele buscar en privado, con tono directo, limites claros y foco en privacidad.

Consequences:
Toda expansion del modo oscuro requiere revision de contenido, privacidad y seguridad. No se deben agregar guias que faciliten actividades ilegales, evasion de controles, fraude, acoso, explotacion o instrucciones medicas personalizadas. En temas de salud, impuestos, legalidad, pagos o denuncias, ChileHub debe derivar a profesionales, fuentes oficiales o plataformas responsables.

Owner:
Product / Content / Engineering / Security.

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
