import {
  BriefcaseBusiness,
  Car,
  FileBadge,
  FileText,
  Home,
  IdCard,
  Plane
} from "lucide-react";
import type {
  CalculatorCard,
  GuideCard,
  GuideDetail,
  ProcedureCard,
  ProcedureDetail
} from "@/types/chilehub";
import { expandedGuides, expandedProcedures } from "@/data/expanded-content";

export const disclosureText =
  "Informacion referencial recopilada con IA para prepararte mejor. Los tramites no se realizan en ChileHub, no generamos cobros y la plataforma es gratuita.";

export const procedures: ProcedureDetail[] = [
  ...expandedProcedures,
  {
    slug: "renovar-licencia-conducir",
    title: "Renovar licencia de conducir",
    category: "Autos",
    summary:
      "Prepara los documentos, pagos y examenes que normalmente solicita la municipalidad antes de renovar tu licencia.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$25.000 a $75.000 aprox.",
    duration: "1 a 3 horas de atencion; entrega puede ser el mismo dia o segun comuna.",
    channel: "Municipalidad correspondiente a tu domicilio.",
    documents: [
      {
        title: "Cedula de identidad vigente",
        detail: "Llevala en formato fisico y revisa que no este vencida.",
        required: true
      },
      {
        title: "Licencia anterior",
        detail: "Sirve para validar clase y antecedentes de renovacion.",
        required: true
      },
      {
        title: "Comprobante de domicilio",
        detail: "Algunas municipalidades pueden solicitarlo.",
        required: false
      }
    ],
    beforeYouStart: [
      "Revisa en la municipalidad si atienden por agenda, por orden de llegada o con pago previo.",
      "Confirma si tu licencia esta vencida, por vencer o si necesitas duplicado; no se preparan igual.",
      "Verifica si tu comuna exige acreditar domicilio y que documento acepta para hacerlo.",
      "Lleva un medio de pago aceptado por esa municipalidad; algunas cajas no aceptan todos los medios."
    ],
    keyQuestions: [
      "En que municipalidad debo renovar segun mi domicilio?",
      "Tengo cedula vigente el dia de la atencion?",
      "Mi clase de licencia exige examen adicional o requisito especial?",
      "La municipalidad publica valores, horarios y documentos actualizados?"
    ],
    estimatedCosts: [
      {
        label: "Derecho municipal",
        amount: "$25.000 a $75.000 aprox.",
        detail:
          "Rango referencial observado para renovacion comun. El valor final lo fija cada municipalidad y puede cambiar por clase de licencia."
      },
      {
        label: "Fotos, copias o extras",
        amount: "$0 a $10.000 aprox.",
        detail:
          "Algunas municipalidades toman foto en el lugar; otras pueden pedir copias o documentos impresos."
      },
      {
        label: "Costo de repetir visita",
        amount: "Medio dia perdido",
        detail:
          "El costo real suele ser volver por cedula vencida, falta de domicilio o no tener hora tomada."
      }
    ],
    steps: [
      "Confirma requisitos en la municipalidad donde haras el tramite.",
      "Agenda hora si tu comuna lo exige.",
      "Prepara documento de identidad, licencia anterior y medio de pago.",
      "Considera examenes psicotecnico, medico y teorico segun corresponda."
    ],
    commonMistakes: [
      "Llegar sin confirmar si la municipalidad exige reserva.",
      "Asumir que el costo es igual en todas las comunas.",
      "No revisar vigencia de la cedula antes de asistir."
    ],
    redFlags: [
      "Tu cedula esta vencida o en renovacion.",
      "Cambiaste de comuna y no sabes si debes acreditar domicilio.",
      "Tu licencia es profesional o tiene restricciones medicas.",
      "La municipalidad no informa agenda, valores o requisitos en su sitio."
    ],
    variations: [
      "Los requisitos pueden cambiar por comuna.",
      "Licencias profesionales pueden exigir antecedentes adicionales.",
      "Personas mayores pueden tener controles o plazos distintos."
    ],
    whatToAsk: [
      "Que documentos aceptan para acreditar domicilio?",
      "El pago se hace antes, durante o despues de la atencion?",
      "Que examenes debo rendir segun mi clase de licencia?",
      "Cuanto tarda la entrega y como retiro el documento?"
    ],
    externalAction: {
      label: "Revisar municipalidad correspondiente",
      url: "https://www.chileatiende.gob.cl/"
    },
    sources: [
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" },
      { label: "Municipalidades", url: "https://www.gob.cl/municipalidades/" }
    ]
  },
  {
    slug: "vender-un-auto",
    title: "Vender un auto",
    category: "Autos",
    summary:
      "Ordena lo que debes revisar antes de vender un vehiculo: documentos, multas, contrato y transferencia.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "1,5% del valor + $30.000 a $90.000 aprox.",
    duration: "30 minutos a 3 dias segun canal, pago y validaciones.",
    channel: "Registro Civil, notaria o plataformas autorizadas segun el caso.",
    documents: [
      {
        title: "Padron o certificado de anotaciones",
        detail: "Ayuda a verificar datos del vehiculo y propietario.",
        required: true
      },
      {
        title: "Revision de multas y deudas",
        detail: "Evita bloqueos o sorpresas antes de transferir.",
        required: true
      },
      {
        title: "Contrato de compraventa",
        detail: "Debe quedar claro precio, datos de partes y vehiculo.",
        required: true
      }
    ],
    beforeYouStart: [
      "Pide o revisa antecedentes del vehiculo antes de acordar entrega: propietario, patente, limitaciones y multas.",
      "Define por escrito precio, forma de pago, fecha de entrega y quien paga costos de transferencia.",
      "No entregues llaves ni documentos originales sin tener claro el pago y el estado de la transferencia.",
      "Si el vehiculo tiene prenda, leasing, embargo o deuda, detente y revisa el caso antes de avanzar."
    ],
    keyQuestions: [
      "El vehiculo esta a nombre de quien lo vende?",
      "Existen multas, deudas, prenda, embargo o limitaciones al dominio?",
      "Como se confirmara el pago antes de entregar el auto?",
      "Quien hara la transferencia y por que canal?"
    ],
    estimatedCosts: [
      {
        label: "Transferencia e inscripcion",
        amount: "1,5% + $30.000 a $90.000",
        detail:
          "Considera impuesto de transferencia y costos del canal usado. El calculo puede usar precio de venta, tasacion o reglas del servicio."
      },
      {
        label: "Notaria o plataforma",
        amount: "$10.000 a $60.000 aprox.",
        detail:
          "Si usas notaria o servicio externo, puede existir costo adicional fuera de ChileHub."
      },
      {
        label: "Deudas pendientes",
        amount: "Variable",
        detail:
          "Multas, TAG, permiso u otros pagos pueden afectar la negociacion aunque no siempre bloqueen lo mismo."
      }
    ],
    steps: [
      "Revisa antecedentes del vehiculo y multas pendientes.",
      "Acuerda precio, forma de pago y entrega.",
      "Prepara contrato o canal de transferencia.",
      "Completa la transferencia en el canal correspondiente."
    ],
    commonMistakes: [
      "Entregar el auto antes de confirmar pago y transferencia.",
      "No revisar multas o limitaciones al dominio.",
      "Usar datos incompletos en el contrato."
    ],
    redFlags: [
      "El vendedor no coincide con el propietario registrado.",
      "El comprador pide entregar el vehiculo antes de completar pago o transferencia.",
      "Hay prenda, embargo, leasing o limitacion al dominio.",
      "El contrato tiene patente, VIN, RUT o precio distinto al acordado."
    ],
    variations: [
      "La transferencia puede hacerse por diferentes canales.",
      "Vehiculos con prenda o leasing requieren validaciones extra.",
      "Empresas pueden necesitar documentos tributarios adicionales."
    ],
    whatToAsk: [
      "Quien paga impuesto, inscripcion, notaria o plataforma?",
      "Como se acredita que el pago quedo recibido?",
      "Cuando se entrega el vehiculo y que pasa si la transferencia queda pendiente?",
      "Que documentos quedan para comprador y vendedor?"
    ],
    externalAction: {
      label: "Consultar informacion oficial",
      url: "https://www.registrocivil.cl/"
    },
    sources: [
      { label: "Registro Civil", url: "https://www.registrocivil.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "sacar-pasaporte",
    title: "Sacar pasaporte",
    category: "Viajes",
    summary:
      "Prepara tu solicitud de pasaporte revisando documentos, costos referenciales y reserva de hora.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$69.660 a $69.740 aprox.",
    duration: "Atencion con reserva; entrega usualmente en dias habiles segun oficina.",
    channel: "Servicio de Registro Civil e Identificacion.",
    documents: [
      {
        title: "Cedula de identidad vigente",
        detail: "Necesaria para identificarte al solicitar el documento.",
        required: true
      },
      {
        title: "Comprobante de reserva",
        detail: "Si agendaste hora, lleva respaldo digital o impreso.",
        required: false
      }
    ],
    beforeYouStart: [
      "Revisa disponibilidad de hora con anticipacion, especialmente si tienes viaje cercano.",
      "Confirma el valor vigente, vigencia del documento y forma de pago directamente en Registro Civil.",
      "Si el solicitante es menor de edad, revisa autorizaciones y presencia de padres o representantes.",
      "Verifica que tu cedula este vigente y que tus datos personales no tengan inconsistencias."
    ],
    keyQuestions: [
      "Necesito pasaporte por primera vez o renovacion?",
      "Viajo pronto y tengo margen suficiente para emision y retiro?",
      "Soy menor de edad o viajo con menores?",
      "El pais de destino exige vigencia minima del pasaporte?"
    ],
    estimatedCosts: [
      {
        label: "Documento",
        amount: "$69.660 a $69.740 aprox.",
        detail:
          "Rango referencial para pasaporte de 32 o 64 paginas. Confirma valor vigente en Registro Civil antes de asistir."
      },
      {
        label: "Tiempo de entrega",
        amount: "Varios dias habiles",
        detail:
          "No asumas entrega inmediata. Considera reserva, atencion, emision y retiro antes de comprar pasajes."
      },
      {
        label: "Costo por urgencia",
        amount: "Alto si compras mal",
        detail:
          "El mayor costo suele ser comprar pasajes sin margen para obtener o retirar el documento."
      }
    ],
    steps: [
      "Revisa disponibilidad de hora en Registro Civil.",
      "Confirma valor vigente y medios de pago.",
      "Asiste con cedula vigente.",
      "Guarda comprobantes y fecha estimada de retiro."
    ],
    commonMistakes: [
      "No revisar si hay horas disponibles con anticipacion.",
      "Llegar con cedula vencida.",
      "No considerar tiempos de entrega antes de viajar."
    ],
    redFlags: [
      "Tienes viaje comprado y aun no tienes hora.",
      "La cedula esta vencida, bloqueada o con datos inconsistentes.",
      "El solicitante es menor y no sabes que autorizaciones requiere.",
      "El pais de destino exige meses minimos de vigencia del pasaporte."
    ],
    variations: [
      "Menores de edad pueden requerir autorizaciones.",
      "Casos urgentes deben validarse directamente con la institucion.",
      "Disponibilidad cambia segun oficina."
    ],
    whatToAsk: [
      "Cual es el valor vigente del pasaporte?",
      "Cuanto demora la entrega en esta oficina?",
      "Que autorizaciones aplican para menores de edad?",
      "Como y donde se retira el documento?"
    ],
    externalAction: {
      label: "Ir al Registro Civil",
      url: "https://www.registrocivil.cl/"
    },
    sources: [
      { label: "Registro Civil", url: "https://www.registrocivil.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "permiso-circulacion",
    title: "Permiso de circulacion",
    category: "Autos",
    summary:
      "Revisa documentos habituales, pagos y bloqueos frecuentes antes de pagar el permiso.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$40.000 a $250.000+ aprox.",
    duration: "10 a 30 minutos online si no hay bloqueos; presencial puede tomar mas.",
    channel: "Municipalidad donde pagas el permiso.",
    documents: [
      {
        title: "Permiso anterior",
        detail: "Puede ser solicitado para renovar.",
        required: true
      },
      {
        title: "Revision tecnica y SOAP",
        detail: "Deben estar vigentes cuando corresponda.",
        required: true
      },
      {
        title: "Multas impagas",
        detail: "Revisa si existen bloqueos antes de pagar.",
        required: true
      }
    ],
    beforeYouStart: [
      "Revisa si tu revision tecnica, SOAP y permiso anterior estan vigentes o disponibles.",
      "Consulta multas impagas o bloqueos antes de entrar a pagar.",
      "Confirma si la municipalidad permite pago online para tu patente o si debes ir presencial.",
      "Si compraste el vehiculo recientemente, revisa donde se pago el permiso anterior."
    ],
    keyQuestions: [
      "Tengo SOAP vigente para el periodo correspondiente?",
      "La revision tecnica o certificado de homologacion esta al dia?",
      "Existen multas pendientes asociadas a la patente?",
      "Puedo pagar online o necesito ir a una municipalidad?"
    ],
    estimatedCosts: [
      {
        label: "Permiso",
        amount: "$40.000 a $250.000+",
        detail:
          "Rango amplio para vehiculos particulares usados. Autos nuevos, de mayor tasacion o especiales pueden superar ese monto."
      },
      {
        label: "SOAP",
        amount: "$6.000 a $25.000 aprox.",
        detail:
          "Seguro obligatorio que normalmente se exige para el pago del permiso."
      },
      {
        label: "Multas o regularizaciones",
        amount: "Variable",
        detail:
          "Pagos pendientes pueden impedir o complicar la renovacion."
      }
    ],
    steps: [
      "Verifica revision tecnica, SOAP y multas.",
      "Consulta el valor en la municipalidad.",
      "Elige pago online o presencial segun disponibilidad.",
      "Guarda el comprobante del permiso."
    ],
    commonMistakes: [
      "Intentar pagar con revision tecnica vencida.",
      "No revisar multas antes del ultimo dia.",
      "Confundir municipalidad anterior con municipalidad actual."
    ],
    redFlags: [
      "La revision tecnica esta vencida o rechazada.",
      "No tienes SOAP vigente.",
      "Aparecen multas pendientes que no reconoces.",
      "El sitio municipal no permite pagar tu patente."
    ],
    variations: [
      "Autos nuevos tienen documentos distintos.",
      "Vehiculos de trabajo pueden requerir antecedentes adicionales.",
      "Las plataformas online dependen de cada municipalidad."
    ],
    whatToAsk: [
      "Que documentos exige esta municipalidad para mi tipo de vehiculo?",
      "Puedo pagar en cuotas o solo total?",
      "Como regularizo multas pendientes?",
      "Como obtengo copia del permiso si lo pierdo?"
    ],
    externalAction: {
      label: "Buscar municipalidad",
      url: "https://www.gob.cl/municipalidades/"
    },
    sources: [
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" },
      { label: "Municipalidades", url: "https://www.gob.cl/municipalidades/" }
    ]
  },
  {
    slug: "abrir-empresa",
    title: "Abrir una empresa",
    category: "Trabajo",
    summary:
      "Prepara las decisiones y documentos base antes de constituir una empresa e iniciar actividades.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$0 a $150.000+ antes de operar.",
    duration: "Constitucion puede ser rapida; operar legalmente puede tomar dias o semanas.",
    channel: "Empresa en un Dia, SII y otros servicios segun giro.",
    documents: [
      {
        title: "Datos de socios y representante",
        detail: "Necesarios para definir la constitucion.",
        required: true
      },
      {
        title: "Giro y domicilio tributario",
        detail: "Clave para iniciar actividades correctamente.",
        required: true
      },
      {
        title: "Firma electronica o autorizaciones",
        detail: "Puede ser necesaria segun el canal elegido.",
        required: false
      }
    ],
    beforeYouStart: [
      "Define que vendera o prestara la empresa antes de elegir giro.",
      "Decide si tendra uno o varios socios y quien administrara.",
      "Prepara domicilio tributario y revisa si tienes respaldo para usarlo.",
      "Si el negocio es regulado, revisa permisos municipales, sanitarios o sectoriales antes de constituir."
    ],
    keyQuestions: [
      "Me conviene persona natural, SpA, EIRL u otra estructura?",
      "Quien administra y quien puede firmar por la empresa?",
      "El giro describe bien lo que hare y permite facturar correctamente?",
      "Necesito patente, permiso sanitario u otra autorizacion despues de constituir?"
    ],
    estimatedCosts: [
      {
        label: "Constitucion",
        amount: "$0 a $80.000 aprox.",
        detail:
          "Empresa en un Dia puede no cobrar por el formulario, pero firma, notaria o apoyo externo pueden generar costo."
      },
      {
        label: "Firma y documentos",
        amount: "$0 a $40.000 aprox.",
        detail:
          "Algunos flujos requieren firma electronica, autorizaciones o documentos adicionales."
      },
      {
        label: "Operacion posterior",
        amount: "$50.000 a $150.000+",
        detail:
          "Considera patente municipal, contabilidad, facturacion, impuestos y permisos sectoriales."
      }
    ],
    steps: [
      "Define tipo de empresa, socios, giro y domicilio.",
      "Revisa si puedes usar Empresa en un Dia.",
      "Constituye la sociedad o prepara asesoria si el caso es complejo.",
      "Continua con inicio de actividades y obligaciones tributarias."
    ],
    commonMistakes: [
      "Elegir tipo de sociedad sin entender responsabilidades.",
      "No definir bien el giro antes de iniciar actividades.",
      "Confundir constitucion con cumplimiento tributario posterior."
    ],
    redFlags: [
      "Hay varios socios y no existe acuerdo claro de salida, administracion o aportes.",
      "El giro involucra alimentos, salud, transporte, educacion, finanzas u otra actividad regulada.",
      "No tienes domicilio tributario claro.",
      "Quieres emitir documentos tributarios pero no has revisado inicio de actividades."
    ],
    variations: [
      "Algunos rubros requieren permisos sectoriales.",
      "Sociedades con varios socios pueden requerir acuerdos mas precisos.",
      "Actividades reguladas necesitan revision profesional."
    ],
    whatToAsk: [
      "Que tipo de sociedad reduce mejor mi riesgo?",
      "Que obligaciones tributarias tendre despues de iniciar actividades?",
      "Necesito patente municipal o permiso especial para operar?",
      "Quien debe firmar y que facultades tendra?"
    ],
    externalAction: {
      label: "Ir a Empresa en un Dia",
      url: "https://www.registrodeempresasysociedades.cl/"
    },
    sources: [
      {
        label: "Registro de Empresas y Sociedades",
        url: "https://www.registrodeempresasysociedades.cl/"
      },
      { label: "SII", url: "https://www.sii.cl/" }
    ]
  },
  {
    slug: "obtener-clave-unica",
    title: "Obtener o recuperar ClaveUnica",
    category: "Documentos",
    summary:
      "Prepara tu acceso digital para entrar a servicios del Estado, descargar certificados y postular beneficios.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$0",
    duration: "5 a 20 minutos online; presencial depende de agenda.",
    channel: "ClaveUnica, Registro Civil o ChileAtiende.",
    documents: [
      {
        title: "Cedula de identidad vigente",
        detail: "Sirve para validar identidad. Si esta vencida, algunos canales pueden bloquear el flujo.",
        required: true
      },
      {
        title: "Correo y telefono disponibles",
        detail: "Necesarios para recuperar acceso, recibir codigos o validar seguridad.",
        required: true
      }
    ],
    beforeYouStart: [
      "Revisa que tienes acceso a tu correo y telefono antes de comenzar.",
      "Si ya tuviste clave, intenta recuperar antes de crear una nueva.",
      "No compartas tu ClaveUnica con terceros, gestores ni familiares.",
      "Prueba el acceso antes de una postulacion o tramite con plazo."
    ],
    keyQuestions: [
      "Necesito obtener, recuperar o cambiar mi clave?",
      "Tengo cedula vigente y acceso a mi correo?",
      "Puedo completar online o debo ir presencial?",
      "Voy a activar doble autenticacion?"
    ],
    estimatedCosts: [
      {
        label: "Obtencion",
        amount: "$0",
        detail: "La ClaveUnica no tiene costo. Desconfia de cobros por entregarla."
      },
      {
        label: "Tiempo online",
        amount: "5 a 20 min",
        detail: "Si tus datos estan correctos, el flujo suele ser rapido."
      },
      {
        label: "Riesgo por bloqueo",
        amount: "Alto",
        detail: "Sin acceso puedes perder postulaciones, certificados o beneficios con fecha limite."
      }
    ],
    steps: [
      "Entra al canal oficial de ClaveUnica.",
      "Elige obtener, recuperar o cambiar clave.",
      "Valida identidad con los datos solicitados.",
      "Guarda la clave de forma segura y activa seguridad adicional si aplica."
    ],
    commonMistakes: [
      "Usar un correo antiguo sin acceso.",
      "Compartir clave y codigos de seguridad.",
      "Recién probar la clave el ultimo dia de una postulacion."
    ],
    redFlags: [
      "Alguien te cobra por obtener la clave.",
      "Un tercero pide tu RUT, clave y codigo.",
      "No tienes acceso al correo asociado.",
      "La cuenta esta bloqueada antes de un plazo importante."
    ],
    variations: [
      "La obtencion puede ser online o presencial.",
      "Personas en el extranjero pueden requerir canal consular.",
      "La doble autenticacion cambia el ingreso."
    ],
    whatToAsk: [
      "Como cambio correo o telefono asociados?",
      "Puedo obtenerla con cedula vencida?",
      "Como recupero una cuenta bloqueada?",
      "Como activo doble autenticacion?"
    ],
    externalAction: {
      label: "Ir a ClaveUnica",
      url: "https://claveunica.gob.cl/"
    },
    sources: [
      { label: "ClaveUnica", url: "https://claveunica.gob.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "certificado-antecedentes",
    title: "Certificado de antecedentes",
    category: "Documentos",
    summary:
      "Organiza la descarga o solicitud del certificado que suelen pedir para trabajo, estudios, arriendo o procesos legales.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$0 a $1.500 aprox.",
    duration: "Inmediato online con ClaveUnica; presencial depende de atencion.",
    channel: "Registro Civil o ChileAtiende.",
    documents: [
      {
        title: "ClaveUnica",
        detail: "Suele ser la forma mas rapida para obtener certificados online.",
        required: true
      },
      {
        title: "Cedula de identidad",
        detail: "Necesaria si haces la solicitud presencial.",
        required: true
      }
    ],
    beforeYouStart: [
      "Confirma que tipo exacto de certificado te estan pidiendo.",
      "Revisa si el receptor exige antiguedad maxima del documento.",
      "Descarga el PDF y guarda copia con fecha.",
      "Si se usara fuera de Chile, revisa apostilla o validacion."
    ],
    keyQuestions: [
      "Lo piden para fines especiales, laborales o generales?",
      "Debe estar emitido en los ultimos 30 dias?",
      "Lo aceptan digital o debe imprimirse?",
      "Necesita apostilla?"
    ],
    estimatedCosts: [
      {
        label: "Online",
        amount: "$0 aprox.",
        detail: "Muchos certificados digitales pueden obtenerse sin costo segun tipo y canal."
      },
      {
        label: "Presencial/impresion",
        amount: "$500 a $1.500",
        detail: "Puede existir costo de impresion, traslado o emision presencial."
      },
      {
        label: "Uso internacional",
        amount: "Variable",
        detail: "Si se usa fuera de Chile, confirma apostilla o legalizacion."
      }
    ],
    steps: [
      "Confirma el tipo de certificado solicitado.",
      "Ingresa al canal oficial con ClaveUnica o prepara cedula.",
      "Revisa nombre, RUT, fecha y finalidad.",
      "Envia o imprime segun lo que exija el receptor."
    ],
    commonMistakes: [
      "Descargar un certificado distinto al solicitado.",
      "Enviar un documento demasiado antiguo.",
      "No revisar si requiere apostilla."
    ],
    redFlags: [
      "El receptor exige apostilla y tu documento no la tiene.",
      "La fecha de emision supera el plazo aceptado.",
      "El certificado muestra datos inesperados.",
      "Un tercero pide tu ClaveUnica para descargarlo."
    ],
    variations: [
      "El tipo depende de la finalidad.",
      "Algunos receptores exigen antiguedad maxima.",
      "Uso internacional puede requerir pasos extra."
    ],
    whatToAsk: [
      "Que tipo exacto aceptan?",
      "Con que antiguedad maxima?",
      "Sirve digital o impreso?",
      "Necesita apostilla?"
    ],
    externalAction: {
      label: "Ir al Registro Civil",
      url: "https://www.registrocivil.cl/"
    },
    sources: [
      { label: "Registro Civil", url: "https://www.registrocivil.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "ratificar-finiquito",
    title: "Ratificar finiquito",
    category: "Trabajo",
    summary:
      "Revisa causal, montos, descuentos y pago antes de firmar el cierre de una relacion laboral.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$0 a $10.000 aprox.",
    duration: "15 a 45 minutos si esta preparado; desacuerdos pueden tomar mas.",
    channel: "Direccion del Trabajo, notaria o canal acordado.",
    documents: [
      {
        title: "Cedula de identidad",
        detail: "Necesaria para validar identidad al ratificar.",
        required: true
      },
      {
        title: "Proyecto de finiquito",
        detail: "Revisa causal, fecha, sueldo, feriado, indemnizaciones y descuentos.",
        required: true
      },
      {
        title: "Contrato y liquidaciones",
        detail: "Sirven para contrastar remuneracion, antiguedad, bonos y vacaciones.",
        required: false
      }
    ],
    beforeYouStart: [
      "No firmes si no entiendes causal, montos o descuentos.",
      "Compara el finiquito con contrato, liquidaciones y vacaciones.",
      "Revisa si el pago ocurre antes, al firmar o despues.",
      "Guarda copia del documento firmado y comprobante de pago."
    ],
    keyQuestions: [
      "La causal de termino esta correcta?",
      "Incluye vacaciones e indemnizaciones si corresponden?",
      "Hay descuentos que no reconozco?",
      "Cuando y como se paga?"
    ],
    estimatedCosts: [
      {
        label: "Direccion del Trabajo",
        amount: "$0 aprox.",
        detail: "El canal DT puede no tener costo para el trabajador."
      },
      {
        label: "Notaria",
        amount: "$3.000 a $10.000",
        detail: "Si se firma ante notario, puede haber costo de autorizacion o copias."
      },
      {
        label: "Diferencias de pago",
        amount: "Variable",
        detail: "Vacaciones, bonos, indemnizacion o descuentos cambian el monto final."
      }
    ],
    steps: [
      "Lee el finiquito completo antes de firmar.",
      "Contrasta montos con contrato y liquidaciones.",
      "Aclara descuentos, vacaciones e indemnizaciones.",
      "Ratifica solo cuando entiendas documento, pago y copia final."
    ],
    commonMistakes: [
      "Firmar por presion sin revisar montos.",
      "No pedir copia del finiquito firmado.",
      "Confundir ratificacion con pago recibido."
    ],
    redFlags: [
      "Te piden firmar sin desglose.",
      "El pago queda prometido sin fecha clara.",
      "La causal no coincide con lo conversado.",
      "Faltan vacaciones, bonos o indemnizaciones esperadas."
    ],
    variations: [
      "El canal puede ser DT, notaria o electronico.",
      "La causal cambia derechos e indemnizaciones.",
      "Si hay desacuerdo, conviene revisar antes de ratificar."
    ],
    whatToAsk: [
      "Cual es el desglose completo?",
      "Cuando se paga y por que medio?",
      "Puedo firmar con reserva de derechos?",
      "Donde obtengo copia valida?"
    ],
    externalAction: {
      label: "Ir a Direccion del Trabajo",
      url: "https://www.dt.gob.cl/"
    },
    sources: [
      { label: "Direccion del Trabajo", url: "https://www.dt.gob.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "registro-social-hogares",
    title: "Actualizar Registro Social de Hogares",
    category: "Familia",
    summary:
      "Prepara datos del hogar, ingresos y respaldos para postular a beneficios sin errores de composicion o domicilio.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$0",
    duration: "Solicitud online en minutos; validacion puede tomar dias o semanas.",
    channel: "Registro Social de Hogares o municipalidad.",
    documents: [
      {
        title: "ClaveUnica",
        detail: "Permite ingresar y solicitar actualizaciones online.",
        required: true
      },
      {
        title: "Datos del hogar",
        detail: "Integrantes, domicilio, ingresos, salud, educacion y situacion laboral.",
        required: true
      },
      {
        title: "Respaldos de domicilio o cambios",
        detail: "Pueden pedir documentos que acrediten arriendo, propiedad o residencia.",
        required: false
      }
    ],
    beforeYouStart: [
      "Revisa quienes deben aparecer en tu hogar y quienes ya no viven ahi.",
      "Ten claros ingresos y cambios recientes de trabajo, estudio o salud.",
      "Prepara respaldos de domicilio o composicion familiar.",
      "Actualiza con anticipacion si postularas a un beneficio."
    ],
    keyQuestions: [
      "Mi hogar esta compuesto correctamente?",
      "Mis ingresos y domicilio estan actualizados?",
      "Necesito agregar o quitar integrantes?",
      "La actualizacion alcanzara a reflejarse antes de postular?"
    ],
    estimatedCosts: [
      {
        label: "Solicitud",
        amount: "$0",
        detail: "Actualizar o solicitar ingreso al RSH no tiene costo."
      },
      {
        label: "Validacion",
        amount: "Dias a semanas",
        detail: "La revision puede no ser inmediata. Hazlo con anticipacion."
      },
      {
        label: "Documentos",
        amount: "$0 a $5.000",
        detail: "Puede haber costo de impresion, certificados o traslado."
      }
    ],
    steps: [
      "Ingresa con ClaveUnica al canal oficial.",
      "Revisa composicion del hogar, domicilio e ingresos.",
      "Sube respaldos si el sistema los solicita.",
      "Haz seguimiento hasta que la actualizacion quede reflejada."
    ],
    commonMistakes: [
      "Postular a beneficios con datos antiguos.",
      "Olvidar integrantes que ya no viven en el hogar.",
      "No guardar comprobante de solicitud."
    ],
    redFlags: [
      "Tu beneficio vence pronto y la actualizacion aun no esta validada.",
      "Hay integrantes duplicados o domicilio incorrecto.",
      "No tienes documentos para acreditar cambios importantes.",
      "Tu clasificacion cambio y no entiendes por que."
    ],
    variations: [
      "Algunas actualizaciones requieren validacion municipal.",
      "Los tiempos dependen del tipo de cambio solicitado.",
      "Beneficios distintos usan cortes o fechas de evaluacion diferentes."
    ],
    whatToAsk: [
      "Cuanto demora este tipo de actualizacion?",
      "Que documentos sirven para acreditar domicilio?",
      "Desde cuando se considera la nueva informacion?",
      "Que hago si mi clasificacion no refleja mi situacion?"
    ],
    externalAction: {
      label: "Ir al Registro Social de Hogares",
      url: "https://registrosocial.gob.cl/"
    },
    sources: [
      { label: "Registro Social de Hogares", url: "https://registrosocial.gob.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "renovar-cedula-identidad",
    title: "Renovar cedula de identidad",
    category: "Documentos",
    summary:
      "Prepara la renovacion de tu cedula revisando agenda, costo, bloqueo por perdida y fecha de entrega.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$3.820 aprox.",
    duration: "Atencion con reserva; entrega normalmente en dias habiles.",
    channel: "Registro Civil.",
    documents: [
      { title: "Cedula anterior", detail: "Llevala si la tienes; si fue perdida o robo, revisa bloqueo.", required: false },
      { title: "Comprobante de hora", detail: "Guarda respaldo si reservaste atencion.", required: false },
      { title: "Medio de pago", detail: "Confirma medios aceptados por la oficina.", required: true }
    ],
    beforeYouStart: [
      "Revisa disponibilidad de hora antes de que venza.",
      "Si fue perdida o robo, bloquea el documento anterior.",
      "Confirma valor vigente y medios de pago.",
      "No esperes al ultimo dia si necesitas viajar, firmar o cobrar beneficios."
    ],
    keyQuestions: ["Esta vencida o perdida?", "Debo bloquear la anterior?", "La oficina exige hora?", "Cuanto tarda la entrega?"],
    estimatedCosts: [
      { label: "Cedula", amount: "$3.820 aprox.", detail: "Valor referencial para cedula chilena; confirma en Registro Civil." },
      { label: "Traslado", amount: "$0 a $5.000", detail: "Costo indirecto si debes ir presencial." },
      { label: "Urgencia", amount: "Variable", detail: "El mayor costo puede ser perder un plazo por no tener documento vigente." }
    ],
    steps: ["Reserva hora o confirma atencion.", "Lleva documento anterior si corresponde.", "Paga y realiza captura de datos.", "Guarda comprobante y fecha de retiro."],
    commonMistakes: ["Renovar demasiado tarde.", "No bloquear cedula extraviada.", "No guardar comprobante."],
    redFlags: ["Tienes viaje cercano.", "Perdiste la cedula.", "Tus datos cambiaron.", "No hay horas disponibles."],
    variations: ["Extranjeros tienen reglas y valores distintos.", "Menores pueden requerir adulto responsable.", "La entrega cambia por oficina."],
    whatToAsk: ["Cual es el valor vigente?", "Cuanto demora?", "Que hago si la perdi?", "Puedo retirar en otra oficina?"],
    externalAction: { label: "Ir al Registro Civil", url: "https://www.registrocivil.cl/" },
    sources: [{ label: "Registro Civil", url: "https://www.registrocivil.cl/" }, { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }]
  },
  {
    slug: "iniciar-actividades-sii",
    title: "Iniciar actividades en el SII",
    category: "Impuestos",
    summary:
      "Prepara giro, domicilio tributario y obligaciones antes de comenzar a emitir boletas o facturas.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$0 directo; costos operativos variables.",
    duration: "Puede ser inmediato online si todo esta correcto.",
    channel: "SII.",
    documents: [
      { title: "Clave SII o ClaveUnica", detail: "Necesaria para ingresar.", required: true },
      { title: "Giro definido", detail: "Debe representar la actividad real.", required: true },
      { title: "Domicilio tributario", detail: "Puede requerir respaldo.", required: true }
    ],
    beforeYouStart: ["Define persona natural o empresa.", "Elige giro con cuidado.", "Prepara domicilio tributario.", "Revisa permisos externos del rubro."],
    keyQuestions: ["Que giro corresponde?", "Debo emitir boleta o factura?", "Afecta IVA?", "Necesito patente o permiso?"],
    estimatedCosts: [
      { label: "Inicio SII", amount: "$0", detail: "El tramite online no tiene costo directo." },
      { label: "Operacion mensual", amount: "$20.000 a $150.000+", detail: "Contabilidad, facturacion o asesoria pueden costar." },
      { label: "Permisos", amount: "Variable", detail: "Patente municipal o permisos dependen del rubro." }
    ],
    steps: ["Ingresa al SII.", "Selecciona inicio de actividades.", "Declara giro y domicilio.", "Revisa obligaciones posteriores."],
    commonMistakes: ["Elegir giro incorrecto.", "Confundir inicio con permiso para operar.", "No revisar IVA."],
    redFlags: ["Rubro regulado.", "No tienes domicilio claro.", "Emitiras documentos sin entender impuestos.", "Venderas fuera de Chile."],
    variations: ["Persona natural y empresa cambian obligaciones.", "Algunos giros requieren verificacion.", "IVA depende de actividad."],
    whatToAsk: ["Que giro uso?", "Debo declarar IVA?", "Necesito contador?", "Que permiso externo aplica?"],
    externalAction: { label: "Ir al SII", url: "https://www.sii.cl/" },
    sources: [{ label: "SII", url: "https://www.sii.cl/" }]
  },
  {
    slug: "declaracion-renta",
    title: "Declaracion de renta",
    category: "Impuestos",
    summary:
      "Ordena ingresos, boletas, sueldos, creditos y propuesta SII antes de enviar tu declaracion anual.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$0 directo; asesoria $30.000 a $150.000+ aprox.",
    duration: "30 minutos a varias horas segun complejidad.",
    channel: "SII.",
    documents: [
      { title: "Clave SII", detail: "Necesaria para revisar propuesta.", required: true },
      { title: "Ingresos y retenciones", detail: "Boletas, sueldos, honorarios y otros ingresos.", required: true },
      { title: "Beneficios o creditos", detail: "Dividendos, educacion u otros antecedentes.", required: false }
    ],
    beforeYouStart: ["Revisa si estas obligado a declarar.", "Compara la propuesta con tus datos.", "No envies si hay montos desconocidos.", "Guarda folio y comprobante."],
    keyQuestions: ["Estoy obligado?", "La propuesta coincide?", "Tengo devolucion o pago?", "Falta algun ingreso?"],
    estimatedCosts: [
      { label: "Declaracion online", amount: "$0", detail: "Enviar por SII no tiene costo directo." },
      { label: "Asesoria simple", amount: "$30.000 a $80.000", detail: "Util para honorarios o dudas puntuales." },
      { label: "Caso complejo", amount: "$100.000+", detail: "Empresas, inversiones o rectificatorias pueden requerir apoyo." }
    ],
    steps: ["Ingresa al SII.", "Revisa propuesta.", "Corrige o agrega antecedentes.", "Envia y guarda folio."],
    commonMistakes: ["Enviar sin revisar.", "Olvidar ingresos.", "No guardar folio.", "Confundir devolucion estimada con pago confirmado."],
    redFlags: ["Ingresos de varias fuentes.", "Datos que no reconoces.", "Tuviste empresa o inversiones.", "Debes pagar y no sabes por que."],
    variations: ["Fechas cambian por calendario.", "Personas y empresas tienen reglas distintas.", "Rectificar puede tener efectos posteriores."],
    whatToAsk: ["Estoy obligado?", "Que ingreso falta?", "Por que debo pagar?", "Conviene rectificar?"],
    externalAction: { label: "Ir al SII", url: "https://www.sii.cl/" },
    sources: [{ label: "SII", url: "https://www.sii.cl/" }]
  },
  {
    slug: "postular-subsidio-arriendo",
    title: "Postular al subsidio de arriendo",
    category: "Vivienda",
    summary:
      "Ordena ahorro, Registro Social de Hogares, ingresos y requisitos antes de postular a apoyo para arriendo.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "Ahorro minimo 4 UF aprox.; beneficio variable.",
    duration: "Postulacion en minutos; resultados segun calendario MINVU.",
    channel: "MINVU o SERVIU.",
    documents: [
      { title: "ClaveUnica", detail: "Necesaria para postular online.", required: true },
      { title: "Registro Social de Hogares", detail: "Debe estar actualizado.", required: true },
      { title: "Ahorro minimo", detail: "Confirma monto y fecha limite.", required: true }
    ],
    beforeYouStart: ["Confirma si hay llamado abierto.", "Revisa tramo RSH.", "Verifica ahorro minimo.", "Ten claro ingreso y arriendo objetivo."],
    keyQuestions: ["Estoy dentro del tramo?", "Tengo ahorro a tiempo?", "Mi ingreso cumple?", "El arriendo cumple topes?"],
    estimatedCosts: [
      { label: "Ahorro minimo", amount: "4 UF aprox.", detail: "Referencia de llamados recientes; confirma bases vigentes." },
      { label: "Beneficio", amount: "Variable en UF", detail: "Depende del llamado, region y hogar." },
      { label: "Arriendo", amount: "Tope variable", detail: "El contrato debe cumplir condiciones." }
    ],
    steps: ["Revisa llamado vigente.", "Actualiza RSH y ahorro.", "Prepara datos del hogar.", "Postula y guarda comprobante."],
    commonMistakes: ["RSH desactualizado.", "Depositar ahorro fuera de plazo.", "No revisar topes.", "Confundir postular con ser seleccionado."],
    redFlags: ["No hay llamado abierto.", "No tienes ahorro minimo.", "Arriendo supera tope.", "Datos del hogar cambiaron."],
    variations: ["Montos cambian por region.", "Adultos mayores pueden tener condiciones especiales.", "Resultados siguen calendario oficial."],
    whatToAsk: ["Cual es la fecha limite?", "Que tramo RSH exige?", "Que ahorro aplica?", "Que tope corresponde?"],
    externalAction: { label: "Revisar MINVU", url: "https://www.minvu.gob.cl/" },
    sources: [{ label: "MINVU", url: "https://www.minvu.gob.cl/" }, { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }]
  },
  {
    slug: "solicitar-licencia-medica",
    title: "Tramitar licencia medica",
    category: "Salud",
    summary:
      "Ordena plazos, empleador, Fonasa/Isapre y seguimiento para evitar rechazo o atraso de pago.",
    updatedAt: "27 junio 2026",
    nextReviewAt: "27 julio 2026",
    cost: "$0 directo; ingreso puede verse afectado.",
    duration: "Dias a semanas segun empleador, COMPIN, Isapre o caja.",
    channel: "Empleador, COMPIN, Isapre o licencia electronica.",
    documents: [
      { title: "Licencia emitida", detail: "Digital o papel segun profesional y sistema.", required: true },
      { title: "Datos del empleador", detail: "Necesarios para tramitacion laboral.", required: true },
      { title: "Antecedentes medicos", detail: "Pueden solicitarse en revision o apelacion.", required: false }
    ],
    beforeYouStart: ["Revisa plazo para entregar.", "Verifica datos y empleador.", "Haz seguimiento del estado.", "Guarda comprobantes."],
    keyQuestions: ["Es electronica o papel?", "El empleador la recibio?", "Quien paga subsidio?", "Que hago si rechazan?"],
    estimatedCosts: [
      { label: "Tramitacion", amount: "$0", detail: "No deberia existir cobro por tramitar." },
      { label: "Retraso de pago", amount: "Variable", detail: "El impacto principal es financiero si se demora." },
      { label: "Apelacion", amount: "$0 a $20.000", detail: "Puede requerir certificados, copias o traslados." }
    ],
    steps: ["Confirma emision correcta.", "Verifica recepcion.", "Haz seguimiento.", "Apela o corrige si hay rechazo."],
    commonMistakes: ["No revisar estado.", "Asumir que electronica siempre llega.", "No guardar comprobantes.", "Responder tarde."],
    redFlags: ["Datos de empleador incorrectos.", "Licencia sin tramitar.", "Rechazo o reduccion.", "No sabes quien paga."],
    variations: ["Fonasa e Isapre tienen circuitos distintos.", "Independientes tienen requisitos diferentes.", "Licencias largas pueden pedir mas antecedentes."],
    whatToAsk: ["Quien debe tramitarla?", "Cual es el plazo?", "Donde veo estado?", "Como apelo rechazo?"],
    externalAction: { label: "Revisar Mi Licencia Medica", url: "https://milicenciamedica.cl/" },
    sources: [{ label: "Mi Licencia Medica", url: "https://milicenciamedica.cl/" }, { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }]
  }
];

export const guidesContent: GuideDetail[] = [
  ...expandedGuides,
  {
    slug: "como-preparar-inicio-actividades-sii",
    title: "Como preparar inicio de actividades en SII",
    category: "Impuestos",
    summary:
      "Define giro, domicilio y obligaciones antes de empezar a emitir documentos tributarios.",
    updatedAt: "27 junio 2026",
    readingTime: "5 min",
    relatedProcedureSlug: "iniciar-actividades-sii",
    sections: [
      { title: "Antes del formulario", body: "Define que vendes, a quien, con que frecuencia y si actuaras como persona natural o empresa. Esa decision afecta giro, impuestos y permisos." },
      { title: "Giro y domicilio", body: "El giro debe describir tu actividad real. El domicilio tributario debe poder respaldarse si el SII o una municipalidad lo solicita." },
      { title: "Despues del inicio", body: "Iniciar actividades no equivale a estar listo para operar. Revisa boletas, facturas, IVA, patente municipal y permisos del rubro." }
    ],
    checklist: ["Tipo de contribuyente definido.", "Giro elegido con cuidado.", "Domicilio respaldable.", "Obligaciones posteriores revisadas."],
    sources: [{ label: "SII", url: "https://www.sii.cl/" }]
  },
  {
    slug: "declaracion-renta-sin-sorpresas",
    title: "Declaracion de renta sin sorpresas",
    category: "Impuestos",
    summary:
      "Que revisar antes de aceptar la propuesta del SII y enviar tu declaracion.",
    updatedAt: "27 junio 2026",
    readingTime: "6 min",
    relatedProcedureSlug: "declaracion-renta",
    sections: [
      { title: "No aceptes a ciegas", body: "La propuesta puede ser util, pero debes contrastarla con ingresos, retenciones, boletas, sueldos, creditos y antecedentes que conozcas." },
      { title: "Cuando pedir ayuda", body: "Si tienes empresa, inversiones, arriendos, honorarios variables o datos que no reconoces, conviene revisar antes de enviar." },
      { title: "Guarda respaldo", body: "Despues de enviar, guarda folio, comprobante y copia de la declaracion. Te serviran si debes corregir o justificar informacion." }
    ],
    checklist: ["Propuesta revisada.", "Ingresos comparados.", "Retenciones revisadas.", "Folio guardado."],
    sources: [{ label: "SII", url: "https://www.sii.cl/" }]
  },
  {
    slug: "como-postular-subsidio-arriendo",
    title: "Como postular al subsidio de arriendo",
    category: "Vivienda",
    summary:
      "Ahorro, Registro Social de Hogares, ingresos y topes que debes revisar antes de postular.",
    updatedAt: "27 junio 2026",
    readingTime: "5 min",
    relatedProcedureSlug: "postular-subsidio-arriendo",
    sections: [
      { title: "Primero el llamado", body: "No todos los dias hay postulacion abierta. Revisa fechas, region, tramo RSH, ahorro minimo y condiciones del llamado vigente." },
      { title: "Ahorro y hogar", body: "El ahorro debe estar depositado dentro del plazo definido. El RSH debe reflejar tu hogar real antes de postular." },
      { title: "No es seleccion automatica", body: "Postular no significa quedar seleccionado. Guarda comprobante y revisa calendario de resultados." }
    ],
    checklist: ["Llamado vigente confirmado.", "RSH actualizado.", "Ahorro minimo listo.", "Topes regionales revisados."],
    sources: [{ label: "MINVU", url: "https://www.minvu.gob.cl/" }, { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }]
  },
  {
    slug: "que-hacer-si-rechazan-licencia-medica",
    title: "Que hacer si rechazan una licencia medica",
    category: "Salud",
    summary:
      "Ordena estado, plazos, antecedentes y pasos antes de apelar o corregir una licencia.",
    updatedAt: "27 junio 2026",
    readingTime: "5 min",
    relatedProcedureSlug: "solicitar-licencia-medica",
    sections: [
      { title: "Identifica el motivo", body: "No es lo mismo rechazo por plazo, datos, diagnostico, reposo injustificado o falta de antecedentes. El motivo define el siguiente paso." },
      { title: "Reune respaldo", body: "Guarda licencia, resolucion, certificados medicos, epicrisis, examenes y comprobantes de entrega o recepcion." },
      { title: "Actua dentro de plazo", body: "Las apelaciones y correcciones tienen plazos. Si esperas demasiado, puedes perder opciones de revision." }
    ],
    checklist: ["Motivo identificado.", "Resolucion guardada.", "Antecedentes reunidos.", "Plazo de apelacion revisado."],
    sources: [{ label: "Mi Licencia Medica", url: "https://milicenciamedica.cl/" }, { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }]
  },
  {
    slug: "cuando-renovar-cedula",
    title: "Cuando renovar tu cedula",
    category: "Documentos",
    summary:
      "Evita quedar bloqueado antes de viajar, firmar, cobrar beneficios o hacer tramites bancarios.",
    updatedAt: "27 junio 2026",
    readingTime: "4 min",
    relatedProcedureSlug: "renovar-cedula-identidad",
    sections: [
      { title: "No esperes al vencimiento", body: "Muchos procesos exigen cedula vigente. Renovar tarde puede bloquear viajes, bancos, notariales, postulaciones o retiro de documentos." },
      { title: "Si se perdio", body: "Bloquea el documento anterior y revisa si necesitas constancia o respaldo antes de solicitar uno nuevo." },
      { title: "Antes de asistir", body: "Confirma valor, agenda, medio de pago y fecha estimada de retiro en Registro Civil." }
    ],
    checklist: ["Fecha de vencimiento revisada.", "Hora o canal confirmado.", "Bloqueo hecho si se perdio.", "Comprobante guardado."],
    sources: [{ label: "Registro Civil", url: "https://www.registrocivil.cl/" }, { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }]
  },
  {
    slug: "como-proteger-tu-clave-unica",
    title: "Como proteger tu ClaveUnica?",
    category: "Documentos",
    summary:
      "Buenas practicas para usar ClaveUnica sin exponer certificados, beneficios ni datos sensibles.",
    updatedAt: "27 junio 2026",
    readingTime: "4 min",
    relatedProcedureSlug: "obtener-clave-unica",
    keyTakeaways: [
      "La ClaveUnica abre acceso a certificados, postulaciones y datos personales: no se comparte ni se dicta.",
      "Antes de un proceso importante, prueba ingreso, correo, telefono y recuperacion de clave.",
      "Si alguien debe ayudarte, que te guie mirando tu pantalla; no le entregues acceso."
    ],
    decisionCards: [
      { label: "Riesgo principal", value: "Suplantacion", detail: "Quien entra con tu clave puede descargar documentos o iniciar gestiones en tu nombre." },
      { label: "Tiempo a preparar", value: "5 a 15 min", detail: "Probar ingreso y actualizar datos es rapido si tienes acceso a correo o telefono." },
      { label: "Bloqueo comun", value: "Correo antiguo", detail: "Si el correo o telefono no estan vigentes, recuperar acceso puede tomar mas tiempo." }
    ],
    fiveMinutePlan: [
      "Entra al sitio oficial de ClaveUnica y prueba tu acceso.",
      "Verifica correo, telefono y metodo de recuperacion.",
      "Guarda la clave en un administrador o lugar seguro, no en chats.",
      "Cierra sesiones abiertas si usaste un computador compartido."
    ],
    commonMistakes: [
      "Mandar la clave por WhatsApp o correo.",
      "Dejar que otra persona haga el tramite desde tu cuenta.",
      "Esperar al ultimo dia de una postulacion para recuperar acceso.",
      "Confundir ayuda guiada con entregar control de la cuenta."
    ],
    whenToGetHelp: [
      "Perdiste acceso al correo o telefono asociado.",
      "Sospechas que alguien uso tu cuenta sin permiso.",
      "Necesitas recuperar acceso antes de una fecha limite."
    ],
    sections: [
      {
        title: "Por que importa",
        body:
          "La ClaveUnica permite entrar a servicios estatales, descargar documentos y postular beneficios. Tratarla como una clave cualquiera aumenta el riesgo de suplantacion o gestiones no autorizadas."
      },
      {
        title: "Regla practica",
        body:
          "Nunca entregues clave, codigos de verificacion ni acceso a correo. Si alguien necesita ayudarte, que te guie mirando la pantalla, no que opere tu cuenta."
      },
      {
        title: "Antes de un tramite importante",
        body:
          "Prueba ingreso, actualiza correo/telefono y guarda la clave de forma segura. No esperes al ultimo dia de una postulacion."
      }
    ],
    checklist: [
      "Correo y telefono actualizados.",
      "Clave guardada en un lugar seguro.",
      "Doble autenticacion revisada.",
      "Nadie mas conoce tu clave ni codigos."
    ],
    sources: [
      { label: "ClaveUnica", url: "https://claveunica.gob.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "que-revisar-antes-de-firmar-finiquito",
    title: "Que revisar antes de firmar finiquito?",
    category: "Trabajo",
    summary:
      "Checklist para no firmar a ciegas: causal, vacaciones, indemnizaciones, descuentos y pago.",
    updatedAt: "27 junio 2026",
    readingTime: "6 min",
    relatedProcedureSlug: "ratificar-finiquito",
    keyTakeaways: [
      "No revises solo el total: mira causal, fechas, vacaciones, indemnizaciones, descuentos y forma de pago.",
      "Firmar no siempre significa pago inmediato; confirma fecha, medio y copia valida.",
      "Si no estas de acuerdo, identifica la diferencia antes de firmar y evalua reserva de derechos o asesoria."
    ],
    decisionCards: [
      { label: "Monto a revisar", value: "Total y desglose", detail: "Sueldo pendiente, feriado, indemnizacion, bonos, descuentos y cotizaciones deben cuadrar." },
      { label: "Tiempo minimo", value: "20 a 40 min", detail: "Revisa con contrato, liquidaciones, vacaciones y asistencia a mano." },
      { label: "Bloqueo comun", value: "Descuento no entendido", detail: "Prestamos, anticipos, ausencias o cotizaciones pueden alterar el monto final." }
    ],
    fiveMinutePlan: [
      "Marca causal, fecha de termino y fecha de pago.",
      "Compara sueldo base, dias trabajados, vacaciones e indemnizaciones con tus registros.",
      "Revisa descuentos uno por uno y pide explicacion si alguno no cuadra.",
      "Antes de firmar, confirma copia, medio de pago y si necesitas dejar reserva."
    ],
    commonMistakes: [
      "Firmar por presion sin llevarse copia.",
      "Mirar solo el monto final y no el calculo.",
      "No verificar vacaciones pendientes o cotizaciones.",
      "Confundir ratificacion con dinero ya recibido."
    ],
    whenToGetHelp: [
      "Hay despido discutido, fuero, licencia, accidente o deuda previsional.",
      "El monto cambia mucho respecto de tus calculos.",
      "Te piden firmar sin explicar causal, descuentos o pago."
    ],
    sections: [
      {
        title: "No partas por la firma",
        body:
          "Parte por el desglose. Revisa causal, fecha de termino, sueldo base, dias trabajados, feriado, indemnizaciones, bonos y descuentos."
      },
      {
        title: "Pago y copia",
        body:
          "Firma solo cuando entiendas cuando se paga, por que medio y como recibiras copia valida. Ratificar no siempre significa que el dinero ya esta en tu cuenta."
      },
      {
        title: "Si algo no cuadra",
        body:
          "Anota la diferencia y pregunta antes de firmar. Si el desacuerdo es relevante, revisa opciones como reserva de derechos o asesoria."
      }
    ],
    checklist: [
      "Causal y fecha revisadas.",
      "Vacaciones e indemnizaciones calculadas.",
      "Descuentos entendidos.",
      "Fecha y medio de pago claros."
    ],
    sources: [
      { label: "Direccion del Trabajo", url: "https://www.dt.gob.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "como-preparar-registro-social-hogares",
    title: "Como preparar tu Registro Social de Hogares?",
    category: "Familia",
    summary:
      "Ordena integrantes, ingresos, domicilio y respaldos antes de postular a beneficios.",
    updatedAt: "27 junio 2026",
    readingTime: "5 min",
    relatedProcedureSlug: "registro-social-hogares",
    keyTakeaways: [
      "El RSH debe reflejar tu hogar real: integrantes, domicilio e ingresos inconsistentes pueden afectar beneficios.",
      "No actualices el ultimo dia de una postulacion; algunas solicitudes requieren validacion.",
      "Ten respaldos listos antes de cambiar datos: domicilio, ingresos, cuidado, estudios o salud."
    ],
    decisionCards: [
      { label: "Dato critico", value: "Composicion del hogar", detail: "Quienes viven contigo impactan la clasificacion y postulaciones." },
      { label: "Plazo realista", value: "Dias a semanas", detail: "Algunos cambios se procesan rapido, otros requieren revision municipal o respaldo." },
      { label: "Bloqueo comun", value: "Respaldo faltante", detail: "Domicilio, ingresos o integrantes sin prueba pueden atrasar la actualizacion." }
    ],
    fiveMinutePlan: [
      "Lista integrantes reales del hogar y revisa si todos corresponden.",
      "Ordena respaldos de domicilio, ingresos, estudios, salud o dependencia.",
      "Identifica que beneficio o postulacion usaras despues del RSH.",
      "Actualiza con margen y guarda comprobante de solicitud."
    ],
    commonMistakes: [
      "Actualizar sin documentos y quedar esperando validacion.",
      "Olvidar cambios recientes de empleo, pension, domicilio o integrantes.",
      "Postular a un beneficio antes de que el RSH refleje el cambio.",
      "No guardar comprobante de la solicitud."
    ],
    whenToGetHelp: [
      "Hay separacion, cuidado de menores, dependencia, discapacidad o cambio fuerte de ingresos.",
      "La informacion del hogar aparece incorrecta y no puedes corregirla.",
      "Tienes una postulacion con fecha limite cercana."
    ],
    sections: [
      {
        title: "Composicion del hogar",
        body:
          "Revisa quienes viven realmente en el hogar. Errores en integrantes pueden afectar postulaciones y clasificacion."
      },
      {
        title: "Ingresos y cambios",
        body:
          "Ten claros cambios recientes de empleo, pension, estudio, salud o dependencia. Si algo cambio, busca respaldo antes de actualizar."
      },
      {
        title: "Tiempo de actualizacion",
        body:
          "No actualices el RSH el ultimo dia de una postulacion. Algunas solicitudes requieren validacion y pueden no reflejarse de inmediato."
      }
    ],
    checklist: [
      "Integrantes revisados.",
      "Domicilio correcto.",
      "Ingresos y cambios recientes claros.",
      "Respaldos guardados antes de postular."
    ],
    sources: [
      { label: "Registro Social de Hogares", url: "https://registrosocial.gob.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "certificados-que-piden-para-trabajo-arriendo",
    title: "Certificados que suelen pedir para trabajo o arriendo",
    category: "Documentos",
    summary:
      "Evita atrasos preparando certificado de antecedentes, identidad, ingresos y documentos recientes.",
    updatedAt: "27 junio 2026",
    readingTime: "4 min",
    relatedProcedureSlug: "certificado-antecedentes",
    sections: [
      {
        title: "No todos los certificados sirven para lo mismo",
        body:
          "Antes de descargar, pregunta tipo exacto, antiguedad aceptada y si sirve digital. Muchos rechazos ocurren por enviar un documento correcto, pero para finalidad equivocada."
      },
      {
        title: "Fecha de emision",
        body:
          "Trabajo, arriendo o postulaciones pueden exigir documentos recientes. Si ya pasaron semanas, confirma antes de enviar."
      },
      {
        title: "Uso fuera de Chile",
        body:
          "Si el documento se usara en otro pais, revisa apostilla o validacion adicional antes de traducir, imprimir o pagar gestiones."
      }
    ],
    checklist: [
      "Tipo exacto confirmado.",
      "Antiguedad maxima revisada.",
      "Formato digital o impreso confirmado.",
      "Apostilla revisada si aplica."
    ],
    sources: [
      { label: "Registro Civil", url: "https://www.registrocivil.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "como-vender-un-auto-en-chile",
    title: "Como vender un auto en Chile?",
    category: "Autos",
    summary:
      "Una ruta simple para preparar la venta, reducir riesgos y evitar errores antes de transferir.",
    updatedAt: "27 junio 2026",
    readingTime: "5 min",
    relatedProcedureSlug: "vender-un-auto",
    sections: [
      {
        title: "Antes de publicar",
        body:
          "Prepara patente, kilometraje, permiso, revision tecnica, SOAP, estado mecanico, deuda de TAG y multas. Define un precio minimo antes de negociar y separa lo que sabes del auto de lo que no puedes asegurar."
      },
      {
        title: "Antes de recibir pago",
        body:
          "Identifica al comprador, acuerda metodo de pago verificable y define si la entrega ocurre antes o despues de la transferencia. Si el pago es por transferencia bancaria, confirma recepcion efectiva antes de entregar llaves."
      },
      {
        title: "Antes de transferir",
        body:
          "Revisa que contrato, patente, VIN, RUT, precio y datos de las partes coincidan. Si hay prenda, leasing, embargo o deuda relevante, no uses una guia general: revisa el caso con la fuente o un profesional."
      }
    ],
    checklist: [
      "Datos del propietario, patente y vehiculo revisados.",
      "Multas, TAG, permiso y restricciones consultadas.",
      "Forma de pago, entrega y responsable de costos acordados.",
      "Contrato o canal de transferencia definido antes de entregar el auto."
    ],
    sources: [
      { label: "Registro Civil", url: "https://www.registrocivil.cl/" },
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }
    ]
  },
  {
    slug: "que-necesito-para-comprar-una-casa",
    title: "Que necesito para comprar una casa?",
    category: "Vivienda",
    summary:
      "Checklist inicial para ordenar documentos, financiamiento y revisiones antes de comprometer una compra.",
    updatedAt: "27 junio 2026",
    readingTime: "6 min",
    sections: [
      {
        title: "Orden financiero",
        body:
          "No mires solo el precio de venta. Calcula pie, dividendo posible, gastos operacionales, tasacion, seguros, contribuciones, gastos notariales, inscripcion y margen para reparaciones iniciales."
      },
      {
        title: "Revision legal",
        body:
          "Antes de prometer compra, pide antecedentes de dominio, hipotecas, gravamenes, prohibiciones, deudas y condiciones de la propiedad. Si no entiendes un antecedente, no firmes bajo presion."
      },
      {
        title: "Decision informada",
        body:
          "La compra de vivienda mezcla banco, vendedor, corredor, notaria, conservador y eventualmente abogado. ChileHub ayuda a ordenar preguntas, pero la decision final debe validarse con banco, fuente oficial o profesional."
      }
    ],
    checklist: [
      "Capacidad de financiamiento y pie revisados.",
      "Gastos fuera del precio de venta estimados.",
      "Antecedentes de dominio y deudas solicitados.",
      "Condiciones de promesa, plazos y multas revisadas antes de firmar."
    ],
    sources: [
      { label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" },
      { label: "SII", url: "https://www.sii.cl/" }
    ]
  },
  {
    slug: "como-abrir-una-empresa",
    title: "Como abrir una empresa?",
    category: "Trabajo",
    summary:
      "Decisiones clave antes de constituir: tipo de empresa, socios, giro, domicilio e inicio tributario.",
    updatedAt: "27 junio 2026",
    readingTime: "5 min",
    relatedProcedureSlug: "abrir-empresa",
    sections: [
      {
        title: "Define la estructura",
        body:
          "No partas por el formulario. Define si trabajaras solo o con socios, quien administra, como se toman decisiones, que pasa si alguien se retira y que responsabilidad asume cada persona."
      },
      {
        title: "Constituye y valida",
        body:
          "Empresa en un Dia puede simplificar la constitucion, pero no resuelve automaticamente permisos, patente, facturacion ni obligaciones tributarias. Elige giro con cuidado porque afecta impuestos y autorizaciones."
      },
      {
        title: "Despues de constituir",
        body:
          "Despues de constituir, revisa inicio de actividades, documentos tributarios, patente municipal, cuenta bancaria, contabilidad y permisos sectoriales. La empresa existe juridicamente, pero aun puede no estar lista para operar."
      }
    ],
    checklist: [
      "Tipo de sociedad y responsabilidades definidos.",
      "Socios, administrador y facultades claras.",
      "Giro, domicilio tributario y permisos revisados.",
      "Inicio de actividades y obligaciones posteriores identificadas."
    ],
    sources: [
      {
        label: "Registro de Empresas y Sociedades",
        url: "https://www.registrodeempresasysociedades.cl/"
      },
      { label: "SII", url: "https://www.sii.cl/" }
    ]
  },
  {
    slug: "documentos-que-suelen-faltar",
    title: "Documentos que suelen faltar",
    category: "Documentos",
    summary:
      "Una lista practica para revisar antes de salir de casa o iniciar una solicitud online.",
    updatedAt: "27 junio 2026",
    readingTime: "4 min",
    sections: [
      {
        title: "Identidad y vigencia",
        body:
          "La cedula vencida, bloqueada o con datos inconsistentes puede bloquear procesos simples. Revisa vigencia, estado y que el nombre/RUT coincidan con los documentos que llevaras."
      },
      {
        title: "Comprobantes",
        body:
          "Guarda comprobantes de pago, reservas, solicitudes, correos y folios. Si algo falla, esos respaldos suelen ser mas utiles que explicar de memoria lo que hiciste."
      },
      {
        title: "Documentos por comuna o institucion",
        body:
          "Cuando un requisito depende de una comuna, oficina o institucion, confirmalo el mismo dia si el tramite es importante. Muchas frustraciones vienen de llegar con una version antigua del requisito."
      }
    ],
    checklist: [
      "Cedula vigente y datos consistentes.",
      "Comprobante de hora, solicitud, pago o folio guardado.",
      "Medio de pago aceptado por el canal confirmado.",
      "Fuente oficial o institucion revisada antes de asistir."
    ],
    sources: [{ label: "ChileAtiende", url: "https://www.chileatiende.gob.cl/" }]
  }
];

export const calculatorsContent: CalculatorCard[] = [
  {
    title: "Calculadora de permiso de circulacion",
    value: "Estimacion referencial",
    caption: "Ordena valor base, multas y pagos asociados.",
    icon: FileText
  },
  {
    title: "Calculadora de IVA",
    value: "19%",
    caption: "Separa neto, IVA y total.",
    icon: FileBadge
  },
  {
    title: "Calculadora de finiquito",
    value: "Preparacion",
    caption: "Checklist de variables a revisar.",
    icon: BriefcaseBusiness
  }
];

export const officeChannels = [
  {
    title: "Registro Civil",
    type: "Institucion",
    description:
      "Canal frecuente para documentos de identidad, pasaporte, certificados y transferencia vehicular.",
    action: "Revisar sitio oficial",
    url: "https://www.registrocivil.cl/"
  },
  {
    title: "ChileAtiende",
    type: "Orientacion oficial",
    description:
      "Punto de partida para confirmar requisitos, canales y orientacion oficial de multiples procesos.",
    action: "Ir a ChileAtiende",
    url: "https://www.chileatiende.gob.cl/"
  },
  {
    title: "Municipalidades",
    type: "Canal comunal",
    description:
      "Canal relevante para licencia de conducir, permiso de circulacion y procesos que cambian por comuna.",
    action: "Buscar municipalidad",
    url: "https://www.gob.cl/municipalidades/"
  },
  {
    title: "SII",
    type: "Tributario",
    description:
      "Canal para inicio de actividades, obligaciones tributarias, IVA y otros procesos asociados.",
    action: "Ir al SII",
    url: "https://www.sii.cl/"
  }
];

export const procedureCards: ProcedureCard[] = procedures.slice(0, 4).map((item, index) => ({
  title: item.title,
  description: item.summary,
  meta: "Ver guia",
  status: index === 1 ? "fast" : index === 2 ? "new" : "popular",
  icon:
    item.slug === "renovar-licencia-conducir"
      ? IdCard
      : item.slug === "vender-un-auto"
        ? Car
        : item.slug === "sacar-pasaporte"
          ? Plane
          : FileText,
  href: `/tramites/${item.slug}`
}));

export const guideCards: GuideCard[] = guidesContent.map((item, index) => ({
  title: item.title,
  label: item.summary,
  time: index === 2 ? "Nuevo" : "Popular",
  icon:
    item.category === "Autos"
      ? Car
      : item.category === "Vivienda"
        ? Home
        : item.category === "Trabajo"
          ? BriefcaseBusiness
          : FileText,
  href: `/guias/${item.slug}`
}));

export function getProcedure(slug: string) {
  return procedures.find((item) => item.slug === slug);
}

export function getGuide(slug: string) {
  return guidesContent.find((item) => item.slug === slug);
}
