import { personalInfo } from '../data/portfolio'

function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2>
          <span className="section-number">01.</span>
          Sobre Mí
        </h2>
        <div className="about-content fade-in">
          <div className="about-text">
            <p>
              Soy un estudiante de Pregrado <strong>(21 años)</strong> en la Universidad Privada del Norte (UPN) 
              culminando la carrera de <span className="highlight">Ingeniería de Sistemas Computacionales</span>.
            </p>
            <p>
              Tengo experiencia en proyectos del sector de <strong>pagos digitales</strong> con enfoque en 
              transacciones Card Not Present y entornos eCommerce. Actualmente me desempeño como practicante 
              en <span className="highlight">Alignet S.A.C.</span>
            </p>
            <p>
              El desarrollo de mis habilidades profesionales es motivo para seguir creciendo en mi formación 
              y en el avance de mis capacidades laborales.
            </p>
          </div>
          <div className="about-cv">
            <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
