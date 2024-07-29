import React, { useState } from 'react'
import { Carousel } from 'primereact/carousel'
import './carousel.scss'

export default function CircularDemo() {
  const [images] = useState([
    {
      id: 1,
      name: 'image 1',
      url: `${process.env.PUBLIC_URL}/images/carousel/desktop_booki.webp`,
      description: 'Projet Booki : HTML et CSS',
    },
    {
      id: 2,
      name: 'image 2',
      url: `${process.env.PUBLIC_URL}/images/carousel/p3_desktop.webp`,
      description: 'Projet Sophie Buel : Javascript ',
    },
    {
      id: 3,
      name: 'image 3',
      url: `${process.env.PUBLIC_URL}/images/carousel/p5_desktop.webp`,
      description: 'Projet Kasa :React',
    },
    {
      id: 4,
      name: 'image 4',
      url: `${process.env.PUBLIC_URL}/images/carousel/p6_desktop.webp`,
      description: 'Projet Mon vieux grimoire : Back-end et création d une API',
    },
    {
      id: 5,
      name: 'image 5',
      url: `${process.env.PUBLIC_URL}/images/carousel/p7_kanban.webp`,
      description: 'Projet Menu Maker Qwenta : Gestion de projet',
    },
  ])

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  const imageTemplate = (image) => {
    return (
      <div className="carousel-item text-center p-3">
        <div className="carousel-image-container">
          <img src={image.url} alt={image.name} className="carousel-image" />
          <p className="carousel-description">{image.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <Carousel
        value={images}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={7000}
        itemTemplate={imageTemplate}
      />
    </div>
  )
}
