import React, { useState } from 'react'
import './card.scss'

function Card({ imageUrl, title, message, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
        <p className="card-message">{message}</p>
      </div>
    </div>
  )
}

export default Card
