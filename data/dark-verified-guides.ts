export type VerifiedDarkGuideSeed = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  focus: string;
  risk: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const verifiedDarkGuideSeeds: VerifiedDarkGuideSeed[] = [
  {
    slug: "activar-doble-factor-cuentas-importantes",
    title: "Como activar doble factor en cuentas importantes",
    category: "Seguridad digital",
    summary:
      "Prioriza correo, banco, redes, billeteras y plataformas de pago antes de que una filtracion se convierta en toma de cuenta.",
    focus: "activar doble factor y guardar codigos de respaldo en cuentas criticas",
    risk: "proteger solo redes sociales y dejar correo, banco o telefono sin segunda capa",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "revisar-filtracion-correo-contrasena",
    title: "Que hacer si tu correo o contrasena aparece filtrada",
    category: "Seguridad digital",
    summary:
      "Ordena cambio de claves, sesiones, doble factor y revision de servicios conectados despues de una filtracion.",
    focus: "cambiar claves reutilizadas y revisar sesiones de servicios vinculados",
    risk: "cambiar solo la cuenta avisada y mantener la misma clave en otros sitios",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "detectar-phishing-banco-delivery",
    title: "Como detectar phishing de banco, delivery o encomienda",
    category: "Seguridad digital",
    summary:
      "Revisa links, urgencia, remitente, adjuntos, codigos y pagos antes de entrar a una pagina o descargar archivos.",
    focus: "verificar el canal oficial antes de abrir links, adjuntos o ingresar codigos",
    risk: "actuar por urgencia ante supuestos bloqueos, multas, encomiendas o reembolsos",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "cerrar-sesiones-dispositivos-compartidos",
    title: "Como cerrar sesiones en dispositivos compartidos",
    category: "Privacidad digital",
    summary:
      "Checklist para revisar sesiones abiertas, navegadores, apps, copias de fotos y archivos antes de entregar o vender un dispositivo.",
    focus: "cerrar sesiones, quitar cuentas y borrar datos locales antes de entregar equipos",
    risk: "formatear o cerrar una app y dejar correos, fotos, tokens o sesiones activas",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "borrar-metadatos-fotos-publicar",
    title: "Como revisar metadatos de fotos antes de publicar",
    category: "Privacidad digital",
    summary:
      "Evita exponer ubicacion, rutinas, patente, domicilio, colegio, trabajo o personas cercanas al publicar imagenes.",
    focus: "revisar ubicacion, fondo de imagen, etiquetas y datos EXIF antes de publicar",
    risk: "subir fotos que revelan direccion, rutina, patente, colegio o lugar de trabajo",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "configurar-privacidad-instagram-tiktok",
    title: "Como revisar privacidad en Instagram o TikTok",
    category: "Plataformas",
    summary:
      "Ordena cuenta publica/privada, mensajes, etiquetas, contactos, descargas, comentarios y recuperacion.",
    focus: "limitar quien ve, comenta, etiqueta, escribe o descarga contenido",
    risk: "mantener cuenta publica con mensajes, etiquetas, ubicacion y contactos abiertos",
    sourceLabel: "Instagram Help",
    sourceUrl: "https://help.instagram.com/"
  },
  {
    slug: "apelar-cierre-cuenta-plataforma",
    title: "Como preparar una apelacion por cuenta cerrada",
    category: "Plataformas",
    summary:
      "Organiza reglas, correos, capturas, identidad y contenido afectado antes de apelar un bloqueo.",
    focus: "apelar por canales oficiales con evidencia ordenada",
    risk: "pagar a intermediarios o crear cuentas masivas para evadir una sancion",
    sourceLabel: "TikTok Help",
    sourceUrl: "https://support.tiktok.com/"
  },
  {
    slug: "revisar-terminos-plataforma-adulta",
    title: "Que revisar en terminos de una plataforma adulta",
    category: "Plataformas adultas",
    summary:
      "Lee reglas de edad, identidad, pagos, contenido permitido, eliminacion, privacidad y soporte antes de publicar.",
    focus: "entender reglas de identidad, pagos y contenido antes de subir material",
    risk: "publicar contenido sin entender retencion, pagos, bloqueo, verificacion o republicacion",
    sourceLabel: "OnlyFans Help",
    sourceUrl: "https://onlyfans.com/help"
  },
  {
    slug: "separar-pagos-plataformas-adultas",
    title: "Como separar pagos y cuentas en plataformas adultas",
    category: "Plataformas adultas",
    summary:
      "Ordena correo, metodo de pago, banco, impuestos, respaldos y privacidad antes de cobrar o pagar.",
    focus: "separar medios de pago, identidad publica y registros tributarios",
    risk: "mezclar cuenta personal, banco, correo, contactos y actividad publica sin trazabilidad",
    sourceLabel: "SII",
    sourceUrl: "https://www.sii.cl/"
  },
  {
    slug: "guardar-respaldo-ingresos-online",
    title: "Como guardar respaldo de ingresos online",
    category: "Dinero online",
    summary:
      "Ordena pagos, comisiones, boletas, retiros, plataformas y moneda para consultar con SII o contador.",
    focus: "guardar respaldos de ingresos, comisiones y retiros antes de declarar",
    risk: "tratar pagos digitales como dinero sin origen ni respaldo",
    sourceLabel: "SII",
    sourceUrl: "https://www.sii.cl/"
  },
  {
    slug: "reconocer-app-inversion-riesgosa",
    title: "Como reconocer una app de inversion riesgosa",
    category: "Dinero online",
    summary:
      "Revisa autorizacion, promesas de rentabilidad, retiro de fondos, soporte, titularidad y advertencias antes de depositar.",
    focus: "confirmar si la entidad esta regulada y si el retiro de dinero es claro",
    risk: "depositar por promesas de rentabilidad fija, referidos o presion de tiempo",
    sourceLabel: "CMF",
    sourceUrl: "https://www.cmfchile.cl/"
  },
  {
    slug: "reclamar-cobro-app-adulta-streaming",
    title: "Como reclamar cobros de una app o plataforma",
    category: "Dinero online",
    summary:
      "Ordena boletas, suscripcion, correo, terminos, capturas y banco antes de reclamar cobros recurrentes.",
    focus: "identificar quien cobra y que respaldo existe antes de bloquear tarjeta",
    risk: "cancelar solo la tarjeta y dejar activa una suscripcion o deuda",
    sourceLabel: "SERNAC",
    sourceUrl: "https://www.sernac.cl/"
  },
  {
    slug: "bloqueo-voluntario-apuestas-control",
    title: "Que revisar si necesitas limitar apuestas online",
    category: "Consumo adulto legal",
    summary:
      "Prepara limites, bloqueo de medios de pago, apoyo profesional y senales de perdida de control.",
    focus: "definir limites y pedir ayuda antes de seguir depositando dinero",
    risk: "perseguir perdidas, usar creditos o esconder gastos relevantes",
    sourceLabel: "CMF Educa",
    sourceUrl: "https://www.cmfchile.cl/educa/"
  },
  {
    slug: "comprar-producto-regulado-online",
    title: "Que revisar antes de comprar productos regulados online",
    category: "Consumo adulto legal",
    summary:
      "Confirma autorizacion, receta, origen, rotulado, vendedor y riesgos antes de comprar productos de salud o consumo regulado.",
    focus: "confirmar si el producto y vendedor cumplen reglas vigentes",
    risk: "comprar productos sin registro, sin receta o desde vendedores no verificables",
    sourceLabel: "ISP Chile",
    sourceUrl: "https://www.ispch.cl/"
  },
  {
    slug: "guardar-evidencia-acoso-digital",
    title: "Como guardar evidencia de acoso digital",
    category: "Denuncias digitales",
    summary:
      "Ordena capturas completas, enlaces, usuarios, fechas y contexto antes de reportar o denunciar.",
    focus: "preservar evidencia completa sin editarla ni perder contexto",
    risk: "borrar conversaciones, recortar capturas o responder de forma que complique el reporte",
    sourceLabel: "Ministerio Publico",
    sourceUrl: "https://www.fiscaliadechile.cl/"
  },
  {
    slug: "denunciar-estafa-marketplace",
    title: "Como preparar denuncia por estafa en marketplace",
    category: "Denuncias digitales",
    summary:
      "Reune perfil, conversacion, comprobante, publicacion, datos de pago y fechas antes de reportar.",
    focus: "guardar evidencia de vendedor, pago y publicacion antes de bloquear o borrar",
    risk: "perder publicacion, usuario o comprobante al reportar impulsivamente",
    sourceLabel: "PDI",
    sourceUrl: "https://www.pdichile.cl/"
  },
  {
    slug: "reportar-sextorsion-menores-adultos",
    title: "Como ordenar un reporte por sextorsion",
    category: "Denuncias digitales",
    summary:
      "Prioriza seguridad, evidencia, bloqueo, denuncia y apoyo. No pagues ni envies mas material bajo amenaza.",
    focus: "cortar contacto, conservar evidencia y pedir ayuda institucional",
    risk: "pagar, negociar o enviar mas contenido creyendo que eso detendra la amenaza",
    sourceLabel: "PDI",
    sourceUrl: "https://www.pdichile.cl/"
  },
  {
    slug: "verificar-identidad-cuenta-que-vende",
    title: "Como verificar una cuenta que vende por redes",
    category: "Dinero online",
    summary:
      "Revisa antiguedad, cambios de nombre, comentarios, medios de pago, politicas y reclamos antes de transferir.",
    focus: "verificar vendedor, condiciones y medio de pago antes de comprar",
    risk: "comprar por descuento urgente con transferencia directa a una cuenta no verificable",
    sourceLabel: "SERNAC",
    sourceUrl: "https://www.sernac.cl/"
  },
  {
    slug: "preparar-recuperacion-correo-base",
    title: "Como preparar recuperacion del correo principal",
    category: "Seguridad digital",
    summary:
      "Asegura correo de recuperacion, telefono, sesiones, doble factor y codigos antes de perder acceso.",
    focus: "proteger la cuenta base que recupera todas las demas",
    risk: "cuidar redes pero dejar vulnerable el correo que controla restablecimientos",
    sourceLabel: "Google Account Help",
    sourceUrl: "https://support.google.com/accounts/"
  },
  {
    slug: "revisar-permisos-apps-citas",
    title: "Como revisar permisos en apps de citas",
    category: "Privacidad digital",
    summary:
      "Revisa ubicacion, fotos, contactos, notificaciones, bloqueo, reporte y datos visibles antes de usar una app de citas.",
    focus: "limitar datos personales, ubicacion y fotos visibles a desconocidos",
    risk: "mostrar rutina, ubicacion, redes conectadas o datos que permitan identificar domicilio o trabajo",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  }
];
