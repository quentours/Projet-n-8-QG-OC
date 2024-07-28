import React from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import Logo from './Logo.PNG'
import './Header.scss'

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo"></img>
      <nav>
        <ul>
          <li>
            <ScrollLink to="section-a-propos" smooth={true} duration={500}>
              À propos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="section-portfolio" smooth={true} duration={500}>
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="section-skills" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="section-contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
