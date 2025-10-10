import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentImage, setCurrentImage] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)
  const images = [
    "/sss.PNG",
    "/img2.png",
    "/imgxcv.jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const openModal = (cert) => {
    setSelectedCert(cert)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedCert(null)
  }
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-left">
              <div className="image-carousel">
                <div className="carousel-container">
                  {images.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`Omar Cárdenas ${index + 1}`} 
                      className={`profile-image ${currentImage === index ? 'active' : ''}`} 
                    />
                  ))}
                </div>
                <div className="carousel-dots">
                  {images.map((_, index) => (
                    <span 
                      key={index}
                      className={`dot ${currentImage === index ? 'active' : ''}`}
                      onClick={() => setCurrentImage(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-content">
                <h1>Omar Cárdenas Ayala</h1>
                <p className="hero-subtitle">Estudiante de Ingeniería de Sistemas Computacionales</p>
                <p className="hero-description">
                  Especializado en pagos digitales, desarrollo web y tecnologías cloud. Practicante en Alignet S.A.C.
                </p>
                <div className="hero-buttons">
                  <button onClick={() => scrollToSection('experiencia')} className="btn">Ver Experiencia</button>
                  <button onClick={() => scrollToSection('contacto')} className="btn btn-outline">Contacto</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sobre mí */}
      <section id="sobre-mi" className="section">
        <div className="container">
          <h2>Sobre Mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy un estudiante de Pregrado (21 años) en la Universidad Privada del Norte (UPN) culminando la carrera de sistemas computacionales.
                Tengo experiencia en proyectos del sector de pagos digitales con enfoque en transacciones Card Not Present y entornos eCommerce.
              </p>
              <p>
                El desarrollo de mis habilidades profesionales es motivo para seguir creciendo en mi formación y en el avance de mis capacidades laborales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="section skills-section">
        <div className="container">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>💻 Lenguajes de Programación</h3>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                  <span>C#</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  <span>Python</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                  <span>Java</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>🌐 Desarrollo Web</h3>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <span>React</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />
                  <span>Angular</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                  <span>HTML5</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                  <span>CSS3</span>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>🗄️ Bases de Datos</h3>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" />
                  <span>SQL Server</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                  <span>MySQL</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                  <span>MongoDB</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://icon.icepanel.io/AWS/svg/Database/DocumentDB.svg" alt="DocumentDB" />
                  <span>DocumentDB</span>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>☁️ AWS Cloud</h3>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                  <span>AWS</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg" alt="Lambda" />
                  <span>Lambda</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://icon.icepanel.io/AWS/svg/Compute/EC2.svg" alt="EC2" />
                  <span>EC2</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://icon.icepanel.io/AWS/svg/App-Integration/Simple-Queue-Service.svg" alt="SQS/SNS" />
                  <span>SQS/SNS</span>
                </div>
                  <div className="skill-icon-item">
                      <img src="https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg" alt="AWS S3" />
                      <span>AWS S3</span>
                  </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>🔧 Herramientas & Metodologías</h3>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="JIRA" />
                  <span>JIRA</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" alt="Confluence" />
                  <span>Confluence</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" alt="Bitbucket" />
                  <span>Bitbucket</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  <span>Git</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png" alt="Cisco" />
                  <span>Cisco</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="section experience-section">
        <div className="container">
          <h2>Experiencia Laboral</h2>
          <div className="timeline">
            <div className="card experience-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Practicante de Integraciones</h3>
                </div>
                <div className="company-logo">
                  <img src="https://pasarelasdepagos.s3.amazonaws.com/wp-content/uploads/2023/11/Alignet-1.jpg" alt="Alignet Logo" />
                </div>
              </div>
              <p className="company">Alignet S.A.C.</p>
              <p className="period">2025 - Actualidad</p>
              <p>Desarrollo de integraciones en el sector de pagos digitales, enfocado en transacciones Card Not Present y entornos eCommerce.</p>
            </div>
            <div className="card experience-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Pasante</h3>
                </div>
                <div className="company-logo">
                  <img src="https://pasarelasdepagos.s3.amazonaws.com/wp-content/uploads/2023/11/Alignet-1.jpg" alt="Alignet Logo" />
                </div>
              </div>
              <p className="company">Alignet S.A.C. - Unidad de Negocio de Autenticación</p>
              <p className="period">Agosto 2024 - Noviembre 2024 (320 horas)</p>
              <p>Participación en proyectos de autenticación y seguridad en pagos digitales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section id="certificaciones" className="section">
        <div className="container">
          <h2>Certificaciones</h2>
          <div className="certificates-grid">
            <div className="certificate-item">
              <div className="cert-preview">
                <img src="https://images.credly.com/size/680x680/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png" alt="CCNA Certificate" />
                <div className="cert-overlay">
                  <button 
                    className="view-cert-btn"
                    onClick={() => openModal({
                      title: 'CCNAv7: Switching, Routing and Wireless Essentials',
                      image: 'public/ciscoswitch.PNG',
                      issuer: 'Cisco Networking Academy - 2024'
                    })}
                  >
                    Ver Certificado
                  </button>
                </div>
              </div>
              <h3>CCNAv7: Switching, Routing and Wireless Essentials</h3>
              <p>Cisco Networking Academy - 2024</p>
            </div>
            
            <div className="certificate-item">
              <div className="cert-preview">
                <img src="https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/e141b254-6fe2-43f4-a63c-1e0ba3d854f2.png" alt="Cybersecurity Badge" />
                <div className="cert-overlay">
                  <button 
                    className="view-cert-btn"
                    onClick={() => openModal({
                      title: 'Junior Cybersecurity Analyst Career Path',
                      image: 'public/ciscosecurity.PNG',
                      issuer: 'Cisco Networking Academy - 2024'
                    })}
                  >
                    Ver Certificado
                  </button>
                </div>
              </div>
              <h3>Junior Cybersecurity Analyst Career Path</h3>
              <p>Cisco Networking Academy - 2024</p>
            </div>
            
            <div className="certificate-item">
              <div className="cert-preview">
                <img src="https://cdn.exceedlms.com/uploads/certifications/badges/28613/original/uni-credential-emblem-jirafundamentals.png?1624917008&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uZXhjZWVkbG1zLmNvbS91cGxvYWRzL2NlcnRpZmljYXRpb25zL2JhZGdlcy8yODYxMy9vcmlnaW5hbC91bmktY3JlZGVudGlhbC1lbWJsZW0tamlyYWZ1bmRhbWVudGFscy5wbmc~MTYyNDkxNzAwOCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2MDExODc5NX19fV19&Signature=W2GBB0mEo8SN1JCvYtbkKPMKGpo15L7pQ9Awz8o4r0e2ddLPEFU8ePcyQGDSlz8AKoER3qLP7CO~boGDTpQp0NI2T6XkcdgAhxUz98-GapZE1YB5CCOmshc2I27mBYJFIX6On3NqTtxDlppbvO0R3lyPab0LJqhFlD~ZsA-SQ32GG1hvhMpNC8LpGcXvnGf95k0yjL1WtybOiWqmXeLU4vcTyLc8mU6kHFnGnajF8LCaPw6YFh-mx9SbcSlG6N6EpeUiI98acepvT45M5wU3tx3Yd~OsHo7wmmvJK7EnLwLlv2dfQEIKTF8dAxKL3mI7IoXqhz56DxbzXqNTxSKcBw__&Key-Pair-Id=APKAJINUZDMKZJI5I6DA" alt="JIRA Badge" />
                <div className="cert-overlay">
                  <button 
                    className="view-cert-btn"
                    onClick={() => openModal({
                      title: 'Jira Fundamentals Badge',
                      image: 'public/jirabdg.png',
                      issuer: 'Atlassian University - 2024'
                    })}
                  >
                    Ver Certificado
                  </button>
                </div>
              </div>
              <h3>Jira Fundamentals Badge</h3>
              <p>Atlassian University - 2024</p>
            </div>
            
            <div className="certificate-item">
              <div className="cert-preview">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python MediaPipe" />
                <div className="cert-overlay">
                  <button 
                    className="view-cert-btn"
                    onClick={() => openModal({
                      title: 'Procesamiento de Imágenes con Python - MediaPipe',
                      image: 'public/chiptec.PNG',
                      issuer: 'CHIPTEC - 2025'
                    })}
                  >
                    Ver Certificado
                  </button>
                </div>
              </div>
              <h3>Procesamiento de Imágenes con Python - MediaPipe</h3>
              <p>CHIPTEC - 2025</p>
            </div>

            <div className="certificate-item">
              <div className="cert-preview">
                <img src="https://www.upn.edu.pe/sites/default/files/logo-upn-nuevo.svg" alt="Ingles B1" />
                <div className="cert-overlay">
                  <button
                      className="view-cert-btn"
                      onClick={() => openModal({
                        title: 'Idioma Inglés - B1',
                        image: 'public/ingles.PNG',
                        issuer: 'UPN - 2025'
                      })}
                  >
                    Ver Certificado
                  </button>
                </div>
              </div>
              <h3>Dominio del idioma Inglés - B1</h3>
              <p>UPN - 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="section">
        <div className="container">
          <h2>Proyectos</h2>
          <div className="grid grid-2">
            <div className="card project-card">
              <h3>Detección de productos con vision computacional</h3>
              <p>Detección de productos de un supermercado con visión computacional - YOLOv8.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Yolov8</span>
                <span>Machine Learning</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/OmarFelis/TesisOmarIASupermercado" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="card project-card">
              <h3>Proyectos transformador de archivos de liquidación BBVA to BCP</h3>
              <p>Web para transformar archivos de liquidacion del BBVA para realizar pagos masivos a BCP</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Flask</span>
                <span>Desarrollo Web</span>
                <span>Visual Basic</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/OmarFelis/archivo_liq_bbvtobcp" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section contact-section">
        <div className="container">
          <h2>Contacto</h2>
          <h3>936156493</h3>
          <div className="contact-content">
            <p>¿Interesado en trabajar juntos? ¡Hablemos!</p>
            <div className="contact-links">
              <a href="mailto:omardcardenas99@gmail.com" className="btn">Enviar Email</a>
              <a href="https://www.linkedin.com/in/omarcardenas03/" className="btn btn-outline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/OmarFelis" className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para certificados */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h3>{selectedCert?.title}</h3>
              <p>{selectedCert?.issuer}</p>
            </div>
            <div className="modal-body">
              <img src={selectedCert?.image} alt={selectedCert?.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
