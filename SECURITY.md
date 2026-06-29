# ChileHub - Security Policy

## Estado actual

ChileHub es una plataforma gratuita de informacion referencial. Actualmente no realiza tramites, no cobra, no permite subir documentos y no guarda datos personales sensibles en servidor.

## Reporte de vulnerabilidades

Si detectas una vulnerabilidad, no la publiques de forma abierta. Reportala al equipo de ChileHub con:

- Ruta o funcionalidad afectada.
- Pasos para reproducir.
- Impacto posible.
- Evidencia minima necesaria.

No incluyas documentos personales, RUT, credenciales, tokens ni datos de terceros.

## Alcance

Dentro de alcance:

- Exposicion accidental de secretos.
- Cross-site scripting.
- Problemas de autenticacion cuando Google/Supabase este activo.
- Configuracion insegura de headers.
- Acceso indebido a datos locales o remotos.

Fuera de alcance:

- Spam automatizado sin impacto de seguridad.
- Reportes de contenido desactualizado sin vulnerabilidad tecnica.
- Ataques contra servicios externos no controlados por ChileHub.

## Principios

- No se deben commitear secretos.
- No se deben guardar datos sensibles en `localStorage`.
- Toda integracion externa debe revisar CSP y privacidad.
- Toda persistencia remota futura requiere RLS, politicas de retencion y revision de seguridad.
