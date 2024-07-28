import React from 'react'
import Modal from 'react-modal'
import './modal.scss'

function ProjectModal({ isOpen, onRequestClose, project }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="project-modal"
      overlayClassName="project-modal-overlay"
    >
      {project && (
        <div className="modal-content">
          <div className="header">
            <div className="main-image">
              <img src={project.mainImage} alt={project.title} />
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul>
                {project.techUsed.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              {project.gitUrl && (
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noonpener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
          <div className="project-images">
            {project.images.map((image, index) => (
              <img src={image} alt={`${project.title}-${index}`} key={index} />
            ))}
          </div>
        </div>
      )}
    </Modal>
  )
}

export default ProjectModal
