import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "https://via.placeholder.com/300x300/667eea/ffffff?text=Omar",
    "https://via.placeholder.com/300x300/764ba2/ffffff?text=Perfil", 
    "https://via.placeholder.com/300x300/667eea/ffffff?text=CV"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
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
                  <a href="#experiencia" className="btn">Ver Experiencia</a>
                  <a href="#contacto" className="btn btn-outline">Contacto</a>
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
                  <img src="https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2019/01/11/documentdb.png" alt="DocumentDB" />
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
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Lambda.svg" alt="Lambda" />
                  <span>Lambda</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-EC2.svg" alt="EC2" />
                  <span>EC2</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/AmazonWebservices_Logo.svg" alt="SQS/SNS" />
                  <span>SQS/SNS</span>
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
              <h3>Practicante de Integraciones</h3>
              <p className="company">Alignet S.A.C.</p>
              <p className="period">2025 - Actualidad</p>
              <p>Desarrollo de integraciones en el sector de pagos digitales, enfocado en transacciones Card Not Present y entornos eCommerce.</p>
            </div>
            <div className="card experience-card">
              <h3>Pasante</h3>
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
                <img src="https://via.placeholder.com/300x200/667eea/ffffff?text=CCNA+Certificate" alt="CCNA Certificate" />
                <div className="cert-overlay">
                  <button className="view-cert-btn">Ver Certificado</button>
                </div>
              </div>
              <h3>CCNAv7: Switching, Routing and Wireless Essentials</h3>
              <p>Cisco Networking Academy - 2024</p>
            </div>
            
            <div className="certificate-item">
              <div className="cert-preview">
                <img src="https://via.placeholder.com/300x200/764ba2/ffffff?text=Cybersecurity+Badge" alt="Cybersecurity Badge" />
                <div className="cert-overlay">
                  <button className="view-cert-btn">Ver Certificado</button>
                </div>
              </div>
              <h3>Junior Cybersecurity Analyst Career Path</h3>
              <p>Cisco Networking Academy - 2024</p>
            </div>
            
            <div className="certificate-item">
              <div className="cert-preview">
                <img src="https://via.placeholder.com/300x200/667eea/ffffff?text=JIRA+Badge" alt="JIRA Badge" />
                <div className="cert-overlay">
                  <button className="view-cert-btn">Ver Certificado</button>
                </div>
              </div>
              <h3>Jira Fundamentals Badge</h3>
              <p>Atlassian University - 2024</p>
            </div>
            
            <div className="certificate-item">
              <div className="cert-preview">
                <img src="https://via.placeholder.com/300x200/764ba2/ffffff?text=Python+MediaPipe" alt="Python MediaPipe" />
                <div className="cert-overlay">
                  <button className="view-cert-btn">Ver Certificado</button>
                </div>
              </div>
              <h3>Procesamiento de Imágenes con Python - MediaPipe</h3>
              <p>CHIPTEC - 2025</p>
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
              <h3>Sistemas de Pagos Digitales</h3>
              <p>Desarrollo de integraciones para transacciones Card Not Present en entornos eCommerce</p>
              <div className="project-tech">
                <span>C#</span>
                <span>Java</span>
                <span>REST API</span>
                <span>AWS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/OmarFelis" className="btn">GitHub</a>
              </div>
            </div>
            <div className="card project-card">
              <h3>Proyectos Electrónicos Agrícolas</h3>
              <p>Desarrollo de regaderas automáticas y robots asistentes para agricultores</p>
              <div className="project-tech">
                <span>Python</span>
                <span>JavaScript</span>
                <span>IoT</span>
                <span>Electrónica</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/OmarFelis" className="btn">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section contact-section">
        <div className="container">
          <h2>Contacto</h2>
          <div className="contact-content">
            <p>¿Interesado en trabajar juntos? ¡Hablemos!</p>
            <div className="contact-links">
              <a href="mailto:omardcardenas99@gmail.com" className="btn">Enviar Email</a>
              <a href="https://www.linkedin.com/in/omarcardenas03/" className="btn btn-outline">LinkedIn</a>
              <a href="https://github.com/OmarFelis" className="btn btn-outline">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
