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
    image: "dashboard.png",
    github: "https://github.com/millerbermeo/frontend_cas",
    deploy: "https://www.orderclic.com/shop",
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
    label: "CONTADOR PERSONAL · Servicios Contables",
    title: "Landing de Servicios Contables y Asesoría Tributaria en Colombia",
    problem:
      "Personas y empresas en Colombia con dificultades para gestionar correctamente sus obligaciones contables, tributarias y laborales, generando riesgos de sanciones, desorden financiero y falta de claridad en la toma de decisiones.",
    solution:
      "Landing profesional que ofrece servicios contables integrales: asesoría tributaria, contabilidad general, revisoría fiscal, gestión laboral, planeación financiera y constitución de empresas. Incluye contacto directo por WhatsApp, presentación de servicios, tarifas transparentes, sección de confianza con perfil del contador y FAQ para resolver dudas frecuentes.",
    result:
      "Mayor confianza y captación de clientes locales mediante una presentación clara de servicios contables, precios visibles, contacto rápido por WhatsApp y posicionamiento como contador profesional independiente.",
    stack: ["Astro", "Tailwind CSS", "JavaScript", "TypeScript", "WhatsApp API", "SEO"],
    image: "contador-landing.png",
    github: "https://github.com/millerbermeo/contador-landing",
    deploy: "https://contador-personal.vercel.app/",
    accent: "green",
    copilots: ["OpenCode"],
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