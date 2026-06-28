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

## Backlog de decisiones pendientes

- Definir archivo fuente oficial de la imagen.
- Definir tokens exactos de color desde la imagen.
- Definir set inicial de tramites V1/V2.
- Definir modelo de datos de tramite.
- Definir estrategia de autenticacion futura.
- Definir estrategia de contenido verificado.
- Definir estrategia comercial SaaS.
- Definir politica de versionado de contenido.
- Definir criterios de cobertura inicial de tramites.
