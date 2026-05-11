import { certifications } from '../data/portfolio'

function Certifications({ onOpenModal }) {
  return (
    <section id="certificaciones" className="section certifications-section">
      <div className="container">
        <h2>
          <span className="section-number">04.</span>
          Certificaciones
        </h2>
        <div className="certificates-grid">
          {certifications.map((cert, index) => (
            <div className="certificate-item fade-in" key={index}>
              <div className="cert-preview">
                <img
                  src={cert.badge}
                  alt={cert.title}
                  loading="lazy"
                  onError={(e) => { e.target.src = '/vite.svg' }}
                />
                <div className="cert-overlay">
                  <button
                    className="view-cert-btn"
                    onClick={() => onOpenModal({
                      title: cert.title,
                      image: cert.image,
                      issuer: cert.issuer,
                    })}
                  >
                    Ver Certificado
                  </button>
                </div>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
