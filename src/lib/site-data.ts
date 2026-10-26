export const siteConfig = {
  name: "Constructora Macadam",
  legalName: "Constructora MACADAM, S.A. de C.V.",
  tagline: "Experiencia en Espacios con Estilo",
  descriptor: "Diseño · Construcción · Inmobiliaria",
  heroTitle: "¡Construyamos juntos el espacio de tus sueños!",
  heroSubtitle:
    "Nos especializamos en el diseño y construcción de casas habitación, bodegas y plazas comerciales.",
  foundedYear: 1992,
  consolidatedYear: 1997,
  contact: {
    phoneDisplay: "(844) 416 1100",
    phoneHref: "tel:+528444161100",
    whatsappDisplay: "+52 56 6133 9770",
    whatsappNumber: "525661339770",
    email: "contacto@cmacadam.com",
    postVentasEmail: "post-ventas@cmacadam.com",
    address: "Calle Mariano Abasolo 2300, Guanajuato, 25280 Saltillo, Coah.",
    mapsUrl: "https://goo.gl/maps/GMvA7sfDfvbAyrns6",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Calle+Mariano+Abasolo+2300,+Guanajuato,+25280+Saltillo,+Coah.&z=16&output=embed",
    facebook: "https://www.facebook.com/macadamconstructora",
    parentGroupUrl: "https://www.macadamdesarrollos.com/",
  },
  nav: [
    { href: "/", label: "Inicio", meta: "Constructora & Inmobiliaria" },
    { href: "/nosotros", label: "Nosotros", meta: "Historia · Misión · Visión · Valores" },
    { href: "/proyectos", label: "Proyectos", meta: "Residencial · Industrial · Campestre" },
    { href: "/servicios", label: "Servicios", meta: "Diseño arquitectónico · 3D · Vivienda" },
    { href: "/contacto", label: "Contacto", meta: "Saltillo, Coahuila · (844) 416 1100" },
  ],
};

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  badge: string;
  location: string;
  locationHref?: string;
  shortDescription: string;
  paragraphs: string[];
  href: string;
  external: boolean;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  logo?: string;
  websiteUrl: string;
  gallery?: { src: string; alt: string; caption: string }[];
  specs?: { label: string; value: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "villas-de-la-aurora",
    slug: "villas-de-la-aurora",
    name: "Villas de la Aurora",
    category: "Fraccionamiento residencial",
    badge: "Residencial",
    location: "Av. Camino Real y Calle Edison, Irapuato, Gto., 36630",
    locationHref: "https://goo.gl/maps/8kR9x5Z",
    shortDescription: "Fraccionamiento residencial en Irapuato Gto.",
    paragraphs: [
      "Ese lugar especial está al alcance de tus manos. Contamos con dos modelos diseñados con un excelente espacio y materiales de alta calidad, ven a conocernos sin compromiso.",
      "Estamos ubicados en Irapuato: Av. Camino Real y Calle Edison, Irapuato, Gto., 36630.",
    ],
    href: "/proyectos#villas-de-la-aurora",
    external: false,
    ctaLabel: "Información",
    image: "/img/proyectos/villas-de-la-aurora.webp",
    imageAlt: "Fraccionamiento residencial Villas de la Aurora en Irapuato, Guanajuato",
    logo: "/img/proyectos/villasdelaaurora-logo-cropped.png",
    websiteUrl: "https://www.macadamdesarrollos.com/villas-de-la-aurora",
    specs: [
      { label: "Tipo de proyecto", value: "Fraccionamiento residencial" },
      { label: "Modelos", value: "2 modelos de vivienda" },
      { label: "Ubicación", value: "Av. Camino Real y Calle Edison, Irapuato, Gto., 36630" },
    ],
  },
  {
    id: "aguanueva",
    slug: "aguanueva",
    name: "Agua Nueva",
    category: "Terrenos industriales en venta",
    badge: "Industrial · 99,886 m²",
    location: "Carretera 54 Saltillo–Zacatecas, km 24 y 25, Saltillo, Coah.",
    shortDescription:
      "Terrenos industriales en venta en Parque Industrial Derramadero.",
    paragraphs: [
      "¡Oportunidad de inversión! Tenemos a la venta un terreno perfecto para tu proyecto de bodegas, con una superficie de 99,886 m², y tomas de agua y luz disponibles.",
      "Con excelente ubicación: sobre la carretera 54 SALTILLO–ZACATECAS, entre los kilómetros 24 y 25, a solo 17.5 kilómetros de la ciudad de Saltillo y a 1.5 kilómetros de Derramadero Parque Industrial.",
      "Este terreno representa una oportunidad única para expandir o establecer tu negocio en una zona de alto crecimiento y con una ubicación estratégica. ¡No la dejes pasar! Contáctanos para más información y para agendar una visita al terreno.",
    ],
    href: "/proyectos#aguanueva",
    external: false,
    ctaLabel: "Información",
    image: "/img/proyectos/aguanueva-planos.webp",
    imageAlt: "Plano de lotificación y proyecto industrial Agua Nueva en Saltillo",
    logo: "/img/logo-o.png",
    websiteUrl: "https://www.macadamdesarrollos.com/agua-nueva",
    specs: [
      { label: "Superficie total", value: "99,886 m²" },
      { label: "Servicios disponibles", value: "Tomas de agua y luz disponibles" },
      { label: "Ubicación", value: "Carretera 54 Saltillo–Zacatecas, entre km 24 y 25" },
      { label: "Distancia a Saltillo", value: "A 17.5 km de la ciudad de Saltillo" },
      { label: "Cercanía industrial", value: "A 1.5 km de Derramadero Parque Industrial" },
    ],
    gallery: [
      {
        src: "/img/proyectos/Aguanueva-derramadero-slw2.jpg",
        alt: "Vista del terreno industrial en venta en Agua Nueva, Saltillo",
        caption: "Terreno en Agua Nueva sobre Carretera 54",
      },
      {
        src: "/img/proyectos/Aguanueva-derramadero-slw-1.jpg",
        alt: "Infraestructura eléctrica y tomas disponibles en Agua Nueva",
        caption: "Infraestructura de energía y servicios en la zona",
      },
      {
        src: "/img/proyectos/Aguanueva-derramadero-slw-2.jpg",
        alt: "Ubicación estratégica junto a Parque Industrial Derramadero",
        caption: "Ubicación estratégica a 1.5 km de Parque Industrial Derramadero",
      },
    ],
  },
  {
    id: "cerrollano",
    slug: "cerrollano",
    name: "Cerrollano",
    category: "Fraccionamiento campestre",
    badge: "Campestre",
    location: "Ejido Santa Teresa de los Muchachos, a 40 min de Saltillo, Coah.",
    shortDescription: "Fraccionamiento campestre en Saltillo, Coah.",
    paragraphs: [
      "En Cerro Llano, estamos comprometidos en crear una experiencia inolvidable para ti y tus seres queridos, al mismo tiempo que te conectas con la naturaleza. Gracias a nuestra ubicación privilegiada en el ejido Santa Teresa de los Muchachos, a solo 40 minutos de Saltillo, hemos diseñado un espacio donde podrás sentirte libre y en armonía con el entorno natural que nos rodea.",
      "No pierdas la oportunidad de adquirir tu propio terreno en Cerro Llano y disfrutar de la tranquilidad y belleza natural que ofrece este lugar único. ¡Contáctanos hoy mismo y comienza a construir tus sueños en Cerro Llano!",
    ],
    href: "/proyectos#cerrollano",
    external: false,
    ctaLabel: "Información",
    image: "/img/proyectos/cerro-llano.webp",
    imageAlt: "Vista aérea del fraccionamiento campestre Cerrollano en Saltillo, Coahuila",
    logo: "/img/proyectos/cerro-llano-logo.webp",
    websiteUrl: "https://www.macadamdesarrollos.com/cerro-llano",
    specs: [
      { label: "Tipo de proyecto", value: "Fraccionamiento campestre" },
      { label: "Ubicación", value: "Ejido Santa Teresa de los Muchachos, Coahuila" },
      { label: "Distancia", value: "A solo 40 minutos de Saltillo" },
    ],
  },
  {
    id: "neopark",
    slug: "neopark",
    name: "Neopark",
    category: "Industriales, residenciales y campestres",
    badge: "Parque Industrial",
    location: "Irapuato, Guanajuato y diferentes partes de la República Mexicana",
    shortDescription:
      "Terrenos industriales en venta en Parque industrial en Irapuato Guanajuato.",
    paragraphs: [
      "Contamos con terrenos en venta en diferentes partes de la República Mexicana, tanto industriales como residenciales y campestres.",
      "En nuestro catálogo, encontrarás terrenos de diferentes superficies y ubicaciones, para que puedas elegir el que más se ajuste a tus necesidades y presupuesto.",
      "En nuestro equipo, contamos con expertos en bienes raíces que estarán dispuestos a ofrecerte la orientación que necesitas para tomar la mejor decisión. Nos aseguramos de que el terreno que adquieras sea el adecuado para el plan que tienes en mente.",
      "¡Contáctanos ahora y déjanos ayudarte a encontrar el terreno perfecto para hacer realidad tu proyecto!",
    ],
    href: "/proyectos#neopark",
    external: false,
    ctaLabel: "Información",
    image: "/img/proyectos/terrenos-industriales-irapuato.webp",
    imageAlt: "Terrenos industriales en venta en Neopark, parque industrial en Irapuato, Guanajuato",
    logo: "/img/neopark-logo.webp",
    websiteUrl: "https://www.macadamdesarrollos.com/neopark",
    specs: [
      { label: "Vocación", value: "Terrenos industriales, residenciales y campestres" },
      { label: "Cobertura", value: "Irapuato, Guanajuato y diferentes partes de la República Mexicana" },
      { label: "Asesoría", value: "Orientación por expertos en bienes raíces según necesidades y presupuesto" },
    ],
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  href: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "diseno-arquitectonico",
    number: "01",
    title: "Diseño arquitectónico",
    shortDescription:
      "Nos especializamos en el diseño arquitectónico, planificando los espacios de acuerdo con tus necesidades...",
    paragraphs: [
      "En nuestro estudio de diseño arquitectónico, nos enfocamos en crear espacios funcionales y amigables, adaptados a tus necesidades y presupuesto. Desde el primer día, estaremos contigo para plasmar tus ideas en el diseño arquitectónico, siempre tomando en cuenta factores bioclimáticos únicos de cada región para asegurar la sustentabilidad en todos nuestros proyectos.",
      "Nos encargamos de modificar cada trazo para lograr el espacio de tus sueños, trazando la idea desde un boceto principal hasta llevarlo a la realidad. Estamos disponibles para atender tus dudas y sugerencias en todo momento.",
    ],
    image: "/img/pic-banner.jpg",
    imageAlt: "Diseño arquitectónico y trazo de planos en Constructora Macadam",
    href: "/servicios#diseno-arquitectonico",
  },
  {
    id: "diseno-3d-y-renderizacion",
    number: "02",
    title: "Diseño en 3D y renderización",
    shortDescription:
      "Si lo que buscas es visualizar tu proyecto de manera más detallada, ofrecemos el servicio de diseño en 3D y renderización...",
    paragraphs: [
      "Si lo que buscas es visualizar tu proyecto de manera más detallada, ofrecemos el servicio de diseño en 3D y renderización. En este proceso, partimos de una planta arquitectónica y, por medio de programas especializados, creamos cada detalle de tu proyecto, agregando texturas y colores que se ajusten a tus especificaciones.",
      "Además, añadimos luz y sombras al espacio para crear un entorno realista y, finalmente, obtener una imagen fotorrealista de tu proyecto. Con este servicio, podrás visualizar tu proyecto de manera más clara y tomar decisiones más informadas.",
    ],
    image: "/img/servicios/macadam-render-fachada.webp",
    imageAlt: "Render 3D arquitectónico de vivienda de Constructora Macadam",
    href: "/servicios#diseno-3d-y-renderizacion",
  },
  {
    id: "construccion-de-vivienda",
    number: "03",
    title: "Construcción de vivienda",
    shortDescription:
      "Si tu deseo es construir tu casa, nosotros nos encargamos de todo el proceso, desde la cimentación hasta el último detalle de tu proyecto...",
    paragraphs: [
      "Si tu deseo es construir tu casa, nosotros nos encargamos de todo el proceso, desde la cimentación hasta el último detalle de tu proyecto. Ya sea que cuentes con un proyecto arquitectónico o no, nos adaptamos a tus necesidades para ofrecerte un servicio de construcción de vivienda de la mejor calidad.",
      "Contamos con un equipo de trabajo especializado en las diferentes actividades que conlleva la construcción de una vivienda, siempre garantizando los mejores procesos y materiales para obtener una excelente construcción. ¡Con nosotros, podrás hacer realidad la casa de tus sueños!",
    ],
    image: "/img/servicios/macadam-construccion-vivienda.webp",
    imageAlt: "Construcción de vivienda residencial por Constructora Macadam",
    href: "/servicios#construccion-de-vivienda",
  },
];

export const aboutData = {
  eyebrow: "Constructora",
  title: "MACADAM",
  summaryParagraphs: [
    "Desde 1992, en Saltillo, Coahuila, hemos construido diversas obras civiles y brindado servicios de mantenimiento industrial. En 1997, nos consolidamos como Constructora Macadam, S.A. de C.V., participando en proyectos para la industria automotriz, tratamiento de aguas, bancos, Gobierno Estatal y Federal, INFONAVIT y residencias particulares en Coahuila y Guanajuato.",
    "En el ramo inmobiliario ofrecemos soluciones integrales en renta de bodegas y minibodegas, venta y renta de residencias, casas de interés social y desarrollo de fraccionamientos habitacionales y campestres.",
  ],
  paragraphs: [
    "Desde 1992, en Saltillo, Coahuila, hemos construido diversas obras civiles y brindado servicios de mantenimiento industrial. En 1997, nos consolidamos como Constructora Macadam, S.A. de C.V., una empresa sólida y en constante crecimiento.",
    "A lo largo de los años, hemos participado en grandes proyectos relacionados con la industria automotriz, tratamiento de aguas, bancos, Gobierno Estatal y Federal, INFONAVIT y residencias particulares, tanto en Saltillo como en diversas ciudades de Coahuila y, actualmente, en Guanajuato.",
    "En el ramo inmobiliario, ofrecemos una amplia variedad de servicios, incluyendo renta de bodegas y minibodegas, venta y renta de residencias de media y alta categoría, casas de interés social, desarrollo de fraccionamientos habitacionales y campestres, entre otros. En Constructora Macadam, nos enfocamos en brindar soluciones integrales a nuestros clientes, garantizando la satisfacción en cada proyecto. ¡Contáctanos y descubre cómo podemos hacer realidad tus proyectos de construcción e inmobiliarios!",
  ],
  sectors: [
    "Industria automotriz",
    "Tratamiento de aguas",
    "Bancos",
    "Gobierno Estatal y Federal",
    "INFONAVIT",
    "Residencias particulares",
  ],
  realEstateServices: [
    "Renta de bodegas y minibodegas",
    "Venta y renta de residencias de media y alta categoría",
    "Casas de interés social",
    "Desarrollo de fraccionamientos habitacionales y campestres",
  ],
  mision: {
    title: "Misión",
    paragraphs: [
      "En nuestra empresa, estamos comprometidos con la construcción de espacios funcionales, estéticos y de alta calidad, haciendo uso de tecnologías ambientales de vanguardia. Para nosotros, la prioridad es que tu patrimonio habitacional perdure y aumente su plusvalía con el tiempo.",
      "Nos esforzamos por ofrecer soluciones personalizadas y adaptadas a las necesidades de cada cliente, trabajando con profesionalismo y compromiso en cada proyecto. Nuestro objetivo principal es superar las expectativas de nuestros clientes, brindando un servicio de calidad en cada etapa de la construcción.",
    ],
  },
  vision: {
    title: "Visión",
    paragraphs: [
      "Nuestra visión es convertirnos en la empresa constructora más innovadora y reconocida en cada ciudad en la que estemos establecidos. Nos esforzamos por ofrecer la mejor tecnología constructiva y atención personalizada, adaptándonos a las necesidades y exigencias de nuestros clientes.",
      "En nuestra empresa, nos esforzamos por mantener un equipo de trabajo altamente capacitado y comprometido con nuestros valores empresariales, trabajando siempre con ética y responsabilidad en cada proyecto. Nuestro objetivo es superar las expectativas de nuestros clientes en cada etapa del proceso de construcción, logrando su plena satisfacción. ¡Únete a nosotros y juntos construyamos un futuro mejor!",
    ],
  },
  valoresIntro:
    "En nuestra empresa, estamos comprometidos con una serie de valores que guían nuestro trabajo diario, estos valores son fundamentales para nosotros y forman parte de nuestra cultura empresarial. Nos esforzamos por aplicarlos en cada proyecto que realizamos, para garantizar la satisfacción total de nuestros clientes y un ambiente de trabajo seguro y agradable para nuestro equipo.",
  valores: [
    {
      title: "Confianza",
      description:
        "Creemos que la confianza es fundamental para establecer relaciones duraderas y exitosas con nuestros clientes. Por ello, trabajamos con transparencia y honestidad en cada etapa del proceso de construcción.",
    },
    {
      title: "Limpieza y Orden",
      description:
        "Nos preocupamos por mantener un ambiente limpio y ordenado en cada obra, asegurándonos de cumplir con las normas de seguridad e higiene correspondientes.",
    },
    {
      title: "Integridad",
      description:
        "En nuestra empresa, trabajamos con integridad y ética en cada proyecto, asegurándonos de cumplir con las leyes y regulaciones vigentes, así como de respetar los derechos de nuestros trabajadores y clientes.",
    },
    {
      title: "Capacitación",
      description:
        "Sabemos que la capacitación constante es fundamental para mantenernos actualizados en las últimas tendencias y tecnologías constructivas. Por ello, nos esforzamos por ofrecer a nuestro equipo de trabajo oportunidades de desarrollo y formación.",
    },
    {
      title: "Servicio",
      description:
        "Nos enfocamos en brindar un servicio de calidad en cada etapa del proceso de construcción, garantizando la satisfacción total de nuestros clientes.",
    },
    {
      title: "Honestidad",
      description:
        "En nuestra empresa, trabajamos con honestidad y transparencia en todo momento, manteniendo una comunicación abierta y honesta con nuestros clientes y proveedores.",
    },
  ],
};
