import { useState, useEffect } from 'react'
import { personalInfo, heroImages } from '../data/portfolio'

function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-left">
            <div className="image-carousel">
              <div className="carousel-container">
                {heroImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${personalInfo.name} ${index + 1}`}
                    className={`profile-image ${currentImage === index ? 'active' : ''}`}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                ))}
              </div>
              <div className="carousel-dots" role="tablist" aria-label="Fotos de perfil">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentImage === index ? 'active' : ''}`}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Ver foto ${index + 1}`}
                    role="tab"
                    aria-selected={currentImage === index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-content">
              <span className="hero-greeting">Hola, mi nombre es</span>
              <h1>{personalInfo.name}</h1>
              <p className="hero-subtitle">{personalInfo.title}</p>
              <p className="hero-description">{personalInfo.description}</p>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('proyectos')} className="btn">
                  Ver Proyectos
                </button>
                <button onClick={() => scrollToSection('contacto')} className="btn btn-outline">
                  Contacto
                </button>
              </div>
              <div className="hero-social">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
