# ChileHub - Gobierno de contenido y datos

## Proposito

ChileHub depende de la confianza del usuario. El contenido de tramites debe ser preciso, vigente, entendible y trazable. Este documento define como crear, revisar y mantener contenido y datos estructurados.

## Principios de contenido

- Claridad por sobre completitud cuando el usuario necesita la siguiente accion.
- Completitud cuando omitir informacion podria hacer fallar un tramite.
- Espanol simple por sobre lenguaje institucional.
- Afirmaciones respaldadas por fuentes.
- No presentar asesoria legal, tributaria, financiera o medica como certeza personalizada.
- Distinguir pasos requeridos, opcionales y condicionales.

## Tipos de contenido

### Proceso

Proceso estructurado que el usuario quiere entender y preparar.

Ejemplos:

- Renovar licencia.
- Comprar auto.
- Vender auto.
- Abrir empresa.
- Sacar pasaporte.
- Permiso de circulacion.

### Guia

Explicacion editorial de un proceso o decision. Una guia puede explicar contexto, errores comunes y tradeoffs, pero siempre debe ayudar al usuario a avanzar.

### Calculadora

Herramienta para estimar costo, tiempo, cantidad o elegibilidad.

Los resultados deben indicar claramente si son estimaciones o valores exactos.

### Documento requerido

Documento obligatorio, opcional o condicional dentro de un proceso.

### Oficina o canal

Lugar fisico o digital donde el usuario puede continuar un proceso.

## Modelo minimo de datos para un tramite

Cada proceso deberia poder representar:

- ID estable.
- Titulo publico.
- Resumen en lenguaje simple.
- Categoria.
- Intencion del usuario.
- Institucion o entidad responsable.
- Pasos.
- Documentos requeridos.
- Documentos opcionales.
- Requisitos condicionales.
- Tiempo estimado.
- Costo estimado.
- Disponibilidad online/offline.
- Oficinas o canales.
- Fecha de ultima revision.
- Fuentes.
- Nivel de confianza.
- Advertencias conocidas.

## Modelo de paso

Cada paso debe incluir:

- Titulo.
- Instruccion para el usuario.
- Por que importa.
- Datos o documentos requeridos.
- Resultado esperado.
- Condiciones bloqueantes.
- Estado de preparacion.
- Fuente cuando aplique.

## Estados editoriales

### Draft

Contenido interno, no listo para usuarios.

### Reviewed

Contenido revisado por producto/editorial contra fuentes.

### Verified

Contenido validado contra fuente oficial o autoritativa y aprobado para publicacion.

### Stale

Contenido cuya ventana de revision expiro o cuya fuente cambio.

## Reglas de fuentes

Fuentes preferidas:

- Sitios oficiales de gobierno o instituciones.
- Sitios oficiales municipales.
- Publicaciones legales o regulatorias oficiales.
- Documentacion directa de partners.

Fuentes secundarias pueden usarse como contexto, pero no como unica base para requisitos, costos u obligaciones.

## Gestion de cambios

Cuando cambie contenido de un tramite:

- Actualizar la fuente.
- Actualizar fecha de ultima revision.
- Registrar cambios relevantes en changelog interno o notas de release.
- Revisar calculadoras, guias y procesos relacionados.

## Requisitos de confianza

ChileHub debe explicitar cuando:

- Un costo es estimado.
- Un proceso varia por municipalidad o institucion.
- Un requisito depende del perfil del usuario.
- Una regla puede cambiar por fecha o normativa.
- El usuario debe confirmar informacion con una fuente oficial.

## Comportamientos prohibidos

- Presentar contenido no verificado como oficial.
- Ocultar advertencias que podrian afectar la finalizacion del proceso.
- Usar frases vagas como "puede que necesites" sin explicar la condicion.
- Mezclar marketing con instrucciones operativas dentro de pasos.
