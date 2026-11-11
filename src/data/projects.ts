export type ProjectAccent =
  | "indigo" | "emerald" | "violet" | "orange" | "cyan" | "green" | "blue" | "amber";

export type Copilot = "Claude Code" | "OpenCode" | "OpenClaw" | "Codex";

export interface Project {
  label: string;
  featured?: boolean;
  title: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  /** Ruta relativa a src/assets/projects/. Si no existe se muestra un placeholder. */
  image: string;
  images?: string[];
  appId?: string;
  deploy?: string;
  github?: string;
  accent: ProjectAccent;
  copilots: Copilot[];
}

export const projects: Project[] = [
  {
    label: "SaaS · POS y facturación",
    featured: true,
    title: "Plataforma POS & SaaS para Gestión Comercial",
    problem:
      "Negocios gestionando ventas con hojas de cálculo sin control real de inventario, caja ni reportes.",
    solution:
      "Sistema modular en la nube con gestión de inventario, punto de venta, control de caja, reportes en tiempo real y roles de usuario.",
    result:
      "Reducción del tiempo de gestión operativa en más del 60% para los negocios que adoptaron la plataforma.",
    stack: ["Node.js", "NestJS", "React", "PostgreSQL", "Docker", "Typescript", "Tailwind CSS"],
    image: "orderclic/img-1.png",
    images: ["orderclic/img-1.png", "orderclic/img-2.png", "orderclic/img-3.png", "orderclic/img-4.png"],
    deploy: "https://orderclic.com/",
    accent: "indigo",
    copilots: ["OpenCode", "Claude Code"],
  },
  {
    label: "SaaS · Delivery multi-tenant",
    featured: true,
    title: "Plataforma SaaS de Domicilios con WhatsApp API + IA",
    problem:
      "Empresas de delivery gestionando pedidos manualmente, sin comunicación en tiempo real con domiciliarios ni seguimiento de ubicación.",
    solution:
      "Plataforma multi-tenant SaaS con gestión de pedidos, atención automática de clientes via WhatsApp API, asignación inteligente de domiciliarios, conexión en tiempo real usando WebSockets, tracking de ubicación en vivo, panel de ofertas y administración de rutas.",
    result:
      "Ciclo de delivery automático de punta a punta, con comunicación instantánea cliente-domiciliario y despacho sin llamadas manuales.",
    stack: ["React", "TypeScript", "React Native", "Node.js", "NestJS", "PostgreSQL", "Socket.io", "WhatsApp API", "Google Maps API"],
    image: "delivery-saas/img-1.png",
    images: ["delivery-saas/img-1.png", "delivery-saas/img-2.png", "delivery-saas/img-3.png", "delivery-saas/img-4.png", "delivery-saas/img-5.png", "delivery-saas/img-6.png"],
    github: "https://github.com/millerbermeo/delivery-saas",
    deploy: "https://delivery-saas.vercel.app/",
    accent: "cyan",
    copilots: ["OpenCode", "Claude Code", "OpenClaw", "Codex"],
  },
  {
    label: "Mobile · App de domicilios",
    featured: true,
    title: "App Móvil de Domicilios — Android en producción",
    problem:
      "Clientes y domiciliarios sin una app nativa para pedir, recibir y seguir domicilios en tiempo real desde el teléfono.",
    solution:
      "App Android con React Native + Expo: catálogo de comercios, carrito, checkout, seguimiento del pedido en vivo y notificaciones push. Build y publicación gestionadas con EAS.",
    result:
      "Publicada en Google Play en producción y en uso real por clientes y repartidores.",
    stack: ["React Native", "Expo", "EAS", "TypeScript", "Google Play"],
    image: "mobile-domicilios/img-1.png",
    images: ["mobile-domicilios/img-1.png", "mobile-domicilios/img-2.png", "mobile-domicilios/img-3.png", "mobile-domicilios/img-4.png", "mobile-domicilios/img-5.png", "mobile-domicilios/img-6.png", "mobile-domicilios/img-7.png"],
    appId: "com.devmiller.domicilios",
    deploy:
      "https://play.google.com/store/apps/details?id=com.devmiller.domicilios",
    // github: "",
    accent: "green",
    copilots: ["Claude Code", "OpenCode"],
  },
  {
    label: "IA · Chatbot WhatsApp",
    title: "Chatbot Inteligente con WhatsApp API + IA",
    problem:
      "Empresas perdiendo clientes potenciales por no poder atender consultas fuera de horario laboral.",
    solution:
      "Bot conversacional integrado con WhatsApp Business API y modelos de IA (OpenAI) para responder preguntas, calificar leads y escalar a un humano cuando es necesario.",
    result:
      "Atención 24/7 automatizada con tasa de resolución autónoma superior al 70% en consultas frecuentes.",
    stack: ["Node.js", "WhatsApp API", "OpenAI API", "PostgreSQL"],
    image: "chat.png",
    github: "https://github.com/millerbermeo/chatbot-whatsapp",
    deploy: "https://chat-whatsapp-sigma.vercel.app/",
    accent: "emerald",
    copilots: ["OpenCode", "Codex"],
  },
  {
    featured: true,
    label: "Fullstack · Ventas y créditos moto",
    title: "Sistema de Ventas, Créditos y Trazabilidad para Concesionario de Motos",
    problem:
      "Agencia de venta de motocicletas gestionando cotizaciones y créditos (contado, crédito interno o de terceros) de forma manual, sin trazabilidad del proceso desde la cotización hasta la entrega del vehículo, ni control centralizado de aprobación de créditos.",
    solution:
      "Plataforma con módulos de cotizaciones, créditos, flujo de aprobación crediticia, recolección de documentos, facturación, gestión de agentes según la etapa del proceso y entrega del producto. Incluye configuración de porcentajes, IVA y tarifas de seguros, con trazabilidad completa desde la cotización hasta la entrega.",
    result:
      "Trazabilidad total del proceso de venta financiada, reducción de errores en la aprobación de créditos y mayor control administrativo para la agencia.",
    stack: ["React", "Node.js", "NestJS", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    image: "software-motos/img-1.png",
    images: [
      "software-motos/img-1.png",
      "software-motos/img-2.png",
      "software-motos/img-3.png",
      "software-motos/img-4.png",
      "software-motos/img-5.png",
      "software-motos/img-6.png",
      "software-motos/img-7.png",
    ],
    github: "https://github.com/millerbermeo/motosparatodos",
    deploy: "https://tuclick.vozipcolombia.net.co/login",
    accent: "blue",
    copilots: ["Claude Code", "OpenCode"],
  },
  {
    label: "IA · Agente de desarrollo",
    featured: true,
    title: "Odesk Agent — Agente de IA para Gestionar y Ejecutar Desarrollo",
    problem:
      "Coordinar tareas, repositorios, pruebas en navegador y dispositivos móviles, y credenciales desde herramientas separadas, sin que un agente de IA tenga contexto del proyecto ni reglas claras de trabajo.",
    solution:
      "Agente de IA conectado por MCP a un tablero de tareas con criterios de aceptación, Git y GitHub (ramas, commits, PRs, CI), automatización de navegador y de dispositivos Android, y gestión de credenciales. Orquesta subagentes especializados (revisión de código, QA, seguridad, arquitectura, UI/UX) y skills propias del proyecto.",
    result:
      "Flujo de trabajo asistido de punta a punta: la tarea se planifica, se implementa, se verifica y se documenta desde un mismo agente, con subagentes y skills que siguen las convenciones de cada proyecto.",
    stack: ["Agentes IA", "Subagentes", "Skills", "MCP", "Claude Code", "TypeScript", "Node.js", "Git", "GitHub"],
    image: "odesk-agent/img-1.png",
    images: ["odesk-agent/img-1.png", "odesk-agent/img-2.png", "odesk-agent/img-3.png", "odesk-agent/img-4.png"],
    // github: "",
    // deploy: "",
    accent: "violet",
    copilots: ["Claude Code", "OpenCode", "Codex"],
  },
  {
    label: "Marketplace · Domicilios locales",
    title: "Marketplace de Domicilios Multi-Comercio para Pitalito, Huila",
    problem:
      "Comercios locales (restaurantes, tiendas, farmacias, licoreras) sin un canal digital unificado para vender y coordinar domicilios, obligando a los clientes a contactar cada negocio por separado.",
    solution:
      "Marketplace de domicilios con catálogo por categorías (restaurantes, compras, farmacia, licores, mensajería y más), autenticación con correo o Google, ficha de cada comercio con su menú y carrito de compras, y checkout que envía el pedido directamente por WhatsApp al negocio.",
    result:
      "Canal de pedidos centralizado para múltiples comercios de Pitalito, con proceso de compra fluido de catálogo a WhatsApp sin fricción para el cliente.",
    stack: ["React", "TypeScript", "Node.js", "WhatsApp API", "Google OAuth"],
    image: "enviosw/img-1.png",
    images: ["enviosw/img-1.png", "enviosw/img-2.png", "enviosw/img-3.png", "enviosw/img-4.png"],
    github: "https://github.com/enviosw/front_enviosw",
    deploy: "https://enviosw.com",
    accent: "amber",
    copilots: ["Claude Code", "OpenCode"],
  },
  {
    label: "SaaS · Cobranza y créditos",
    title: "Sistema de Cobranza y Gestión de Créditos",
    problem:
      "Prestamistas y empresas de crédito llevando solicitudes, contratos, abonos y cartera en mora de forma manual, sin visibilidad del saldo de cada cliente ni control de las fechas de corte.",
    solution:
      "Plataforma web con flujo completo del crédito: registro de clientes, solicitudes, aprobación guiada paso a paso (validación de documentos, tasa y plazo), contratos, abonos a interés o capital, retiros, cobranza y seguimiento de clientes en mora. Incluye dashboard con próximas fechas de corte, reportes de cartera, mora, intereses y abonos, usuarios con acceso por módulos y modo claro/oscuro.",
    result:
      "Control centralizado de la cartera: cada crédito con su saldo, intereses y fecha de corte, y trazabilidad desde la solicitud hasta el último abono.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "HeroUI", "TanStack Query", "Zustand", "Zod"],
    image: "cobros/img-1.png",
    deploy: "https://frontend-cobros.vercel.app/auth/login",
    accent: "indigo",
    copilots: ["Claude Code", "OpenCode"],
  },
  {
    label: "Landing · Servicios contables",
    title: "Landing de Servicios Contables y Asesoría Tributaria en Colombia",
    problem:
      "Personas y empresas en Colombia con dificultades para gestionar correctamente sus obligaciones contables, tributarias y laborales, generando riesgos de sanciones, desorden financiero y falta de claridad en la toma de decisiones.",
    solution:
      "Landing profesional que ofrece servicios contables integrales: asesoría tributaria, contabilidad general, revisoría fiscal, gestión laboral, planeación financiera y constitución de empresas. Incluye contacto directo por WhatsApp, presentación de servicios, tarifas transparentes, sección de confianza con perfil del contador y FAQ para resolver dudas frecuentes.",
    result:
      "Mayor confianza y captación de clientes locales mediante una presentación clara de servicios contables, precios visibles, contacto rápido por WhatsApp y posicionamiento como contador profesional independiente.",
    stack: ["Astro", "Tailwind CSS", "JavaScript", "TypeScript", "WhatsApp API", "SEO"],
    image: "landing-contador/img-1.png",
    images: [
      "landing-contador/img-1.png",
      "landing-contador/img-2.png",
      "landing-contador/img-3.png",
      "landing-contador/img-4.png",
      "landing-contador/img-5.png",
      "landing-contador/img-6.png",
    ],
    github: "https://github.com/millerbermeo/contador_landing",
    deploy: "https://brianpedraza.com/",
    accent: "green",
    copilots: ["OpenCode"],
  },
  {
    label: "Ecommerce · Productos tecnológicos",
    title: "Plataforma Ecommerce Profesional para Venta de Productos Tecnológicos",
    problem:
      "Negocios de tecnología (computadores, celulares, accesorios) sin presencia digital sólida, con dificultad para gestionar productos, especificaciones, inventario y pedidos de forma ordenada y eficiente.",
    solution:
      "Ecommerce completo con catálogo de productos, variantes y especificaciones técnicas, carrito de compras, checkout, gestión de pedidos, panel administrativo para control de productos, stock, categorías y ofertas. Incluye sistema de descuentos, cupones y gestión básica de clientes.",
    result:
      "Digitalización del negocio con aumento de ventas online, automatización del proceso de compra y control centralizado del inventario, pedidos y productos desde un panel admin intuitivo.",
    stack: ["Astro", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Stripe"],
    image: "ecommerce.png",
    github: "https://github.com/millerbermeo/ecommerce-tienda",
    deploy: "https://tienda-ropa.vercel.app/",
    accent: "violet",
    copilots: ["OpenCode", "Claude Code"],
  }
];
