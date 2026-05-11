import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CertModal from './components/CertModal'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

function App() {
  const [selectedCert, setSelectedCert] = useState(null)

  useScrollReveal()

  const openModal = (cert) => setSelectedCert(cert)
  const closeModal = () => setSelectedCert(null)

  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications onOpenModal={openModal} />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>© 2025 Omar Cárdenas Ayala. Todos los derechos reservados.</p>
        <p className="built-with">Construido con React + Vite</p>
      </footer>
      {selectedCert && <CertModal cert={selectedCert} onClose={closeModal} />}
    </div>
  )
}

export default App
