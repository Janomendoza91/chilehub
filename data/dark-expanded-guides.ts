export type ExpandedDarkGuideSeed = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  focus: string;
  risk: string;
  sourceLabel: string;
  sourceUrl: string;
};

type DarkDomain = {
  prefix: string;
  category: string;
  titleBase: string;
  context: string;
  focus: string;
  risk: string;
  sourceLabel: string;
  sourceUrl: string;
};

type DarkScenario = {
  slug: string;
  label: string;
  object: string;
};

const domains: DarkDomain[] = [
  domain("seguridad-cuentas", "Seguridad digital", "proteger cuentas", "cuentas de correo, redes, bancos y servicios criticos", "priorizar correo, telefono, doble factor, sesiones y recuperacion oficial", "cambiar solo una clave y dejar sesiones, apps conectadas o metodos de recuperacion expuestos", "CSIRT Chile", "https://www.csirt.gob.cl/"),
  domain("privacidad-redes", "Privacidad digital", "ordenar privacidad en redes", "perfiles publicos, fotos, etiquetas, contactos y mensajes", "reducir exposicion de identidad, ubicacion, rutina y circulos cercanos", "publicar o responder rapido sin revisar metadatos, etiquetas, permisos o audiencia", "CSIRT Chile", "https://www.csirt.gob.cl/"),
  domain("estafas-digitales", "Denuncias digitales", "detectar estafas digitales", "mensajes, perfiles, tiendas, pagos, links y supuestas oportunidades", "guardar evidencia y confirmar canal oficial antes de pagar, descargar o enviar datos", "actuar por urgencia, vergüenza o presion y perder comprobantes utiles", "PDI", "https://www.pdichile.cl/"),
  domain("reputacion-online", "Reputacion online", "cuidar reputacion online", "busquedas, menciones, publicaciones, perfiles falsos y contenido antiguo", "separar evidencia, reporte a plataformas y decisiones de exposicion publica", "borrar todo sin respaldo o responder impulsivamente aumentando la difusion", "Ministerio Publico", "https://www.fiscaliadechile.cl/"),
  domain("contenido-intimo", "Denuncias digitales", "actuar ante contenido intimo", "imagenes, videos, amenazas, filtraciones y reportes de plataforma", "preservar evidencia, pedir baja por canales oficiales y buscar ayuda si hay amenaza", "pagar, negociar o borrar pruebas antes de reportar una difusion no consentida", "PDI", "https://www.pdichile.cl/"),
  domain("dinero-online", "Dinero online", "ordenar dinero online", "pagos, transferencias, billeteras, suscripciones, contracargos y comprobantes", "confirmar dinero recibido, titularidad, comisiones, impuestos y respaldo", "tratar capturas o promesas como pago confirmado", "SERNAC", "https://www.sernac.cl/"),
  domain("inversion-riesgosa", "Dinero online", "evaluar inversiones riesgosas", "cripto, forex, apps, referidos, grupos privados y promesas de rentabilidad", "confirmar entidad, riesgo, retiro, comisiones y autorizacion antes de transferir", "entrar por promesa de retorno alto, presion de grupo o supuesto cupo limitado", "CMF", "https://www.cmfchile.cl/"),
  domain("impuestos-digitales", "Dinero online", "preparar impuestos digitales", "ingresos por plataformas, ventas, contenido, servicios online y pagos externos", "ordenar ingresos brutos, comisiones, respaldos, moneda y preguntas para SII o contador", "asumir que ingresos digitales no necesitan respaldo ni revision tributaria", "SII", "https://www.sii.cl/"),
  domain("plataformas-adultas", "Plataformas adultas", "revisar plataformas adultas legales", "cuentas, identidad, pagos, privacidad, reglas de contenido y soporte", "separar identidad personal, pagos, dispositivos, reglas y respaldos antes de publicar", "exponer nombre legal, ubicacion, rostro, contactos o datos bancarios sin entender permanencia", "OnlyFans Help", "https://onlyfans.com/help"),
  domain("apps-citas", "Plataformas", "usar apps de citas con cuidado", "matches, perfiles, chats, ubicacion, fotos, pagos y encuentros", "limitar informacion personal y guardar evidencia si hay acoso, estafa o amenaza", "mover la conversacion a canales privados sin validar identidad o senales de riesgo", "Tinder Help", "https://policies.tinder.com/"),
  domain("marketplaces", "Denuncias digitales", "comprar o vender en marketplaces", "publicaciones, envios, pagos, perfiles, comprobantes y reclamos", "confirmar identidad, metodo de pago y evidencia antes de entregar producto o dinero", "aceptar comprobantes editables, enlaces externos o presion por entrega inmediata", "SERNAC", "https://www.sernac.cl/"),
  domain("suscripciones", "Dinero online", "controlar suscripciones digitales", "apps, streaming, plataformas, pruebas gratis, renovaciones y tarjetas", "identificar quien cobra, como cancelar y que comprobante guardar", "bloquear solo la tarjeta y dejar activa cuenta, deuda o renovacion", "SERNAC", "https://www.sernac.cl/"),
  domain("familia-menores", "Seguridad digital", "proteger menores online", "juegos, redes, mensajeria, grooming, privacidad y controles parentales", "ordenar evidencia, conversaciones seguras y canales de ayuda ante riesgo", "culpar al menor, borrar chats o enfrentar al agresor antes de preservar pruebas", "PDI", "https://www.pdichile.cl/"),
  domain("trabajo-digital", "Privacidad digital", "separar trabajo y vida digital", "equipos, correos, accesos, documentos, clientes y cuentas compartidas", "cerrar sesiones, separar perfiles y guardar respaldo laboral sin exponer datos personales", "mezclar equipos personales, claves, clientes o archivos privados sin control", "CSIRT Chile", "https://www.csirt.gob.cl/"),
  domain("dispositivos", "Seguridad digital", "asegurar dispositivos", "telefonos, computadores, copias, apps, permisos, sesiones y ventas de equipos", "revisar bloqueo, cifrado, sesiones, copias y borrado antes de entregar o reparar", "entregar equipos con sesiones, fotos, tokens, tarjetas o backups activos", "CSIRT Chile", "https://www.csirt.gob.cl/"),
  domain("nube-backups", "Privacidad digital", "ordenar nube y respaldos", "Google Drive, iCloud, OneDrive, fotos, documentos y carpetas compartidas", "revisar permisos, enlaces publicos, copias y recuperacion antes de compartir", "dejar carpetas publicas, enlaces antiguos o backups con informacion sensible", "Google Account Help", "https://support.google.com/accounts/"),
  domain("mensajeria", "Seguridad digital", "proteger mensajeria", "WhatsApp, Telegram, SMS, codigos, grupos, archivos y suplantacion", "activar verificacion, revisar sesiones y avisar contactos ante toma de cuenta", "compartir codigos, instalar apps externas o seguir instrucciones de desconocidos", "WhatsApp Help", "https://faq.whatsapp.com/"),
  domain("ia-generativa", "Privacidad digital", "usar IA generativa con cuidado", "prompts, imagenes, documentos, datos personales y contenido sintetico", "no subir informacion sensible y revisar derechos, privacidad y uso del resultado", "pegar documentos privados, rostros o datos de terceros sin entender tratamiento", "CSIRT Chile", "https://www.csirt.gob.cl/"),
  domain("juegos-apuestas", "Consumo adulto legal", "revisar juegos y apuestas online", "loot boxes, apuestas, bonos, retiros, limites y metodos de pago", "definir limites, confirmar condiciones de retiro y reconocer senales de perdida de control", "perseguir perdidas, usar dinero necesario o asumir que bonos son dinero disponible", "CMF Educa", "https://www.cmfchile.cl/educa/"),
  domain("salud-digital", "Consumo adulto legal", "revisar salud digital sensible", "telemedicina, recetas, apps, cannabis medicinal, farmacias y datos clinicos", "confirmar profesional, receta, canal autorizado y privacidad de datos antes de actuar", "tomar decisiones medicas por contenido online o comprar en canales no verificables", "ISP Chile", "https://www.ispch.cl/")
];

const scenarios: DarkScenario[] = [
  scenario("antes-crear-cuenta", "antes de crear una cuenta", "cuenta nueva"),
  scenario("configurar-recuperacion", "al configurar recuperacion", "correo, telefono y codigos"),
  scenario("activar-doble-factor", "al activar doble factor", "segunda capa de seguridad"),
  scenario("revisar-sesiones", "al revisar sesiones abiertas", "sesiones y dispositivos"),
  scenario("cambiar-contrasena", "al cambiar contrasena", "clave y accesos relacionados"),
  scenario("perder-acceso", "si pierdes acceso", "canales de recuperacion"),
  scenario("cuenta-hackeada", "si sospechas cuenta hackeada", "cuenta comprometida"),
  scenario("correo-filtrado", "si tu correo aparece filtrado", "correo y claves reutilizadas"),
  scenario("telefono-robado", "si pierdes o te roban el telefono", "telefono, SIM y sesiones"),
  scenario("dispositivo-compartido", "si usaste un dispositivo compartido", "navegador, sesiones y archivos"),
  scenario("antes-publicar-foto", "antes de publicar una foto", "imagen, fondo y metadatos"),
  scenario("antes-publicar-video", "antes de publicar un video", "video, audio y contexto"),
  scenario("ubicacion-visible", "si una publicacion revela ubicacion", "direccion, rutina o lugar sensible"),
  scenario("perfil-falso", "si aparece un perfil falso", "suplantacion o perfil imitador"),
  scenario("mensaje-amenazante", "si recibes amenazas", "mensajes, cuentas y evidencia"),
  scenario("acoso-repetido", "si hay acoso repetido", "patron de contacto y bloqueo"),
  scenario("filtracion-contenido", "si se filtra contenido", "contenido publicado sin permiso"),
  scenario("chantaje", "si hay chantaje o extorsion", "amenaza, pago y evidencia"),
  scenario("phishing-link", "antes de abrir un link sospechoso", "enlace, remitente y dominio"),
  scenario("adjunto-raro", "antes de descargar un adjunto", "archivo, extension y remitente"),
  scenario("comprobante-pago", "al recibir un comprobante de pago", "comprobante y saldo real"),
  scenario("transferencia-pendiente", "si una transferencia no aparece", "movimiento bancario"),
  scenario("contracargo", "si temes contracargo", "pago reversible o disputa"),
  scenario("suscripcion-renovada", "si se renueva una suscripcion", "cobro recurrente"),
  scenario("cancelar-servicio", "al cancelar un servicio", "cuenta, plan y comprobante"),
  scenario("reclamar-cobro", "al reclamar un cobro", "boleta, contrato y respuesta"),
  scenario("guardar-evidencia", "al guardar evidencia", "capturas, URLs, folios y fechas"),
  scenario("reportar-plataforma", "al reportar en una plataforma", "formulario, categoria y pruebas"),
  scenario("denunciar", "antes de denunciar", "relato, evidencia y canal"),
  scenario("hablar-soporte", "al hablar con soporte", "ticket, correo y documentos"),
  scenario("verificar-identidad", "al verificar identidad", "documento, rostro y datos"),
  scenario("separar-identidades", "al separar identidades", "perfil publico y vida personal"),
  scenario("separar-pagos", "al separar pagos", "banco, billetera y comprobantes"),
  scenario("usar-correo-nuevo", "al usar correo nuevo", "correo dedicado y recuperacion"),
  scenario("usar-numero", "al usar numero telefonico", "SIM, privacidad y recuperacion"),
  scenario("subir-documento", "antes de subir un documento", "documento sensible"),
  scenario("compartir-carpeta", "antes de compartir una carpeta", "permisos y enlaces"),
  scenario("vender-servicio", "al vender un servicio online", "entregable, pago y respaldo"),
  scenario("comprar-servicio", "al comprar un servicio online", "oferta, pago y garantia"),
  scenario("invertir", "antes de invertir dinero", "entidad, riesgo y retiro"),
  scenario("grupo-privado", "si te invitan a un grupo privado", "admins, promesas y presion"),
  scenario("oferta-laboral", "ante una oferta laboral online", "empresa, contrato y datos pedidos"),
  scenario("cliente-presiona", "si un cliente presiona", "limites, pago y comunicaciones"),
  scenario("cita-presencial", "antes de una cita presencial", "identidad, lugar y contacto de confianza"),
  scenario("menor-involucrado", "si hay un menor involucrado", "seguridad, evidencia y ayuda"),
  scenario("contenido-ia", "si hay contenido generado con IA", "imagen, voz o texto sintetico"),
  scenario("deepfake", "si aparece un deepfake", "evidencia, reporte y apoyo"),
  scenario("app-permisos", "al instalar una app", "permisos, datos y proveedor"),
  scenario("equipo-vendido", "antes de vender un equipo", "borrado, sesiones y backups"),
  scenario("despues-incidente", "despues de un incidente", "recuperacion, reporte y prevencion")
];

function domain(
  prefix: string,
  category: string,
  titleBase: string,
  context: string,
  focus: string,
  risk: string,
  sourceLabel: string,
  sourceUrl: string
): DarkDomain {
  return { prefix, category, titleBase, context, focus, risk, sourceLabel, sourceUrl };
}

function scenario(slug: string, label: string, object: string): DarkScenario {
  return { slug, label, object };
}

function titleFor(domainItem: DarkDomain, scenarioItem: DarkScenario) {
  return `Como ${domainItem.titleBase} ${scenarioItem.label}`;
}

function summaryFor(domainItem: DarkDomain, scenarioItem: DarkScenario) {
  return `Guia referencial para ordenar ${scenarioItem.object} dentro de ${domainItem.context}, con foco en privacidad, evidencia, limites y fuente primaria antes de actuar.`;
}

export const expandedDarkGuideSeeds: ExpandedDarkGuideSeed[] = domains.flatMap((domainItem) =>
  scenarios.map((scenarioItem) => ({
    slug: `${domainItem.prefix}-${scenarioItem.slug}`,
    title: titleFor(domainItem, scenarioItem),
    category: domainItem.category,
    summary: summaryFor(domainItem, scenarioItem),
    focus: domainItem.focus,
    risk: domainItem.risk,
    sourceLabel: domainItem.sourceLabel,
    sourceUrl: domainItem.sourceUrl
  }))
);
