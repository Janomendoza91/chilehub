# ChileHub Design References

## Proposito

La carpeta `design/` contiene las referencias visuales oficiales de ChileHub. Estas imagenes funcionan como el equivalente al archivo Figma del proyecto: definen la direccion visual aprobada para pantallas, componentes, responsive y calidad percibida.

Esta carpeta no contiene codigo de aplicacion ni componentes. Su responsabilidad es preservar la fuente visual contra la cual se debe comparar cualquier implementacion futura.

## Como usar las imagenes

Antes de construir o modificar una pantalla, cualquier persona o IA debe:

1. Revisar la referencia visual correspondiente en `design/references/`.
2. Revisar referencias de partes especificas en `design/components/` si existen.
3. Comparar la referencia con `docs/03_DESIGN_SYSTEM.md`.
4. Implementar solo despues de entender jerarquia, espaciado, color, tipografia, radius, sombras y responsive esperado.

Las imagenes no son decoracion ni inspiracion general. Son contrato visual.

## Prioridad

Cuando exista conflicto visual:

1. Gana la referencia visual oficial en `design/`.
2. Luego `docs/03_DESIGN_SYSTEM.md`.
3. Luego el resto de la documentacion de producto.
4. Finalmente el codigo existente.

Si el codigo contradice una referencia visual oficial, el codigo debe ajustarse. Si la documentacion contradice una referencia visual oficial, la documentacion debe actualizarse.

## Versionado de referencias

Las referencias nuevas deben usar nombres claros y versionados:

- `homepage-reference-v1.png`
- `homepage-reference-v2.png`
- `mobile-reference-v1.png`
- `process-detail-reference-v1.png`

Reglas:

- No sobrescribir una referencia aprobada salvo que sea una correccion directa y acordada.
- Mantener versiones antiguas cuando expliquen una decision o permitan comparar evolucion.
- Usar `v1`, `v2`, `v3` para cambios mayores de direccion visual.
- Usar nombres por pantalla o pieza de UI, no por fecha.

## Estructura

```text
design/
references/      Referencias oficiales de pantallas completas.
components/      Referencias visuales de partes especificas de UI.
design-system/   Notas visuales extraidas desde referencias oficiales.
exports/         Exportaciones temporales o comparativas visuales.
```

## Flujo futuro

Para cada pantalla nueva:

1. Agregar o identificar la referencia visual oficial.
2. Confirmar si modifica reglas del Design System.
3. Implementar contra la referencia.
4. Verificar responsive en los breakpoints definidos por el proyecto.
5. Actualizar documentacion si la referencia introduce una decision nueva.

Para cada cambio de diseno:

1. Crear una nueva version de la referencia si cambia la direccion visual.
2. Actualizar notas en `design/design-system/` cuando se extraigan tokens o reglas nuevas.
3. Actualizar `docs/03_DESIGN_SYSTEM.md` si el cambio se vuelve regla de producto.

Para nuevas referencias:

1. Guardarlas en la subcarpeta correcta.
2. Usar nombres descriptivos y versionados.
3. Indicar en la tarea o PR que referencia fue usada.
4. No tratar imagenes no aprobadas como oficiales.

## Regla para IA

Antes de construir una pantalla, cualquier IA debe abrir y revisar la referencia visual aplicable en `design/`. Si no existe referencia para una pantalla nueva, debe pedirla o confirmar explicitamente que trabajara desde el Design System documentado.
