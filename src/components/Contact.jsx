import { personalInfo } from '../data/portfolio'

function Contact() {
  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <h2>
          <span className="section-number">06.</span>
          Contacto
        </h2>
        <div className="contact-content fade-in">
          <p>
            ¿Interesado en trabajar juntos? Mi bandeja de entrada siempre está abierta.
            Ya sea que tengas una pregunta o simplemente quieras saludar, haré lo posible por responderte.
          </p>
          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`} className="btn">
              Enviar Email
            </a>
            <a href={personalInfo.linkedin} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={personalInfo.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
