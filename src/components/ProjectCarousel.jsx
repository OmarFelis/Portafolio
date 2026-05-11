import { useState } from 'react'

function ProjectCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="project-carousel">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Vista previa del proyecto ${index + 1}`}
            loading="lazy"
            onError={(e) => { e.target.src = '/vite.svg'; e.target.alt = 'Imagen no disponible' }}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Imagen anterior">&#10094;</button>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Imagen siguiente">&#10095;</button>
          <div className="carousel-indicators" role="tablist">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a imagen ${index + 1}`}
                role="tab"
                aria-selected={currentIndex === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ProjectCarousel
