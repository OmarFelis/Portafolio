import { experiences } from '../data/portfolio'

function Experience() {
  return (
    <section id="experiencia" className="section experience-section">
      <div className="container">
        <h2>
          <span className="section-number">03.</span>
          Experiencia Laboral
        </h2>
        <div className="experience-company-block fade-in">
          <div className="company-header">
            <img
              src="https://pasarelasdepagos.s3.amazonaws.com/wp-content/uploads/2023/11/Alignet-1.jpg"
              alt="ALIGNET Logo"
              className="company-header-logo"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="company-header-info">
              <h3>ALIGNET</h3>
              <span className="company-duration">1 año 5 meses</span>
              <span className="company-location">Perú</span>
            </div>
          </div>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="experience-card" key={index}>
                <div className="experience-title">
                  <h4>{exp.title}</h4>
                  <span className="experience-type">{exp.type}</span>
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-modality">{exp.modality}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
