export const personalInfo = {
  name: 'Omar Cárdenas Ayala',
  title: 'Estudiante en Ingeniería de Sistemas Computacionales',
  description: 'Especializado en pagos digitales, desarrollo web y tecnologías cloud. Practicante en Alignet S.A.C.',
  email: 'omardcardenas99@gmail.com',
  phone: '936156493',
  linkedin: 'https://www.linkedin.com/in/omarcardenas03/',
  github: 'https://github.com/OmarFelis',
  cvUrl: '/public/cv-omar-cardenas.pdf',
}

export const heroImages = [
  '/img2.png',
  '/imgxcv.jpeg',
  '/IMG_8165.jpg',
]

export const projectImages = [
  ['/pry1.jpg', '/dig2.PNG'],
  ['/proyecto1.PNG', '/proyecto2.jpg'],
  ['/PRY2.PNG', '/PRY3.PNG'],
]

export const skills = [
  {
    category: 'Lenguajes de Programación',
    items: [
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    category: 'Desarrollo Web',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'DocumentDB', icon: 'https://icon.icepanel.io/AWS/svg/Database/DocumentDB.svg' },
    ],
  },
  {
    category: 'AWS Cloud',
    items: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Lambda', icon: 'https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg' },
      { name: 'EC2', icon: 'https://icon.icepanel.io/AWS/svg/Compute/EC2.svg' },
      { name: 'SQS/SNS', icon: 'https://icon.icepanel.io/AWS/svg/App-Integration/Simple-Queue-Service.svg' },
      { name: 'AWS S3', icon: 'https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg' },
    ],
  },
  {
    category: 'Herramientas & Metodologías',
    items: [
      { name: 'JIRA', icon: '/jira-1.svg' },
      { name: 'Confluence', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg' },
      { name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Cisco', icon: 'https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
  },
]

export const experiences = [
  {
    title: 'Asistente de Proyectos e Innovación',
    company: 'ALIGNET',
    logo: 'https://pasarelasdepagos.s3.amazonaws.com/wp-content/uploads/2023/11/Alignet-1.jpg',
    period: 'ene. 2026 - actualidad · 5 meses',
    type: 'Jornada completa',
    modality: 'Presencial',
    description: 'Desarrollo Frontend de plataforma ERP corporativa para la optimización de procesos internos.',
  },
  {
    title: 'Practicante de proyectos e innovación',
    company: 'ALIGNET',
    logo: 'https://pasarelasdepagos.s3.amazonaws.com/wp-content/uploads/2023/11/Alignet-1.jpg',
    period: 'jul. 2025 - dic. 2025 · 6 meses',
    type: 'Contrato de prácticas',
    modality: 'Híbrido',
    description: 'Desarrollé una aplicación web core diseñada para la automatización y transformación de archivos de liquidación bancaria. Esta solución facilita el procesamiento de pagos masivos bajo los estándares de la industria.',
  },
  {
    title: 'Practicante de integraciones',
    company: 'ALIGNET',
    logo: 'https://pasarelasdepagos.s3.amazonaws.com/wp-content/uploads/2023/11/Alignet-1.jpg',
    period: 'ene. 2025 - jun. 2025 · 6 meses',
    type: 'Contrato de prácticas',
    modality: 'Híbrido',
    description: '- Desarrollo de integraciones entre plataformas de pago y autenticación 3D-Secure.\n- Implementación de servicios REST API bajo arquitectura cliente-servidor.',
  },
  {
    title: 'Pasante',
    company: 'ALIGNET',
    logo: 'https://pasarelasdepagos.s3.amazonaws.com/wp-content/uploads/2023/11/Alignet-1.jpg',
    period: 'sept. 2024 - nov. 2024 · 3 meses',
    type: 'Temporal',
    modality: 'Híbrido',
    description: 'Participación en proyectos de autenticación y seguridad en pagos digitales.',
  },
]

export const certifications = [
  {
    title: 'CCNAv7: Switching, Routing and Wireless Essentials',
    issuer: 'Cisco Networking Academy - 2024',
    badge: 'https://images.credly.com/size/680x680/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png',
    image: '/ciscoswitch.PNG',
  },
  {
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco Networking Academy - 2024',
    badge: 'https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/e141b254-6fe2-43f4-a63c-1e0ba3d854f2.png',
    image: '/ciscosecurity.PNG',
  },
  {
    title: 'Jira Fundamentals Badge',
    issuer: 'Atlassian University - 2024',
    badge: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
    image: '/jirabdg.png',
  },
  {
    title: 'Procesamiento de Imágenes con Python - MediaPipe',
    issuer: 'CHIPTEC - 2025',
    badge: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    image: '/chiptec.PNG',
  },
  {
    title: 'Dominio del idioma Inglés - B1',
    issuer: 'UPN - 2025',
    badge: 'https://www.upn.edu.pe/sites/default/files/logo-upn-nuevo.svg',
    image: '/ingles.PNG',
  },
]

export const projects = [
  {
    title: 'Detección de productos con vision computacional',
    description: 'Detección de productos de un supermercado con visión computacional - YOLOv8.',
    tech: ['Python', 'Yolov8', 'Machine Learning'],
    link: 'https://github.com/OmarFelis/TesisOmarIASupermercado',
    linkLabel: 'GitHub',
    imagesIndex: 0,
  },
  {
    title: 'Proyectos transformador de archivos de liquidación BBVA to BCP',
    description: 'Web para transformar archivos de liquidacion del BBVA para realizar pagos masivos a BCP',
    tech: ['Python', 'Flask', 'Desarrollo Web', 'Visual Basic'],
    link: 'https://github.com/OmarFelis/archivo_liq_bbvtobcp',
    linkLabel: 'GitHub',
    imagesIndex: 1,
  },
  {
    title: 'Tienda Virtual - GiampierShop (En Producción)',
    description: 'Plataforma web virtual para vender ropa de baños y bikinis',
    tech: ['HTML', 'CSS', 'Desarrollo Web', 'Python', 'MYSQL'],
    link: 'https://giampiershop.shop/index.html',
    linkLabel: 'Ver Página',
    imagesIndex: 2,
  },
]

export const navLinks = [
  { id: 'sobre-mi', label: 'Sobre Mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]
