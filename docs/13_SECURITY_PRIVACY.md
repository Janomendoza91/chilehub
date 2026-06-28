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

## Requisitos de seguridad para versiones futuras

- Validacion server-side para operaciones sensibles.
- No confiar en estado enviado por el cliente.
- Proteger rutas API.
- Rate limit en endpoints propensos a abuso.
- Auditar uploads antes de publicarlos.
- No exponer secretos al cliente.
- Documentar integraciones de terceros antes de conectarlas.

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
