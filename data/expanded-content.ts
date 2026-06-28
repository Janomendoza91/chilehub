import type { ContentSource, GuideDetail, ProcedureDetail } from "@/types/chilehub";

type ProcedureSeed = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  cost: string;
  duration: string;
  channel: string;
  documents: string[];
  sources: ContentSource[];
  score?: number;
  warning?: string;
};

const chileAtiende = { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" };
const registroCivil = { label: "Registro Civil", url: "https://www.registrocivil.cl/" };
const sii = { label: "SII", url: "https://www.sii.cl/" };
const minvu = { label: "MINVU", url: "https://www.minvu.gob.cl/" };
const dt = { label: "Direccion del Trabajo", url: "https://www.dt.gob.cl/" };
const municipalidades = { label: "Municipalidades", url: "https://www.gob.cl/municipalidades/" };

function getDocumentDetail(document: string, seed: ProcedureSeed, index: number) {
  const lowerDocument = document.toLowerCase();

  if (lowerDocument.includes("cedula") || lowerDocument.includes("rut") || lowerDocument.includes("run")) {
    return "Verifica que el dato de identidad este vigente, legible y coincida con los demas antecedentes.";
  }

  if (lowerDocument.includes("clave")) {
    return "Prueba el acceso antes de iniciar. Si debes recuperar clave, hazlo con margen.";
  }

  if (lowerDocument.includes("contrato") || lowerDocument.includes("escritura") || lowerDocument.includes("estatuto")) {
    return "Lee fechas, nombres, obligaciones, montos y firmas antes de usarlo como respaldo.";
  }

  if (lowerDocument.includes("comprobante") || lowerDocument.includes("folio") || lowerDocument.includes("pago")) {
    return "Guarda respaldo digital y, si el proceso es presencial, lleva una copia accesible.";
  }

  if (lowerDocument.includes("certificado") || lowerDocument.includes("informe")) {
    return "Confirma antiguedad maxima aceptada, finalidad y si debe venir en PDF verificable o impreso.";
  }

  if (index === 0) {
    return `Documento base para iniciar o validar este proceso ante ${seed.channel}.`;
  }

  return "Puede ser solicitado segun canal, institucion, comuna o situacion personal.";
}

function indirectCostFor(category: string) {
  const costs: Record<string, string> = {
    Autos: "$0 a $80.000+",
    Vivienda: "$10.000 a $500.000+",
    Familia: "$0 a $300.000+",
    Trabajo: "$0 a asesoria variable",
    Impuestos: "$0 a gestion contable variable",
    Viajes: "$0 a $250.000+",
    Documentos: "$0 a $30.000+",
    Salud: "$0 a copagos o informes variables",
    Empresas: "$0 a $500.000+"
  };

  return costs[category] ?? "$0 a $20.000+";
}

function categoryBeforeYouStart(seed: ProcedureSeed, primarySource: ContentSource) {
  const shared = [
    `Confirma requisitos vigentes en ${primarySource.label} o en el canal responsable antes de avanzar.`,
    `Canal donde normalmente continua: ${seed.channel}. Verifica si requiere agenda, cuenta, pago previo o atencion presencial.`,
    `Costo referencial: ${seed.cost}. Plazo referencial: ${seed.duration}.`
  ];

  const extras: Record<string, string> = {
    Autos: "Revisa patente, propietario, multas, vigencia de documentos y restricciones antes de pagar o firmar.",
    Vivienda: "Separa costo visible, gastos indirectos, antecedentes legales y requisitos municipales o financieros.",
    Familia: "Ordena certificados, acuerdos, ingresos, gastos y respaldos antes de explicar el caso.",
    Trabajo: "Contrasta todo con contrato, anexos, liquidaciones, cotizaciones, asistencia y comunicaciones.",
    Impuestos: "Ten respaldos de ingresos, compras, ventas, giro, domicilio y folios antes de declarar o modificar datos.",
    Viajes: "El destino, las escalas y quienes viajan pueden cambiar documentos, vigencias, seguros, vacunas o visas.",
    Documentos: "Pregunta nombre exacto, finalidad, antiguedad maxima y formato aceptado antes de solicitarlo.",
    Salud: "Guarda diagnosticos, ordenes, boletas, resoluciones y comprobantes de recepcion con fecha.",
    Empresas: "Constituir o iniciar actividad no reemplaza permisos, patente, facturacion, banco ni obligaciones mensuales."
  };

  return [
    ...shared,
    extras[seed.category] ?? "Si tu caso tiene excepciones, valida con la institucion o un profesional.",
    seed.warning ?? "Si aparecen datos inconsistentes, deudas, plazos vencidos o excepciones, detente y confirma el caso."
  ];
}

function categoryQuestions(seed: ProcedureSeed) {
  const questions: Record<string, string[]> = {
    Autos: [
      "La patente y propietario coinciden con el proceso que quiero hacer?",
      "Hay multas, prendas, TAG, revision tecnica, SOAP o permiso pendientes?",
      "Quien paga certificados, regularizaciones o transferencia?"
    ],
    Vivienda: [
      "Estoy revisando compra, arriendo, subsidio, regularizacion o pago recurrente?",
      "Que costo no visible podria aparecer: garantia, banco, notaria, CBR, municipio o reparaciones?",
      "Existe deuda, gravamen, plazo de postulacion o requisito comunal?"
    ],
    Familia: [
      "El objetivo requiere Registro Civil, notaria, mediacion, tribunal o entidad de beneficios?",
      "Tengo certificados y respaldos de gastos, ingresos, domicilio o cuidado?",
      "Hay menores, conflicto, violencia, salud o urgencia que cambie el canal?"
    ],
    Trabajo: [
      "Que documento estoy revisando: contrato, anexo, liquidacion, finiquito, licencia o reclamo?",
      "Las fechas, montos, descuentos y cotizaciones coinciden con mis registros?",
      "Existe plazo legal, presion para firmar o deuda previsional?"
    ],
    Impuestos: [
      "La actividad, giro, domicilio y documentos tributarios representan lo que hago realmente?",
      "Los montos declarados tienen respaldo de boletas, facturas, contratos o pagos?",
      "Este caso requiere contador por empresa, IVA, renta, rectificatoria o inversiones?"
    ],
    Viajes: [
      "El destino exige visa, vigencia minima, seguro, vacunas o documentos adicionales?",
      "Viajan menores, mascotas o documentos que deban apostillarse?",
      "Tengo margen suficiente antes de comprar pasajes o asistir a la cita?"
    ],
    Documentos: [
      "Cual es el nombre exacto del documento que me pidieron?",
      "Que antiguedad y formato aceptan: digital, impreso, apostillado o notarial?",
      "Los datos personales coinciden en todos los documentos?"
    ],
    Salud: [
      "Quien responde en este caso: Fonasa, Isapre, COMPIN, prestador, empleador o Superintendencia?",
      "Tengo plazo vigente para licencia, apelacion, reembolso o reclamo?",
      "Guarde copia de diagnosticos, boletas, resoluciones y comprobantes?"
    ],
    Empresas: [
      "La empresa ya puede operar o solo esta constituida?",
      "Estan claros giro, domicilio, representante, permisos, patente y facturacion?",
      "Tengo obligaciones mensuales identificadas: impuestos, cotizaciones, contabilidad o banco?"
    ]
  };

  return [
    ...(questions[seed.category] ?? []),
    "Donde reviso estado, observaciones o correcciones despues de iniciar?"
  ];
}

function categorySteps(seed: ProcedureSeed, primarySource: ContentSource) {
  const firstStep: Record<string, string> = {
    Autos: "Anota patente, propietario, documentos vigentes y estado del vehiculo antes de pagar o asistir.",
    Vivienda: "Define si el proceso es compra, arriendo, subsidio, regularizacion o pago, porque cada ruta pide respaldos distintos.",
    Familia: "Ordena objetivo, personas involucradas, certificados y respaldos antes de elegir canal.",
    Trabajo: "Reune contrato, anexos, liquidaciones, cotizaciones y comunicaciones antes de firmar o reclamar.",
    Impuestos: "Ordena giro, domicilio, ingresos, compras, ventas, folios y claves antes de declarar o modificar.",
    Viajes: "Confirma destino, fechas, viajeros, documentos y vigencias antes de comprar o reservar.",
    Documentos: "Confirma nombre exacto, finalidad, antiguedad maxima y formato aceptado del documento.",
    Salud: "Identifica entidad responsable y reune ordenes, diagnosticos, boletas, licencias o resoluciones.",
    Empresas: "Define estado real de la empresa: idea, constitucion, inicio tributario, operacion o cierre."
  };

  return [
    firstStep[seed.category] ?? "Confirma requisitos y canal vigente.",
    `Prepara: ${seed.documents.slice(0, 3).join(", ")}.`,
    `Valida costo, plazo y requisitos actualizados en ${primarySource.label} o directamente en ${seed.channel}.`,
    "Inicia el proceso solo por el canal oficial o externo correspondiente y guarda folio, comprobante o correo.",
    "Revisa estado y corrige observaciones antes de asumir que el proceso quedo cerrado."
  ];
}

function categoryMistakes(category: string) {
  const mistakes: Record<string, string[]> = {
    Autos: ["No revisar multas, limitaciones o propietario antes de comprar o transferir.", "Entregar el vehiculo sin pago confirmado o sin comprobante."],
    Vivienda: ["Firmar sin entender deudas, gravamenes, reajustes, gastos comunes o multas.", "Calcular solo el precio principal y olvidar costos notariales, municipales o bancarios."],
    Familia: ["Llegar solo con relato y sin certificados o respaldos.", "Usar acuerdo verbal cuando el caso requiere formalizacion."],
    Trabajo: ["Firmar anexo o finiquito sin revisar desglose.", "No guardar liquidaciones, mensajes, asistencia o comprobantes."],
    Impuestos: ["Declarar sin respaldo o con giro/domicilio incorrecto.", "Confundir tramite SII con permiso suficiente para operar."],
    Viajes: ["Revisar tarde vigencia, autorizaciones, visa, vacunas o requisitos del destino.", "Comprar pasajes antes de confirmar documentos criticos."],
    Documentos: ["Descargar un certificado parecido, pero no el solicitado.", "No revisar fecha de emision, finalidad o formato aceptado."],
    Salud: ["Dejar vencer plazos de licencia, apelacion, reembolso o reclamo.", "No guardar resolucion, comprobante de recepcion o boleta."],
    Empresas: ["Constituir sin acordar socios, administracion, capital o salida.", "Operar sin revisar SII, patente, permisos, facturacion o obligaciones laborales."]
  };

  return [
    ...(mistakes[category] ?? []),
    "Confiar en requisitos antiguos o comentarios de terceros.",
    "No guardar folio, comprobante o respaldo de envio."
  ];
}

function categoryRedFlags(category: string) {
  const redFlags: Record<string, string[]> = {
    Autos: ["Aparece prenda, embargo, leasing, deuda grande o propietario distinto.", "Te piden pagar por fuera sin comprobante verificable."],
    Vivienda: ["Hay deuda, prohibicion, litigio, promesa apurada o clausula que no entiendes.", "El vendedor, corredor o arrendador evita entregar antecedentes."],
    Familia: ["Hay violencia, amenazas, menores, salud o incumplimiento grave.", "Te presionan a firmar acuerdos sin entender efectos."],
    Trabajo: ["Te piden firmar sin copia, sin desglose o sin fecha de pago clara.", "Hay fuero, accidente, acoso, cotizaciones impagas o despido discutido."],
    Impuestos: ["Hay diferencias con SII, observaciones, multas o rectificatorias.", "No puedes respaldar ingresos, compras, ventas o domicilio."],
    Viajes: ["El viaje depende de visa, menor, mascota, urgencia medica o documento internacional.", "No hay citas disponibles antes de la fecha de viaje."],
    Documentos: ["El documento se usara fuera de Chile, ante tribunal o para una operacion de alto monto.", "Los datos personales no coinciden."],
    Salud: ["Existe rechazo de licencia, negativa de cobertura, deuda alta o urgencia medica.", "No sabes que entidad debe responder."],
    Empresas: ["Hay socios, inversionistas, trabajadores, deuda, permisos sanitarios o rubro regulado.", "Se empieza a vender sin facturacion, patente o permiso requerido."]
  };

  return redFlags[category] ?? [
    "Te piden pagar fuera del canal informado.",
    "No puedes identificar fuente oficial o responsable del proceso."
  ];
}

function categoryVariations(category: string) {
  const variations: Record<string, string[]> = {
    Autos: ["Los valores y requisitos pueden cambiar por municipalidad, planta, Registro Civil o estado del vehiculo.", "Vehiculos con deuda, prenda, leasing, herencia o importacion requieren revision especial."],
    Vivienda: ["Los requisitos cambian por comuna, banco, Conservador, subsidio, tipo de propiedad y contrato.", "Subsidios dependen de llamados, tramo, ahorro, region y condiciones vigentes."],
    Familia: ["Menores, representantes, extranjeros, herencias y conflictos familiares pueden requerir documentos extra.", "Mediacion, notaria, Registro Civil y tribunal no resuelven lo mismo."],
    Trabajo: ["El contrato, causal, jornada, fuero, licencia o tipo de empleador pueden cambiar la ruta.", "Trabajadores independientes, casa particular o sector publico pueden tener reglas distintas."],
    Impuestos: ["Persona natural, empresa, regimen tributario, IVA, giro y volumen de operaciones cambian obligaciones.", "Fechas de declaracion y porcentajes pueden cambiar por calendario tributario."],
    Viajes: ["Cada pais, aerolinea, escala y tipo de viajero puede exigir documentos distintos.", "Menores, mascotas, estudios, trabajo o residencia requieren preparacion adicional."],
    Documentos: ["La institucion solicitante define finalidad, vigencia y formato aceptado.", "Uso internacional puede requerir apostilla, traduccion o legalizacion."],
    Salud: ["Fonasa, Isapre, COMPIN, prestador, empleador y Superintendencia tienen circuitos distintos.", "Tramo, plan, diagnostico, edad, cargas y plazos pueden cambiar cobertura o pago."],
    Empresas: ["Tipo societario, giro, comuna, rubro, trabajadores y permisos sectoriales cambian obligaciones.", "Alimentos, salud, educacion, transporte y construccion suelen exigir permisos especiales."]
  };

  return variations[category] ?? [
    "Los requisitos pueden cambiar por comuna, region o institucion.",
    "Personas extranjeras, menores de edad o representantes pueden necesitar documentos extra."
  ];
}

function categoryWhatToAsk(seed: ProcedureSeed) {
  return [
    `Cual es el requisito vigente para ${seed.title.toLowerCase()} en mi caso?`,
    `El costo actual coincide con este rango referencial: ${seed.cost}?`,
    `El plazo realista para mi canal es ${seed.duration} o debo considerar espera adicional?`,
    "Que documento se rechaza con mas frecuencia y por que?",
    "Donde reviso estado, folio, observaciones o correcciones?"
  ];
}

function makeProcedure(seed: ProcedureSeed): ProcedureDetail {
  const primarySource = seed.sources[0] ?? chileAtiende;

  return {
    slug: seed.slug,
    title: seed.title,
    category: seed.category,
    summary: seed.summary,
    updatedAt: "28 junio 2026",
    nextReviewAt: "28 julio 2026",
    cost: seed.cost,
    duration: seed.duration,
    channel: seed.channel,
    preparationScore: seed.score ?? 70,
    documents: seed.documents.map((document, index) => ({
      title: document,
      detail: getDocumentDetail(document, seed, index),
      required: index < 2
    })),
    beforeYouStart: categoryBeforeYouStart(seed, primarySource),
    keyQuestions: categoryQuestions(seed),
    estimatedCosts: [
      {
        label: "Costo estimado",
        amount: seed.cost,
        detail: `Rango referencial para prepararte. Confirma valor vigente en ${primarySource.label} o directamente en ${seed.channel}.`
      },
      {
        label: "Tiempo estimado",
        amount: seed.duration,
        detail: "Incluye preparacion, espera, validacion, observaciones y eventual correccion de antecedentes."
      },
      {
        label: "Costos indirectos",
        amount: indirectCostFor(seed.category),
        detail: "Puede incluir certificados, copias, traslados, notariales, permisos, copagos, software o asesoria segun caso."
      }
    ],
    steps: categorySteps(seed, primarySource),
    commonMistakes: categoryMistakes(seed.category),
    redFlags: categoryRedFlags(seed.category),
    variations: categoryVariations(seed.category),
    whatToAsk: categoryWhatToAsk(seed),
    externalAction: {
      label: `Continuar en ${primarySource.label}`,
      url: primarySource.url
    },
    sources: seed.sources
  };
}

const procedureSeeds: ProcedureSeed[] = [
  // Autos
  { slug: "duplicado-licencia-conducir", title: "Pedir duplicado de licencia de conducir", category: "Autos", summary: "Prepara la reposicion de tu licencia si fue perdida, robada o deteriorada.", cost: "$10.000 a $35.000 aprox.", duration: "1 a 2 horas; entrega segun municipalidad.", channel: "Municipalidad", documents: ["Cedula vigente", "Constancia o declaracion de perdida", "Licencia deteriorada si aplica"], sources: [municipalidades, chileAtiende] },
  { slug: "revision-tecnica", title: "Sacar revision tecnica", category: "Autos", summary: "Ordena documentos, estado del vehiculo y costos antes de ir a la planta.", cost: "$12.000 a $35.000 aprox.", duration: "30 minutos a 2 horas segun demanda.", channel: "Planta de revision tecnica", documents: ["Permiso de circulacion", "Certificado anterior", "Padron"], sources: [chileAtiende] },
  { slug: "comprar-soap", title: "Comprar SOAP", category: "Autos", summary: "Prepara la compra del seguro obligatorio antes del permiso de circulacion.", cost: "$6.000 a $25.000 aprox.", duration: "5 a 15 minutos online.", channel: "Aseguradoras o canales autorizados", documents: ["Patente", "Datos del vehiculo", "Medio de pago"], sources: [chileAtiende] },
  { slug: "pagar-multas-transito", title: "Pagar multas de transito", category: "Autos", summary: "Revisa multas asociadas a patente o RUT antes de vender, renovar o pagar permiso.", cost: "Variable segun multa.", duration: "10 minutos a varios dias si hay apelacion.", channel: "Municipalidad o juzgado de policia local", documents: ["Patente o RUT", "Rol o parte", "Medio de pago"], sources: [municipalidades, chileAtiende] },
  { slug: "obtener-padron-vehiculo", title: "Obtener padron de vehiculo", category: "Autos", summary: "Prepara la descarga o solicitud del certificado de inscripcion del vehiculo.", cost: "$0 a $1.500 aprox.", duration: "Inmediato online si esta disponible.", channel: "Registro Civil", documents: ["Patente", "ClaveUnica", "Datos del propietario"], sources: [registroCivil, chileAtiende] },
  { slug: "certificado-anotaciones-vigentes", title: "Certificado de anotaciones vigentes", category: "Autos", summary: "Revisa propietario, limitaciones y antecedentes antes de comprar o vender un vehiculo.", cost: "$1.000 a $2.000 aprox.", duration: "Inmediato online.", channel: "Registro Civil", documents: ["Patente", "Medio de pago", "Correo"], sources: [registroCivil, chileAtiende] },
  { slug: "inscribir-vehiculo-nuevo", title: "Inscribir vehiculo nuevo", category: "Autos", summary: "Organiza factura, homologacion y datos para primera inscripcion.", cost: "$40.000 a $150.000+ aprox.", duration: "Dias segun concesionario o Registro Civil.", channel: "Registro Civil o concesionario", documents: ["Factura", "Certificado de homologacion", "Cedula o RUT"], sources: [registroCivil, chileAtiende] },
  { slug: "cambiar-domicilio-vehiculo", title: "Actualizar domicilio asociado al vehiculo", category: "Autos", summary: "Revisa datos de propietario y comuna antes de pagos o notificaciones.", cost: "$0 a $5.000 aprox.", duration: "Minutos a dias segun canal.", channel: "Registro Civil o municipalidad", documents: ["Cedula", "Patente", "Comprobante de domicilio si aplica"], sources: [registroCivil, municipalidades] },
  { slug: "denunciar-robo-vehiculo", title: "Denunciar robo de vehiculo", category: "Autos", summary: "Ordena pasos urgentes, denuncia y avisos posteriores ante robo o perdida del auto.", cost: "$0 directo.", duration: "Inmediato para denuncia; seguimiento variable.", channel: "Carabineros, PDI y aseguradora", documents: ["Cedula", "Patente", "Datos del vehiculo"], sources: [chileAtiende] },
  { slug: "contratar-tag", title: "Contratar o regularizar TAG", category: "Autos", summary: "Prepara contrato, pagos pendientes y datos del vehiculo para autopistas.", cost: "$0 a $30.000+ segun contrato/deudas.", duration: "15 minutos a varios dias.", channel: "Concesionarias de autopistas", documents: ["Cedula", "Padron", "Medio de pago"], sources: [chileAtiende] },

  // Vivienda
  { slug: "solicitar-certificado-dominio-vigente", title: "Certificado de dominio vigente", category: "Vivienda", summary: "Revisa propiedad y titularidad antes de comprar, vender o arrendar.", cost: "$4.000 a $8.000 aprox.", duration: "Inmediato a dias segun Conservador.", channel: "Conservador de Bienes Raices", documents: ["Fojas, numero y ano", "Comuna", "Medio de pago"], sources: [chileAtiende] },
  { slug: "certificado-hipotecas-gravamenes", title: "Certificado de hipotecas y gravamenes", category: "Vivienda", summary: "Detecta deudas, prohibiciones o gravamenes antes de comprometer una compra.", cost: "$8.000 a $20.000 aprox.", duration: "1 a 7 dias segun Conservador.", channel: "Conservador de Bienes Raices", documents: ["Datos de propiedad", "Inscripcion", "Medio de pago"], sources: [chileAtiende] },
  { slug: "postular-subsidio-ds1", title: "Postular al subsidio DS1", category: "Vivienda", summary: "Prepara ahorro, RSH y antecedentes para compra o construccion de vivienda.", cost: "Ahorro minimo en UF segun tramo.", duration: "Postulacion en minutos; resultados por calendario.", channel: "MINVU", documents: ["ClaveUnica", "Ahorro", "Registro Social de Hogares"], sources: [minvu, chileAtiende] },
  { slug: "postular-subsidio-ds49", title: "Postular al Fondo Solidario DS49", category: "Vivienda", summary: "Ordena ahorro, grupo familiar y RSH antes de un llamado de vivienda.", cost: "Ahorro minimo variable en UF.", duration: "Segun llamado y evaluacion MINVU.", channel: "MINVU", documents: ["ClaveUnica", "Libreta de ahorro", "RSH"], sources: [minvu, chileAtiende] },
  { slug: "regularizar-ampliacion-vivienda", title: "Regularizar ampliacion de vivienda", category: "Vivienda", summary: "Prepara antecedentes municipales y tecnicos para regularizar una ampliacion.", cost: "$50.000 a $500.000+ aprox.", duration: "Semanas a meses.", channel: "Direccion de Obras Municipales", documents: ["Permiso de edificacion", "Planos", "Datos de propiedad"], sources: [municipalidades] },
  { slug: "obtener-numero-rol-propiedad", title: "Obtener rol de una propiedad", category: "Vivienda", summary: "Encuentra el rol necesario para contribuciones, certificados y consultas.", cost: "$0", duration: "Minutos online si tienes datos.", channel: "SII o municipalidad", documents: ["Direccion", "Comuna", "Datos de propietario si aplica"], sources: [sii, municipalidades] },
  { slug: "pagar-contribuciones", title: "Pagar contribuciones", category: "Vivienda", summary: "Revisa cuotas, rol, vencimientos y pagos antes de atrasarte.", cost: "Variable segun propiedad.", duration: "5 a 20 minutos online.", channel: "Tesoreria General de la Republica", documents: ["Rol", "Medio de pago", "Comprobante anterior"], sources: [chileAtiende] },
  { slug: "firmar-contrato-arriendo", title: "Firmar contrato de arriendo", category: "Vivienda", summary: "Revisa garantias, plazo, reajustes, gastos comunes y responsabilidades.", cost: "Garantia 1 a 2 meses aprox.", duration: "1 a 3 dias segun revision.", channel: "Partes, notaria o plataforma externa", documents: ["Cedula", "Liquidaciones o ingresos", "Contrato"], sources: [chileAtiende] },
  { slug: "terminar-contrato-arriendo", title: "Terminar contrato de arriendo", category: "Vivienda", summary: "Prepara aviso, entrega, pagos pendientes y devolucion de garantia.", cost: "Variable por deudas o danos.", duration: "Dias a semanas.", channel: "Partes, notaria o tribunal si hay conflicto", documents: ["Contrato", "Aviso escrito", "Comprobantes de pago"], sources: [chileAtiende] },
  { slug: "solicitar-certificado-inhabilidad-vivienda", title: "Certificados para comprar vivienda", category: "Vivienda", summary: "Ordena documentos de propiedad, deuda, dominio y revision legal antes de comprar.", cost: "$20.000 a $80.000+ aprox.", duration: "Dias a semanas.", channel: "CBR, banco, notaria o abogado", documents: ["Promesa", "Certificados CBR", "Antecedentes bancarios"], sources: [chileAtiende] },

  // Familia
  { slug: "solicitar-cuidado-personal", title: "Solicitar cuidado personal", category: "Familia", summary: "Prepara antecedentes de cuidado, domicilio, colegio y bienestar antes de solicitar cuidado personal.", cost: "$0 a $300.000+ segun asesoria.", duration: "Semanas a meses.", channel: "Mediacion o tribunal de familia", documents: ["Certificado de nacimiento", "Antecedentes de cuidado", "Comprobantes de gastos"], sources: [chileAtiende] },
  { slug: "regular-visitas", title: "Regular relacion directa y regular", category: "Familia", summary: "Ordena propuesta de visitas, horarios, traslados y antecedentes antes de mediacion o tribunal.", cost: "$0 a $300.000+ segun asesoria.", duration: "Semanas a meses.", channel: "Mediacion o tribunal de familia", documents: ["Certificado de nacimiento", "Propuesta de horarios", "Antecedentes familiares"], sources: [chileAtiende] },
  { slug: "autorizacion-viaje-menor", title: "Autorizacion de viaje para menor", category: "Familia", summary: "Prepara permisos, documentos y datos del viaje antes de salir del pais con menores.", cost: "$5.000 a $30.000 aprox.", duration: "1 hora a varios dias.", channel: "Notaria, tribunal o PDI segun caso", documents: ["Cedula o pasaporte", "Certificado de nacimiento", "Datos del viaje"], sources: [chileAtiende] },
  { slug: "inscribir-nacimiento", title: "Inscribir nacimiento", category: "Familia", summary: "Ordena documentos del recien nacido y padres para inscripcion en Registro Civil.", cost: "$0 directo.", duration: "Minutos a dias segun canal.", channel: "Registro Civil", documents: ["Comprobante de parto", "Cedulas de padres", "Datos del menor"], sources: [registroCivil, chileAtiende] },
  { slug: "solicitar-libreta-familia", title: "Solicitar libreta de familia", category: "Familia", summary: "Prepara antecedentes familiares para obtener o reponer libreta de familia.", cost: "$0 a $5.000 aprox.", duration: "Minutos a dias.", channel: "Registro Civil", documents: ["Cedula", "Datos de matrimonio o hijos", "ClaveUnica si online"], sources: [registroCivil, chileAtiende] },
  { slug: "acuerdo-union-civil", title: "Agendar Acuerdo de Union Civil", category: "Familia", summary: "Prepara documentos, testigos y fecha antes de celebrar AUC.", cost: "$0 a $20.000+ segun horario/lugar.", duration: "Segun agenda Registro Civil.", channel: "Registro Civil", documents: ["Cedulas", "Datos de contrayentes", "Testigos si aplica"], sources: [registroCivil, chileAtiende] },
  { slug: "matrimonio-civil", title: "Agendar matrimonio civil", category: "Familia", summary: "Organiza manifestacion, testigos, documentos y costos antes del matrimonio civil.", cost: "$0 a $40.000+ segun lugar/horario.", duration: "Segun agenda Registro Civil.", channel: "Registro Civil", documents: ["Cedulas", "Testigos", "Datos de ceremonia"], sources: [registroCivil, chileAtiende] },
  { slug: "posesion-efectiva", title: "Solicitar posesion efectiva", category: "Familia", summary: "Ordena herederos, bienes y certificados antes de iniciar una posesion efectiva.", cost: "$0 a variable segun masa hereditaria.", duration: "Semanas a meses.", channel: "Registro Civil o tribunal segun testamento", documents: ["Certificado de defuncion", "Datos de herederos", "Inventario de bienes"], sources: [registroCivil, chileAtiende] },
  { slug: "certificado-discapacidad", title: "Solicitar credencial de discapacidad", category: "Familia", summary: "Prepara informes medicos y sociales para solicitar calificacion o credencial.", cost: "$0 a costos medicos variables.", duration: "Semanas a meses.", channel: "COMPIN o Registro Nacional de Discapacidad", documents: ["Informes medicos", "Cedula", "Antecedentes sociales"], sources: [chileAtiende] },
  { slug: "postular-bono-logro-escolar", title: "Revisar Bono Logro Escolar", category: "Familia", summary: "Confirma requisitos, RSH y datos del estudiante para revisar si aplica el beneficio.", cost: "$0", duration: "Consulta online en minutos.", channel: "ChileAtiende o Ministerio Desarrollo Social", documents: ["RUT estudiante", "RSH", "Datos escolares"], sources: [chileAtiende] },

  // Trabajo
  { slug: "calcular-finiquito", title: "Calcular finiquito estimado", category: "Trabajo", summary: "Ordena sueldo, causal, vacaciones e indemnizaciones antes de revisar un finiquito.", cost: "$0 a asesoria variable.", duration: "15 a 60 minutos.", channel: "ChileHub, DT o asesor laboral", documents: ["Contrato", "Liquidaciones", "Dias de vacaciones"], sources: [dt, chileAtiende] },
  { slug: "denuncia-inspeccion-trabajo", title: "Denunciar ante Inspeccion del Trabajo", category: "Trabajo", summary: "Prepara antecedentes para denunciar incumplimientos laborales.", cost: "$0", duration: "Minutos online; gestion variable.", channel: "Direccion del Trabajo", documents: ["Contrato", "Liquidaciones", "Pruebas o mensajes"], sources: [dt] },
  { slug: "solicitar-certificado-cotizaciones", title: "Certificado de cotizaciones", category: "Trabajo", summary: "Revisa AFP, salud y pagos previsionales antes de postular o reclamar.", cost: "$0", duration: "Minutos online.", channel: "AFP, Previred o institucion previsional", documents: ["RUT", "Clave de AFP", "ClaveUnica si aplica"], sources: [chileAtiende] },
  { slug: "cobrar-seguro-cesantia", title: "Cobrar seguro de cesantia", category: "Trabajo", summary: "Prepara finiquito, cedula y cuenta para solicitar pagos del seguro de cesantia.", cost: "$0", duration: "Dias segun AFC y validacion.", channel: "AFC Chile", documents: ["Finiquito", "Cedula", "Cuenta bancaria"], sources: [chileAtiende] },
  { slug: "postular-ife-laboral", title: "Revisar subsidios al empleo", category: "Trabajo", summary: "Confirma beneficios laborales vigentes, requisitos y fechas antes de postular.", cost: "$0", duration: "Minutos online; pago segun calendario.", channel: "SENCE o ChileAtiende", documents: ["Contrato", "ClaveUnica", "Datos bancarios"], sources: [chileAtiende] },
  { slug: "actualizar-curriculum-laboral", title: "Preparar documentos para buscar trabajo", category: "Trabajo", summary: "Ordena curriculum, certificados y antecedentes antes de postular.", cost: "$0 a $20.000 aprox.", duration: "1 a 3 horas.", channel: "Portales laborales o empleadores", documents: ["CV", "Certificados", "Referencias"], sources: [chileAtiende] },
  { slug: "solicitar-permiso-laboral", title: "Solicitar permiso laboral", category: "Trabajo", summary: "Revisa tipo de permiso, respaldo y comunicacion antes de ausentarte.", cost: "$0 directo.", duration: "Horas a dias segun empleador.", channel: "Empleador o DT si hay conflicto", documents: ["Solicitud", "Respaldo", "Contrato"], sources: [dt] },
  { slug: "revisar-contrato-trabajo", title: "Revisar contrato de trabajo", category: "Trabajo", summary: "Verifica sueldo, jornada, funciones, lugar y anexos antes de firmar.", cost: "$0 a asesoria variable.", duration: "30 minutos a 2 horas.", channel: "Empleador, DT o asesor laboral", documents: ["Contrato", "Anexos", "Oferta laboral"], sources: [dt] },
  { slug: "tramitar-licencia-parental", title: "Tramitar permiso postnatal parental", category: "Trabajo", summary: "Prepara licencia, empleador y modalidad antes de iniciar postnatal parental.", cost: "$0 directo.", duration: "Dias a semanas segun tramitacion.", channel: "Empleador, COMPIN, Isapre o caja", documents: ["Licencia", "Datos empleador", "Cedula"], sources: [chileAtiende] },
  { slug: "pedir-vacaciones", title: "Solicitar feriado legal", category: "Trabajo", summary: "Revisa dias disponibles, fechas y formalizacion antes de pedir vacaciones.", cost: "$0", duration: "Dias segun aprobacion empleador.", channel: "Empleador", documents: ["Solicitud", "Registro de dias", "Contrato si hay duda"], sources: [dt] },

  // Impuestos
  { slug: "emitir-boleta-honorarios", title: "Emitir boleta de honorarios", category: "Impuestos", summary: "Prepara datos del receptor, monto y retencion antes de emitir una boleta.", cost: "$0 directo; retencion aplicable.", duration: "5 a 15 minutos.", channel: "SII", documents: ["Clave SII", "Datos receptor", "Monto"], sources: [sii] },
  { slug: "emitir-factura-electronica", title: "Emitir factura electronica", category: "Impuestos", summary: "Revisa inicio de actividades, giro y datos del cliente antes de facturar.", cost: "$0 a costo de software si aplica.", duration: "5 a 30 minutos.", channel: "SII o software autorizado", documents: ["Clave SII", "Datos cliente", "Detalle venta"], sources: [sii] },
  { slug: "pagar-iva-f29", title: "Declarar y pagar IVA F29", category: "Impuestos", summary: "Ordena ventas, compras, creditos y debitos antes de declarar IVA.", cost: "Variable segun impuesto.", duration: "30 minutos a varias horas.", channel: "SII", documents: ["Registro compras", "Registro ventas", "Clave SII"], sources: [sii] },
  { slug: "obtener-rut-empresa", title: "Obtener RUT de empresa", category: "Impuestos", summary: "Prepara constitucion, representante y datos tributarios para operar.", cost: "$0 directo; costos notariales variables.", duration: "Minutos a dias segun caso.", channel: "SII", documents: ["Constitucion", "Representante", "Domicilio"], sources: [sii] },
  { slug: "cambiar-domicilio-tributario", title: "Cambiar domicilio tributario", category: "Impuestos", summary: "Prepara nuevo domicilio y respaldos antes de actualizarlo en SII.", cost: "$0", duration: "Minutos a dias si hay verificacion.", channel: "SII", documents: ["Clave SII", "Nuevo domicilio", "Respaldo"], sources: [sii] },
  { slug: "termino-giro", title: "Hacer termino de giro", category: "Impuestos", summary: "Ordena declaraciones, deudas y documentos antes de cerrar actividad tributaria.", cost: "$0 directo; impuestos pendientes variables.", duration: "Dias a meses segun situacion.", channel: "SII", documents: ["Clave SII", "Declaraciones", "Libros o registros"], sources: [sii] },
  { slug: "recuperar-clave-tributaria", title: "Recuperar clave tributaria", category: "Impuestos", summary: "Prepara identidad y correo para recuperar acceso al SII.", cost: "$0", duration: "5 a 30 minutos.", channel: "SII", documents: ["RUT", "Correo", "ClaveUnica si aplica"], sources: [sii] },
  { slug: "solicitar-folio-boletas", title: "Solicitar folios o timbraje electronico", category: "Impuestos", summary: "Revisa autorizacion y documentos tributarios antes de emitir.", cost: "$0 directo.", duration: "Minutos a dias segun validacion.", channel: "SII", documents: ["Clave SII", "Inicio actividades", "Datos de emision"], sources: [sii] },
  { slug: "rectificar-declaracion-sii", title: "Rectificar declaracion en SII", category: "Impuestos", summary: "Prepara errores, respaldos y efectos antes de corregir una declaracion.", cost: "Variable por diferencias, multas o intereses.", duration: "Minutos a dias.", channel: "SII", documents: ["Declaracion original", "Respaldos", "Clave SII"], sources: [sii] },
  { slug: "consultar-deudas-fiscales", title: "Consultar deudas fiscales", category: "Impuestos", summary: "Revisa deudas, convenios y pagos pendientes antes de regularizar.", cost: "Variable segun deuda.", duration: "Minutos online.", channel: "Tesoreria o SII", documents: ["RUT", "Clave", "Medio de pago"], sources: [sii, chileAtiende] },

  // Viajes
  { slug: "autorizacion-salida-menor", title: "Autorizacion de salida de menor", category: "Viajes", summary: "Prepara permisos notariales o judiciales antes de viajar con menores.", cost: "$5.000 a $30.000+ aprox.", duration: "Horas a dias.", channel: "Notaria, tribunal o PDI", documents: ["Certificado nacimiento", "Cedulas", "Datos viaje"], sources: [chileAtiende] },
  { slug: "revisar-requisitos-visa", title: "Revisar requisitos de visa", category: "Viajes", summary: "Ordena pasaporte, solvencia, reservas y documentos antes de solicitar visa.", cost: "Variable por pais.", duration: "Dias a meses.", channel: "Consulado o portal oficial del pais", documents: ["Pasaporte", "Fotos", "Respaldo financiero"], sources: [chileAtiende] },
  { slug: "apostillar-documento", title: "Apostillar documento", category: "Viajes", summary: "Prepara certificados para uso internacional con apostilla cuando corresponda.", cost: "$0 a costos de certificado.", duration: "Minutos a dias.", channel: "Apostilla Chile", documents: ["Documento original", "Destino", "Datos solicitante"], sources: [chileAtiende] },
  { slug: "permiso-internacional-conducir", title: "Permiso internacional de conducir", category: "Viajes", summary: "Revisa licencia chilena y requisitos antes de conducir fuera del pais.", cost: "$40.000 a $80.000 aprox.", duration: "1 a 3 dias.", channel: "Automovil Club u organismo autorizado", documents: ["Licencia", "Cedula", "Foto"], sources: [chileAtiende] },
  { slug: "seguro-viaje", title: "Contratar seguro de viaje", category: "Viajes", summary: "Compara cobertura medica, cancelacion y requisitos del pais antes de viajar.", cost: "$15.000 a $150.000+ aprox.", duration: "10 a 30 minutos.", channel: "Aseguradoras o asistencia de viaje", documents: ["Destino", "Fechas", "Datos viajeros"], sources: [chileAtiende] },
  { slug: "declarar-equipaje-aduana", title: "Declarar equipaje o productos en Aduana", category: "Viajes", summary: "Revisa limites, productos restringidos y declaracion antes de entrar o salir.", cost: "Variable por impuestos o multas.", duration: "Minutos a horas.", channel: "Aduanas", documents: ["Pasaporte", "Boletas", "Declaracion"], sources: [chileAtiende] },
  { slug: "viajar-con-mascota", title: "Viajar con mascota", category: "Viajes", summary: "Prepara certificados sanitarios, vacunas y requisitos del pais de destino.", cost: "$20.000 a $200.000+ aprox.", duration: "Dias a semanas.", channel: "SAG, veterinario y aerolinea", documents: ["Certificado veterinario", "Vacunas", "Datos mascota"], sources: [chileAtiende] },
  { slug: "recuperar-pasaporte-extraviado", title: "Pasaporte perdido antes de viajar", category: "Viajes", summary: "Ordena denuncia, reposicion y alternativas si perdiste pasaporte cerca del viaje.", cost: "$69.000+ aprox.", duration: "Dias habiles segun disponibilidad.", channel: "Registro Civil o consulado", documents: ["Cedula", "Denuncia si aplica", "Datos viaje"], sources: [registroCivil, chileAtiende] },
  { slug: "inscribirse-registro-viajeros", title: "Inscribirse en registro de viajeros", category: "Viajes", summary: "Prepara datos de contacto y destino para facilitar asistencia consular.", cost: "$0", duration: "5 a 15 minutos.", channel: "Cancilleria", documents: ["Pasaporte", "Itinerario", "Contacto emergencia"], sources: [chileAtiende] },
  { slug: "certificado-vacunas-viaje", title: "Certificados de vacunas para viajar", category: "Viajes", summary: "Revisa vacunas exigidas, certificados y plazos antes del viaje.", cost: "$0 a $80.000+ aprox.", duration: "Dias a semanas.", channel: "Salud, vacunatorio o autoridad destino", documents: ["Carnet vacunas", "Pasaporte", "Itinerario"], sources: [chileAtiende] },

  // Documentos
  { slug: "certificado-nacimiento", title: "Certificado de nacimiento", category: "Documentos", summary: "Descarga el certificado correcto para matricula, beneficios, viaje o familia.", cost: "$0 a $1.500 aprox.", duration: "Inmediato online.", channel: "Registro Civil", documents: ["RUT", "ClaveUnica si aplica", "Finalidad"], sources: [registroCivil, chileAtiende] },
  { slug: "certificado-matrimonio", title: "Certificado de matrimonio", category: "Documentos", summary: "Prepara el certificado de matrimonio para bancos, familia, viajes o beneficios.", cost: "$0 a $1.500 aprox.", duration: "Inmediato online.", channel: "Registro Civil", documents: ["RUT", "ClaveUnica si aplica", "Finalidad"], sources: [registroCivil, chileAtiende] },
  { slug: "certificado-defuncion", title: "Certificado de defuncion", category: "Documentos", summary: "Obtiene certificado para herencias, seguros, pensiones o tramites familiares.", cost: "$0 a $1.500 aprox.", duration: "Inmediato online.", channel: "Registro Civil", documents: ["RUT fallecido", "Finalidad", "ClaveUnica si aplica"], sources: [registroCivil, chileAtiende] },
  { slug: "hoja-vida-conductor", title: "Hoja de vida del conductor", category: "Documentos", summary: "Revisa infracciones y antecedentes de conductor para trabajos o procesos vehiculares.", cost: "$0 a $1.500 aprox.", duration: "Inmediato online.", channel: "Registro Civil", documents: ["RUT", "ClaveUnica", "Medio de pago si aplica"], sources: [registroCivil, chileAtiende] },
  { slug: "certificado-residencia", title: "Certificado de residencia", category: "Documentos", summary: "Prepara respaldo de domicilio cuando te lo pidan para beneficios o instituciones.", cost: "$0 a $5.000 aprox.", duration: "Minutos a dias segun entidad.", channel: "Junta de vecinos, notaria o municipio", documents: ["Cedula", "Cuenta servicio", "Contrato o respaldo"], sources: [municipalidades, chileAtiende] },
  { slug: "declaracion-jurada-simple", title: "Declaracion jurada simple", category: "Documentos", summary: "Prepara una declaracion responsable cuando una institucion la solicite.", cost: "$0 a $10.000 aprox.", duration: "Minutos a horas.", channel: "Institucion solicitante o notaria", documents: ["Cedula", "Texto declaracion", "Respaldo"], sources: [chileAtiende] },
  { slug: "declaracion-jurada-notarial", title: "Declaracion jurada notarial", category: "Documentos", summary: "Organiza texto, identidad y respaldo antes de firmar una declaracion ante notario.", cost: "$5.000 a $25.000 aprox.", duration: "30 minutos a 2 horas.", channel: "Notaria", documents: ["Cedula", "Texto", "Respaldo"], sources: [chileAtiende] },
  { slug: "certificado-vigencia-cedula", title: "Consultar vigencia de cedula", category: "Documentos", summary: "Verifica estado de tu documento antes de viajar, firmar o hacer tramites.", cost: "$0", duration: "Minutos online.", channel: "Registro Civil", documents: ["RUN", "Numero documento", "ClaveUnica si aplica"], sources: [registroCivil] },
  { slug: "bloquear-cedula", title: "Bloquear cedula perdida o robada", category: "Documentos", summary: "Actua rapido para reducir riesgo de uso indebido del documento.", cost: "$0", duration: "5 a 15 minutos.", channel: "Registro Civil", documents: ["RUN", "Datos personales", "Motivo bloqueo"], sources: [registroCivil, chileAtiende] },
  { slug: "obtener-certificado-estudios", title: "Certificado de estudios", category: "Documentos", summary: "Prepara certificado anual o licencia media para trabajo, matricula o postulaciones.", cost: "$0 a $3.000 aprox.", duration: "Minutos a dias segun ano e institucion.", channel: "MINEDUC o establecimiento", documents: ["RUN", "Ano de estudio", "Datos establecimiento"], sources: [chileAtiende] },

  // Salud
  { slug: "afiliarse-fonasa", title: "Afiliarse a Fonasa", category: "Salud", summary: "Prepara antecedentes de identidad, ingresos y cargas para ingresar o actualizar Fonasa.", cost: "$0 directo.", duration: "Minutos a dias.", channel: "Fonasa o ChileAtiende", documents: ["Cedula", "Contrato o ingresos", "Cargas si aplica"], sources: [chileAtiende] },
  { slug: "comprar-bono-fonasa", title: "Comprar bono Fonasa", category: "Salud", summary: "Revisa prestador, codigo y tramo antes de comprar un bono de atencion.", cost: "Variable segun prestacion y tramo.", duration: "5 a 15 minutos.", channel: "Fonasa, prestador o ChileAtiende", documents: ["RUN", "Prestador", "Codigo prestacion"], sources: [chileAtiende] },
  { slug: "cambiar-isapre", title: "Cambiar o salir de Isapre", category: "Salud", summary: "Revisa contrato, preexistencias, cargas y continuidad antes de cambiar plan.", cost: "Variable segun plan.", duration: "Dias a semanas.", channel: "Isapre o Superintendencia de Salud", documents: ["Contrato", "Cedula", "Antecedentes de cargas"], sources: [chileAtiende] },
  { slug: "registrar-carga-familiar-salud", title: "Registrar carga familiar en salud", category: "Salud", summary: "Prepara certificados y antecedentes para incorporar cargas en Fonasa o Isapre.", cost: "$0 directo.", duration: "Dias a semanas.", channel: "Fonasa, Isapre o caja", documents: ["Certificado nacimiento", "Cedula", "Acreditacion carga"], sources: [chileAtiende] },
  { slug: "solicitar-ges", title: "Activar garantia GES/AUGE", category: "Salud", summary: "Ordena diagnostico, derivacion y plazos cuando una patologia puede estar cubierta.", cost: "Copago variable segun tramo/plan.", duration: "Segun garantia y prestador.", channel: "Fonasa, Isapre o prestador", documents: ["Diagnostico", "Derivacion", "Cedula"], sources: [chileAtiende] },
  { slug: "reembolso-isapre", title: "Solicitar reembolso Isapre", category: "Salud", summary: "Prepara boletas, ordenes y bonos antes de pedir reembolso.", cost: "$0 directo; reembolso variable.", duration: "Dias a semanas.", channel: "Isapre", documents: ["Boleta", "Orden medica", "Datos bancarios"], sources: [chileAtiende] },
  { slug: "agendar-hora-consultorio", title: "Agendar hora en consultorio", category: "Salud", summary: "Revisa inscripcion, sector, disponibilidad y documentos antes de pedir atencion primaria.", cost: "$0 directo.", duration: "Minutos a semanas segun disponibilidad.", channel: "CESFAM o municipio", documents: ["Cedula", "Comprobante domicilio", "Carnet salud si aplica"], sources: [municipalidades, chileAtiende] },
  { slug: "inscribirse-cesfam", title: "Inscribirse en CESFAM", category: "Salud", summary: "Prepara domicilio, identidad y prevision para atenderte en salud primaria.", cost: "$0", duration: "Minutos a dias.", channel: "CESFAM municipal", documents: ["Cedula", "Comprobante domicilio", "Fonasa/Isapre"], sources: [municipalidades, chileAtiende] },
  { slug: "solicitar-certificado-vacunas", title: "Certificado de vacunas", category: "Salud", summary: "Obtiene respaldo de vacunas para colegio, trabajo o viaje.", cost: "$0 a $5.000 aprox.", duration: "Minutos a dias.", channel: "MINSAL, vacunatorio o ChileAtiende", documents: ["RUN", "Carnet vacunas", "Finalidad"], sources: [chileAtiende] },
  { slug: "reclamo-superintendencia-salud", title: "Reclamar ante Superintendencia de Salud", category: "Salud", summary: "Prepara antecedentes para reclamar por Fonasa, Isapre o prestadores.", cost: "$0", duration: "Dias a semanas.", channel: "Superintendencia de Salud", documents: ["Cedula", "Resolucion o respuesta", "Comprobantes"], sources: [chileAtiende] }
,

  // Empresas
  { slug: "constituir-spa", title: "Constituir una SpA", category: "Empresas", summary: "Prepara socios, capital, administracion y estatutos antes de crear una Sociedad por Acciones.", cost: "$0 a $120.000+ aprox.", duration: "1 dia a 2 semanas segun firma y complejidad.", channel: "Empresa en un Dia, notaria o abogado", documents: ["Datos de accionistas", "Capital y acciones", "Domicilio"], sources: [chileAtiende, sii] },
  { slug: "constituir-eirl", title: "Constituir una EIRL", category: "Empresas", summary: "Ordena giro, patrimonio y responsabilidad antes de crear una empresa individual.", cost: "$0 a $100.000+ aprox.", duration: "1 dia a 2 semanas.", channel: "Empresa en un Dia, notaria o abogado", documents: ["Cedula", "Giro", "Domicilio tributario"], sources: [chileAtiende, sii] },
  { slug: "constituir-sociedad-limitada", title: "Constituir sociedad limitada", category: "Empresas", summary: "Prepara socios, aportes, administracion y reglas de salida antes de firmar.", cost: "$50.000 a $250.000+ aprox.", duration: "Dias a semanas.", channel: "Notaria, abogado o Empresa en un Dia si aplica", documents: ["Datos de socios", "Aportes", "Estatutos"], sources: [chileAtiende, sii] },
  { slug: "modificar-sociedad", title: "Modificar una sociedad", category: "Empresas", summary: "Prepara cambios de socios, administracion, domicilio, giro o capital antes de modificar estatutos.", cost: "$30.000 a $250.000+ aprox.", duration: "Dias a semanas.", channel: "Registro de Empresas, notaria o abogado", documents: ["Estatutos actuales", "Acuerdo de socios", "Datos del cambio"], sources: [chileAtiende, sii] },
  { slug: "disolver-sociedad", title: "Disolver o cerrar sociedad", category: "Empresas", summary: "Ordena deudas, activos, impuestos y acuerdos antes de cerrar una empresa.", cost: "$50.000 a $300.000+ aprox.", duration: "Semanas a meses.", channel: "Registro de Empresas, SII, notaria o abogado", documents: ["Acuerdo de socios", "Situacion tributaria", "Inventario de activos/deudas"], sources: [sii, chileAtiende] },
  { slug: "obtener-patente-comercial", title: "Obtener patente comercial", category: "Empresas", summary: "Prepara domicilio, giro, permisos y antecedentes municipales para operar legalmente.", cost: "Variable por comuna y capital propio.", duration: "Dias a semanas.", channel: "Municipalidad", documents: ["Inicio de actividades", "Contrato o dominio", "Permisos sectoriales si aplica"], sources: [municipalidades, chileAtiende] },
  { slug: "abrir-cuenta-empresa", title: "Abrir cuenta bancaria empresa", category: "Empresas", summary: "Ordena RUT empresa, poderes, constitucion y antecedentes comerciales antes de solicitar cuenta.", cost: "$0 a costos bancarios variables.", duration: "Dias a semanas.", channel: "Banco o fintech", documents: ["RUT empresa", "Constitucion", "Poderes vigentes"], sources: [chileAtiende] },
  { slug: "habilitar-facturacion-electronica", title: "Habilitar facturacion electronica", category: "Empresas", summary: "Prepara inicio de actividades, folios y sistema de emision antes de facturar.", cost: "$0 a software mensual variable.", duration: "Minutos a dias.", channel: "SII o proveedor autorizado", documents: ["Clave SII", "Inicio de actividades", "Datos de empresa"], sources: [sii] },
  { slug: "registrar-marca-inapi", title: "Registrar marca en INAPI", category: "Empresas", summary: "Prepara nombre, clase, logo y busqueda previa antes de solicitar marca.", cost: "$60.000 a $250.000+ aprox.", duration: "Meses segun tramitacion/oposiciones.", channel: "INAPI", documents: ["Nombre o logo", "Titular", "Clases de productos/servicios"], sources: [chileAtiende] },
  { slug: "contratar-primer-trabajador", title: "Contratar primer trabajador", category: "Empresas", summary: "Prepara contrato, remuneracion, jornada, cotizaciones y obligaciones antes de contratar.", cost: "Sueldo + cotizaciones + gestion laboral.", duration: "1 a 3 dias si esta claro.", channel: "Empleador, DT, Previred", documents: ["Contrato", "Datos trabajador", "Sistema de remuneraciones"], sources: [dt, chileAtiende] },
  { slug: "inscribir-empresa-chileproveedores", title: "Inscribirse como proveedor del Estado", category: "Empresas", summary: "Prepara antecedentes tributarios, bancarios y legales para vender al Estado.", cost: "$0 a costos documentales variables.", duration: "Dias a semanas.", channel: "Mercado Publico / ChileProveedores", documents: ["RUT empresa", "Datos bancarios", "Antecedentes legales"], sources: [chileAtiende] },
  { slug: "obtener-resolucion-sanitaria", title: "Obtener resolucion sanitaria", category: "Empresas", summary: "Prepara local, planos, giro y antecedentes antes de operar rubros de alimentos o salud.", cost: "$50.000 a $500.000+ aprox.", duration: "Semanas a meses.", channel: "SEREMI de Salud", documents: ["Inicio actividades", "Plano/local", "Antecedentes sanitarios"], sources: [chileAtiende] }
];

const additionalProcedureSeeds: ProcedureSeed[] = [
  // Autos
  { slug: "levantar-prenda-vehiculo", title: "Levantar prenda de un vehiculo", category: "Autos", summary: "Prepara certificados y autorizaciones para eliminar una limitacion por financiamiento pagado.", cost: "$10.000 a $60.000+ aprox.", duration: "Dias a semanas segun acreedor y registro.", channel: "Entidad financiera y Registro Civil", documents: ["Certificado de alzamiento", "Padron", "Cedula"], sources: [registroCivil, chileAtiende] },
  { slug: "cambiar-color-vehiculo", title: "Actualizar color de vehiculo", category: "Autos", summary: "Ordena documentos para modificar datos registrales despues de pintar o alterar el vehiculo.", cost: "$5.000 a $30.000 aprox.", duration: "1 hora a varios dias.", channel: "Registro Civil o canal autorizado", documents: ["Padron", "Cedula", "Declaracion o respaldo del cambio"], sources: [registroCivil, chileAtiende] },
  { slug: "regularizar-motor-vehiculo", title: "Regularizar cambio de motor", category: "Autos", summary: "Prepara factura, numero de motor y antecedentes para actualizar el registro del vehiculo.", cost: "$20.000 a $120.000+ aprox.", duration: "Dias a semanas.", channel: "Registro Civil y revision tecnica", documents: ["Factura motor", "Padron", "Certificado tecnico si aplica"], sources: [registroCivil, chileAtiende] },
  { slug: "pedir-certificado-multas-no-pagadas", title: "Certificado de multas no pagadas", category: "Autos", summary: "Revisa multas asociadas al vehiculo antes de comprar, vender o renovar permiso.", cost: "$1.000 a $3.000 aprox.", duration: "Inmediato online si esta disponible.", channel: "Registro Civil o municipalidad", documents: ["Patente", "Medio de pago", "Correo"], sources: [registroCivil, municipalidades] },
  { slug: "apelar-parte-transito", title: "Apelar o revisar un parte de transito", category: "Autos", summary: "Ordena citacion, pruebas y plazos antes de responder ante el juzgado correspondiente.", cost: "Variable segun multa y gestion.", duration: "Dias a semanas.", channel: "Juzgado de Policia Local", documents: ["Parte o citacion", "Cedula", "Pruebas o descargos"], sources: [municipalidades, chileAtiende] },
  { slug: "pagar-permiso-fuera-plazo", title: "Pagar permiso de circulacion atrasado", category: "Autos", summary: "Prepara multas, intereses, revision tecnica y SOAP antes de regularizar el permiso.", cost: "Permiso + multas/intereses variables.", duration: "30 minutos a varios dias.", channel: "Municipalidad", documents: ["Patente", "Revision tecnica", "SOAP"], sources: [municipalidades, chileAtiende] },
  { slug: "trasladar-permiso-circulacion", title: "Trasladar permiso de circulacion a otra comuna", category: "Autos", summary: "Revisa requisitos municipales para pagar el permiso en una comuna distinta.", cost: "$0 a costo del permiso.", duration: "Minutos a dias segun comuna.", channel: "Municipalidad", documents: ["Padron", "Permiso anterior", "Revision tecnica"], sources: [municipalidades] },
  { slug: "obtener-certificado-homologacion", title: "Obtener certificado de homologacion", category: "Autos", summary: "Prepara antecedentes de vehiculo nuevo o importado cuando te pidan homologacion.", cost: "$0 a $30.000+ aprox.", duration: "Dias segun emisor.", channel: "Concesionario, importador o entidad tecnica", documents: ["Factura", "Datos vehiculo", "VIN"], sources: [chileAtiende] },
  { slug: "cancelar-inscripcion-vehiculo", title: "Cancelar inscripcion de vehiculo", category: "Autos", summary: "Prepara documentos para dar de baja un vehiculo por destruccion, exportacion u otro caso.", cost: "$0 a $20.000 aprox.", duration: "Dias a semanas.", channel: "Registro Civil", documents: ["Padron", "Cedula", "Antecedente que justifica baja"], sources: [registroCivil, chileAtiende] },
  { slug: "solicitar-placas-patentes", title: "Solicitar reposicion de placas patentes", category: "Autos", summary: "Ordena denuncia, documentos y requisitos para reponer placas perdidas o danadas.", cost: "$10.000 a $60.000 aprox.", duration: "Dias a semanas.", channel: "Registro Civil", documents: ["Cedula", "Padron", "Denuncia o declaracion"], sources: [registroCivil, chileAtiende] },

  // Vivienda
  { slug: "solicitar-certificado-avaluo-fiscal", title: "Certificado de avaluo fiscal", category: "Vivienda", summary: "Prepara rol y comuna para revisar avaluo usado en contribuciones y antecedentes de propiedad.", cost: "$0 a $2.000 aprox.", duration: "Inmediato online si esta disponible.", channel: "SII", documents: ["Rol de propiedad", "Comuna", "Clave si aplica"], sources: [sii] },
  { slug: "pedir-certificado-deuda-contribuciones", title: "Certificado de deuda de contribuciones", category: "Vivienda", summary: "Revisa si una propiedad registra deudas antes de comprar, vender o regularizar.", cost: "$0 a $5.000 aprox.", duration: "Minutos a dias.", channel: "Tesoreria o SII", documents: ["Rol", "Comuna", "Medio de pago si aplica"], sources: [chileAtiende, sii] },
  { slug: "inscribir-compraventa-cbr", title: "Inscribir compraventa en Conservador", category: "Vivienda", summary: "Prepara escritura, impuestos y antecedentes para inscribir una compraventa de inmueble.", cost: "$50.000 a $500.000+ aprox.", duration: "Dias a semanas.", channel: "Conservador de Bienes Raices", documents: ["Escritura", "Certificados", "Comprobante de pago"], sources: [chileAtiende] },
  { slug: "solicitar-copia-escritura", title: "Solicitar copia de escritura", category: "Vivienda", summary: "Ordena datos de notaria, fecha y partes para obtener una copia de escritura.", cost: "$5.000 a $50.000+ aprox.", duration: "Horas a dias.", channel: "Notaria o archivo judicial", documents: ["Datos de escritura", "Cedula", "Medio de pago"], sources: [chileAtiende] },
  { slug: "regularizar-posesion-propiedad", title: "Regularizar posesion de propiedad", category: "Vivienda", summary: "Prepara antecedentes de ocupacion, dominio y vecinos antes de iniciar una regularizacion.", cost: "$0 a $500.000+ segun asesoria.", duration: "Meses.", channel: "Ministerio de Bienes Nacionales o profesional", documents: ["Antecedentes de posesion", "Plano o croquis", "Cedula"], sources: [chileAtiende] },
  { slug: "solicitar-permiso-edificacion", title: "Solicitar permiso de edificacion", category: "Vivienda", summary: "Ordena planos, propiedad y antecedentes tecnicos antes de construir o ampliar.", cost: "Variable segun obra y comuna.", duration: "Semanas a meses.", channel: "Direccion de Obras Municipales", documents: ["Planos", "Dominio", "Antecedentes tecnicos"], sources: [municipalidades] },
  { slug: "obtener-recepcion-final", title: "Obtener recepcion final de obra", category: "Vivienda", summary: "Prepara certificados y antecedentes municipales para cerrar una construccion regular.", cost: "Variable segun comuna y obra.", duration: "Semanas a meses.", channel: "Direccion de Obras Municipales", documents: ["Permiso", "Planos", "Certificados tecnicos"], sources: [municipalidades] },
  { slug: "cambiar-destino-propiedad", title: "Cambiar destino de una propiedad", category: "Vivienda", summary: "Revisa si una vivienda puede cambiar a oficina, local u otro uso segun normativa municipal.", cost: "$20.000 a $300.000+ aprox.", duration: "Semanas a meses.", channel: "Municipalidad", documents: ["Dominio", "Plano", "Solicitud municipal"], sources: [municipalidades] },
  { slug: "solicitar-subsidio-ds19", title: "Revisar acceso a subsidio DS19", category: "Vivienda", summary: "Prepara ahorro, preaprobacion y requisitos antes de evaluar proyectos con integracion social.", cost: "Ahorro y pie variable.", duration: "Dias a meses segun proyecto.", channel: "MINVU e inmobiliaria", documents: ["RSH", "Ahorro", "Preaprobacion si aplica"], sources: [minvu, chileAtiende] },
  { slug: "denunciar-problemas-arriendo", title: "Preparar reclamo por problemas de arriendo", category: "Vivienda", summary: "Ordena contrato, pagos, comunicaciones y evidencias antes de reclamar o negociar.", cost: "$0 a asesoria variable.", duration: "Dias a semanas.", channel: "Partes, mediacion o tribunal", documents: ["Contrato", "Comprobantes", "Evidencias"], sources: [chileAtiende] },

  // Familia
  { slug: "solicitar-pension-alimentos", title: "Solicitar pension de alimentos", category: "Familia", summary: "Prepara ingresos, gastos y certificados antes de mediacion o tribunal de familia.", cost: "$0 a asesoria variable.", duration: "Semanas a meses.", channel: "Mediacion o tribunal de familia", documents: ["Certificado nacimiento", "Gastos del menor", "Ingresos"], sources: [chileAtiende] },
  { slug: "pedir-retencion-pension-alimentos", title: "Pedir retencion por deuda de alimentos", category: "Familia", summary: "Ordena liquidacion de deuda y antecedentes antes de solicitar medidas de cobro.", cost: "$0 a asesoria variable.", duration: "Dias a meses.", channel: "Tribunal de familia", documents: ["Liquidacion deuda", "Datos del deudor", "Resolucion"], sources: [chileAtiende] },
  { slug: "solicitar-divorcio-comun-acuerdo", title: "Preparar divorcio de comun acuerdo", category: "Familia", summary: "Revisa acuerdos, cese de convivencia y documentos antes de iniciar divorcio.", cost: "$0 a honorarios variables.", duration: "Semanas a meses.", channel: "Tribunal de familia o abogado", documents: ["Certificado matrimonio", "Acuerdo completo", "Cese convivencia"], sources: [chileAtiende] },
  { slug: "inscribir-defuncion", title: "Inscribir defuncion", category: "Familia", summary: "Prepara certificado medico y antecedentes para registrar una defuncion.", cost: "$0 directo.", duration: "Horas a dias.", channel: "Registro Civil", documents: ["Certificado medico", "Cedula fallecido", "Datos solicitante"], sources: [registroCivil, chileAtiende] },
  { slug: "solicitar-certificado-nacimiento-hijos", title: "Certificado de nacimiento para asignacion familiar", category: "Familia", summary: "Obtiene certificados necesarios para cargas, beneficios o postulaciones familiares.", cost: "$0 a $1.500 aprox.", duration: "Inmediato online si esta disponible.", channel: "Registro Civil", documents: ["RUN", "ClaveUnica si aplica", "Finalidad"], sources: [registroCivil, chileAtiende] },
  { slug: "autorizar-salida-menor-tribunal", title: "Autorizacion judicial de salida de menor", category: "Familia", summary: "Prepara antecedentes cuando falta autorizacion de uno de los padres para viajar.", cost: "$0 a asesoria variable.", duration: "Dias a semanas.", channel: "Tribunal de familia", documents: ["Certificado nacimiento", "Itinerario", "Antecedentes del viaje"], sources: [chileAtiende] },
  { slug: "solicitar-adopcion", title: "Preparar postulacion a adopcion", category: "Familia", summary: "Ordena antecedentes personales, familiares y evaluaciones antes de iniciar el proceso.", cost: "$0 a costos documentales variables.", duration: "Meses a anos.", channel: "Mejor Ninez o entidades acreditadas", documents: ["Cedula", "Antecedentes familiares", "Informes requeridos"], sources: [chileAtiende] },
  { slug: "actualizar-carga-familiar", title: "Actualizar carga familiar", category: "Familia", summary: "Prepara certificados y acreditaciones para incorporar o modificar cargas.", cost: "$0 directo.", duration: "Dias a semanas.", channel: "Caja, IPS o empleador", documents: ["Certificado nacimiento", "Cedula", "Antecedente de carga"], sources: [chileAtiende] },
  { slug: "solicitar-bono-proteccion", title: "Revisar Bono de Proteccion", category: "Familia", summary: "Confirma requisitos familiares y programa asociado antes de revisar acceso al beneficio.", cost: "$0", duration: "Consulta en minutos; pago segun programa.", channel: "ChileAtiende o Ministerio Desarrollo Social", documents: ["RUN", "RSH", "Antecedentes programa"], sources: [chileAtiende] },
  { slug: "pedir-medida-proteccion-familiar", title: "Preparar solicitud de medida de proteccion", category: "Familia", summary: "Ordena antecedentes urgentes cuando hay riesgo, vulneracion o necesidad de proteccion.", cost: "$0 directo.", duration: "Urgente a variable.", channel: "Tribunal de familia o institucion competente", documents: ["Relato de hechos", "Pruebas", "Datos de afectados"], sources: [chileAtiende] },

  // Trabajo
  { slug: "reclamar-no-pago-sueldo", title: "Reclamar no pago de sueldo", category: "Trabajo", summary: "Prepara contrato, liquidaciones y registros antes de denunciar o exigir pago.", cost: "$0 a asesoria variable.", duration: "Dias a semanas.", channel: "Direccion del Trabajo", documents: ["Contrato", "Liquidaciones", "Comprobantes"], sources: [dt] },
  { slug: "revisar-cotizaciones-impagas", title: "Revisar cotizaciones impagas", category: "Trabajo", summary: "Ordena certificados previsionales para detectar deudas de AFP, salud o seguro.", cost: "$0", duration: "Minutos online; regularizacion variable.", channel: "AFP, salud, AFC o DT", documents: ["RUT", "Clave AFP o ClaveUnica", "Liquidaciones"], sources: [dt, chileAtiende] },
  { slug: "solicitar-certificado-antiguedad-laboral", title: "Certificado de antiguedad laboral", category: "Trabajo", summary: "Prepara respaldo de relacion laboral para banco, arriendo o postulaciones.", cost: "$0 directo.", duration: "Minutos a dias.", channel: "Empleador o DT segun caso", documents: ["Contrato", "Datos empleador", "Cedula"], sources: [dt] },
  { slug: "pedir-permiso-administrativo", title: "Solicitar permiso administrativo", category: "Trabajo", summary: "Revisa si corresponde permiso, respaldo y condiciones antes de ausentarte.", cost: "$0 directo.", duration: "Horas a dias.", channel: "Empleador", documents: ["Solicitud", "Respaldo", "Contrato o reglamento"], sources: [dt] },
  { slug: "denunciar-acoso-laboral", title: "Preparar denuncia por acoso laboral", category: "Trabajo", summary: "Ordena hechos, pruebas y canales antes de denunciar una situacion laboral sensible.", cost: "$0 a asesoria variable.", duration: "Dias a meses.", channel: "Empleador, DT o tribunal", documents: ["Relato cronologico", "Pruebas", "Comunicaciones"], sources: [dt] },
  { slug: "solicitar-reduccion-jornada", title: "Solicitar ajuste o reduccion de jornada", category: "Trabajo", summary: "Prepara contrato, motivo y propuesta antes de pedir cambio de jornada.", cost: "$0 directo.", duration: "Dias a semanas.", channel: "Empleador", documents: ["Contrato", "Solicitud", "Respaldo si aplica"], sources: [dt] },
  { slug: "revisar-anexo-contrato", title: "Revisar anexo de contrato", category: "Trabajo", summary: "Verifica cambios de sueldo, cargo, jornada o lugar antes de firmar un anexo.", cost: "$0 a asesoria variable.", duration: "15 a 60 minutos.", channel: "Empleador o DT", documents: ["Contrato original", "Anexo", "Liquidaciones"], sources: [dt] },
  { slug: "solicitar-fuero-maternal", title: "Revisar fuero maternal", category: "Trabajo", summary: "Ordena antecedentes de embarazo, contrato y comunicaciones antes de revisar proteccion laboral.", cost: "$0 a asesoria variable.", duration: "Dias a semanas.", channel: "Empleador, DT o tribunal", documents: ["Certificado medico", "Contrato", "Comunicaciones"], sources: [dt, chileAtiende] },
  { slug: "cobrar-asignacion-familiar-trabajador", title: "Cobrar asignacion familiar como trabajador", category: "Trabajo", summary: "Prepara cargas, empleador y acreditacion para revisar pago de asignacion familiar.", cost: "$0", duration: "Dias a semanas.", channel: "Empleador, caja o IPS", documents: ["Certificados de carga", "Contrato", "Cedula"], sources: [chileAtiende] },
  { slug: "reclamar-accidente-trabajo", title: "Preparar reclamo por accidente del trabajo", category: "Trabajo", summary: "Ordena atencion, denuncia, testigos y documentos cuando ocurre un accidente laboral.", cost: "$0 directo.", duration: "Urgente a semanas.", channel: "Mutualidad, empleador o SUSESO", documents: ["DIAT si aplica", "Atencion medica", "Relato y testigos"], sources: [chileAtiende, dt] },

  // Impuestos
  { slug: "emitir-boleta-honorarios", title: "Emitir boleta de honorarios", category: "Impuestos", summary: "Prepara datos del receptor, monto y retencion antes de emitir boleta.", cost: "$0 directo; retencion segun normativa.", duration: "5 a 15 minutos.", channel: "SII", documents: ["Clave SII", "Datos receptor", "Monto"], sources: [sii] },
  { slug: "anular-boleta-honorarios", title: "Anular boleta de honorarios", category: "Impuestos", summary: "Revisa plazo, motivo y aceptacion antes de anular o corregir una boleta.", cost: "$0 directo.", duration: "Minutos a dias segun caso.", channel: "SII", documents: ["Folio boleta", "Motivo", "Datos receptor"], sources: [sii] },
  { slug: "emitir-factura-electronica", title: "Emitir factura electronica", category: "Impuestos", summary: "Prepara folios, receptor, giro y detalle antes de emitir una factura.", cost: "$0 a software variable.", duration: "5 a 20 minutos.", channel: "SII o software autorizado", documents: ["Clave SII", "Datos cliente", "Detalle venta"], sources: [sii] },
  { slug: "declarar-formulario-29", title: "Declarar Formulario 29", category: "Impuestos", summary: "Ordena ventas, compras, IVA y retenciones antes de declarar mensualmente.", cost: "Impuesto variable segun actividad.", duration: "20 minutos a varias horas.", channel: "SII", documents: ["Ventas", "Compras", "Creditos y debitos"], sources: [sii] },
  { slug: "rectificar-formulario-29", title: "Rectificar Formulario 29", category: "Impuestos", summary: "Prepara diferencias y respaldos antes de corregir una declaracion mensual.", cost: "Variable; puede generar diferencias, multas o intereses.", duration: "Horas a dias.", channel: "SII", documents: ["Folio declaracion", "Respaldos", "Detalle diferencias"], sources: [sii] },
  { slug: "solicitar-devolucion-impuestos", title: "Revisar devolucion de impuestos", category: "Impuestos", summary: "Confirma estado, cuenta bancaria y observaciones antes de esperar una devolucion.", cost: "$0 directo.", duration: "Segun calendario y revision SII/Tesoreria.", channel: "SII o Tesoreria", documents: ["Declaracion", "Cuenta bancaria", "Clave SII"], sources: [sii, chileAtiende] },
  { slug: "actualizar-domicilio-tributario", title: "Actualizar domicilio tributario", category: "Impuestos", summary: "Prepara respaldo de domicilio y actividad antes de cambiar datos tributarios.", cost: "$0 directo.", duration: "Minutos a dias.", channel: "SII", documents: ["Clave SII", "Respaldo domicilio", "Datos actividad"], sources: [sii] },
  { slug: "agregar-giro-sii", title: "Agregar o modificar giro en SII", category: "Impuestos", summary: "Revisa actividad real, IVA y permisos antes de modificar el giro tributario.", cost: "$0 directo.", duration: "Minutos a dias.", channel: "SII", documents: ["Clave SII", "Descripcion actividad", "Domicilio"], sources: [sii] },
  { slug: "obtener-carpeta-tributaria", title: "Obtener carpeta tributaria", category: "Impuestos", summary: "Prepara carpeta para banco, arriendo, licitacion o proveedor que pida antecedentes tributarios.", cost: "$0 directo.", duration: "Minutos online.", channel: "SII", documents: ["Clave SII", "Finalidad", "Correo si aplica"], sources: [sii] },
  { slug: "revisar-observaciones-renta", title: "Revisar observaciones de renta", category: "Impuestos", summary: "Ordena respaldos cuando la declaracion de renta queda observada o pendiente.", cost: "$0 a asesoria variable.", duration: "Dias a semanas.", channel: "SII", documents: ["Declaracion", "Observacion", "Respaldos"], sources: [sii] },

  // Viajes
  { slug: "pedir-visa-turismo", title: "Preparar solicitud de visa de turismo", category: "Viajes", summary: "Ordena documentos del destino antes de solicitar visa o permiso de entrada.", cost: "Variable segun pais.", duration: "Dias a meses.", channel: "Consulado o plataforma del pais destino", documents: ["Pasaporte", "Reserva o itinerario", "Solvencia"], sources: [chileAtiende] },
  { slug: "apostillar-documento-viaje", title: "Apostillar documento para viaje", category: "Viajes", summary: "Prepara certificado, finalidad y pais destino antes de apostillar.", cost: "$0 a costos documentales variables.", duration: "Minutos a dias.", channel: "Entidad emisora o apostilla", documents: ["Documento original", "Pais destino", "Cedula"], sources: [chileAtiende] },
  { slug: "viajar-con-mascota", title: "Preparar viaje con mascota", category: "Viajes", summary: "Ordena vacunas, certificado sanitario y requisitos del pais antes de viajar.", cost: "$20.000 a $300.000+ aprox.", duration: "Semanas a meses.", channel: "SAG, veterinario y aerolinea", documents: ["Carnet vacunas", "Certificado veterinario", "Datos mascota"], sources: [chileAtiende] },
  { slug: "renovar-pasaporte-urgente", title: "Preparar renovacion urgente de pasaporte", category: "Viajes", summary: "Revisa agenda, documentos y alternativas cuando tienes viaje cercano.", cost: "$70.000 a $100.000+ aprox.", duration: "Dias segun disponibilidad.", channel: "Registro Civil", documents: ["Cedula", "Pasaporte anterior", "Comprobante viaje si aplica"], sources: [registroCivil, chileAtiende] },
  { slug: "certificado-viaje-menor", title: "Documentos para viajar con menores", category: "Viajes", summary: "Prepara autorizaciones, certificados y datos del viaje para salida de menores.", cost: "$5.000 a $40.000+ aprox.", duration: "Horas a dias.", channel: "Notaria, tribunal o PDI", documents: ["Certificado nacimiento", "Autorizacion", "Itinerario"], sources: [chileAtiende] },
  { slug: "revisar-impedimento-salida", title: "Revisar impedimentos de salida del pais", category: "Viajes", summary: "Ordena antecedentes si temes restricciones, deudas o medidas que impidan viajar.", cost: "$0 a asesoria variable.", duration: "Dias a semanas.", channel: "Institucion competente", documents: ["Cedula", "Antecedentes del caso", "Resoluciones si existen"], sources: [chileAtiende] },
  { slug: "preparar-seguro-viaje", title: "Preparar seguro de viaje", category: "Viajes", summary: "Compara cobertura, deducible, salud y requisitos del destino antes de contratar.", cost: "$10.000 a $200.000+ aprox.", duration: "15 a 60 minutos.", channel: "Aseguradora o asistencia de viaje", documents: ["Destino", "Fechas", "Datos pasajeros"], sources: [chileAtiende] },
  { slug: "perder-documentos-extranjero", title: "Que preparar si pierdes documentos fuera de Chile", category: "Viajes", summary: "Ordena denuncia, consulado y copias para enfrentar perdida de documentos en viaje.", cost: "Variable segun consulado y documentos.", duration: "Dias segun pais.", channel: "Consulado de Chile y autoridades locales", documents: ["Denuncia", "Copia documento", "Itinerario"], sources: [chileAtiende] },
  { slug: "certificado-vacunas-viaje", title: "Certificado de vacunas para viajar", category: "Viajes", summary: "Revisa vacunas, destino y formato exigido antes de salir del pais.", cost: "$0 a costos medicos variables.", duration: "Dias a semanas.", channel: "MINSAL, vacunatorio o prestador", documents: ["RUN", "Registro vacunas", "Destino"], sources: [chileAtiende] },
  { slug: "preparar-viaje-estudios", title: "Preparar viaje por estudios", category: "Viajes", summary: "Ordena visa, certificados, apostillas, seguro y solvencia antes de estudiar fuera.", cost: "$50.000 a $500.000+ aprox.", duration: "Semanas a meses.", channel: "Institucion educativa, consulado y entidades chilenas", documents: ["Carta aceptacion", "Pasaporte", "Certificados apostillados"], sources: [chileAtiende] },

  // Documentos
  { slug: "certificado-matrimonio", title: "Certificado de matrimonio", category: "Documentos", summary: "Prepara certificado para banco, beneficios, viajes, herencias o tramites familiares.", cost: "$0 a $1.500 aprox.", duration: "Inmediato online si esta disponible.", channel: "Registro Civil", documents: ["RUN", "ClaveUnica si aplica", "Finalidad"], sources: [registroCivil, chileAtiende] },
  { slug: "certificado-defuncion", title: "Certificado de defuncion", category: "Documentos", summary: "Obtiene respaldo para herencias, seguros, beneficios o gestiones familiares.", cost: "$0 a $1.500 aprox.", duration: "Inmediato online si esta disponible.", channel: "Registro Civil", documents: ["RUN fallecido", "Finalidad", "ClaveUnica si aplica"], sources: [registroCivil, chileAtiende] },
  { slug: "certificado-no-matrimonio", title: "Certificado de solteria o no matrimonio", category: "Documentos", summary: "Revisa que certificado corresponde cuando te piden acreditar estado civil.", cost: "$0 a $3.000 aprox.", duration: "Minutos a dias.", channel: "Registro Civil", documents: ["RUN", "Cedula", "Finalidad"], sources: [registroCivil] },
  { slug: "certificado-afp", title: "Certificado de afiliacion AFP", category: "Documentos", summary: "Prepara certificado de AFP para trabajo, credito, beneficios o revision previsional.", cost: "$0", duration: "Minutos online.", channel: "AFP o entidad previsional", documents: ["RUT", "Clave AFP", "Correo"], sources: [chileAtiende] },
  { slug: "certificado-fonasa", title: "Certificado de afiliacion Fonasa", category: "Documentos", summary: "Obtiene respaldo de tramo o afiliacion para salud, trabajo o cargas.", cost: "$0", duration: "Minutos online.", channel: "Fonasa o ChileAtiende", documents: ["RUN", "ClaveUnica", "Datos carga si aplica"], sources: [chileAtiende] },
  { slug: "certificado-alumno-regular", title: "Certificado de alumno regular", category: "Documentos", summary: "Prepara solicitud para beneficios, cargas, rebajas o postulaciones.", cost: "$0 a $5.000 aprox.", duration: "Minutos a dias.", channel: "Institucion educacional", documents: ["RUN estudiante", "Matricula", "Periodo"], sources: [chileAtiende] },
  { slug: "certificado-deuda-alimentos", title: "Certificado de deuda de alimentos", category: "Documentos", summary: "Revisa si existe deuda registrada para gestiones familiares, financieras o legales.", cost: "$0 directo.", duration: "Minutos a dias.", channel: "Registro Civil o Poder Judicial segun caso", documents: ["RUN", "ClaveUnica", "Finalidad"], sources: [registroCivil, chileAtiende] },
  { slug: "certificado-no-quiebra", title: "Certificado concursal o de insolvencia", category: "Documentos", summary: "Prepara antecedentes cuando una entidad pide revisar situacion concursal.", cost: "$0 a costos documentales variables.", duration: "Minutos a dias.", channel: "Superintendencia o entidad competente", documents: ["RUN o RUT", "Finalidad", "Correo"], sources: [chileAtiende] },
  { slug: "legalizar-firma-notarial", title: "Legalizar firma ante notario", category: "Documentos", summary: "Organiza cedula, documento y firmantes antes de autenticar una firma.", cost: "$3.000 a $25.000 aprox.", duration: "15 minutos a 2 horas.", channel: "Notaria", documents: ["Cedula", "Documento", "Firmantes"], sources: [chileAtiende] },
  { slug: "solicitar-copia-cedula-digital", title: "Preparar copia o respaldo de cedula", category: "Documentos", summary: "Revisa cuando una institucion acepta copia, certificado o validacion de identidad.", cost: "$0 a $2.000 aprox.", duration: "Minutos.", channel: "Institucion solicitante o Registro Civil", documents: ["Cedula", "Finalidad", "Formato requerido"], sources: [registroCivil, chileAtiende] },

  // Salud
  { slug: "tramitar-licencia-medica-independiente", title: "Licencia medica para independiente", category: "Salud", summary: "Prepara cotizaciones, emision y antecedentes cuando trabajas independiente.", cost: "$0 directo; pago depende de cobertura.", duration: "Dias a semanas.", channel: "COMPIN, Isapre o entidad pagadora", documents: ["Licencia", "Cotizaciones", "Cedula"], sources: [chileAtiende] },
  { slug: "apelar-licencia-medica", title: "Apelar licencia medica rechazada", category: "Salud", summary: "Ordena resolucion, informes y plazos antes de apelar un rechazo o reduccion.", cost: "$0 a costos medicos variables.", duration: "Dias a semanas.", channel: "COMPIN, SUSESO o Isapre segun caso", documents: ["Resolucion", "Informes medicos", "Licencia"], sources: [chileAtiende] },
  { slug: "solicitar-afiliacion-isapre", title: "Afiliarse a Isapre", category: "Salud", summary: "Revisa plan, preexistencias, cargas y contrato antes de firmar afiliacion.", cost: "Plan mensual variable.", duration: "Dias a semanas.", channel: "Isapre", documents: ["Cedula", "Declaracion salud", "Datos cargas"], sources: [chileAtiende] },
  { slug: "cambiar-tramo-fonasa", title: "Actualizar tramo Fonasa", category: "Salud", summary: "Prepara ingresos y cargas para revisar o corregir tramo de Fonasa.", cost: "$0 directo.", duration: "Minutos a dias.", channel: "Fonasa o ChileAtiende", documents: ["Cedula", "Ingresos", "Cargas"], sources: [chileAtiende] },
  { slug: "solicitar-certificado-medico", title: "Solicitar certificado medico", category: "Salud", summary: "Prepara finalidad y antecedentes antes de pedir certificado para trabajo, estudio o deporte.", cost: "$0 a $50.000+ aprox.", duration: "Horas a dias.", channel: "Prestador de salud", documents: ["Cedula", "Antecedentes medicos", "Finalidad"], sources: [chileAtiende] },
  { slug: "pedir-copia-ficha-clinica", title: "Pedir copia de ficha clinica", category: "Salud", summary: "Ordena identidad, autorizacion y prestador para solicitar antecedentes medicos.", cost: "$0 a costos de copia variables.", duration: "Dias a semanas.", channel: "Prestador de salud", documents: ["Cedula", "Solicitud", "Poder si representa"], sources: [chileAtiende] },
  { slug: "reclamar-lista-espera", title: "Reclamar o consultar lista de espera", category: "Salud", summary: "Prepara derivacion, diagnostico y comprobantes para revisar una espera de atencion.", cost: "$0 directo.", duration: "Dias a semanas.", channel: "Servicio de salud o prestador", documents: ["Interconsulta", "Diagnostico", "Comprobantes"], sources: [chileAtiende] },
  { slug: "solicitar-ley-urgencia", title: "Revisar cobertura Ley de Urgencia", category: "Salud", summary: "Ordena antecedentes de atencion urgente para entender cobertura y cobros.", cost: "Copago o deuda variable segun cobertura.", duration: "Dias a semanas.", channel: "Prestador, Fonasa, Isapre o Superintendencia", documents: ["Epicrisis", "Boletas", "Datos cobertura"], sources: [chileAtiende] },
  { slug: "incorporar-carga-fonasa", title: "Incorporar carga en Fonasa", category: "Salud", summary: "Prepara certificados y antecedentes para agregar una carga familiar en salud.", cost: "$0 directo.", duration: "Dias a semanas.", channel: "Fonasa o ChileAtiende", documents: ["Certificado carga", "Cedula", "Acreditacion"], sources: [chileAtiende] },
  { slug: "solicitar-dispositivos-medicos", title: "Preparar solicitud de ayudas tecnicas", category: "Salud", summary: "Ordena indicacion medica y antecedentes sociales antes de pedir ayudas tecnicas.", cost: "$0 a copago variable.", duration: "Semanas a meses.", channel: "Municipio, SENADIS o salud", documents: ["Informe medico", "RSH", "Cedula"], sources: [chileAtiende] },

  // Empresas
  { slug: "iniciar-actividades-empresa", title: "Inicio de actividades para empresa", category: "Empresas", summary: "Prepara giro, domicilio y representante antes de comenzar obligaciones tributarias.", cost: "$0 directo.", duration: "Minutos a dias.", channel: "SII", documents: ["Clave SII", "Constitucion", "Domicilio"], sources: [sii] },
  { slug: "termino-giro-empresa", title: "Termino de giro de empresa", category: "Empresas", summary: "Ordena declaraciones, deudas y documentos antes de cerrar actividad tributaria.", cost: "$0 a impuestos/deudas variables.", duration: "Semanas a meses.", channel: "SII", documents: ["Clave SII", "Declaraciones", "Situacion tributaria"], sources: [sii] },
  { slug: "modificar-domicilio-empresa", title: "Modificar domicilio de empresa", category: "Empresas", summary: "Revisa domicilio tributario, municipal y contractual antes de cambiar direccion.", cost: "$0 a costos notariales/municipales variables.", duration: "Minutos a semanas.", channel: "SII, municipio o registro", documents: ["Domicilio nuevo", "Contrato o dominio", "Poderes"], sources: [sii, municipalidades] },
  { slug: "obtener-rut-empresa", title: "Obtener RUT de empresa", category: "Empresas", summary: "Prepara constitucion y datos del representante para operar con RUT empresarial.", cost: "$0 directo.", duration: "Minutos a dias.", channel: "SII", documents: ["Constitucion", "Representante", "Clave SII"], sources: [sii] },
  { slug: "comprar-folios-facturacion", title: "Solicitar folios de facturacion", category: "Empresas", summary: "Prepara autorizacion y sistema de emision antes de solicitar folios.", cost: "$0 directo; software variable.", duration: "Minutos a dias.", channel: "SII", documents: ["Clave SII", "Actividad iniciada", "Sistema de emision"], sources: [sii] },
  { slug: "declarar-iva-empresa", title: "Declarar IVA mensual de empresa", category: "Empresas", summary: "Ordena ventas, compras y creditos antes de declarar impuestos mensuales.", cost: "IVA variable segun actividad.", duration: "30 minutos a varias horas.", channel: "SII", documents: ["Libro compras/ventas", "Facturas", "Clave SII"], sources: [sii] },
  { slug: "contratar-contador", title: "Preparar contratacion de contador", category: "Empresas", summary: "Define obligaciones, volumen y acceso antes de contratar apoyo contable.", cost: "$30.000 a $300.000+ mensual aprox.", duration: "Dias.", channel: "Profesional o estudio contable", documents: ["RUT empresa", "Accesos", "Declaraciones previas"], sources: [sii] },
  { slug: "obtener-permiso-alimentos", title: "Permiso para negocio de alimentos", category: "Empresas", summary: "Prepara local, manipulacion, resolucion sanitaria y patente antes de vender alimentos.", cost: "$50.000 a $800.000+ aprox.", duration: "Semanas a meses.", channel: "SEREMI de Salud y municipalidad", documents: ["Plano/local", "Inicio actividades", "Antecedentes sanitarios"], sources: [municipalidades, chileAtiende] },
  { slug: "inscribir-trabajador-previred", title: "Inscribir trabajador para cotizaciones", category: "Empresas", summary: "Ordena contrato, datos previsionales y remuneracion antes de pagar cotizaciones.", cost: "Cotizaciones segun sueldo.", duration: "1 a 3 dias.", channel: "Previred, empleador y entidades previsionales", documents: ["Contrato", "Datos trabajador", "Remuneracion"], sources: [dt, chileAtiende] },
  { slug: "postular-fondos-sercotec", title: "Preparar postulacion a fondos Sercotec", category: "Empresas", summary: "Ordena idea, ventas, documentos tributarios y cofinanciamiento antes de postular.", cost: "$0 a cofinanciamiento variable.", duration: "Semanas a meses.", channel: "Sercotec u organismo convocante", documents: ["RUT", "Carpeta tributaria", "Plan de negocio"], sources: [chileAtiende, sii] }
];

export const expandedProcedures: ProcedureDetail[] =
  [...procedureSeeds, ...additionalProcedureSeeds].map(makeProcedure);

export const expandedGuides: GuideDetail[] = [
  {
    slug: "guia-rapida-autos",
    title: "Guia rapida para tramites de autos",
    category: "Autos",
    summary: "Que revisar antes de comprar, vender, renovar o regularizar un vehiculo.",
    updatedAt: "28 junio 2026",
    readingTime: "6 min",
    keyTakeaways: [
      "La patente manda: multas, permisos, revision tecnica, SOAP y limitaciones deben revisarse antes de pagar o firmar.",
      "No entregues llaves ni documentos originales hasta tener pago verificable y canal de transferencia claro.",
      "Si aparece prenda, embargo, leasing, deuda grande o datos inconsistentes, detente y valida antes de avanzar."
    ],
    decisionCards: [
      { label: "Costo a preparar", value: "$6.000 a $150.000+", detail: "SOAP, certificados, revision tecnica, transferencia, permisos o multas pueden mover mucho el total." },
      { label: "Plazo realista", value: "15 min a varios dias", detail: "Consultas online son rapidas; regularizar multas, prendas o documentos puede tomar mas." },
      { label: "Bloqueo comun", value: "Deudas o datos", detail: "Multas, TAG, propietario incorrecto, permiso vencido o certificado antiguo suelen frenar el proceso." }
    ],
    fiveMinutePlan: [
      "Anota patente, RUT del propietario y estado del vehiculo.",
      "Consulta multas, permiso, revision tecnica, SOAP y certificado de anotaciones si compraras o venderas.",
      "Define quien paga certificados, transferencia, notaria o regularizaciones.",
      "Guarda comprobantes y no cierres el trato si hay una limitacion que no entiendes."
    ],
    commonMistakes: [
      "Comprar confiando solo en fotos o en la palabra del vendedor.",
      "No revisar multas o limitaciones antes de transferir.",
      "Entregar el auto antes de confirmar pago efectivo.",
      "Usar certificados antiguos para tomar una decision actual."
    ],
    whenToGetHelp: [
      "Hay prenda, leasing, embargo, herencia o deuda relevante.",
      "El vendedor no coincide con el propietario registrado.",
      "El vehiculo sera comprado para empresa o con financiamiento."
    ],
    sections: [
      { title: "Antes de pagar", body: "Revisa propietario, multas, limitaciones, revision tecnica, SOAP y permiso. La mayor parte de los problemas aparece por deudas o antecedentes no revisados." },
      { title: "Antes de firmar", body: "Confirma identidad de comprador y vendedor, datos del vehiculo, precio, forma de pago y canal de transferencia." },
      { title: "Despues del tramite", body: "Guarda comprobantes, certificados y respaldo de pago. Revisa que el cambio o renovacion quede reflejado." }
    ],
    checklist: ["Patente revisada.", "Multas consultadas.", "Documentos vigentes.", "Comprobante guardado."],
    sources: [registroCivil, chileAtiende, municipalidades]
  },
  {
    slug: "guia-rapida-vivienda",
    title: "Guia rapida para vivienda y arriendo",
    category: "Vivienda",
    summary: "Documentos, costos y alertas antes de comprar, arrendar o postular a subsidios.",
    updatedAt: "28 junio 2026",
    readingTime: "7 min",
    keyTakeaways: [
      "En vivienda, el precio visible casi nunca es el costo total: suma garantia, certificados, notaria, banco, conservador o gastos comunes.",
      "Antes de firmar, separa lo financiero, lo legal y lo operativo; cada parte puede bloquear el proceso.",
      "Subsidios y arriendos dependen de fechas, RSH, ingresos, ahorro y condiciones del llamado o contrato."
    ],
    decisionCards: [
      { label: "Costo a preparar", value: "1 a 3 meses + extras", detail: "En arriendo considera garantia, mes adelantado y gastos. En compra suma pie, banco, notaria, CBR y certificados." },
      { label: "Plazo realista", value: "Dias a meses", detail: "Un arriendo puede cerrarse rapido; compra, subsidio o regularizacion requieren validaciones." },
      { label: "Bloqueo comun", value: "Antecedentes", detail: "Ingresos, RSH, dominio, gravamenes, deuda o contrato mal leido suelen generar problemas." }
    ],
    fiveMinutePlan: [
      "Define si estas arrendando, comprando, vendiendo, postulando o regularizando.",
      "Lista costo visible y costos indirectos que podrian aparecer.",
      "Revisa documentos base: contrato, dominio, RSH, ingresos, rol o certificados segun caso.",
      "Marca que fuente debe confirmar el dato critico: MINVU, SII, municipio, banco, notaria o CBR."
    ],
    commonMistakes: [
      "Firmar promesa o contrato sin entender multas, reajustes, gastos comunes o salida anticipada.",
      "Calcular solo dividendo o arriendo y olvidar gastos iniciales.",
      "Postular a subsidios con RSH o ahorro fuera de plazo.",
      "No pedir certificados de dominio, hipotecas o deudas cuando corresponde."
    ],
    whenToGetHelp: [
      "Vas a firmar promesa de compraventa, credito hipotecario o arriendo con clausulas complejas.",
      "Hay deuda, juicio, prohibicion, regularizacion municipal o copropiedad.",
      "El monto compromete ahorros importantes o endeudamiento largo."
    ],
    sections: [
      { title: "Costo real", body: "No mires solo precio o arriendo. Considera garantia, certificados, notaria, contribuciones, gastos comunes, ahorro minimo o gastos operacionales." },
      { title: "Antecedentes", body: "Dominio, gravamenes, RSH, contrato, rol y respaldo de ingresos suelen definir si puedes avanzar." },
      { title: "Fechas", body: "Subsidios, pagos y firmas dependen de plazos. Si falta validacion, no esperes al ultimo dia." }
    ],
    checklist: ["RSH o ingresos revisados.", "Costos indirectos estimados.", "Contrato o certificado leido.", "Fuente vigente confirmada."],
    sources: [minvu, chileAtiende]
  },
  {
    slug: "guia-rapida-familia",
    title: "Guia rapida para tramites de familia",
    category: "Familia",
    summary: "Como preparar antecedentes antes de mediacion, beneficios, herencias o permisos familiares.",
    updatedAt: "28 junio 2026",
    readingTime: "6 min",
    keyTakeaways: [
      "En temas familiares, el respaldo pesa mas que explicar la historia de memoria.",
      "Distingue acuerdos simples, autorizaciones notariales, mediacion y tribunal: no sirven para lo mismo.",
      "Si hay menores, violencia, salud, herencia o conflicto fuerte, evita improvisar con una guia general."
    ],
    decisionCards: [
      { label: "Costo a preparar", value: "$0 a asesoria", detail: "Algunos canales son gratuitos, pero notaria, certificados o apoyo profesional pueden sumar." },
      { label: "Plazo realista", value: "Horas a meses", detail: "Un certificado puede ser rapido; mediacion, cuidado personal o posesion efectiva puede tomar mucho mas." },
      { label: "Bloqueo comun", value: "Respaldo insuficiente", detail: "Faltan certificados, comprobantes de gasto, domicilio, ingresos o acuerdo escrito." }
    ],
    fiveMinutePlan: [
      "Escribe el objetivo concreto: permiso, beneficio, acuerdo, herencia, cuidado o actualizacion.",
      "Reune certificados base de identidad, nacimiento, domicilio, ingresos o defuncion segun caso.",
      "Ordena respaldos: gastos, comunicaciones, pagos, colegio, salud o acuerdos previos.",
      "Identifica si corresponde Registro Civil, notaria, mediacion, tribunal o entidad de beneficios."
    ],
    commonMistakes: [
      "Llegar solo con relato y sin documentos que respalden lo ocurrido.",
      "Creer que un acuerdo verbal basta para exigir cumplimiento.",
      "Usar un canal equivocado cuando hay menores, conflicto o urgencia.",
      "Esperar al ultimo dia para autorizaciones de viaje o beneficios."
    ],
    whenToGetHelp: [
      "Hay violencia, amenazas, cuidado de menores o incumplimiento grave.",
      "Existe desacuerdo entre familiares o herederos.",
      "No sabes si corresponde mediacion, tribunal, notaria o Registro Civil."
    ],
    sections: [
      { title: "Respaldo primero", body: "Certificados, gastos, ingresos, domicilio, comunicaciones y comprobantes suelen ser mas importantes que explicar el caso de memoria." },
      { title: "Formaliza acuerdos", body: "Acuerdos verbales pueden ayudar, pero no siempre sirven para exigir cumplimiento. Revisa si necesitas mediacion, notaria o tribunal." },
      { title: "Casos sensibles", body: "Si hay violencia, amenazas, menores o salud involucrada, valida con la institucion correspondiente antes de seguir." }
    ],
    checklist: ["Certificados reunidos.", "Gastos respaldados.", "Acuerdo o solicitud clara.", "Canal correcto revisado."],
    sources: [chileAtiende]
  },
  {
    slug: "guia-rapida-trabajo",
    title: "Guia rapida para tramites laborales",
    category: "Trabajo",
    summary: "Contratos, finiquitos, cotizaciones, vacaciones y reclamos laborales sin firmar a ciegas.",
    updatedAt: "28 junio 2026",
    readingTime: "6 min",
    keyTakeaways: [
      "Antes de firmar, revisa causal, sueldo, jornada, fechas, descuentos, vacaciones e indemnizaciones.",
      "Guarda pruebas desde el primer problema: contrato, anexos, liquidaciones, correos, mensajes y asistencia.",
      "Plazos laborales importan; esperar puede reducir opciones de reclamo, cobro o correccion."
    ],
    decisionCards: [
      { label: "Costo a preparar", value: "$0 a asesoria", detail: "Revisar en DT puede ser gratuito; calculos complejos o conflicto fuerte pueden requerir apoyo profesional." },
      { label: "Plazo realista", value: "Mismo dia a semanas", detail: "Firmas y consultas son rapidas; reclamos, pagos o correcciones pueden demorar." },
      { label: "Bloqueo comun", value: "Monto no entendido", detail: "Finiquito, vacaciones, descuentos y cotizaciones generan errores si no hay desglose." }
    ],
    fiveMinutePlan: [
      "Identifica el documento: contrato, anexo, liquidacion, finiquito, licencia, reclamo o solicitud.",
      "Marca montos, fechas, jornada, causal, descuentos y pagos pendientes.",
      "Compara contra contrato, liquidaciones, asistencia y cotizaciones.",
      "Si hay diferencia, anota la pregunta exacta antes de firmar o reclamar."
    ],
    commonMistakes: [
      "Firmar finiquito o anexo sin entender el desglose.",
      "No guardar liquidaciones, mensajes o comprobantes de asistencia.",
      "Confundir fecha de termino, fecha de pago y fecha de firma.",
      "Esperar meses antes de consultar una deuda previsional o incumplimiento."
    ],
    whenToGetHelp: [
      "Hay despido, accidente, fuero, embarazo, acoso, no pago de cotizaciones o deuda importante.",
      "El calculo de finiquito no coincide con tus registros.",
      "Te presionan para firmar sin copia, sin pago claro o sin tiempo para revisar."
    ],
    sections: [
      { title: "Lee antes de firmar", body: "Contrato, anexo o finiquito debe mostrar sueldo, jornada, funciones, causal, descuentos y fecha de pago." },
      { title: "Guarda pruebas", body: "Liquidaciones, correos, mensajes, asistencia, comprobantes de pago y cotizaciones son claves si necesitas reclamar." },
      { title: "Plazos", body: "Denuncias, seguros y apelaciones laborales tienen plazos. No esperes a que el problema se acumule." }
    ],
    checklist: ["Contrato revisado.", "Liquidaciones guardadas.", "Cotizaciones consultadas.", "Plazos claros."],
    sources: [dt, chileAtiende]
  },
  {
    slug: "guia-rapida-impuestos",
    title: "Guia rapida para impuestos y SII",
    category: "Impuestos",
    summary: "Que revisar antes de iniciar actividades, declarar renta, emitir boletas o corregir impuestos.",
    updatedAt: "28 junio 2026",
    readingTime: "7 min",
    keyTakeaways: [
      "El formulario es solo una parte: giro, domicilio, IVA, documentos tributarios y permisos externos definen si puedes operar.",
      "Todo dato tributario debe poder respaldarse con boletas, facturas, contratos, pagos o registros.",
      "Si mezclas empresa, inversiones, arriendos, exportaciones o rectificatorias, conviene revisar con apoyo contable."
    ],
    decisionCards: [
      { label: "Costo a preparar", value: "$0 a gestion mensual", detail: "Tramites SII pueden no tener costo directo, pero contabilidad, software y permisos externos si." },
      { label: "Plazo realista", value: "Minutos a semanas", detail: "Declarar puede ser rapido; corregir, habilitar o validar antecedentes puede demorar." },
      { label: "Bloqueo comun", value: "Giro o respaldo", detail: "Giro mal elegido, domicilio no respaldado o ingresos sin soporte generan problemas." }
    ],
    fiveMinutePlan: [
      "Define si eres persona natural, empresa, trabajador independiente o negocio con socios.",
      "Revisa giro, domicilio, ventas esperadas, clientes y si habra IVA.",
      "Ordena ingresos, compras, boletas, facturas, retenciones y contratos.",
      "Guarda folio de cada envio y agenda revision mensual si el proceso se repite."
    ],
    commonMistakes: [
      "Elegir un giro demasiado amplio o que no representa la actividad real.",
      "Aceptar la propuesta de renta sin comparar ingresos y retenciones.",
      "No separar dinero de IVA, impuestos o cotizaciones.",
      "Emitir documentos sin revisar patente o permisos del rubro."
    ],
    whenToGetHelp: [
      "Tienes empresa, socios, inversiones, arriendos, trabajadores o ventas internacionales.",
      "Debes rectificar declaraciones o hay diferencias con SII.",
      "No sabes si una actividad paga IVA, impuesto adicional o requiere permiso."
    ],
    sections: [
      { title: "No todo es formulario", body: "Giro, domicilio, IVA, documentos tributarios y permisos externos definen si puedes operar correctamente." },
      { title: "Respalda cada dato", body: "Ingresos, compras, ventas, boletas, facturas y creditos deben coincidir con lo que declaras." },
      { title: "Pide ayuda a tiempo", body: "Empresas, inversiones, arriendos, ventas internacionales o rectificatorias pueden requerir apoyo contable." }
    ],
    checklist: ["Clave SII lista.", "Giro definido.", "Ingresos respaldados.", "Folio guardado."],
    sources: [sii]
  },
  {
    slug: "guia-rapida-viajes",
    title: "Guia rapida para viajes",
    category: "Viajes",
    summary: "Pasaporte, autorizaciones, visas, vacunas, mascotas y documentos antes de salir de Chile.",
    updatedAt: "28 junio 2026",
    readingTime: "6 min",
    keyTakeaways: [
      "El destino define los requisitos: no basta tener pasaporte o cedula vigente.",
      "Menores, mascotas, visas, vacunas y escalas pueden agregar documentos que se preparan con anticipacion.",
      "Compra pasajes solo despues de revisar vigencia, citas disponibles y requisitos de entrada cuando el viaje depende de documentos."
    ],
    decisionCards: [
      { label: "Costo a preparar", value: "$0 a $150.000+", detail: "Pasaporte, autorizaciones notariales, certificados, vacunas, visas o documentos de mascotas pueden sumar." },
      { label: "Plazo realista", value: "Dias a meses", detail: "Un certificado puede salir rapido; pasaporte, visa o documentos internacionales pueden requerir margen." },
      { label: "Bloqueo comun", value: "Vigencia insuficiente", detail: "Algunos destinos exigen meses de vigencia o documentos emitidos recientemente." }
    ],
    fiveMinutePlan: [
      "Anota destino, fechas, escalas y quienes viajan.",
      "Revisa documento de identidad, pasaporte, visa, vacunas, seguro y requisitos del pais.",
      "Si viaja un menor, confirma autorizacion, certificado de nacimiento y datos del acompanante.",
      "Guarda copias digitales y define que debe ir impreso."
    ],
    commonMistakes: [
      "Revisar solo el requisito de Chile y no el del pais de destino.",
      "Descubrir tarde que el pasaporte vence pronto.",
      "No preparar autorizacion de viaje de menores con datos completos.",
      "Olvidar requisitos para mascotas, vacunas, escalas o aerolinea."
    ],
    whenToGetHelp: [
      "El viaje involucra menores sin ambos padres, residencia, visa, mascotas o documentos apostillados.",
      "Hay urgencia por salud, trabajo o estudio.",
      "El pais de destino tiene requisitos cambiantes o consulares."
    ],
    sections: [
      { title: "Documentos primero", body: "Pasaporte, cedula, visas, autorizaciones de menores y apostillas deben revisarse antes de comprar o confirmar servicios." },
      { title: "Destino manda", body: "Cada pais puede exigir vigencia minima, vacunas, seguro, visa o documentos extra." },
      { title: "Margen de tiempo", body: "No hagas documentos internacionales con pocos dias de margen. Entregas, citas y validaciones pueden atrasarse." }
    ],
    checklist: ["Pasaporte vigente.", "Requisitos destino revisados.", "Seguro o vacunas confirmadas.", "Autorizaciones listas."],
    sources: [chileAtiende]
  },
  {
    slug: "guia-rapida-documentos",
    title: "Guia rapida para certificados y documentos",
    category: "Documentos",
    summary: "Como evitar rechazos por certificado equivocado, fecha antigua o formato incorrecto.",
    updatedAt: "28 junio 2026",
    readingTime: "5 min",
    keyTakeaways: [
      "El nombre exacto del documento importa: certificado parecido no siempre sirve.",
      "La fecha de emision y el formato digital/impreso suelen ser causa de rechazo.",
      "Para uso internacional revisa apostilla, traduccion o legalizacion antes de pagar o enviar."
    ],
    decisionCards: [
      { label: "Costo a preparar", value: "$0 a $25.000+", detail: "Muchos certificados son gratuitos o baratos; notaria, apostilla, traduccion o copias pueden sumar." },
      { label: "Plazo realista", value: "Minutos a dias", detail: "Online puede ser inmediato; documentos antiguos, notariales o internacionales toman mas." },
      { label: "Bloqueo comun", value: "Formato incorrecto", detail: "Documento vencido, finalidad equivocada o certificado sin validacion requerida." }
    ],
    fiveMinutePlan: [
      "Pregunta nombre exacto, finalidad, antiguedad maxima y formato aceptado.",
      "Confirma si debe venir de Registro Civil, SII, municipio, notaria, colegio u otra entidad.",
      "Descarga o solicita el documento y verifica nombre, RUN, fecha y codigo de validacion.",
      "Si se usara fuera de Chile, revisa apostilla o traduccion antes de enviarlo."
    ],
    commonMistakes: [
      "Enviar certificado correcto pero para finalidad equivocada.",
      "No revisar antiguedad maxima aceptada.",
      "Mandar captura de pantalla cuando piden PDF verificable.",
      "Apostillar tarde un documento para uso internacional."
    ],
    whenToGetHelp: [
      "El documento sera usado en otro pais o ante tribunal.",
      "Hay diferencias de nombre, RUN, estado civil, domicilio o fecha.",
      "La institucion pide formato especial o validacion adicional."
    ],
    sections: [
      { title: "Tipo exacto", body: "Pregunta nombre del certificado, finalidad, antiguedad maxima y si sirve digital o impreso antes de descargar." },
      { title: "Fecha importa", body: "Muchos documentos se rechazan por antiguedad, aunque el contenido sea correcto." },
      { title: "Uso internacional", body: "Si el documento se usara fuera de Chile, revisa apostilla, traduccion o legalizacion antes de pagar." }
    ],
    checklist: ["Tipo confirmado.", "Fecha vigente.", "Formato aceptado.", "Apostilla revisada si aplica."],
    sources: [registroCivil, chileAtiende]
  },
  {
    slug: "guia-rapida-salud",
    title: "Guia rapida para salud",
    category: "Salud",
    summary: "Fonasa, Isapre, licencias, GES, reembolsos y reclamos con respaldo suficiente.",
    updatedAt: "28 junio 2026",
    readingTime: "6 min",
    keyTakeaways: [
      "En salud, los plazos y comprobantes pueden afectar pago, cobertura o derecho a reclamar.",
      "Identifica quien responde: Fonasa, Isapre, COMPIN, prestador, empleador o Superintendencia.",
      "No entregues documentos medicos sin guardar copia, fecha y comprobante de recepcion."
    ],
    decisionCards: [
      { label: "Costo a preparar", value: "$0 a copago variable", detail: "Afiliacion o reclamo puede ser gratis; bonos, reembolsos, licencias y GES dependen de tramo, plan o prestador." },
      { label: "Plazo realista", value: "Minutos a semanas", detail: "Consultas online son rapidas; apelaciones, reembolsos y licencias pueden tomar validacion." },
      { label: "Bloqueo comun", value: "Plazo vencido", detail: "Licencias, apelaciones, reembolsos y reclamos se complican si falta comprobante o fecha." }
    ],
    fiveMinutePlan: [
      "Define si necesitas afiliar, comprar bono, activar GES, tramitar licencia, reembolsar o reclamar.",
      "Reune diagnostico, orden, licencia, boleta, bono, resolucion o comprobante segun caso.",
      "Identifica responsable y canal: Fonasa, Isapre, COMPIN, prestador, empleador o Superintendencia.",
      "Anota fecha limite y guarda copia de todo lo entregado."
    ],
    commonMistakes: [
      "No guardar resolucion, comprobante de recepcion o boleta original.",
      "Reclamar a la entidad equivocada.",
      "Confundir cobertura, copago y reembolso.",
      "Dejar pasar plazos de licencia, apelacion o reclamo."
    ],
    whenToGetHelp: [
      "Hay licencia rechazada, reducida o no pagada.",
      "Existe diagnostico GES, urgencia, deuda importante o negativa de cobertura.",
      "No sabes si responde Fonasa, Isapre, COMPIN, prestador o Superintendencia."
    ],
    sections: [
      { title: "Guarda antecedentes", body: "Ordenes, boletas, licencias, diagnosticos, resoluciones y comprobantes de entrega son esenciales." },
      { title: "Revisa plazos", body: "Licencias, apelaciones, reembolsos y reclamos tienen fechas. Un atraso puede afectar pago o cobertura." },
      { title: "Canal correcto", body: "Fonasa, Isapre, COMPIN, prestador y Superintendencia no resuelven lo mismo. Identifica quien responde." }
    ],
    checklist: ["Documento medico guardado.", "Plazo revisado.", "Entidad responsable identificada.", "Comprobante respaldado."],
    sources: [chileAtiende]
  },
  {
    slug: "guia-rapida-empresas",
    title: "Guia rapida para crear y operar una empresa",
    category: "Empresas",
    summary: "Constitucion, SII, patente, cuenta bancaria, marca, facturacion y primeras obligaciones.",
    updatedAt: "28 junio 2026",
    readingTime: "8 min",
    keyTakeaways: [
      "Constituir no es lo mismo que estar listo para operar: despues vienen SII, patente, facturacion, banco y permisos.",
      "Define socios, administracion, capital, giro, domicilio y salida de socios antes de llenar formularios.",
      "El costo bajo de crear empresa puede ocultar obligaciones mensuales, contables, laborales y municipales."
    ],
    decisionCards: [
      { label: "Costo a preparar", value: "$0 a $300.000+", detail: "Constitucion puede ser barata, pero notaria, contabilidad, patente, marca, permisos y software pueden sumar." },
      { label: "Plazo realista", value: "1 dia a meses", detail: "Crear puede ser rapido; operar legalmente depende de SII, municipio, banco y permisos sectoriales." },
      { label: "Bloqueo comun", value: "Giro/domicilio", detail: "Giro mal definido, domicilio sin respaldo o patente pendiente frenan ventas, cuenta o facturacion." }
    ],
    fiveMinutePlan: [
      "Define tipo de empresa, socios, administrador, capital y reglas si alguien sale.",
      "Elige giro real y revisa si requiere permiso municipal o sectorial.",
      "Ordena domicilio tributario, inicio de actividades, facturacion y cuenta bancaria.",
      "Estima obligaciones mensuales: contabilidad, impuestos, remuneraciones, patente y software."
    ],
    commonMistakes: [
      "Constituir rapido sin acordar administracion, aportes o salida de socios.",
      "Iniciar ventas sin revisar patente, facturacion o permisos.",
      "No separar dinero de IVA, impuestos, sueldos y caja del negocio.",
      "Registrar marca o dominio tarde cuando el negocio ya esta funcionando."
    ],
    whenToGetHelp: [
      "Hay socios, inversionistas, deuda, trabajadores, alimentos, salud, educacion o rubros regulados.",
      "No sabes si conviene SpA, EIRL, limitada u otra estructura.",
      "Vas a firmar contratos, levantar capital o asumir obligaciones relevantes."
    ],
    sections: [
      { title: "No todo parte en el formulario", body: "Antes de constituir define socios, administracion, capital, giro, domicilio, responsabilidades y que pasa si alguien sale del negocio." },
      { title: "Despues de constituir", body: "La empresa puede existir legalmente, pero aun faltar inicio de actividades, patente municipal, cuenta bancaria, facturacion, permisos sectoriales o marca." },
      { title: "Costos ocultos", body: "Aunque crear una empresa pueda ser barato, operar implica contabilidad, impuestos, permisos, software, banco, contratos y tiempo de cumplimiento." }
    ],
    checklist: [
      "Tipo de empresa definido.",
      "Giro y domicilio claros.",
      "SII y patente revisados.",
      "Obligaciones mensuales estimadas."
    ],
    sources: [sii, chileAtiende, municipalidades]
  }
];
