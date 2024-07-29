import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome'
import Header from './components/header/Header.jsx'
import CircularDemo from './components/carousel/carousel.jsx'
import Toggle from './components/toglle-tab/toglle.jsx'
import ProjectModal from './components/modal/modal.jsx'
import Card from './components/card/card.jsx'
import Skill from './components/skill/skill.jsx'
import ContactForm from './components/contactForm/contactForm.jsx'
import Footer from './components/footer/footer.jsx'
import { fetchData } from './components/fetch/fetch.jsx'
import { Link as ScrollLink, Element } from 'react-scroll'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import './App.scss'

function App() {
  const [data, setData] = useState([])
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData(`${process.env.PUBLIC_URL}/data/data.json`)
        const updatedData = data.map((item) => ({
          ...item,
          imageUrl: `${process.env.PUBLIC_URL}${item.imageUrl}`,
        }))
        setData(updatedData)

        const projects = await fetchData(
          `${process.env.PUBLIC_URL}/data/projects.json`
        )
        const updatedProjects = projects.map((project) => ({
          ...project,
          mainImage: `${process.env.PUBLIC_URL}${project.mainImage}`,
          images: project.images.map(
            (image) => `${process.env.PUBLIC_URL}${image}`
          ),
        }))
        setProjects(updatedProjects)

        const skills = await fetchData(
          `${process.env.PUBLIC_URL}/data/skills.json`
        )
        const updatedSkills = skills.map((skill) => ({
          ...skill,
          imageUrl: `${process.env.PUBLIC_URL}${skill.imageUrl}`,
        }))
        setSkills(updatedSkills)
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error)
      }
    }

    loadData()
  }, [])

  const openModal = (project) => {
    setSelectedProject(project)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedProject(null)
  }

  return (
    <div id="main1">
      <Header />
      <section id="carousel">
        <CircularDemo />
      </section>
      <section id="a-propos-title">
        <h2>À propos</h2>
      </section>
      <section id="section-a-propos">
        <div id="tab1-wrapper">
          {data.map((contact, index) => (
            <Toggle
              title={contact.title}
              content={contact.content}
              key={`${contact.title}-${index}`}
              imageUrl={contact.imageUrl}
            />
          ))}
        </div>
      </section>
      <section id="section-portfolio">
        <section id="portfolio-title">
          <h2>Portfolio</h2>
          <div id="card-wrapper">
            {projects.map((project, index) => (
              <Card
                key={index}
                imageUrl={project.images[0]}
                title={project.title}
                message="Cliquez pour en voir plus"
                onClick={() => openModal(project)}
              />
            ))}
          </div>
        </section>
      </section>
      <ProjectModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        project={selectedProject}
      />
      <section id="section-skills">
        <section id="skills-title">
          <h2>Skills</h2>
        </section>
        <div id="skills-wrapper">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              imageUrl={skill.imageUrl}
              skillName={skill.skillName}
            />
          ))}
        </div>
      </section>
      <section id="section-contact">
        <section id="contact-title">
          <h2>Contact</h2>
        </section>
        <ContactForm />
      </section>
      <Footer />
    </div>
  )
}

export default App
