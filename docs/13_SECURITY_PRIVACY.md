# ChileHub - Seguridad y privacidad

## Proposito

ChileHub eventualmente podra tocar recorridos sensibles relacionados con identidad, documentos, finanzas, vehiculos, vivienda y empresas. Incluso antes de implementar backend, el producto debe disenarse con confianza, privacidad y seguridad como restricciones centrales.

## Principios de confianza

- Recolectar la minima informacion necesaria.
- Explicar por que se necesita informacion.
- No insinuar afiliacion oficial con el Estado si no existe formalmente.
- Distinguir contenido verificado de estimaciones.
- Evitar dark patterns.
- Hacer comprensible que preparacion, listas o datos estan guardados.

## Categorias de datos sensibles

Versiones futuras podrian tocar:

- Documentos de identidad.
- Direcciones.
- Informacion vehicular.
- Informacion de empresa.
- Informacion tributaria.
- Informacion de pago.
- Documentos subidos por usuarios.
- Ubicacion o preferencias de oficina.

Cualquier feature que toque estas categorias requiere revision explicita de producto y seguridad.

## Requisitos de privacidad para versiones futuras

- Definir retencion antes de recolectar datos.
- Permitir que el usuario entienda que se guarda.
- Evitar almacenar documentos salvo que sea necesario.
- Proteger datos personales.
- Separar analitica de datos sensibles.
- Usar defaults seguros para autenticacion y sesiones.

## Acceso Google y persistencia local V2

El espacio personal de ChileHub tiene Google preparado mediante Supabase Auth para identificar al usuario. Google debe permanecer desactivado por feature flag hasta publicar en Vercel y autorizar el dominio final en Google Cloud. En esta etapa, la preparacion personal se guarda solo en el navegador del usuario mediante almacenamiento local.

El dominio publico de Supabase Auth esperado para OAuth es `chilehub.supabase.co`. El callback autorizado en Google Cloud debe ser `https://chilehub.supabase.co/auth/v1/callback`. El dominio propio `auth.chilehub.info` queda reservado para una etapa posterior si se habilita el add-on de Custom Domain en Supabase.

Permitido en esta etapa:

- Identidad basica devuelta por Google/Supabase para mostrar sesion iniciada.
- Nombre de visualizacion no sensible.
- Preferencia local de consentimiento +18 para acceder al modo oscuro, sin fecha de nacimiento ni identificacion.
- Slugs de tramites guardados.
- Historial local de tramites visitados.
- Estado de checklist de documentos por titulo.
- Recordatorios escritos por el usuario.
- Alertas de revision mensual derivadas de contenido publicado.

No permitido en esta etapa:

- Subir documentos.
- Guardar imagenes, PDFs o certificados.
- Guardar RUT, direccion, datos bancarios, datos medicos o contrasenas.
- Presentar el estado local como sincronizado entre dispositivos.
- Crear login por email/contrasena sin politica de seguridad definida.

El usuario debe poder borrar sus datos locales desde la interfaz.

## Requisitos de seguridad para versiones futuras

- Validacion server-side para operaciones sensibles.
- No confiar en estado enviado por el cliente.
- Proteger rutas API.
- Rate limit en endpoints propensos a abuso.
- Auditar uploads antes de publicarlos.
- No exponer secretos al cliente.
- Documentar integraciones de terceros antes de conectarlas.

## Hardening tecnico base

ChileHub debe servir todas las rutas con headers defensivos desde Next.js:

- `Content-Security-Policy` para limitar origenes de scripts, frames, conexiones, imagenes y recursos.
- `Strict-Transport-Security` en produccion.
- `X-Frame-Options: DENY` y `frame-ancestors 'none'` para evitar clickjacking.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` bloqueando camara, microfono, geolocalizacion, pagos, USB y sensores.
- `Cross-Origin-Opener-Policy` y `Cross-Origin-Resource-Policy` para aislamiento basico.

La CSP permite Supabase y Google solo porque el acceso con Google esta preparado por feature flag. Si se agregan analytics, mapas, embeds, pagos, chat o scripts externos, deben agregarse explicitamente a la CSP y documentarse en `09_DECISIONS.md`.

La URL publica de Supabase debe usar HTTPS y terminar en `.supabase.co` mientras se use el dominio administrado por Supabase. Si se migra a `auth.chilehub.info`, la CSP y la validacion de entorno deben actualizarse junto con la decision de arquitectura.

Google Analytics puede cargarse solo si existe `NEXT_PUBLIC_GA_MEASUREMENT_ID`. La medicion debe limitarse a trafico y uso general de paginas; no se deben enviar RUT, documentos, recordatorios, nombres, correos, direcciones, query strings ni contenido escrito por usuarios como eventos o parametros.

## Persistencia local segura

El almacenamiento local solo puede guardar preferencias y preparacion no sensible. Los campos escritos por el usuario deben limpiarse, limitar longitud y evitar datos personales sensibles.

Reglas obligatorias:

- No guardar RUT, direccion, documentos, certificados, datos bancarios, datos medicos ni contrasenas en `localStorage`.
- Limitar recordatorios locales a textos cortos y fechas validas.
- Normalizar y limitar el estado leido desde `localStorage` antes de usarlo en UI.
- Mantener una accion visible para borrar datos locales.
- No presentar datos locales como sincronizados o respaldados.

## Seguridad de contenido

ChileHub no debe:

- Dar certeza legal cuando las reglas varian o requieren asesoria profesional.
- Presentar estimaciones como montos oficiales finales.
- Incentivar al usuario a saltarse requisitos oficiales.
- Pedir datos sensibles antes de que exista un beneficio claro.

## Triggers de revision

Se requiere revision de seguridad/privacidad al agregar:

- Autenticacion.
- Perfil de usuario.
- Progreso guardado.
- Upload de documentos.
- Pagos.
- APIs de terceros.
- IA.
- Analitica ligada a identidad del usuario.

## Restricciones especificas para IA

Si se introduce IA en versiones futuras:

- La salida debe estar basada en contenido verificado.
- La IA no debe inventar requisitos, costos, leyes ni plazos.
- La guia generada debe exponer incertidumbre.
- Datos sensibles del usuario no deben enviarse a servicios externos sin revision y disclosure visible.
