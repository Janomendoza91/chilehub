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

type DarkTopic = {
  slug: string;
  label: string;
  object: string;
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
  topics: DarkTopic[];
};

type DarkMoment = {
  slug: string;
  label: string;
  action: string;
};

const moments: DarkMoment[] = [
  moment("antes-empezar", "antes de empezar con", "preparar"),
  moment("al-configurar", "al configurar", "ordenar"),
  moment("si-hay-alerta", "si aparece una alerta sobre", "revisar"),
  moment("antes-compartir", "antes de compartir", "limitar"),
  moment("al-reportar", "al reportar problemas con", "respaldar")
];

const domains: DarkDomain[] = [
  domain("seguridad-cuentas", "Seguridad digital", "Seguridad de cuentas", "cuentas de correo, redes, bancos y servicios criticos", "priorizar correo, telefono, doble factor, sesiones y recuperacion oficial", "cambiar solo una clave y dejar sesiones, apps conectadas o metodos de recuperacion expuestos", "CSIRT Chile", "https://www.csirt.gob.cl/", [
    topic("correo-principal", "el correo principal", "correo de recuperacion, alias, filtros y alertas"),
    topic("doble-factor", "el doble factor", "app autenticadora, SMS, llaves y codigos de respaldo"),
    topic("sesiones-abiertas", "las sesiones abiertas", "dispositivos conectados, ubicaciones y navegadores"),
    topic("claves-reutilizadas", "las claves reutilizadas", "contrasenas repetidas y servicios relacionados"),
    topic("recuperacion", "la recuperacion de acceso", "correo, telefono, preguntas y codigos"),
    topic("apps-conectadas", "las apps conectadas", "permisos OAuth, accesos de terceros y tokens"),
    topic("cuenta-hackeada", "una cuenta hackeada", "senal de compromiso, avisos y pasos de contencion"),
    topic("telefono-sim", "el telefono y la SIM", "bloqueo, portabilidad, codigos y sesiones"),
    topic("administrador-claves", "un administrador de claves", "boveda, clave maestra y recuperacion"),
    topic("contactos-confianza", "contactos de confianza", "avisos, canales alternativos y verificacion")
  ]),
  domain("privacidad-redes", "Privacidad digital", "Privacidad en redes", "perfiles publicos, fotos, etiquetas, contactos y mensajes", "reducir exposicion de identidad, ubicacion, rutina y circulos cercanos", "publicar o responder rapido sin revisar metadatos, etiquetas, permisos o audiencia", "CSIRT Chile", "https://www.csirt.gob.cl/", [
    topic("perfil-publico", "el perfil publico", "bio, nombre visible, foto y enlaces"),
    topic("audiencias", "las audiencias de publicaciones", "amigos, seguidores, listas y privacidad"),
    topic("etiquetas", "las etiquetas y menciones", "tags, aprobaciones y contenido de terceros"),
    topic("ubicacion", "la ubicacion visible", "lugares, rutinas, mapas y metadatos"),
    topic("fotos", "las fotos personales", "rostros, fondos, documentos y metadatos"),
    topic("mensajes", "los mensajes privados", "chats, capturas, archivos y solicitudes"),
    topic("contactos", "la lista de contactos", "amigos, seguidores, bloqueos y desconocidos"),
    topic("historias", "historias y contenido temporal", "vistas, respuestas y permanencia real"),
    topic("busquedas", "lo que aparece en busquedas", "menciones, indexacion y perfiles antiguos"),
    topic("perfil-falso", "un perfil falso", "suplantacion, evidencias y reporte")
  ]),
  domain("estafas-digitales", "Denuncias digitales", "Estafas digitales", "mensajes, perfiles, tiendas, pagos, links y supuestas oportunidades", "guardar evidencia y confirmar canal oficial antes de pagar, descargar o enviar datos", "actuar por urgencia, verguenza o presion y perder comprobantes utiles", "PDI", "https://www.pdichile.cl/", [
    topic("link-sospechoso", "un link sospechoso", "URL, remitente, dominio y redireccion"),
    topic("tienda-falsa", "una tienda falsa", "sitio, redes, reputacion y medios de pago"),
    topic("perfil-vendedor", "un perfil vendedor", "historial, identidad, comentarios y bloqueos"),
    topic("comprobante-editable", "un comprobante editable", "capturas, saldo real y trazabilidad"),
    topic("soporte-falso", "soporte falso", "llamadas, chats, correos y solicitudes de codigos"),
    topic("premio-oferta", "premios u ofertas", "condiciones, pagos previos y urgencia"),
    topic("empleo-falso", "una oferta laboral falsa", "empresa, contrato, datos pedidos y pagos"),
    topic("phishing-banco", "phishing bancario", "dominio, app oficial, clave y segunda capa"),
    topic("suplantacion-contacto", "suplantacion de contactos", "mensaje, voz, urgencia y verificacion"),
    topic("evidencia-estafa", "evidencia de estafa", "capturas, URLs, folios, fechas y pagos")
  ]),
  domain("reputacion-online", "Reputacion online", "Reputacion online", "busquedas, menciones, publicaciones, perfiles falsos y contenido antiguo", "separar evidencia, reporte a plataformas y decisiones de exposicion publica", "borrar todo sin respaldo o responder impulsivamente aumentando la difusion", "Ministerio Publico", "https://www.fiscaliadechile.cl/", [
    topic("nombre-buscadores", "tu nombre en buscadores", "resultados, perfiles, imagenes y enlaces"),
    topic("mencion-publica", "una mencion publica", "contexto, autor, fecha y alcance"),
    topic("contenido-antiguo", "contenido antiguo", "posts, fotos, comentarios y republicaciones"),
    topic("perfil-imitador", "un perfil imitador", "identidad, evidencia y reporte de suplantacion"),
    topic("comentarios-agresivos", "comentarios agresivos", "patron, capturas y bloqueo"),
    topic("exposicion-laboral", "exposicion laboral", "empleador, clientes, reputacion y privacidad"),
    topic("filtracion-datos", "datos personales publicados", "RUT, direccion, telefono y enlaces"),
    topic("derecho-baja", "solicitudes de baja", "plataforma, formulario y prueba de titularidad"),
    topic("respuesta-publica", "una respuesta publica", "tono, alcance y riesgo de amplificacion"),
    topic("registro-incidente", "el registro del incidente", "linea de tiempo, evidencias y canales")
  ]),
  domain("contenido-intimo", "Denuncias digitales", "Contenido intimo no consentido", "imagenes, videos, amenazas, filtraciones y reportes de plataforma", "preservar evidencia, pedir baja por canales oficiales y buscar ayuda si hay amenaza", "pagar, negociar o borrar pruebas antes de reportar una difusion no consentida", "PDI", "https://www.pdichile.cl/", [
    topic("amenaza-difusion", "amenaza de difusion", "mensajes, perfiles, fechas y exigencias"),
    topic("imagen-filtrada", "imagen filtrada", "URL, capturas, plataforma y alcance"),
    topic("video-filtrado", "video filtrado", "enlaces, cuentas, republicaciones y evidencia"),
    topic("chantaje", "chantaje o extorsion", "exigencias, pagos pedidos y canales"),
    topic("reporte-plataforma", "reporte en plataforma", "formulario, categoria y pruebas"),
    topic("bloqueo-contacto", "bloqueo de contacto", "perfil, mensajes, llamadas y resguardos"),
    topic("apoyo-confianza", "apoyo de confianza", "persona segura, relato y resguardo emocional"),
    topic("respaldo-evidencia", "respaldo de evidencia", "capturas, URLs, fechas y copias"),
    topic("cuentas-asociadas", "cuentas asociadas", "correos, telefonos, nicks y perfiles"),
    topic("baja-contenido", "solicitud de baja", "plataforma, enlaces y seguimiento")
  ]),
  domain("dinero-online", "Dinero online", "Dinero online", "pagos, transferencias, billeteras, suscripciones, contracargos y comprobantes", "confirmar dinero recibido, titularidad, comisiones, impuestos y respaldo", "tratar capturas o promesas como pago confirmado", "SERNAC", "https://www.sernac.cl/", [
    topic("transferencia", "una transferencia", "titular, banco, monto, saldo y comprobante"),
    topic("billetera", "una billetera digital", "cuenta, saldo, retiro y comisiones"),
    topic("contracargo", "un posible contracargo", "pago reversible, disputa y evidencia"),
    topic("suscripcion", "una suscripcion", "plan, cobro recurrente, cancelacion y comprobante"),
    topic("compra-online", "una compra online", "boleta, despacho, garantia y reclamo"),
    topic("venta-online", "una venta online", "producto, entrega, pago confirmado y respaldo"),
    topic("servicio-digital", "un servicio digital", "entregable, condiciones, pago y soporte"),
    topic("cobro-no-reconocido", "un cobro no reconocido", "tarjeta, comercio, fecha y respuesta"),
    topic("comision", "comisiones y conversiones", "moneda, tarifa, impuesto y retiro"),
    topic("boletas-respaldo", "boletas y respaldos", "documentos, correos, folios y contratos")
  ]),
  domain("inversion-riesgosa", "Dinero online", "Inversiones riesgosas", "cripto, forex, apps, referidos, grupos privados y promesas de rentabilidad", "confirmar entidad, riesgo, retiro, comisiones y autorizacion antes de transferir", "entrar por promesa de retorno alto, presion de grupo o supuesto cupo limitado", "CMF", "https://www.cmfchile.cl/", [
    topic("app-inversion", "una app de inversion", "entidad, autorizacion, retiro y soporte"),
    topic("cripto", "criptoactivos", "wallet, exchange, custodia y volatilidad"),
    topic("forex", "forex o trading", "broker, apalancamiento, spreads y riesgo"),
    topic("grupo-privado", "un grupo privado", "admins, promesas, presion y evidencia"),
    topic("referidos", "un esquema de referidos", "incentivos, promesas y sostenibilidad"),
    topic("retiro", "retiros de dinero", "plazos, comisiones, bloqueo y soporte"),
    topic("rentabilidad-prometida", "rentabilidad prometida", "garantias, contratos y advertencias"),
    topic("contrato", "contratos o terminos", "condiciones, jurisdiccion y reclamos"),
    topic("asesor-online", "un asesor online", "identidad, registro, cobros y canal"),
    topic("evidencia-inversion", "evidencia de inversion", "transferencias, capturas, correos y folios")
  ]),
  domain("impuestos-digitales", "Dinero online", "Impuestos digitales", "ingresos por plataformas, ventas, contenido, servicios online y pagos externos", "ordenar ingresos brutos, comisiones, respaldos, moneda y preguntas para SII o contador", "asumir que ingresos digitales no necesitan respaldo ni revision tributaria", "SII", "https://www.sii.cl/", [
    topic("ingresos-plataforma", "ingresos de plataformas", "pagos brutos, comisiones, retiros y reportes"),
    topic("ventas-online", "ventas online", "boletas, facturas, despacho y conciliacion"),
    topic("servicios-exterior", "servicios al exterior", "moneda, contrato, pago y respaldo"),
    topic("contenido-pagado", "contenido pagado", "suscripciones, propinas, comisiones y recibos"),
    topic("marketplaces", "marketplaces", "ventas, comisiones, pagos y documentos"),
    topic("cripto-impuestos", "cripto e impuestos", "compras, ventas, retiros y respaldos"),
    topic("contador", "preguntas para contador", "actividad, regimen, documentos y fechas"),
    topic("declaracion", "declaraciones", "ingresos, gastos, folios y plazos"),
    topic("gastos-respaldo", "gastos con respaldo", "boletas, facturas, contratos y uso"),
    topic("cartola", "cartolas y conciliacion", "bancos, plataformas, fechas y montos")
  ]),
  domain("plataformas-adultas", "Plataformas adultas", "Plataformas adultas legales", "cuentas, identidad, pagos, privacidad, reglas de contenido y soporte", "separar identidad personal, pagos, dispositivos, reglas y respaldos antes de publicar", "exponer nombre legal, ubicacion, rostro, contactos o datos bancarios sin entender permanencia", "OnlyFans Help", "https://onlyfans.com/help", [
    topic("identidad-publica", "identidad publica", "nombre, avatar, rostro, biografia y enlaces"),
    topic("verificacion", "verificacion de cuenta", "documento, rostro, requisitos y privacidad"),
    topic("pagos", "pagos y retiros", "metodo, comisiones, moneda y comprobantes"),
    topic("contenido", "contenido publicado", "reglas, permanencia, permisos y limites"),
    topic("mensajes-clientes", "mensajes con clientes", "limites, evidencia, bloqueo y soporte"),
    topic("filtraciones", "filtraciones de contenido", "URLs, reportes, pruebas y seguimiento"),
    topic("separar-cuentas", "separar cuentas", "correo, telefono, dispositivo y perfiles"),
    topic("impuestos", "impuestos y respaldos", "ingresos, comisiones, retiros y documentos"),
    topic("soporte", "soporte de plataforma", "tickets, folios, correos y respuestas"),
    topic("seguridad-personal", "seguridad personal", "ubicacion, contactos, horarios y datos")
  ]),
  domain("apps-citas", "Plataformas", "Apps de citas", "matches, perfiles, chats, ubicacion, fotos, pagos y encuentros", "limitar informacion personal y guardar evidencia si hay acoso, estafa o amenaza", "mover la conversacion a canales privados sin validar identidad o senales de riesgo", "Tinder Help", "https://policies.tinder.com/", [
    topic("perfil", "el perfil", "nombre visible, fotos, bio, edad y enlaces"),
    topic("fotos", "las fotos", "rostro, fondo, uniforme, direccion y metadatos"),
    topic("ubicacion", "la ubicacion", "distancia, comuna, rutina y lugares frecuentes"),
    topic("matches", "los matches", "senales, identidad, consistencia y reporte"),
    topic("chats", "los chats", "mensajes, capturas, enlaces y presion"),
    topic("pagos-premium", "pagos premium", "plan, renovacion, cancelacion y comprobante"),
    topic("verificacion", "verificacion de perfil", "distintivos, fotos, documento y privacidad"),
    topic("cita-presencial", "una cita presencial", "lugar, traslado, aviso y contacto de confianza"),
    topic("acoso", "acoso o insistencia", "bloqueo, reporte, evidencia y seguridad"),
    topic("estafa-romantica", "una posible estafa romantica", "dinero pedido, urgencia, identidad y pruebas")
  ]),
  domain("marketplaces", "Denuncias digitales", "Marketplaces", "publicaciones, envios, pagos, perfiles, comprobantes y reclamos", "confirmar identidad, metodo de pago y evidencia antes de entregar producto o dinero", "aceptar comprobantes editables, enlaces externos o presion por entrega inmediata", "SERNAC", "https://www.sernac.cl/", [
    topic("publicacion", "una publicacion", "precio, fotos, descripcion, garantia y estado"),
    topic("vendedor", "un vendedor", "perfil, reputacion, antiguedad y contacto"),
    topic("comprador", "un comprador", "identidad, presion, retiro y medio de pago"),
    topic("pago", "el pago", "transferencia, saldo real, titular y comprobante"),
    topic("envio", "el envio", "empresa, tracking, seguro y entrega"),
    topic("entrega-presencial", "entrega presencial", "lugar, horario, acompanante y prueba"),
    topic("producto-caro", "un producto caro", "serie, boleta, estado y respaldo"),
    topic("reclamo", "un reclamo", "conversacion, fotos, folios y respuesta"),
    topic("perfil-falso", "un perfil falso", "suplantacion, pruebas y bloqueo"),
    topic("link-externo", "links externos", "dominio, pago fuera de plataforma y riesgo")
  ]),
  domain("suscripciones", "Dinero online", "Suscripciones digitales", "apps, streaming, plataformas, pruebas gratis, renovaciones y tarjetas", "identificar quien cobra, como cancelar y que comprobante guardar", "bloquear solo la tarjeta y dejar activa cuenta, deuda o renovacion", "SERNAC", "https://www.sernac.cl/", [
    topic("prueba-gratis", "una prueba gratis", "fecha de termino, tarjeta, plan y recordatorio"),
    topic("renovacion", "una renovacion", "periodo, monto, correo y contrato"),
    topic("cancelacion", "cancelacion de servicio", "boton, confirmacion, folio y correo"),
    topic("cobro-duplicado", "un cobro duplicado", "fecha, comercio, tarjeta y comprobante"),
    topic("cuenta-compartida", "cuentas compartidas", "usuarios, permisos, pagos y cierre"),
    topic("app-store", "cobros por tienda de apps", "Apple, Google, recibos y suscripciones"),
    topic("streaming", "streaming", "plan, perfiles, renovacion y baja"),
    topic("software", "software y SaaS", "licencia, usuarios, renovacion y soporte"),
    topic("tarjeta", "tarjeta asociada", "metodo de pago, autorizaciones y reemplazo"),
    topic("reembolso", "un reembolso", "condiciones, folio, respuesta y plazo")
  ]),
  domain("familia-menores", "Seguridad digital", "Menores online", "juegos, redes, mensajeria, grooming, privacidad y controles parentales", "ordenar evidencia, conversaciones seguras y canales de ayuda ante riesgo", "culpar al menor, borrar chats o enfrentar al agresor antes de preservar pruebas", "PDI", "https://www.pdichile.cl/", [
    topic("juegos-online", "juegos online", "chat, compras, amigos y controles"),
    topic("redes-sociales", "redes sociales", "privacidad, seguidores, mensajes y edad"),
    topic("grooming", "senal de grooming", "conversaciones, regalos, presion y evidencia"),
    topic("controles-parentales", "controles parentales", "dispositivo, horarios, compras y apps"),
    topic("compras-juego", "compras dentro de juegos", "tarjeta, recibos, limites y reembolsos"),
    topic("mensajeria", "mensajeria", "grupos, desconocidos, archivos y bloqueo"),
    topic("fotos-menor", "fotos de menores", "audiencia, permisos, ubicacion y permanencia"),
    topic("ciberacoso", "ciberacoso", "capturas, cuentas, colegio y apoyo"),
    topic("cuenta-compartida", "cuentas compartidas", "clave, recuperacion, edad y privacidad"),
    topic("ayuda-adulta", "ayuda adulta", "relato seguro, canal y acompanamiento")
  ]),
  domain("trabajo-digital", "Privacidad digital", "Trabajo digital", "equipos, correos, accesos, documentos, clientes y cuentas compartidas", "cerrar sesiones, separar perfiles y guardar respaldo laboral sin exponer datos personales", "mezclar equipos personales, claves, clientes o archivos privados sin control", "CSIRT Chile", "https://www.csirt.gob.cl/", [
    topic("correo-laboral", "correo laboral", "cuenta, recuperacion, filtros y acceso"),
    topic("equipo-empresa", "equipo de empresa", "sesiones, archivos, permisos y entrega"),
    topic("documentos", "documentos compartidos", "carpetas, enlaces, permisos y versiones"),
    topic("clientes", "datos de clientes", "contactos, contratos, privacidad y respaldo"),
    topic("freelance", "trabajo freelance", "entregables, pagos, contrato y comunicaciones"),
    topic("renuncia", "salida de trabajo", "cuentas, respaldos, accesos y confidencialidad"),
    topic("cuentas-compartidas", "cuentas compartidas", "usuarios, claves, roles y auditoria"),
    topic("dispositivo-personal", "dispositivo personal", "perfiles, archivos, backups y bloqueo"),
    topic("reunion-online", "reuniones online", "grabaciones, participantes y enlaces"),
    topic("oferta-laboral", "ofertas laborales online", "empresa, contrato, datos y pagos pedidos")
  ]),
  domain("dispositivos", "Seguridad digital", "Dispositivos", "telefonos, computadores, copias, apps, permisos, sesiones y ventas de equipos", "revisar bloqueo, cifrado, sesiones, copias y borrado antes de entregar o reparar", "entregar equipos con sesiones, fotos, tokens, tarjetas o backups activos", "CSIRT Chile", "https://www.csirt.gob.cl/", [
    topic("telefono", "un telefono", "bloqueo, SIM, cuentas, fotos y apps"),
    topic("computador", "un computador", "usuarios, disco, sesiones y documentos"),
    topic("reparacion", "reparacion de equipo", "respaldo, bloqueo, fotos y sesiones"),
    topic("venta-equipo", "venta de equipo", "borrado, desvinculacion, cuentas y backups"),
    topic("apps-permisos", "permisos de apps", "camara, ubicacion, contactos y archivos"),
    topic("backup", "copias de seguridad", "nube, disco externo, cifrado y restauracion"),
    topic("bluetooth-wifi", "Bluetooth y Wi-Fi", "dispositivos, redes guardadas y acceso"),
    topic("antivirus", "proteccion del equipo", "actualizaciones, alertas y extensiones"),
    topic("navegador", "el navegador", "sesiones, claves, historial y extensiones"),
    topic("robo-perdida", "robo o perdida", "bloqueo, rastreo, cuentas y denuncia")
  ]),
  domain("nube-backups", "Privacidad digital", "Nube y respaldos", "Google Drive, iCloud, OneDrive, fotos, documentos y carpetas compartidas", "revisar permisos, enlaces publicos, copias y recuperacion antes de compartir", "dejar carpetas publicas, enlaces antiguos o backups con informacion sensible", "Google Account Help", "https://support.google.com/accounts/", [
    topic("drive", "Google Drive", "carpetas, enlaces, permisos y propietarios"),
    topic("icloud", "iCloud", "fotos, dispositivos, familia y recuperacion"),
    topic("onedrive", "OneDrive", "documentos, sincronizacion, enlaces y permisos"),
    topic("fotos", "fotos en la nube", "rostros, ubicacion, albumes y compartidos"),
    topic("carpeta-publica", "carpetas publicas", "enlaces, indexacion, permisos y archivos"),
    topic("backup-telefono", "backup del telefono", "apps, fotos, chats y restauracion"),
    topic("backup-computador", "backup del computador", "documentos, claves, disco y cifrado"),
    topic("recuperacion", "recuperacion de cuenta", "correo, telefono, codigos y dispositivos"),
    topic("archivo-sensible", "archivos sensibles", "documentos, contratos, salud y claves"),
    topic("colaboradores", "colaboradores", "edicion, descarga, reenvio y expiracion")
  ]),
  domain("mensajeria", "Seguridad digital", "Mensajeria", "WhatsApp, Telegram, SMS, codigos, grupos, archivos y suplantacion", "activar verificacion, revisar sesiones y avisar contactos ante toma de cuenta", "compartir codigos, instalar apps externas o seguir instrucciones de desconocidos", "WhatsApp Help", "https://faq.whatsapp.com/", [
    topic("whatsapp", "WhatsApp", "verificacion, dispositivos vinculados, grupos y copias"),
    topic("telegram", "Telegram", "sesiones, username, grupos y privacidad"),
    topic("sms", "SMS", "codigos, links, remitentes y suplantacion"),
    topic("codigos", "codigos de verificacion", "2FA, recuperacion, bancos y apps"),
    topic("grupos", "grupos", "admins, invitados, enlaces y archivos"),
    topic("archivos", "archivos recibidos", "extension, origen, descarga y permisos"),
    topic("cuenta-tomada", "cuenta tomada", "sesiones, avisos, recuperacion y contactos"),
    topic("suplantacion", "suplantacion por mensaje", "voz, urgencia, contacto y verificacion"),
    topic("copias-chat", "copias de chats", "nube, cifrado, restauracion y equipo"),
    topic("bloqueo-reporte", "bloqueo y reporte", "perfil, mensajes, evidencia y canal")
  ]),
  domain("ia-generativa", "Privacidad digital", "IA generativa", "prompts, imagenes, documentos, datos personales y contenido sintetico", "no subir informacion sensible y revisar derechos, privacidad y uso del resultado", "pegar documentos privados, rostros o datos de terceros sin entender tratamiento", "CSIRT Chile", "https://www.csirt.gob.cl/", [
    topic("prompts", "prompts", "datos, contexto, instrucciones y privacidad"),
    topic("documentos", "documentos", "contratos, salud, identidad y datos de terceros"),
    topic("imagenes", "imagenes", "rostros, ubicacion, derechos y consentimiento"),
    topic("voz", "voz sintetica", "muestras, consentimiento, uso y riesgo"),
    topic("deepfake", "deepfakes", "evidencia, reporte, plataforma y apoyo"),
    topic("trabajo", "uso laboral", "datos de clientes, secretos y politicas internas"),
    topic("estudio", "uso academico", "originalidad, fuentes, citas y privacidad"),
    topic("codigo", "codigo y credenciales", "tokens, repositorios, secretos y licencias"),
    topic("salud", "consultas de salud", "limites, profesional, datos y urgencia"),
    topic("resultado", "resultado generado", "verificacion, derechos, sesgos y publicacion")
  ]),
  domain("juegos-apuestas", "Consumo adulto legal", "Juegos y apuestas online", "loot boxes, apuestas, bonos, retiros, limites y metodos de pago", "definir limites, confirmar condiciones de retiro y reconocer senales de perdida de control", "perseguir perdidas, usar dinero necesario o asumir que bonos son dinero disponible", "CMF Educa", "https://www.cmfchile.cl/educa/", [
    topic("bonos", "bonos", "condiciones, rollover, retiro y caducidad"),
    topic("retiros", "retiros", "identidad, plazos, comisiones y bloqueo"),
    topic("limites", "limites de gasto", "monto, frecuencia, pausa y autocontrol"),
    topic("metodos-pago", "metodos de pago", "tarjeta, transferencia, billetera y comisiones"),
    topic("loot-boxes", "loot boxes", "probabilidades, compras y menores"),
    topic("cuenta", "cuenta de usuario", "verificacion, edad, seguridad y cierre"),
    topic("perdidas", "perdidas", "registro, pausa, deuda y ayuda externa"),
    topic("promociones", "promociones", "letra chica, requisitos y riesgo"),
    topic("reclamo", "un reclamo", "soporte, folios, capturas y respuesta"),
    topic("autoexclusion", "autoexclusion o pausa", "herramientas, plazos y soporte")
  ]),
  domain("salud-digital", "Consumo adulto legal", "Salud digital sensible", "telemedicina, recetas, apps, cannabis medicinal, farmacias y datos clinicos", "confirmar profesional, receta, canal autorizado y privacidad de datos antes de actuar", "tomar decisiones medicas por contenido online o comprar en canales no verificables", "ISP Chile", "https://www.ispch.cl/", [
    topic("telemedicina", "telemedicina", "profesional, registro, receta y privacidad"),
    topic("receta", "recetas", "vigencia, profesional, farmacia y respaldo"),
    topic("farmacia-online", "farmacias online", "autorizacion, producto, boleta y despacho"),
    topic("cannabis-medicinal", "cannabis medicinal", "receta, profesional, legalidad y seguimiento"),
    topic("datos-clinicos", "datos clinicos", "historial, examenes, consentimiento y seguridad"),
    topic("app-salud", "apps de salud", "permisos, datos, proveedor y respaldo"),
    topic("suplementos", "suplementos", "registro, promesas, interacciones y fuente"),
    topic("salud-mental", "salud mental online", "profesional, urgencia, privacidad y limites"),
    topic("examenes", "examenes digitales", "resultado, identidad, portal y descarga"),
    topic("canal-no-verificado", "canales no verificados", "vendedor, producto, riesgo y denuncia")
  ])
];

function domain(
  prefix: string,
  category: string,
  titleBase: string,
  context: string,
  focus: string,
  risk: string,
  sourceLabel: string,
  sourceUrl: string,
  topics: DarkTopic[]
): DarkDomain {
  return { prefix, category, titleBase, context, focus, risk, sourceLabel, sourceUrl, topics };
}

function topic(slug: string, label: string, object: string): DarkTopic {
  return { slug, label, object };
}

function moment(slug: string, label: string, action: string): DarkMoment {
  return { slug, label, action };
}

function titleFor(domainItem: DarkDomain, topicItem: DarkTopic, momentItem: DarkMoment) {
  return `${domainItem.titleBase}: ${momentItem.label} ${topicItem.label}`;
}

function summaryFor(domainItem: DarkDomain, topicItem: DarkTopic, momentItem: DarkMoment) {
  return `Guia referencial para ${momentItem.action} ${topicItem.object} en ${domainItem.context}, con foco en privacidad, evidencia, limites y fuente primaria antes de actuar.`;
}

export const expandedDarkGuideSeeds: ExpandedDarkGuideSeed[] = domains.flatMap((domainItem) =>
  domainItem.topics.flatMap((topicItem) =>
    moments.map((momentItem) => ({
      slug: `${domainItem.prefix}-${topicItem.slug}-${momentItem.slug}`,
      title: titleFor(domainItem, topicItem, momentItem),
      category: domainItem.category,
      summary: summaryFor(domainItem, topicItem, momentItem),
      focus: `${domainItem.focus}; revisar especificamente ${topicItem.object}`,
      risk: `${domainItem.risk}; evitar actuar sin contexto sobre ${topicItem.label}`,
      sourceLabel: domainItem.sourceLabel,
      sourceUrl: domainItem.sourceUrl
    }))
  )
);
