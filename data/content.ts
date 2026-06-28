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

export const disclosureText =
  "Informacion referencial recopilada con IA para prepararte mejor. Los tramites no se realizan en ChileHub, no generamos cobros y la plataforma es gratuita.";

export const procedures: ProcedureDetail[] = [
  {
    slug: "renovar-licencia-conducir",
    title: "Renovar licencia de conducir",
    category: "Autos",
    summary:
      "Prepara los documentos, pagos y examenes que normalmente solicita la municipalidad antes de renovar tu licencia.",
    updatedAt: "27 junio 2026",
    cost: "Depende de cada municipalidad.",
    duration: "Puede requerir agenda previa y atencion presencial.",
    channel: "Municipalidad correspondiente a tu domicilio.",
    preparationScore: 72,
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
    variations: [
      "Los requisitos pueden cambiar por comuna.",
      "Licencias profesionales pueden exigir antecedentes adicionales.",
      "Personas mayores pueden tener controles o plazos distintos."
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
    cost: "Puede incluir notaria, inscripcion y pagos pendientes.",
    duration: "Variable segun acuerdo entre comprador, vendedor y canal usado.",
    channel: "Registro Civil, notaria o plataformas autorizadas segun el caso.",
    preparationScore: 80,
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
    variations: [
      "La transferencia puede hacerse por diferentes canales.",
      "Vehiculos con prenda o leasing requieren validaciones extra.",
      "Empresas pueden necesitar documentos tributarios adicionales."
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
    cost: "Revisar valor vigente en Registro Civil.",
    duration: "Depende de disponibilidad de horas y entrega del documento.",
    channel: "Servicio de Registro Civil e Identificacion.",
    preparationScore: 68,
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
    variations: [
      "Menores de edad pueden requerir autorizaciones.",
      "Casos urgentes deben validarse directamente con la institucion.",
      "Disponibilidad cambia segun oficina."
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
    cost: "Depende del vehiculo, tasacion y municipalidad.",
    duration: "Puede completarse online si cumples los requisitos.",
    channel: "Municipalidad donde pagas el permiso.",
    preparationScore: 76,
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
    variations: [
      "Autos nuevos tienen documentos distintos.",
      "Vehiculos de trabajo pueden requerir antecedentes adicionales.",
      "Las plataformas online dependen de cada municipalidad."
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
    cost: "Puede variar segun tipo de sociedad y servicios asociados.",
    duration: "Depende del canal, firma y validaciones posteriores.",
    channel: "Empresa en un Dia, SII y otros servicios segun giro.",
    preparationScore: 64,
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
    variations: [
      "Algunos rubros requieren permisos sectoriales.",
      "Sociedades con varios socios pueden requerir acuerdos mas precisos.",
      "Actividades reguladas necesitan revision profesional."
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
  }
];

export const guidesContent: GuideDetail[] = [
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
          "Revisa documentos del vehiculo, multas, estado mecanico y precio de mercado. Mientras mas claro este el estado del auto, menos friccion tendra la venta."
      },
      {
        title: "Antes de recibir pago",
        body:
          "Define forma de pago, identidad del comprador y condiciones de entrega. Evita entregar el vehiculo sin respaldo del acuerdo y sin claridad sobre la transferencia."
      },
      {
        title: "Antes de transferir",
        body:
          "Confirma que los datos del contrato coincidan con el vehiculo y las partes. Luego continua en el canal oficial o externo que corresponda."
      }
    ],
    checklist: [
      "Certificado o datos del vehiculo revisados.",
      "Multas y deudas consultadas.",
      "Forma de pago acordada.",
      "Contrato o canal de transferencia definido."
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
          "Antes de firmar, estima pie, credito, gastos operacionales, contribuciones y costos notariales o de inscripcion."
      },
      {
        title: "Revision legal",
        body:
          "Solicita antecedentes de la propiedad y revisa si existen hipotecas, prohibiciones, deudas o condiciones que afecten la compra."
      },
      {
        title: "Decision informada",
        body:
          "ChileHub no reemplaza asesoria legal o bancaria. La meta es que llegues con preguntas correctas y documentos claros."
      }
    ],
    checklist: [
      "Preaprobacion o capacidad de financiamiento revisada.",
      "Gastos adicionales estimados.",
      "Antecedentes de propiedad solicitados.",
      "Dudas legales anotadas para revisar con profesional."
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
          "No partas por el formulario. Primero define socios, administracion, responsabilidades y giro."
      },
      {
        title: "Constituye y valida",
        body:
          "El canal mas simple puede ser Empresa en un Dia, pero no todos los casos son iguales. Revisa si tu actividad requiere permisos adicionales."
      },
      {
        title: "Despues de constituir",
        body:
          "Crear la empresa no termina el proceso. Debes revisar inicio de actividades, obligaciones tributarias y documentos comerciales."
      }
    ],
    checklist: [
      "Tipo de sociedad definido.",
      "Socios y representante claros.",
      "Giro y domicilio tributario preparados.",
      "Obligaciones posteriores identificadas."
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
          "La cedula vencida o inconsistente puede bloquear procesos simples. Revisa vigencia antes de asistir."
      },
      {
        title: "Comprobantes",
        body:
          "Guarda comprobantes de pago, reservas, solicitudes y correos. En muchos procesos son el respaldo mas importante."
      },
      {
        title: "Documentos por comuna o institucion",
        body:
          "Cuando un requisito depende de una comuna o entidad, confirmalo en la fuente correspondiente antes de avanzar."
      }
    ],
    checklist: [
      "Cedula vigente.",
      "Comprobante de hora o solicitud.",
      "Medio de pago confirmado.",
      "Fuente oficial revisada el mismo dia si el tramite es sensible."
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
