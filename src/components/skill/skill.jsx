import React from 'react'
import './skill.scss'

const Skill = ({ imageUrl, skillName }) => {
  return (
    <div className="skill">
      <img src={imageUrl} alt={skillName} className="skill-image" />
      <p className="skill-name">{skillName}</p>
    </div>
  )
}
export default Skill
