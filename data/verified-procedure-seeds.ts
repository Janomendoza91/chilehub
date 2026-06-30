import type { ContentSource } from "@/types/chilehub";
import type { ProcedureSeedInput } from "@/data/everyday-procedure-seeds";

const chileAtiende = { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" };
const registroCivil = { label: "Registro Civil", url: "https://www.registrocivil.cl/" };
const sii = { label: "SII", url: "https://www.sii.cl/" };
const dt = { label: "Direccion del Trabajo", url: "https://www.dt.gob.cl/" };
const sernac = { label: "SERNAC", url: "https://www.sernac.cl/" };
const subtel = { label: "SUBTEL", url: "https://www.subtel.gob.cl/" };
const sag = { label: "Servicio Agricola y Ganadero", url: "https://www.sag.gob.cl/" };
const fonasa = { label: "Fonasa", url: "https://www.fonasa.cl/" };
const superSalud = { label: "Superintendencia de Salud", url: "https://www.supersalud.gob.cl/" };
const mercadoPublico = { label: "Mercado Publico", url: "https://www.mercadopublico.cl/" };
const inapi = { label: "INAPI", url: "https://www.inapi.cl/" };
const cmf = { label: "CMF", url: "https://www.cmfchile.cl/" };
const minvu = { label: "MINVU", url: "https://www.minvu.gob.cl/" };
const municipalidades = { label: "Municipalidades", url: "https://www.gob.cl/municipalidades/" };

function seed(
  slug: string,
  title: string,
  category: string,
  summary: string,
  cost: string,
  duration: string,
  channel: string,
  documents: string[],
  sources: ContentSource[],
  warning?: string
): ProcedureSeedInput {
  return { slug, title, category, summary, cost, duration, channel, documents, sources, warning };
}

export const verifiedProcedureSeeds: ProcedureSeedInput[] = [
  seed(
    "denunciar-auto-vendido-no-transferido",
    "Denunciar auto vendido que no fue transferido",
    "Autos",
    "Ordena contrato, comprobantes y comunicaciones si vendiste un vehiculo y el comprador no hizo la transferencia.",
    "$0 a gestion legal/notarial variable.",
    "Dias a semanas segun antecedentes y canal.",
    "Registro Civil, comprador, notaria o asesoria legal",
    ["Contrato o comprobante de venta", "Datos del comprador", "Certificado de anotaciones vigentes"],
    [registroCivil, chileAtiende],
    "No basta con entregar el auto: mientras el Registro Civil mantenga datos antiguos, pueden aparecer multas, TAG, permisos o responsabilidades asociadas. Revisa respaldo y busca orientacion legal si hay conflicto."
  ),
  seed(
    "solicitar-duplicado-padron-vehiculo",
    "Solicitar duplicado de padron vehicular",
    "Autos",
    "Prepara datos del vehiculo y propietario antes de pedir copia o certificado de inscripcion.",
    "$0 a $2.000 aprox. segun canal.",
    "Minutos online o dias si requiere atencion.",
    "Registro Civil",
    ["RUN del propietario", "Patente", "ClaveUnica o medio de pago si aplica"],
    [registroCivil, chileAtiende],
    "Confirma si la institucion pide padron fisico, certificado digital o certificado de inscripcion; no todos se aceptan igual."
  ),
  seed(
    "pedir-certificado-no-expropiacion",
    "Pedir certificado de no expropiacion",
    "Vivienda",
    "Revisa rol, direccion y organismo competente antes de comprar, vender o financiar una propiedad.",
    "$0 a $30.000+ aprox. segun organismo.",
    "Dias a semanas.",
    "Municipalidad, SERVIU o entidad competente",
    ["Rol de la propiedad", "Direccion", "Solicitud o antecedente del inmueble"],
    [minvu, municipalidades, chileAtiende],
    "El certificado o informe requerido puede cambiar segun banco, comprador, comuna o tipo de operacion. Confirma nombre exacto antes de pagar."
  ),
  seed(
    "solicitar-numero-municipal-propiedad",
    "Solicitar numero municipal de una propiedad",
    "Vivienda",
    "Prepara rol, direccion y antecedentes del inmueble para pedir o regularizar numeracion municipal.",
    "$0 a derecho municipal variable.",
    "Dias a semanas segun comuna.",
    "Direccion de Obras Municipales",
    ["Rol", "Plano o croquis", "Dominio o antecedente de propiedad"],
    [municipalidades, chileAtiende],
    "La numeracion puede ser necesaria para servicios, patente, recepcion o contratos. Cada municipio define requisitos y plazos."
  ),
  seed(
    "solicitar-mediacion-familiar-obligatoria",
    "Solicitar mediacion familiar obligatoria",
    "Familia",
    "Ordena antecedentes de alimentos, cuidado personal o relacion directa antes de pedir mediacion.",
    "$0 a costo de mediador privado variable.",
    "Dias a semanas segun agenda.",
    "Mediacion familiar, Corporacion de Asistencia Judicial o tribunal",
    ["Cedula", "Datos de la otra parte", "Antecedentes del caso"],
    [chileAtiende],
    "Algunas materias de familia requieren mediacion previa antes de demandar. Si hay violencia, riesgo o urgencia, confirma si corresponde excepcion o canal especial."
  ),
  seed(
    "preparar-autorizacion-trabajo-menor",
    "Preparar autorizacion para trabajo adolescente",
    "Familia",
    "Revisa edad, escolaridad, autorizacion y condiciones antes de que una persona adolescente trabaje.",
    "$0 directo.",
    "Dias segun empleador y documentos.",
    "Empleador, Direccion del Trabajo y adulto responsable",
    ["Cedula", "Autorizacion del adulto responsable", "Certificado de alumno o antecedentes escolares"],
    [dt, chileAtiende],
    "El trabajo adolescente tiene reglas especiales de edad, jornada, escolaridad y labores permitidas. No firmes sin confirmar condiciones vigentes."
  ),
  seed(
    "denunciar-no-entrega-contrato",
    "Denunciar no entrega de contrato de trabajo",
    "Trabajo",
    "Reune fechas, funciones, empleador, jornada y pagos si trabajas sin contrato escrito o no te entregan copia.",
    "$0 directo.",
    "Dias a semanas.",
    "Direccion del Trabajo",
    ["Datos del empleador", "Comprobantes de asistencia o pago", "Comunicaciones laborales"],
    [dt, chileAtiende],
    "Guardar mensajes, turnos, pagos y testigos ayuda a explicar la relacion laboral. No firmes documentos retroactivos sin revisar fechas y condiciones."
  ),
  seed(
    "solicitar-feriado-legal-pendiente",
    "Revisar feriado legal pendiente",
    "Trabajo",
    "Ordena antiguedad, contrato, liquidaciones y dias usados antes de pedir vacaciones o reclamar saldo.",
    "$0 directo.",
    "Horas a dias.",
    "Empleador o Direccion del Trabajo",
    ["Contrato", "Liquidaciones", "Registro de dias usados"],
    [dt],
    "El saldo depende de antiguedad, jornada, periodos usados y registros del empleador. Confirma antes de firmar finiquito."
  ),
  seed(
    "pedir-certificado-residencia-tributaria",
    "Pedir certificado de residencia tributaria",
    "Impuestos",
    "Prepara antecedentes si necesitas acreditar residencia tributaria chilena ante otra jurisdiccion.",
    "$0 directo; traducciones o legalizaciones variables.",
    "Dias a semanas segun revision.",
    "SII",
    ["Clave SII", "Antecedentes tributarios", "Pais o entidad solicitante"],
    [sii],
    "El uso internacional puede requerir formato, apostilla, traduccion o datos especificos. Confirma con la entidad extranjera antes de solicitar."
  ),
  seed(
    "revisar-obligacion-factura-compra",
    "Revisar obligacion de emitir factura de compra",
    "Impuestos",
    "Confirma si corresponde factura de compra, respaldo y tratamiento tributario antes de registrar una operacion.",
    "$0 directo; impuesto y asesoria variable.",
    "Minutos a dias segun caso.",
    "SII o contador",
    ["Clave SII", "Datos proveedor", "Detalle de operacion"],
    [sii],
    "Este tema puede depender de giro, tipo de proveedor, IVA y respaldo. Si hay montos relevantes, valida con contador o SII."
  ),
  seed(
    "preparar-control-aduana-equipaje",
    "Preparar control de Aduana por equipaje",
    "Viajes",
    "Ordena boletas, productos, montos y restricciones antes de entrar o salir de Chile con equipaje especial.",
    "Impuestos, multas o permisos variables si corresponde.",
    "Minutos a horas; regularizaciones pueden tomar mas.",
    "Servicio Nacional de Aduanas",
    ["Boletas o facturas", "Pasaporte", "Declaracion si aplica"],
    [{ label: "Servicio Nacional de Aduanas", url: "https://www.aduana.cl/" }, chileAtiende],
    "No todo producto entra libremente. Revisa franquicias, productos restringidos y declaracion antes de viajar."
  ),
  seed(
    "preparar-viaje-mascota-sag",
    "Preparar viaje internacional con mascota ante SAG",
    "Viajes",
    "Revisa vacunas, certificado sanitario, requisitos del pais de destino y transporte antes de viajar con mascota.",
    "Certificados, veterinario y transporte variables.",
    "Dias a semanas.",
    "SAG, veterinario y aerolinea",
    ["Certificado veterinario", "Vacunas", "Datos del destino"],
    [sag, chileAtiende],
    "Cada pais y aerolinea puede exigir condiciones distintas. Confirma requisitos de destino antes de comprar pasajes."
  ),
  seed(
    "solicitar-credencial-discapacidad",
    "Solicitar credencial de discapacidad",
    "Documentos",
    "Prepara calificacion, certificados y antecedentes para solicitar o revisar inscripcion en el Registro Nacional de la Discapacidad.",
    "$0 directo.",
    "Semanas segun evaluacion y registro.",
    "COMPIN, Registro Civil o ChileAtiende",
    ["Informe medico o calificacion", "Cedula", "Antecedentes sociales si aplica"],
    [registroCivil, chileAtiende],
    "La credencial depende de evaluacion y registro, no solo de un certificado medico aislado. Confirma etapa y entidad responsable."
  ),
  seed(
    "solicitar-certificado-vigencia-poder",
    "Solicitar certificado de vigencia de poder",
    "Documentos",
    "Confirma entidad emisora, poder inscrito y finalidad antes de presentar representacion ante bancos o instituciones.",
    "$0 a $15.000+ aprox. segun registro.",
    "Minutos a dias.",
    "Registro Civil, Registro de Empresas, CBR o notaria segun poder",
    ["Datos del mandante", "Datos del apoderado", "Antecedente del poder"],
    [registroCivil, sii, chileAtiende],
    "No todos los poderes se verifican en el mismo registro. Pregunta que certificado exacto acepta la institucion."
  ),
  seed(
    "reclamar-alza-plan-isapre",
    "Reclamar alza o cambio de plan de Isapre",
    "Salud",
    "Ordena carta, plan, precio, plazo y comunicaciones antes de reclamar una adecuacion o cambio.",
    "$0 directo; asesoria variable si escalas.",
    "Dias a semanas.",
    "Isapre o Superintendencia de Salud",
    ["Carta o aviso de adecuacion", "Contrato o plan", "Comunicaciones"],
    [superSalud, chileAtiende],
    "Los plazos de reclamo importan. Guarda carta, fecha de recepcion y copia del plan antes de responder."
  ),
  seed(
    "solicitar-mediacion-salud",
    "Solicitar mediacion por prestacion de salud",
    "Salud",
    "Prepara relato, antecedentes clinicos y documentos si necesitas mediacion por atencion de salud.",
    "$0 a costos variables segun canal.",
    "Semanas a meses.",
    "Superintendencia de Salud, prestador o entidad correspondiente",
    ["Relato cronologico", "Ficha o antecedentes", "Boletas o comprobantes"],
    [superSalud, chileAtiende],
    "No entregues documentos originales sin respaldo. Si hay dano grave, urgencia o negligencia, pide orientacion profesional."
  ),
  seed(
    "postular-mercado-publico-proveedor",
    "Preparar registro como proveedor del Estado",
    "Empresas",
    "Ordena RUT, giro, poderes, rubro y antecedentes antes de operar en Mercado Publico.",
    "$0 directo; gestion documental variable.",
    "Dias a semanas.",
    "Mercado Publico, SII y empresa",
    ["RUT empresa", "Inicio de actividades", "Datos representante"],
    [mercadoPublico, sii],
    "Estar registrado no garantiza adjudicaciones. Revisa rubros, bases, garantias, documentos y plazos de cada licitacion."
  ),
  seed(
    "preparar-licencia-marca-inapi",
    "Preparar licencia o cesion de marca",
    "Empresas",
    "Revisa titularidad, registro, contrato y alcance antes de ceder o licenciar una marca.",
    "Contrato, inscripcion y asesoria variables.",
    "Dias a semanas.",
    "INAPI, partes y asesoria legal",
    ["Registro de marca", "Contrato", "Datos de las partes"],
    [inapi, chileAtiende],
    "Usar una marca sin contrato claro puede afectar pagos, territorios, plazo y responsabilidad. Confirma titularidad vigente."
  ),
  seed(
    "reclamar-cobro-telefonia-internet",
    "Reclamar cobro de telefonia o internet",
    "Documentos",
    "Ordena boletas, contrato, numero de cliente y reclamos previos antes de escalar un cobro de telecomunicaciones.",
    "$0 directo.",
    "Dias a semanas.",
    "Empresa de telecomunicaciones, SUBTEL o SERNAC",
    ["Boleta", "Contrato o numero de cliente", "Reclamo previo"],
    [subtel, sernac],
    "Primero identifica si el problema es tecnico, comercial o contractual. Guarda numero de reclamo y fechas."
  ),
  seed(
    "reclamar-compra-online-no-entregada",
    "Reclamar compra online no entregada",
    "Documentos",
    "Prepara comprobante, orden, conversaciones y plazos si una compra por internet no llega.",
    "$0 directo.",
    "Dias a semanas.",
    "Tienda, marketplace, SERNAC o medio de pago",
    ["Comprobante de pago", "Numero de orden", "Comunicaciones con vendedor"],
    [sernac, chileAtiende],
    "No entregues mas datos ni aceptes links externos sin verificar. Si pagaste con tarjeta, revisa tambien el canal del medio de pago."
  )
];
