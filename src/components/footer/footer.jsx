import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://github.com/quentours"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/quentin-guihard-b421a4217/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
        <p>Réalisé par Quentin Guihard</p>
      </div>
    </footer>
  )
}

export default Footer
