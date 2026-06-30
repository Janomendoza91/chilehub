import type { GuideDetail } from "@/types/chilehub";

type DarkGuideSeed = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  focus: string;
  risk: string;
  sourceLabel: string;
  sourceUrl: string;
};

const darkGuideSeeds: DarkGuideSeed[] = [
  {
    slug: "crear-cuenta-onlyfans-con-privacidad",
    title: "Como crear una cuenta en OnlyFans cuidando tu privacidad",
    category: "Plataformas adultas",
    summary:
      "Ordena identidad, pagos, impuestos, seguridad de cuenta y limites antes de abrir o publicar contenido en una plataforma adulta.",
    focus: "separar identidad publica, cuenta de pago, correo, telefono y material personal antes de publicar",
    risk: "exponer datos personales, ubicacion, contactos, nombre legal o medios de pago sin entender la permanencia del contenido",
    sourceLabel: "OnlyFans Help",
    sourceUrl: "https://onlyfans.com/help"
  },
  {
    slug: "proteger-identidad-vendiendo-contenido",
    title: "Como proteger tu identidad si vendes contenido",
    category: "Plataformas adultas",
    summary:
      "Checklist de privacidad para separar perfiles, pagos, dispositivos, fotos, metadatos, contactos y comunicaciones.",
    focus: "crear separacion operacional entre tu vida personal y la actividad digital",
    risk: "mezclar cuentas personales, contactos, ubicacion, fotos antiguas o informacion bancaria visible",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "declarar-ingresos-plataformas-digitales",
    title: "Que revisar para declarar ingresos de plataformas digitales",
    category: "Dinero online",
    summary:
      "Organiza pagos recibidos, respaldos, comisiones, moneda, retiros y preguntas para SII o contador.",
    focus: "separar ingresos brutos, comisiones, retiros, respaldos y obligaciones tributarias a confirmar",
    risk: "tratar ingresos online como dinero informal sin respaldos ni consulta tributaria",
    sourceLabel: "SII",
    sourceUrl: "https://www.sii.cl/"
  },
  {
    slug: "cobrar-online-sin-caer-en-estafas",
    title: "Como cobrar por internet sin caer en estafas comunes",
    category: "Dinero online",
    summary:
      "Revisa comprobantes falsos, contracargos, pagos reversibles, datos bancarios y senales de alerta antes de entregar contenido o servicios.",
    focus: "confirmar pago recibido por canales propios antes de entregar o liberar algo",
    risk: "aceptar capturas, comprobantes editables o presion de entrega inmediata como si fueran pago confirmado",
    sourceLabel: "SERNAC",
    sourceUrl: "https://www.sernac.cl/"
  },
  {
    slug: "recuperar-instagram-hackeado",
    title: "Que hacer si te hackean Instagram",
    category: "Seguridad digital",
    summary:
      "Ordena correo, telefono, sesiones, respaldo de identidad, contactos y reportes antes de perder mas control de la cuenta.",
    focus: "recuperar control por canales oficiales y asegurar correo, telefono y doble factor",
    risk: "pagar a terceros, entregar codigos o seguir links que prometen recuperar la cuenta por fuera de la plataforma",
    sourceLabel: "Instagram Help",
    sourceUrl: "https://help.instagram.com/"
  },
  {
    slug: "recuperar-whatsapp-hackeado",
    title: "Que hacer si pierdes control de WhatsApp",
    category: "Seguridad digital",
    summary:
      "Pasos de preparacion para avisar contactos, recuperar numero, revisar verificacion y bloquear intentos de suplantacion.",
    focus: "proteger el numero, activar verificacion en dos pasos y cortar la cadena de suplantacion",
    risk: "compartir codigos SMS o ignorar mensajes enviados a tus contactos desde la cuenta comprometida",
    sourceLabel: "WhatsApp Help",
    sourceUrl: "https://faq.whatsapp.com/"
  },
  {
    slug: "cuenta-google-comprometida",
    title: "Como ordenar una cuenta Google comprometida",
    category: "Seguridad digital",
    summary:
      "Revisa accesos, dispositivos, recuperacion, contrasenas, correos reenviados y servicios conectados.",
    focus: "asegurar la cuenta base antes de recuperar redes o plataformas conectadas",
    risk: "cambiar solo una contrasena y dejar sesiones, apps o metodos de recuperacion controlados por otra persona",
    sourceLabel: "Google Account Help",
    sourceUrl: "https://support.google.com/accounts/"
  },
  {
    slug: "suplantacion-identidad-redes-sociales",
    title: "Que hacer si te suplantan identidad en redes sociales",
    category: "Reputacion online",
    summary:
      "Ordena evidencia, reportes en plataforma, contactos afectados y opciones de denuncia cuando corresponda.",
    focus: "guardar evidencia verificable antes de reportar y avisar a personas expuestas",
    risk: "responder impulsivamente, borrar pruebas o enviar datos personales a quien esta suplantando",
    sourceLabel: "PDI",
    sourceUrl: "https://www.pdichile.cl/"
  },
  {
    slug: "imagenes-intimas-sin-consentimiento",
    title: "Que hacer si difunden imagenes intimas sin consentimiento",
    category: "Reputacion online",
    summary:
      "Guia de contencion para guardar evidencia, reportar contenido, pedir ayuda y evitar exponerte mas.",
    focus: "priorizar seguridad, evidencia, reportes y apoyo profesional sin negociar con agresores",
    risk: "ceder ante amenazas, borrar todo sin respaldo o enfrentar solo una situacion de alto impacto emocional",
    sourceLabel: "Ministerio Publico",
    sourceUrl: "https://www.fiscaliadechile.cl/"
  },
  {
    slug: "limpiar-privacidad-antes-publicar",
    title: "Como limpiar privacidad antes de publicar en redes",
    category: "Privacidad digital",
    summary:
      "Checklist para revisar ubicacion, metadatos, fondo de fotos, contactos, etiquetas, nombre de usuario y links conectados.",
    focus: "detectar datos visibles o indirectos antes de publicar contenido nuevo",
    risk: "publicar material que revela direccion, rutina, trabajo, colegio, patente, ubicacion o personas cercanas",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "separar-cuentas-personales-y-publicas",
    title: "Como separar cuentas personales y publicas",
    category: "Privacidad digital",
    summary:
      "Define correos, telefonos, nombres, fotos, navegadores y dispositivos para no mezclar vida personal con presencia publica.",
    focus: "crear compartimentos simples para reducir filtraciones cruzadas",
    risk: "usar el mismo correo, telefono, alias, foto de perfil o contactos en contextos que no deberian conectarse",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "cancelar-suscripciones-dificiles",
    title: "Como cancelar suscripciones dificiles",
    category: "Dinero online",
    summary:
      "Ordena cobros recurrentes, terminos, capturas, correo de soporte, banco y reclamos antes de bloquear o cambiar tarjeta.",
    focus: "identificar quien cobra, donde cancelar y que respaldo guardar",
    risk: "cancelar solo la tarjeta y dejar activa una deuda, cuenta o renovacion en la plataforma",
    sourceLabel: "SERNAC",
    sourceUrl: "https://www.sernac.cl/"
  },
  {
    slug: "apuestas-online-limites-riesgos",
    title: "Que revisar antes de apostar online",
    category: "Consumo adulto legal",
    summary:
      "Revisa legalidad, limites personales, medios de pago, terminos, retiros, bloqueo voluntario y senales de perdida de control.",
    focus: "decidir limites antes de depositar y confirmar condiciones de retiro",
    risk: "apostar con dinero necesario, perseguir perdidas o asumir que bonos son dinero retirable",
    sourceLabel: "CMF Educa",
    sourceUrl: "https://www.cmfchile.cl/educa/"
  },
  {
    slug: "receta-cannabis-medicinal-chile",
    title: "Que entender sobre receta de cannabis medicinal en Chile",
    category: "Consumo adulto legal",
    summary:
      "Guia referencial para preparar preguntas medicas, receta, compra autorizada, riesgos y limites. No reemplaza consulta profesional.",
    focus: "conversar con un medico y confirmar canales autorizados antes de cualquier decision",
    risk: "confundir informacion de internet con indicacion medica o asumir que una receta permite cualquier compra, porte o cultivo",
    sourceLabel: "ISP Chile",
    sourceUrl: "https://www.ispch.cl/"
  },
  {
    slug: "app-prestamos-presiona-contactos",
    title: "Que hacer si una app de prestamos presiona o amenaza",
    category: "Dinero online",
    summary:
      "Ordena contrato, deuda, comunicaciones, permisos del telefono, evidencia y canales de reclamo sin exponerte mas.",
    focus: "guardar evidencia y cortar permisos abusivos antes de responder bajo presion",
    risk: "entregar mas datos, instalar apps desconocidas o pagar montos no respaldados por miedo",
    sourceLabel: "CMF",
    sourceUrl: "https://www.cmfchile.cl/"
  },
  {
    slug: "baneo-cuenta-tiktok-instagram",
    title: "Que hacer si te banean una cuenta de TikTok o Instagram",
    category: "Plataformas",
    summary:
      "Revisa reglas, apelacion, evidencia, contenido eliminado, identidad de cuenta y alternativas antes de crear cuentas duplicadas.",
    focus: "apelar por canales oficiales con informacion ordenada",
    risk: "intentar evadir bloqueos creando cuentas masivas o pagando servicios no oficiales",
    sourceLabel: "TikTok Help",
    sourceUrl: "https://support.tiktok.com/"
  },
  {
    slug: "privacidad-ubicacion-telefono",
    title: "Como revisar privacidad y ubicacion del telefono",
    category: "Privacidad digital",
    summary:
      "Prepara una revision de permisos, ubicacion, fotos, contactos, bluetooth, apps instaladas y sesiones abiertas.",
    focus: "reducir permisos innecesarios y detectar apps que no deberian tener acceso",
    risk: "mantener ubicacion, fotos, microfono o contactos activos para apps que no lo necesitan",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "guardar-evidencia-digital",
    title: "Como guardar evidencia digital sin desordenarte",
    category: "Denuncias digitales",
    summary:
      "Ordena capturas, enlaces, fechas, perfiles, correos y respaldo antes de reportar en plataformas o instituciones.",
    focus: "conservar evidencia legible, fechada y respaldada",
    risk: "borrar conversaciones, editar capturas o perder contexto que ayuda a explicar lo ocurrido",
    sourceLabel: "PDI",
    sourceUrl: "https://www.pdichile.cl/"
  },
  {
    slug: "reclamar-cobro-app-streaming",
    title: "Como reclamar un cobro de app, streaming o suscripcion",
    category: "Dinero online",
    summary:
      "Identifica comercio, fecha, monto, renovacion, medio de pago, soporte y reclamo antes de desconocer el cargo.",
    focus: "separar error de cobro, renovacion aceptada, prueba gratis vencida o fraude",
    risk: "desconocer cargos sin revisar terminos, soporte o historial de suscripcion",
    sourceLabel: "SERNAC",
    sourceUrl: "https://www.sernac.cl/"
  },
  {
    slug: "publicar-contenido-sin-exponer-casa",
    title: "Como publicar contenido sin exponer tu casa o rutina",
    category: "Privacidad digital",
    summary:
      "Revisa fondos, ventanas, reflejos, horarios, etiquetas, mapas, uniforme, patentes y objetos reconocibles.",
    focus: "eliminar pistas indirectas que permiten ubicarte",
    risk: "pensar que solo el rostro identifica, cuando tambien identifican fondo, rutina, sonido, uniforme o ubicacion",
    sourceLabel: "CSIRT Chile",
    sourceUrl: "https://www.csirt.gob.cl/"
  },
  {
    slug: "comprar-contenido-adulto-seguro",
    title: "Que revisar antes de pagar por contenido adulto",
    category: "Consumo adulto legal",
    summary:
      "Revisa consentimiento, mayoria de edad, plataforma, cobros, privacidad, estafas y limites antes de pagar.",
    focus: "usar plataformas con reglas claras y evitar tratos que vulneren consentimiento o edad",
    risk: "pagar fuera de plataforma, aceptar contenido reenviado o participar en difusion no consentida",
    sourceLabel: "SERNAC",
    sourceUrl: "https://www.sernac.cl/"
  },
  {
    slug: "extorsion-sextorsion-online",
    title: "Que hacer si te amenazan con publicar contenido intimo",
    category: "Seguridad digital",
    summary:
      "Plan de contencion para no pagar bajo panico, guardar evidencia, reportar, proteger cuentas y pedir ayuda.",
    focus: "cortar la extorsion sin entregar mas material, dinero o datos",
    risk: "pagar, negociar o enviar mas contenido pensando que eso garantiza silencio",
    sourceLabel: "PDI",
    sourceUrl: "https://www.pdichile.cl/"
  },
  {
    slug: "verificar-tienda-instagram",
    title: "Como verificar una tienda de Instagram antes de pagar",
    category: "Dinero online",
    summary:
      "Revisa antiguedad, comentarios, medios de pago, direccion, politicas, reputacion y senales de fraude.",
    focus: "confirmar identidad comercial y condiciones antes de transferir",
    risk: "comprar por urgencia, descuento extremo o transferencia directa sin respaldo",
    sourceLabel: "SERNAC",
    sourceUrl: "https://www.sernac.cl/"
  }
];

export const darkGuidesContent: GuideDetail[] = darkGuideSeeds.map((seed) =>
  seed.slug === "receta-cannabis-medicinal-chile"
    ? buildCannabisGuide()
    : buildDarkGuide(seed)
);

export function getDarkGuide(slug: string) {
  return darkGuidesContent.find((guide) => guide.slug === slug);
}

function buildDarkGuide(seed: DarkGuideSeed): GuideDetail {
  const grounding = sourceGrounding(seed);

  return {
    slug: seed.slug,
    title: seed.title,
    category: seed.category,
    summary: seed.summary,
    updatedAt: "29 junio 2026",
    readingTime: "4 min",
    keyTakeaways: [
      "Esta guia es referencial, gratuita y no ejecuta tramites ni servicios externos.",
      `Antes de actuar, confirma ${seed.focus}.`,
      grounding.core,
      "No compartas claves, codigos, documentos, fotos intimas ni datos bancarios con terceros no verificados.",
      "Si hay amenaza, extorsion, salud, impuestos o efecto legal, pide ayuda profesional o institucional."
    ],
    decisionCards: [
      {
        label: "Primero",
        value: "Privacidad",
        detail: "Reduce exposicion antes de publicar, pagar, responder o entregar informacion."
      },
      {
        label: "Riesgo",
        value: "Alto si hay presion",
        detail: seed.risk
      },
      {
        label: "Salida",
        value: "Canal oficial",
        detail: grounding.exit
      }
    ],
    sourceQuestions: buildDarkQuestions(seed, grounding.questions),
    practicalScenarios: buildDarkScenarios(seed),
    fiveMinutePlan: [
      "Pausa la accion: no pagues, no publiques, no respondas bajo presion y no compartas codigos.",
      `Anota el objetivo: ${seed.focus}.`,
      "Guarda evidencia relevante: fechas, usuarios, links, correos, terminos, cobros o capturas completas.",
      "Revisa configuracion de privacidad, seguridad de cuenta y metodo de pago antes de continuar.",
      `Confirma el siguiente paso en ${seed.sourceLabel} o con un profesional si el caso es sensible.`
    ],
    commonMistakes: [
      seed.risk,
      ...grounding.mistakes,
      "Usar el mismo correo, telefono, alias o foto en contextos personales y publicos.",
      "Confiar en capturas, links enviados por desconocidos o promesas de solucion por fuera de plataformas.",
      "Borrar evidencia antes de reportar o pedir ayuda.",
      "Confundir una guia referencial con asesoria legal, medica, financiera o tributaria."
    ].slice(0, 5),
    whenToGetHelp: [
      "Existe amenaza, extorsion, acoso, suplantacion, difusion no consentida o riesgo fisico.",
      "Hay menores de edad, salud, medicamentos, impuestos, deudas, contratos o montos relevantes.",
      "La plataforma bloqueo tu cuenta, retuvo pagos o rechazo una apelacion importante.",
      "No puedes verificar si la persona, tienda, cobro o institucion es real."
    ],
    sections: [
      {
        title: "Que problema resuelve esta guia",
        body: `${seed.summary} El objetivo es que llegues con una decision mas ordenada, sepas que revisar y entiendas donde confirmar informacion sin exponerte de mas.`
      },
      {
        title: "Antes de continuar",
        body: `${grounding.before} Si para avanzar necesitas entregar dinero, documentos, imagenes, codigos de seguridad o datos personales, detente y valida el canal.`
      },
      {
        title: "Privacidad minima",
        body:
          "Separa correos, telefonos, perfiles, metodos de pago y dispositivos cuando el contexto sea publico o sensible. Revisa metadatos, ubicacion, contactos, sesiones abiertas y permisos de apps."
      },
      {
        title: "Riesgos que debes mirar",
        body: `El riesgo principal es ${seed.risk}. Tambien revisa presion, urgencia artificial, cuentas nuevas, pagos fuera de plataforma, links acortados y solicitudes de codigos.`
      },
      {
        title: "Donde confirmar",
        body: grounding.confirm
      }
    ],
    checklist: [
      ...grounding.checklist,
      "Entiendo si el tema es legal, medico, tributario, financiero o de plataforma.",
      "Tengo evidencia guardada antes de reportar o reclamar.",
      "Revise privacidad, sesiones, permisos y metodos de recuperacion.",
      "No comparti codigos, claves, documentos ni contenido sensible con desconocidos.",
      "Se donde confirmar el siguiente paso fuera de ChileHub."
    ].slice(0, 6),
    sources: uniqueSources([
      { label: seed.sourceLabel, url: seed.sourceUrl },
      ...grounding.sources,
      { label: "ChileHub - guia referencial", url: "https://chilehub.cl/" }
    ])
  };
}

function buildDarkQuestions(seed: DarkGuideSeed, groundingQuestions: string[]) {
  const label = seed.sourceLabel.toLowerCase();
  const slug = seed.slug;

  if (slug.includes("onlyfans") || slug.includes("vendiendo-contenido")) {
    return [
      "Que datos exige la plataforma para verificar identidad y cuales quedan visibles para usuarios?",
      "Que correo, telefono, alias y metodo de pago usare para no mezclar vida personal y publica?",
      "Que reglas de contenido, edad, consentimiento y pagos acepta la plataforma?",
      "Como respaldare ingresos, comisiones y retiros para revisarlo con SII o contador?",
      "Que contenido, fondo, metadato o contacto podria revelar mi identidad sin querer?"
    ];
  }

  if (slug.includes("cobrar") || slug.includes("tienda-instagram") || slug.includes("suscripciones") || slug.includes("cobro-app")) {
    return [
      "Quien es el proveedor real y que dato confirma su identidad?",
      "El pago aparece confirmado en mi banco/plataforma o solo tengo una captura enviada por otra persona?",
      "Tengo monto, fecha, comprobante, terminos y conversacion completa?",
      "Es un problema de consumo, cargo no reconocido, fraude o incumplimiento de entrega?",
      "Que canal corresponde primero: soporte del comercio, medio de pago, SERNAC o banco?"
    ];
  }

  if (slug.includes("ingresos") || label.includes("sii")) {
    return [
      "Que plataforma pago, en que fecha, en que moneda y con que comisiones?",
      "Estoy mirando ingreso bruto, retiro disponible o deposito final en mi banco?",
      "Tengo respaldos descargables de pagos, comisiones, devoluciones y retiros?",
      "La actividad requiere inicio de actividades, boleta, factura u otra declaracion?",
      "Que parte debo confirmar con SII o contador antes de declarar?"
    ];
  }

  if (slug.includes("instagram") || slug.includes("whatsapp") || slug.includes("google") || slug.includes("tiktok") || slug.includes("baneo")) {
    return [
      "Tengo acceso al correo, telefono o metodo de recuperacion asociado?",
      "Que aviso oficial, correo o pantalla muestra la plataforma?",
      "Hay sesiones, dispositivos, mensajes, publicaciones o cambios que no reconozco?",
      "Ya active o revise doble factor y metodos de recuperacion?",
      "Cual es el canal oficial de recuperacion o apelacion para esta plataforma?"
    ];
  }

  if (slug.includes("suplantacion") || slug.includes("imagenes-intimas") || slug.includes("evidencia") || slug.includes("extorsion")) {
    return [
      "Que evidencia tengo sin editar: enlaces, usuario, fecha, hora, mensajes y capturas completas?",
      "Hay amenaza, extorsion, suplantacion, acoso o difusion no consentida?",
      "Que cuentas, contactos o datos debo proteger antes de reportar?",
      "Ya avise a alguien de confianza o necesito apoyo urgente?",
      "Corresponde reportar en plataforma, PDI, Fiscalia u otra institucion?"
    ];
  }

  if (slug.includes("prestamos") || label.includes("cmf")) {
    return [
      "La entidad existe, esta identificada y tiene contrato o condiciones claras?",
      "Que monto pedi, cuanto recibi, cuanto pague y que costo total aparece?",
      "La app pidio acceso a contactos, fotos, ubicacion u otros permisos abusivos?",
      "Hay amenaza, hostigamiento, cobro no respaldado o difusion a contactos?",
      "Que debo confirmar con CMF, SERNAC, banco o asesoria legal segun el caso?"
    ];
  }

  if (slug.includes("apuestas")) {
    return [
      "La plataforma informa terminos, retiros, bonos, verificacion de identidad y limites?",
      "Que monto maximo puedo perder sin afectar gastos necesarios?",
      "Los bonos tienen condiciones de apuesta antes de retirar?",
      "Tengo senales de perseguir perdidas o apostar bajo presion emocional?",
      "Que herramienta de limite, bloqueo o ayuda existe si pierdo control?"
    ];
  }

  if (slug.includes("privacidad") || slug.includes("publicar") || slug.includes("cuentas-personales")) {
    return [
      "La publicacion revela ubicacion, rutina, trabajo, colegio, patente, reflejos o personas cercanas?",
      "Que permisos tienen mis apps sobre fotos, ubicacion, microfono y contactos?",
      "Estoy usando el mismo correo, telefono, alias o foto en cuentas que deberian estar separadas?",
      "Hay sesiones abiertas o dispositivos que no reconozco?",
      "Que dato indirecto podria conectar mi perfil publico con mi identidad personal?"
    ];
  }

  return uniqueStrings([
    ...groundingQuestions,
    "Que fuente primaria confirma el paso correcto para este caso?",
    "Que evidencia o respaldo debo guardar antes de avanzar?"
  ]).slice(0, 5);
}

function buildDarkScenarios(seed: DarkGuideSeed) {
  const slug = seed.slug;

  if (slug.includes("onlyfans") || slug.includes("vendiendo-contenido")) {
    return [
      {
        title: "Antes de abrir la cuenta",
        detail:
          "Aun no publicas ni verificas perfil. Es el mejor momento para separar correo, alias, pagos, telefono, seguridad y reglas de contenido."
      },
      {
        title: "Cuenta ya creada",
        detail:
          "Revisa que datos son visibles, que metodos de pago usas, que contenido subiste y que configuracion de privacidad esta activa."
      },
      {
        title: "Ya hubo exposicion",
        detail:
          "Si se filtro identidad, contenido o datos de pago, guarda evidencia, cambia accesos y revisa soporte de plataforma o ayuda profesional."
      }
    ];
  }

  if (slug.includes("instagram") || slug.includes("whatsapp") || slug.includes("google") || slug.includes("tiktok") || slug.includes("baneo")) {
    return [
      {
        title: "Aun tienes acceso",
        detail:
          "Cambia clave desde la plataforma, revisa sesiones, correo, telefono, dispositivos y activa doble factor antes de cerrar nada."
      },
      {
        title: "Perdiste acceso",
        detail:
          "Usa recuperacion o apelacion oficial. Prepara usuario, correo, telefono, avisos recibidos y fecha aproximada del problema."
      },
      {
        title: "Usaron tu cuenta",
        detail:
          "Avisa a contactos si pidieron dinero o codigos, guarda evidencia y revisa si corresponde denunciar o reportar contenido."
      }
    ];
  }

  if (slug.includes("cobrar") || slug.includes("tienda-instagram") || slug.includes("suscripciones") || slug.includes("cobro-app")) {
    return [
      {
        title: "Antes de pagar o entregar",
        detail:
          "Verifica proveedor, monto, terminos, medio de pago y confirmacion real en tu banco o plataforma."
      },
      {
        title: "Cobro ya realizado",
        detail:
          "Ordena fecha, monto, comercio, comprobante, captura, correo de soporte y respuesta del proveedor."
      },
      {
        title: "Posible fraude",
        detail:
          "Si hay cargo no reconocido, comprobante falso o tienda inexistente, contacta medio de pago/banco y guarda evidencia para reclamo."
      }
    ];
  }

  if (slug.includes("ingresos")) {
    return [
      {
        title: "Ingresos pequenos o iniciales",
        detail:
          "Aunque sean montos bajos, guarda respaldos de plataforma, comisiones, retiros y fechas para consultar correctamente."
      },
      {
        title: "Ingresos recurrentes",
        detail:
          "Ordena actividad, periodicidad, documentos tributarios y posibles obligaciones antes de declarar o emitir documentos."
      },
      {
        title: "Ingresos altos o extranjeros",
        detail:
          "Consulta SII o contador porque moneda, residencia, comisiones, plataformas y pagos externos pueden cambiar el tratamiento."
      }
    ];
  }

  if (slug.includes("suplantacion") || slug.includes("imagenes-intimas") || slug.includes("evidencia") || slug.includes("extorsion")) {
    return [
      {
        title: "Contenido o perfil detectado",
        detail:
          "Guarda enlaces, usuario, fecha, hora y capturas completas antes de reportar o pedir baja."
      },
      {
        title: "Hay amenaza o presion",
        detail:
          "No pagues ni negocies bajo panico. Prioriza seguridad, evidencia, cuentas protegidas y apoyo de confianza."
      },
      {
        title: "Caso para denunciar",
        detail:
          "Si hay extorsion, suplantacion, acoso o difusion no consentida, revisa canales de plataforma, PDI o Fiscalia."
      }
    ];
  }

  if (slug.includes("prestamos")) {
    return [
      {
        title: "Antes de pagar",
        detail:
          "Confirma entidad, contrato, monto recibido, costo total, calendario y respaldo del cobro."
      },
      {
        title: "Hay presion",
        detail:
          "Guarda mensajes, llamadas, amenazas y permisos solicitados por la app antes de responder o transferir."
      },
      {
        title: "Contactaron a terceros",
        detail:
          "Si usan tus contactos para presionar, corta permisos, guarda evidencia y revisa canales de reclamo o denuncia."
      }
    ];
  }

  if (slug.includes("apuestas")) {
    return [
      {
        title: "Antes de depositar",
        detail:
          "Define limite de perdida, revisa terminos de bonos, retiros, verificacion y herramientas de autocontrol."
      },
      {
        title: "Ya apostaste",
        detail:
          "Revisa saldo, historial, condiciones de retiro y si estas intentando recuperar perdidas."
      },
      {
        title: "Senal de alerta",
        detail:
          "Si usas dinero necesario, credito o apuestas bajo ansiedad, detente y busca herramientas de bloqueo o apoyo."
      }
    ];
  }

  if (slug.includes("privacidad") || slug.includes("publicar") || slug.includes("cuentas-personales")) {
    return [
      {
        title: "Antes de publicar",
        detail:
          "Revisa fondo, reflejos, ubicacion, metadatos, etiquetas, sonido, uniforme, horarios y objetos identificables."
      },
      {
        title: "Perfil ya publico",
        detail:
          "Audita publicaciones antiguas, seguidores, enlaces, biografia, correo, telefono y cuentas conectadas."
      },
      {
        title: "Datos ya expuestos",
        detail:
          "Quita contenido, cambia permisos, separa cuentas y revisa si corresponde reportar, bloquear o pedir baja."
      }
    ];
  }

  return [
    {
      title: "Antes de actuar",
      detail: `Confirma ${seed.focus} y revisa la fuente primaria antes de entregar datos, dinero o contenido.`
    },
    {
      title: "Si ya avanzaste",
      detail:
        "Ordena evidencia, fechas, usuarios, montos, mensajes y configuraciones antes de reportar o reclamar."
    },
    {
      title: "Si hay riesgo",
      detail:
        "Busca ayuda profesional o institucional si hay amenaza, salud, dinero relevante, denuncia o efecto legal."
    }
  ];
}

function uniqueStrings(items: string[]) {
  return Array.from(new Set(items));
}

function uniqueSources(sources: GuideDetail["sources"]) {
  const seen = new Set<string>();

  return sources.filter((source) => {
    if (seen.has(source.url)) {
      return false;
    }

    seen.add(source.url);
    return true;
  });
}

function sourceGrounding(seed: DarkGuideSeed) {
  const label = seed.sourceLabel.toLowerCase();
  const category = seed.category.toLowerCase();

  if (label.includes("google")) {
    return {
      core:
        "Google recomienda usar recuperacion de cuenta, revisar actividad reciente, revisar dispositivos y activar verificacion en dos pasos cuando hay actividad desconocida.",
      before:
        "Empieza por la recuperacion oficial de Google y luego revisa eventos de seguridad, dispositivos, metodos de recuperacion, apps conectadas y reglas de reenvio en Gmail.",
      confirm:
        "Confirma los pasos en Google Account Help. Si hay datos bancarios, identidad, impuestos o documentos en Gmail/Drive/Photos, revisa tambien banco o autoridad correspondiente.",
      exit:
        "Usa recuperacion oficial de Google; despues revisa seguridad, dispositivos, apps conectadas y productos asociados.",
      questions: [
        "Puedo entrar a la cuenta o debo usar recuperacion oficial?",
        "Hay dispositivos, eventos de seguridad, apps conectadas o reglas de Gmail que no reconozco?",
        "Uso la misma clave en otros servicios conectados al correo?"
      ],
      mistakes: [
        "Cambiar solo la clave y no revisar dispositivos, eventos, apps conectadas o reenvios de Gmail."
      ],
      checklist: [
        "Revise recuperacion oficial, eventos de seguridad y dispositivos.",
        "Active o revise verificacion en dos pasos."
      ],
      sources: [
        {
          label: "Google - Secure a hacked account",
          url: "https://support.google.com/accounts/answer/6294825"
        }
      ]
    };
  }

  if (label.includes("whatsapp")) {
    return {
      core:
        "WhatsApp centra la recuperacion en registrar nuevamente el numero, proteger el codigo de verificacion y activar verificacion en dos pasos.",
      before:
        "Prepara el numero telefonico, acceso a SMS/llamada, aviso a contactos y revision de verificacion en dos pasos.",
      confirm:
        "Confirma los pasos vigentes en WhatsApp Help. Si hubo estafa, suplantacion o transferencias, guarda evidencia y revisa canales de denuncia o banco.",
      exit:
        "Recupera por el flujo oficial de WhatsApp y avisa a contactos si alguien uso tu cuenta para pedir dinero o codigos.",
      questions: [
        "Tengo control del numero telefonico asociado?",
        "Comparti codigo SMS o codigo de verificacion con alguien?",
        "Mis contactos recibieron mensajes pidiendo dinero, codigos o datos?"
      ],
      mistakes: [
        "Compartir el codigo de verificacion o no avisar a contactos cuando la cuenta fue usada por terceros."
      ],
      checklist: [
        "Verifique control del numero y codigo.",
        "Avise a contactos si hubo suplantacion."
      ],
      sources: [
        {
          label: "WhatsApp - Recover compromised account",
          url: "https://faq.whatsapp.com/1131652977717250"
        }
      ]
    };
  }

  if (label.includes("instagram")) {
    return {
      core:
        "Instagram/Meta pide usar sus canales de ayuda y recuperacion; no corresponde pagar a terceros ni entregar codigos fuera de la plataforma.",
      before:
        "Prepara correo, telefono, usuario, capturas de avisos, fecha aproximada del problema y acceso al correo asociado.",
      confirm:
        "Confirma el flujo vigente en Instagram Help. Si hay suplantacion, cobros, amenazas o difusion de imagenes, conserva evidencia antes de reportar.",
      exit:
        "Usa el centro de ayuda de Instagram/Meta y evita intermediarios que prometen recuperar cuentas por fuera.",
      questions: [
        "Tengo acceso al correo o telefono asociado a la cuenta?",
        "Recibi correos de cambio de clave, correo, telefono o inicio de sesion?",
        "Hay contenido publicado, mensajes enviados o datos cambiados sin autorizacion?"
      ],
      mistakes: [
        "Pagar servicios externos de recuperacion o entregar codigos de seguridad a supuestos soportes."
      ],
      checklist: [
        "Reuni usuario, correo, telefono y evidencia del cambio.",
        "Use solo ayuda oficial de Instagram/Meta."
      ],
      sources: [
        { label: "Instagram Help", url: "https://help.instagram.com/" }
      ]
    };
  }

  if (label.includes("tiktok")) {
    return {
      core:
        "TikTok gestiona seguridad, apelaciones y problemas de cuenta desde sus canales de soporte y reglas de comunidad.",
      before:
        "Revisa notificaciones de la cuenta, regla citada por la plataforma, contenido afectado y canal de apelacion disponible.",
      confirm:
        "Confirma en TikTok Help las reglas, apelaciones y pasos vigentes. No intentes evadir bloqueos creando cuentas masivas o usando servicios externos.",
      exit:
        "Continua por apelacion o soporte oficial de TikTok, con evidencia y sin evadir restricciones.",
      questions: [
        "Que regla o aviso exacto envio TikTok?",
        "Existe boton o formulario de apelacion disponible?",
        "Tengo respaldo del contenido, fecha, usuario y notificacion?"
      ],
      mistakes: [
        "Crear cuentas duplicadas para evadir un bloqueo antes de entender la causa o apelar."
      ],
      checklist: [
        "Guarde aviso, fecha, usuario y contenido afectado.",
        "Revise reglas y apelacion oficial."
      ],
      sources: [
        { label: "TikTok Help", url: "https://support.tiktok.com/" }
      ]
    };
  }

  if (label.includes("onlyfans")) {
    return {
      core:
        "OnlyFans opera con reglas propias de cuenta, verificacion, pagos, contenido permitido, edad y cumplimiento de terminos de servicio.",
      before:
        "Revisa terminos, verificacion de identidad, metodos de pago, privacidad, reglas de contenido y obligaciones tributarias antes de publicar.",
      confirm:
        "Confirma requisitos vigentes en OnlyFans Help y terminos de la plataforma. Para ingresos e impuestos, revisa SII o contador.",
      exit:
        "Continua solo en la plataforma oficial y separa privacidad, pagos, correo y seguridad antes de publicar.",
      questions: [
        "Que verificacion exige la plataforma y que datos mostrara publicamente?",
        "Como funcionan pagos, comisiones, retiros y documentos tributarios?",
        "Que contenido esta prohibido o puede causar cierre de cuenta?"
      ],
      mistakes: [
        "Abrir la cuenta sin separar correo, nombre publico, pagos, telefono y seguridad de acceso."
      ],
      checklist: [
        "Revise terminos, verificacion y reglas de contenido.",
        "Separe correo, pagos, alias y seguridad de cuenta."
      ],
      sources: [
        { label: "OnlyFans Help", url: "https://onlyfans.com/help" },
        { label: "SII", url: "https://www.sii.cl/" }
      ]
    };
  }

  if (label.includes("sii")) {
    return {
      core:
        "El SII es la fuente para obligaciones tributarias; ingresos de plataformas pueden requerir respaldo, clasificacion y declaracion segun el caso.",
      before:
        "Ordena montos brutos, comisiones, fechas de pago, moneda, plataforma, boletas/facturas si existen y retiros a cuenta bancaria.",
      confirm:
        "Confirma en SII o con contador como clasificar y declarar ingresos segun tu actividad, residencia tributaria y documentos disponibles.",
      exit:
        "Prepara respaldos y consulta SII/contador antes de declarar o asumir que un ingreso online no tributa.",
      questions: [
        "Que actividad o giro corresponde a estos ingresos?",
        "Tengo respaldo de monto bruto, comisiones, retiros y fecha de pago?",
        "Debo emitir documento tributario o declarar en una operacion renta?"
      ],
      mistakes: [
        "Mirar solo el dinero retirado y no el ingreso bruto, comisiones o respaldos de plataforma."
      ],
      checklist: [
        "Ordene pagos brutos, comisiones y retiros.",
        "Revise SII o contador antes de declarar."
      ],
      sources: [{ label: "SII", url: "https://www.sii.cl/" }]
    };
  }

  if (label.includes("sernac")) {
    return {
      core:
        "SERNAC orienta reclamos de consumo: conviene identificar proveedor, monto, fecha, comprobantes, terminos y respuesta del comercio.",
      before:
        "Reune comprobante de pago, identificacion del proveedor, terminos, correos, capturas, boleta/factura y respuesta de soporte.",
      confirm:
        "Confirma derechos y canal de reclamo en SERNAC. Si hay fraude financiero o tarjeta comprometida, revisa tambien banco o emisor.",
      exit:
        "Primero identifica proveedor y respaldo; luego reclama por canales del comercio, SERNAC o medio de pago segun corresponda.",
      questions: [
        "Quien es el proveedor real y que terminos aceptaste?",
        "Tengo comprobante, fecha, monto y respuesta del soporte?",
        "Es incumplimiento de consumo, fraude financiero o cargo no reconocido?"
      ],
      mistakes: [
        "Reclamar sin identificar proveedor, monto, fecha, comprobante o condicion aceptada."
      ],
      checklist: [
        "Tengo proveedor, monto, fecha y comprobante.",
        "Separe problema de consumo, fraude o cargo no reconocido."
      ],
      sources: [{ label: "SERNAC", url: "https://www.sernac.cl/" }]
    };
  }

  if (label.includes("cmf")) {
    return {
      core:
        "CMF y CMF Educa son referencia para productos financieros, fraudes, entidades supervisadas y educacion financiera.",
      before:
        "Identifica entidad, contrato, tasa/costo, deuda, pagos, permisos entregados, comunicaciones y si la entidad esta supervisada.",
      confirm:
        "Confirma informacion en CMF/CMF Educa y con la entidad financiera. Si hay amenaza, hostigamiento o delito, guarda evidencia y busca canal institucional.",
      exit:
        "Ordena deuda, entidad y respaldo antes de pagar, refinanciar, bloquear o denunciar.",
      questions: [
        "La entidad existe y esta supervisada o es una app informal?",
        "Que contrato, tasa, costo total y calendario de pago tengo?",
        "Hubo amenaza, acceso a contactos o cobro no respaldado?"
      ],
      mistakes: [
        "Pagar por presion sin contrato, monto respaldado o identificacion clara de la entidad."
      ],
      checklist: [
        "Identifique entidad, contrato, costo y deuda.",
        "Revise CMF/CMF Educa y guarde evidencia."
      ],
      sources: [
        { label: "CMF Educa", url: "https://www.cmfchile.cl/educa/" },
        { label: "CMF", url: "https://www.cmfchile.cl/" }
      ]
    };
  }

  if (label.includes("pdi") || label.includes("ministerio publico")) {
    return {
      core:
        "Para delitos, amenazas, suplantacion, extorsion o difusion no consentida, la prioridad es seguridad, evidencia y denuncia por canales competentes.",
      before:
        "Guarda evidencia completa: usuario, URL, fecha, hora, mensajes, pagos solicitados, capturas sin editar y datos de contacto.",
      confirm:
        "Confirma canales vigentes en PDI, Ministerio Publico o autoridad competente. Si hay riesgo inmediato, prioriza seguridad personal y apoyo cercano.",
      exit:
        "No negocies bajo amenaza; conserva evidencia y revisa denuncia o reporte institucional.",
      questions: [
        "Hay amenaza, extorsion, suplantacion, acoso o difusion no consentida?",
        "Tengo capturas completas, links, fechas, perfiles y mensajes originales?",
        "Necesito apoyo urgente, denuncia o proteccion de cuentas?"
      ],
      mistakes: [
        "Pagar, negociar o borrar evidencia antes de pedir ayuda o reportar."
      ],
      checklist: [
        "Guarde evidencia completa sin editar.",
        "Revise canal PDI/Ministerio Publico si hay posible delito."
      ],
      sources: [
        { label: "PDI", url: "https://www.pdichile.cl/" },
        { label: "Ministerio Publico", url: "https://www.fiscaliadechile.cl/" }
      ]
    };
  }

  if (label.includes("csirt") || category.includes("privacidad")) {
    return {
      core:
        "CSIRT Chile entrega orientacion de ciberseguridad; para privacidad conviene revisar permisos, sesiones, factores de autenticacion y exposicion de datos.",
      before:
        "Revisa permisos de apps, ubicacion, sesiones abiertas, metadatos de fotos, correos de recuperacion, contrasenas y doble factor.",
      confirm:
        "Confirma buenas practicas en CSIRT Chile y en la configuracion oficial de cada plataforma o sistema operativo.",
      exit:
        "Reduce permisos y exposicion antes de publicar, instalar apps o conectar cuentas.",
      questions: [
        "Que permisos tienen mis apps sobre fotos, ubicacion, microfono y contactos?",
        "Hay sesiones abiertas o dispositivos que no reconozco?",
        "La foto, video o perfil revela ubicacion, rutina, nombre real o contactos?"
      ],
      mistakes: [
        "Publicar sin revisar metadatos, fondo, ubicacion, etiquetas o permisos de apps."
      ],
      checklist: [
        "Revise permisos, sesiones y doble factor.",
        "Revise metadatos, ubicacion y datos visibles antes de publicar."
      ],
      sources: [{ label: "CSIRT Chile", url: "https://www.csirt.gob.cl/" }]
    };
  }

  return {
    core:
      "La fuente indicada es el punto de confirmacion; ChileHub solo organiza preguntas, riesgos y preparacion.",
    before: `Confirma ${seed.focus} en la fuente correspondiente antes de actuar.`,
    confirm:
      "Confirma reglas, terminos o normativa vigente en la fuente primaria. Si hay riesgo legal, medico, financiero o de seguridad, pide ayuda profesional.",
    exit:
      `Continua solo en fuente o canal verificable. Fuente inicial: ${seed.sourceLabel}.`,
    questions: [
      "Que regla, termino o canal oficial aplica exactamente a mi caso?",
      "Que evidencia debo guardar antes de reportar, reclamar o bloquear?"
    ],
    mistakes: ["Avanzar con informacion no confirmada en fuente primaria."],
    checklist: ["Fuente primaria revisada."],
    sources: []
  };
}

function buildCannabisGuide(): GuideDetail {
  return {
    slug: "receta-cannabis-medicinal-chile",
    title: "Que entender sobre receta de cannabis medicinal en Chile",
    category: "Consumo adulto legal",
    summary:
      "Guia referencial para entender que exige la Ley 20.000 sobre cannabis para tratamiento medico, que debe contener una receta y que limites no debes asumir.",
    updatedAt: "29 junio 2026",
    readingTime: "5 min",
    keyTakeaways: [
      "ChileHub no entrega recetas, no vende cannabis, no indica dosis y no reemplaza una consulta medica.",
      "La Ley 20.000 exige que la receta para justificar cultivo por tratamiento sea extendida por un medico cirujano tratante.",
      "Esa receta debe indicar diagnostico, tratamiento, duracion y forma de administracion; la ley excluye administracion mediante combustion.",
      "Una receta no equivale automaticamente a permiso general para comprar, portar, cultivar, transportar o compartir cannabis.",
      "Si el caso implica cultivo, porte, compra, salud o fiscalizacion, confirma con medico, fuente legal vigente y autoridad competente."
    ],
    decisionCards: [
      {
        label: "No es tramite ChileHub",
        value: "Consulta medica",
        detail:
          "La decision clinica corresponde a un medico. ChileHub solo ordena que preguntar y que documentos revisar."
      },
      {
        label: "Dato clave",
        value: "Receta completa",
        detail:
          "La Ley 20.000 menciona diagnostico, tratamiento, duracion y forma de administracion para justificar tratamiento medico."
      },
      {
        label: "Limite critico",
        value: "No combustión",
        detail:
          "Para justificar cultivo por tratamiento medico, la forma de administracion indicada en la receta no puede ser mediante combustion."
      }
    ],
    sourceQuestions: [
      "Mi medico tratante considera que existe necesidad terapeutica y lo deja por escrito?",
      "La receta indica diagnostico, tratamiento, duracion y forma de administracion?",
      "La forma de administracion indicada evita combustion?",
      "Estoy intentando justificar cultivo, porte, tenencia, compra o solo conversando una alternativa medica?",
      "Que autoridad o fuente debo revisar si mi caso involucra cultivo o producto farmaceutico?"
    ],
    practicalScenarios: [
      {
        title: "Solo quieres informarte",
        detail:
          "Prepara preguntas para tu medico: diagnostico, alternativas, riesgos, interacciones, duracion del tratamiento y documentacion necesaria."
      },
      {
        title: "Ya tienes receta",
        detail:
          "No asumas que la receta cubre cualquier conducta. Revisa exactamente que indica, para que tratamiento, por cuanto tiempo y bajo que forma de administracion."
      },
      {
        title: "Estas pensando en cultivar",
        detail:
          "Detente antes de actuar. La Ley 20.000 regula cultivo y menciona autorizacion del SAG en su articulo 9; confirma el caso con fuente legal vigente."
      }
    ],
    fiveMinutePlan: [
      "Define si tu duda es medica, legal, farmaceutica o de cultivo; no las mezcles.",
      "Anota tu diagnostico, tratamientos actuales, medicamentos y dudas para hablar con un medico.",
      "Si tienes receta, revisa que incluya diagnostico, tratamiento, duracion y forma de administracion.",
      "No compres, portes, cultives ni transportes asumiendo que una receta generica basta para todo.",
      "Confirma informacion vigente en LeyChile/BCN, ISP, SAG o con un profesional competente."
    ],
    commonMistakes: [
      "Creer que cannabis medicinal significa acceso libre a cannabis.",
      "Creer que cualquier recomendacion informal sirve como receta medica.",
      "Ignorar que la Ley 20.000 exige contenido especifico en la receta para tratamiento medico.",
      "Asumir que la receta permite combustion, cuando la norma sobre cultivo para tratamiento la excluye.",
      "Comprar, transportar, compartir o cultivar sin confirmar el marco legal aplicable al caso concreto."
    ],
    whenToGetHelp: [
      "Tienes enfermedad, medicamentos, embarazo, salud mental, dolor cronico o antecedentes clinicos relevantes.",
      "Quieres justificar cultivo, porte o tenencia ante una fiscalizacion.",
      "No entiendes si tu receta sirve para tu situacion concreta.",
      "Hay menores de edad, terceros, venta, intercambio, transporte o posible investigacion penal.",
      "Necesitas decidir entre producto farmaceutico autorizado, formula, cultivo u otra alternativa."
    ],
    sections: [
      {
        title: "Que dice la Ley 20.000 en lo importante",
        body:
          "La Ley 20.000 sanciona conductas vinculadas a sustancias estupefacientes o sicotropicas sin autorizacion. Para pequeñas cantidades, el articulo 4 contempla una excepcion cuando se justifica destino a tratamiento medico o a uso/consumo personal exclusivo y proximo en el tiempo. Eso no significa permiso general ni elimina la necesidad de justificar el caso."
      },
      {
        title: "Que debe contener la receta en contexto de tratamiento",
        body:
          "Para cultivo de especies del genero cannabis destinado a tratamiento medico, el articulo 8 senala que la receta debe ser extendida por un medico cirujano tratante e indicar diagnostico de la enfermedad, tratamiento, duracion y forma de administracion."
      },
      {
        title: "La forma de administracion importa",
        body:
          "La misma regla indica que la forma de administracion del cannabis no puede ser mediante combustion. Por eso esta guia no debe leerse como una guia de consumo recreativo ni como instruccion de uso."
      },
      {
        title: "Cultivo no es lo mismo que receta",
        body:
          "El articulo 8 sanciona sembrar, plantar, cultivar o cosechar sin autorizacion, salvo justificaciones especificas. El articulo 9 indica que la autorizacion asociada al articulo anterior es otorgada por el Servicio Agricola y Ganadero. Si tu duda toca cultivo, confirma con fuente legal vigente antes de actuar."
      },
      {
        title: "Que no hace ChileHub",
        body:
          "ChileHub no ayuda a conseguir cannabis, no recomienda medicos, no indica dosis, no interpreta tu receta como defensa legal y no valida productos. La salida correcta es hablar con medico tratante y confirmar normativa vigente en fuentes oficiales."
      }
    ],
    checklist: [
      "Tengo claro si mi duda es medica, legal, farmaceutica o de cultivo.",
      "Hablare con medico cirujano tratante, no con una fuente informal.",
      "Se que la receta debe incluir diagnostico, tratamiento, duracion y forma de administracion.",
      "No asumire que una receta permite cualquier compra, porte, cultivo o transporte.",
      "Confirmare fuentes vigentes antes de actuar."
    ],
    sources: [
      {
        label: "Ley 20.000 - Biblioteca del Congreso Nacional",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=235507"
      },
      {
        label: "Reglamento Ley 20.000 - Decreto 867",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=269323"
      },
      { label: "Instituto de Salud Publica", url: "https://www.ispch.cl/" },
      { label: "Servicio Agricola y Ganadero", url: "https://www.sag.gob.cl/" }
    ]
  };
}
