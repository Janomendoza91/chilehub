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
      detail:
        index === 0
          ? "Documento base para iniciar o validar el proceso."
          : "Puede ser solicitado segun canal, institucion o situacion personal.",
      required: index < 2
    })),
    beforeYouStart: [
      `Confirma requisitos vigentes en ${primarySource.label} antes de avanzar.`,
      "Revisa costo, plazo y documentos el mismo dia si tienes una fecha limite.",
      "Guarda comprobantes, folios, correos y capturas de pantalla del proceso.",
      seed.warning ?? "Si tu caso tiene excepciones, valida con la institucion o un profesional."
    ],
    keyQuestions: [
      "Estoy usando el canal correcto para mi caso?",
      "Tengo los documentos vigentes y legibles?",
      "El costo estimado considera pagos externos o solo el tramite base?",
      "Que pasa si falta un documento o existe una observacion?"
    ],
    estimatedCosts: [
      {
        label: "Costo estimado",
        amount: seed.cost,
        detail: "Rango referencial. Puede cambiar por comuna, institucion, canal, fecha o situacion personal."
      },
      {
        label: "Tiempo estimado",
        amount: seed.duration,
        detail: "Considera preparacion, espera, validacion y eventual correccion de antecedentes."
      },
      {
        label: "Costos indirectos",
        amount: "$0 a $20.000+",
        detail: "Impresiones, certificados, traslados, notariales o asesorias pueden sumar costo."
      }
    ],
    steps: [
      "Confirma requisitos y canal vigente.",
      "Prepara documentos, datos personales y medio de pago si aplica.",
      "Inicia la solicitud en el canal oficial o externo correspondiente.",
      "Guarda comprobante y revisa estado hasta cerrar el proceso."
    ],
    commonMistakes: [
      "Confiar en requisitos antiguos o comentarios de terceros.",
      "No revisar si el documento debe estar vigente o emitido recientemente.",
      "No guardar folio, comprobante o respaldo de envio.",
      "Esperar al ultimo dia cuando existe validacion posterior."
    ],
    redFlags: [
      "Te piden pagar fuera del canal informado.",
      "No puedes identificar fuente oficial o responsable del proceso.",
      "Hay datos personales incorrectos.",
      "El plazo vence pronto y falta validacion."
    ],
    variations: [
      "Los requisitos pueden cambiar por comuna, region o institucion.",
      "Personas extranjeras, menores de edad o representantes pueden necesitar documentos extra.",
      "Procesos online pueden pedir validacion presencial en casos puntuales."
    ],
    whatToAsk: [
      "Cual es el requisito exacto para mi caso?",
      "Que documentos aceptan como respaldo?",
      "Cual es el costo vigente y medio de pago?",
      "Donde reviso estado o hago correcciones?"
    ],
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
  { slug: "inscribirse-cesfam", title: "Inscribirse en CESFAM", category: "Salud", summary: "Prepara domicilio, identidad y previsión para atenderte en salud primaria.", cost: "$0", duration: "Minutos a dias.", channel: "CESFAM municipal", documents: ["Cedula", "Comprobante domicilio", "Fonasa/Isapre"], sources: [municipalidades, chileAtiende] },
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

export const expandedProcedures: ProcedureDetail[] =
  procedureSeeds.map(makeProcedure);

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
