export const projects = [
  {
    label: "ORDERCLIC · SISTEMA POS + FACTURACIÓN ELECTRÓNICA",
    title: "Plataforma POS & SaaS para Gestión Comercial",
    problem:
      "Negocios gestionando ventas con hojas de cálculo sin control real de inventario, caja ni reportes.",
    solution:
      "Sistema modular en la nube con gestión de inventario, punto de venta, control de caja, reportes en tiempo real y roles de usuario.",
    result:
      "Reducción del tiempo de gestión operativa en más del 60% para los negocios que adoptaron la plataforma.",
    stack: ["Node.js", "NestJS", "React", "PostgreSQL", "Docker", "Typescript", "Tailwind CSS"],
    image: "orderclic/img-1.png",
    images: ["orderclic/img-1.png", "orderclic/img-2.png", "orderclic/img-3.png"],
    deploy: "https://orderclic.com/",
    accent: "indigo",
    copilots: ["OpenCode", "Claude Code"],
  },
  {
    label: "IA · Chatbot",
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
    label: "Fullstack · Vehículos",
    title: "Sistema de Gestión y Venta de Vehículos",
    problem:
      "Concesionarios administrando su inventario vehicular de manera manual, sin visibilidad en tiempo real ni seguimiento de clientes.",
    solution:
      "Plataforma web fullstack con módulos de inventario, seguimiento de prospectos, fichas técnicas y panel administrativo con métricas de ventas.",
    result:
      "Digitalización completa del proceso de venta, desde la captura del lead hasta el cierre del negocio.",
    stack: ["React", "Node.js", "MySQL", "Next.js"],
    image: "img3.png",
    github: "https://github.com/millerbermeo/SistemaFrontend",
    deploy: "https://sistema-vehiculos.vercel.app/",
    accent: "violet",
    copilots: ["OpenCode", "Claude Code", "OpenClaw"],
  },
  {
    label: "IA · Automatización",
    title: "Sistema de Domicilios con Automatización IA",
    problem:
      "Proceso de asignación de pedidos manual, lento y con alta tasa de errores en la distribución.",
    solution:
      "Plataforma de delivery con asignación inteligente de repartidores, seguimiento en tiempo real, notificaciones automáticas y rutas optimizadas con IA.",
    result:
      "Reducción del tiempo de asignación de pedidos de minutos a segundos, con trazabilidad completa.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Claude API"],
    image: "movimientos.png",
    github: "https://github.com/millerbermeo/delivery-ia",
    deploy: "https://delivery-platform.vercel.app/",
    accent: "orange",
    copilots: ["Claude Code", "Codex", "OpenCode"],
  },
  {
    label: "DELIVERY SaaS · Multi-Tenant",
    title: "Plataforma SaaS de Domicilios con WhatsApp API + IA",
    problem:
      "Empresas de delivery gestionando pedidos manualmente, sin comunicación en tiempo real con domiciliarios ni seguimiento de ubicación.",
    solution:
      "Plataforma multi-tenant SaaS con gestión de pedidos, atención automática de clientes via WhatsApp API, asignación inteligente de domiciliarios, conexión en tiempo real usando WebSockets, tracking de ubicación en vivo, panel de ofertas y administración de rutas.",
    result:
      "Automatización completa del ciclo de delivery con comunicación instantánea cliente-domiciliario y reducción del 80% en tiempos de asignación.",
    stack: ["React", "TypeScript", "React Native", "Node.js", "NestJS", "PostgreSQL", "Socket.io", "WhatsApp API", "Google Maps API"],
    image: "delivery.png",
    github: "https://github.com/millerbermeo/delivery-saas",
    deploy: "https://delivery-saas.vercel.app/",
    accent: "cyan",
    copilots: ["OpenCode", "Claude Code", "OpenClaw", "Codex"],
  },
  {
    label: "ENVIOSW · Marketplace de Domicilios",
    title: "Plataforma Web de Domicilios Multi-Comercio para Pitalito, Huila",
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
    label: "CONTADOR PERSONAL · Servicios Contables",
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
    label: "MOTOSPARATODOS · Ventas y Créditos",
    title: "Sistema de Gestión de Ventas, Créditos y Trazabilidad para Concesionario de Motocicletas",
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
    label: "ECOMMERCE · Tienda de Ropa y Calzado",
    title: "Plataforma Ecommerce Profesional para Venta de Ropa y Zapatos",
    problem:
      "Negocios de ropa y calzado sin presencia digital sólida, con dificultad para gestionar productos, variantes, inventario y pedidos de forma ordenada y eficiente.",
    solution:
      "Ecommerce completo con catálogo de productos, variantes (tallas y colores), carrito de compras, checkout, gestión de pedidos, panel administrativo para control de productos, stock, categorías y ofertas. Incluye sistema de descuentos, cupones y gestión básica de clientes.",
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