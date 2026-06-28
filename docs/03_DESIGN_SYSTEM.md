# ChileHub - Design System

## Rol del documento

Este documento es el contrato visual de ChileHub. Los requisitos de producto pueden describir que hace una pantalla; este documento define como debe sentirse y verse.

## Nota sobre referencias visuales oficiales

Las referencias visuales oficiales viven en `design/` y mandan sobre cualquier decision visual. Esta carpeta funciona como el equivalente al archivo Figma del proyecto.

Si existe conflicto entre este documento y una referencia visual oficial en `design/`, gana la referencia.

Accion requerida:

- Guardar las referencias visuales oficiales en `design/references/` antes de implementar pixel-perfect.
- Registrar su ruta en `09_DECISIONS.md`.
- Extraer tokens exactos de color, spacing, tipografia, radius y shadow.
- Actualizar este documento con valores medidos.

## Direccion visual

ChileHub debe sentirse como una startup SaaS premium: limpia, luminosa, precisa y moderna.

Referencias de calidad:

- Apple por claridad y aire.
- Linear por orden, jerarquia y precision.
- Stripe por composicion comercial premium.
- Vercel por minimalismo tecnico.
- Notion por limpieza y accesibilidad.
- Perplexity por foco en respuestas claras y organizadas.
- Raycast por velocidad y sensacion de herramienta.

No debe sentirse gubernamental, administrativa, Bootstrap, Material UI ni plantilla generica.

## Layout

El layout usa base blanca, mucho espacio negativo y composicion centrada.

Estructura principal:

- Navbar fija o visualmente persistente en la parte superior.
- Hero centrado con texto grande.
- Entrada por intencion como accion primaria.
- Mockup mobile como ancla visual.
- Tarjetas laterales pequenas para reforzar beneficios.
- Seccion home con marco de producto.
- Mockups mobile en grilla.
- Footer minimalista.

La interfaz debe tener ritmo vertical amplio. Cada bloque debe respirar.

## Grid

Grid recomendado:

- Contenedor maximo aproximado: 1180px a 1240px.
- Margenes laterales responsive: 20px mobile, 32px tablet, 40px desktop.
- Hero centrado con ancho de texto controlado.
- Vista home con dos columnas en desktop: sidebar fijo a la izquierda y contenido flexible.
- Cards en grillas de 1, 2, 3 o 4 columnas segun viewport.
- Mockups mobile en 1 columna en mobile, 2 en tablet, 4 en desktop.

## Espaciados

Principios:

- Mucho aire.
- Separaciones consistentes.
- No apretar textos ni controles.
- Evitar bloques densos salvo en dashboard interno.

Escala sugerida:

- 4px para micro ajustes.
- 8px para separaciones internas pequenas.
- 12px y 16px para cards compactas.
- 24px para separacion entre elementos relacionados.
- 32px a 48px entre bloques internos.
- 72px a 112px entre secciones.

## Margenes y padding

Navbar:

- Alto aproximado entre 68px y 76px.
- Padding horizontal alineado al contenedor global.

Hero:

- Padding top amplio por navbar.
- Texto centrado con margen inferior generoso.
- Buscador separado del subtitulo.

Cards:

- Padding interno entre 16px y 24px.
- Separacion entre cards minima de 12px en mobile y 16px a 24px en desktop.

Dashboard:

- Marco externo con padding pequeno.
- Contenido interno con padding 24px a 32px en desktop.
- Sidebar con padding propio y separacion vertical clara.

## Colores

Paleta base:

- Blanco como color dominante.
- Grises muy suaves para fondos secundarios.
- Azul moderno como color primario.
- Verde solo para estados positivos o preparacion lista.
- Texto principal casi negro, pero no negro puro.
- Texto secundario gris medio.

Uso:

- Fondo principal: blanco.
- Fondos secundarios: gris frio extremadamente suave.
- Bordes: gris claro de baja presencia.
- Primario: azul vivo, moderno y limpio.
- Positivo: verde sobrio, usado con moderacion.

Prohibido:

- Fondos oscuros pesados.
- Paletas gubernamentales.
- Colores saturados sin funcion.
- Gradientes dominantes.
- Beige, cafe o tonos administrativos.

## Gobierno de tokens

Los tokens deben documentarse antes de uso amplio:

- Color tokens.
- Typography scale.
- Spacing scale.
- Radius scale.
- Shadow scale.
- Breakpoint behavior.

Ningun componente debe introducir un valor visual unico si un token existente resuelve el mismo caso.

Los valores temporales solo se permiten antes de la medicion oficial y deben quedar marcados como provisionales en la decision o TODO correspondiente.

## Tipografia

Fuente oficial: Inter.

Jerarquia:

- Hero title: muy grande, compacto, fuerte, con tracking ajustado visualmente por defecto de Inter.
- Section titles: grandes, claros, con peso alto.
- Card titles: medianos, peso 700.
- Body: 14px a 20px segun contexto.
- Labels: pequenos, uppercase solo cuando refuerza estructura.

Reglas:

- Usar pesos 500, 600, 700 y 800 con moderacion.
- No usar serif.
- No usar fuentes decorativas.
- No usar texto excesivo dentro de cards pequenas.
- Mantener buena legibilidad en 320px.

## Botones

### Primary Button

Uso:

- Accion principal.
- CTA de navbar.
- Accion final en mockups.

Estilo:

- Fondo azul.
- Texto blanco.
- Border radius alto tipo pill.
- Sombra suave azulada.
- Hover con leve intensificacion.

### Secondary Button

Uso:

- Acciones secundarias.
- Login.
- Navegacion auxiliar.

Estilo:

- Fondo blanco.
- Borde gris suave.
- Texto oscuro o gris.
- Hover con gris muy claro.

### Ghost Button

Uso:

- Acciones de bajo peso.
- Navbar.

Estilo:

- Sin borde.
- Hover sutil.

## Cards

Las cards son contenedores limpios, no decorativos.

Estilo:

- Fondo blanco.
- Borde gris muy suave.
- Border radius alto pero controlado.
- Sombra casi imperceptible o solo en hover.
- Icono pequeno dentro de contenedor suave.
- Titulo claro.
- Descripcion breve.

Las cards no deben competir con el hero. Deben ordenar informacion.

## Sidebar

Sidebar de home:

- Alineada a la izquierda.
- Fondo blanco o blanco translucido.
- Separador vertical suave.
- Items con icono y label.
- Item activo con fondo azul muy claro y texto azul.
- Items inactivos en gris.

Debe sentirse como navegacion de producto SaaS, no menu administrativo antiguo.

## Footer

Footer minimalista:

- Fondo blanco.
- Borde superior suave.
- Logo y descripcion breve.
- Cuatro bloques informativos.
- Iconos modernos.
- Mucho espacio.
- Sin exceso de links.

## Hero

El hero es la primera senal del producto.

Debe contener:

- Logo/nav arriba.
- Headline grande y directo.
- Subtitulo con promesa clara.
- Buscador central como accion dominante.
- Mockup de telefono en el centro inferior.
- Tarjetas laterales flotantes.

El hero no debe ser una pagina de marketing generica. Debe mostrar producto.

## Mockups mobile

Los mockups son esenciales porque comunican que ChileHub ordena procesos paso a paso antes de que el usuario actue fuera de la plataforma.

Pantallas requeridas:

- Preparacion.
- Documentos.
- Completado.
- Oficinas.

Estilo:

- Marco de telefono realista pero limpio.
- Bordes redondeados.
- Sombra premium.
- UI interna blanca y clara.
- Estados positivos en verde.
- Acciones y preparacion en azul.

## Entrada por intencion

La entrada por intencion es el elemento de partida, pero no debe hacer que ChileHub parezca un buscador generico. Debe convivir con rutas visibles por momentos de vida, procesos populares y preguntas frecuentes.

Estilo:

- Grande en hero, como "cuentanos que necesitas entender".
- Redondeado.
- Fondo blanco.
- Borde gris suave.
- Sombra premium.
- Icono de busqueda o guia a la izquierda.
- Placeholder claro.
- Indicador visual de guia o asistencia.

En home puede existir una version compacta, siempre acompanada por navegacion por intenciones.

## Responsive

Breakpoints objetivo:

- 320px.
- 375px.
- 768px.
- 1024px.
- 1280px.
- 1440px.
- 1920px.

Reglas:

- No crear experiencias separadas.
- Adaptar grillas y espaciados.
- Mantener hero legible en mobile.
- Evitar overflow horizontal.
- Sidebar se oculta o cambia en mobile.
- Cards pasan a una columna en mobile.
- Mockups se apilan naturalmente.

## Reglas visuales de accesibilidad

El pulido visual no puede reducir usabilidad.

Requisitos:

- El contraste de texto debe cumplir WCAG 2.2 AA cuando sea aplicable.
- Los estados de focus deben ser visibles y consistentes.
- Los estados azules y verdes tambien deben usar texto o iconos, no solo color.
- El movimiento no debe ser necesario para entender un estado.
- Las acciones principales deben tener areas comodas en dispositivos tactiles.

## Sombras

Sombras suaves y premium:

- Usar para mockups y contenedores principales.
- Evitar sombras negras fuertes.
- Hover con elevacion minima.
- Sombras deben parecer aire, no profundidad pesada.

## Border Radius

Sistema:

- Botones: pill.
- Cards: 18px a 24px.
- Contenedores grandes: 28px a 36px.
- Telefonos: radius alto realista.
- Icon wrappers: 14px a 18px.

No usar radios incoherentes entre componentes similares.

## Estados hover

Hover debe ser sutil:

- Cambio leve de fondo.
- Sombra suave.
- Desplazamiento maximo de 1px a 2px.
- Color primario en iconos o links.

No usar animaciones exageradas.

## Animaciones

Animaciones permitidas:

- Fade in.
- Slide vertical suave.
- Hover sutil.
- Transiciones de color.

Duracion:

- 150ms a 250ms para hover.
- 450ms a 650ms para entrada de seccion.

Prohibido:

- Rebotes.
- Animaciones llamativas.
- Movimiento constante sin funcion.

## Iconografia

Iconos:

- Modernos, lineales, consistentes.
- Lucide React como fuente preferida.
- Tamano pequeno a mediano.
- Siempre acompanando una accion o categoria.

No usar iconos rellenos mezclados con lineales sin razon.

## Jerarquia visual

Orden de importancia:

1. Promesa principal del hero.
2. Buscador.
3. Mockup de telefono.
4. Vista previa del producto.
5. Cards y modulos.
6. Footer.

La jerarquia debe guiar al usuario a buscar y avanzar.

## Checklist de QA visual

- [ ] Referencia visual oficial disponible en `design/`.
- [ ] Composicion del hero coincide con la referencia oficial.
- [ ] Espaciado del navbar coincide con la referencia oficial.
- [ ] Proporciones del SearchBar coinciden con la referencia oficial.
- [ ] Mockups de telefono coinciden con la referencia oficial.
- [ ] Estructura home/dashboard coincide con la referencia oficial.
- [ ] Cards coinciden con la referencia oficial.
- [ ] Footer coincide con la referencia oficial.
- [ ] Comportamiento mobile preserva jerarquia.
- [ ] No se introdujeron colores, sombras o radios no aprobados.
