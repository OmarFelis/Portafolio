import { useEffect } from 'react'

function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!cert) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">&times;</button>
        <div className="modal-header">
          <h3 id="modal-title">{cert.title}</h3>
          <p>{cert.issuer}</p>
        </div>
        <div className="modal-body">
          <img
            src={cert.image}
            alt={cert.title}
            onError={(e) => { e.target.alt = 'Certificado no disponible'; e.target.src = '/vite.svg' }}
          />
        </div>
      </div>
    </div>
  )
}

export default CertModal
