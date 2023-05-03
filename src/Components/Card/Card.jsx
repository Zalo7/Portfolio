import React from 'react'
import './Card.css'

export const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href='https://www.linkedin.com/in/gonzalo-lorenzon-85b40a20b/' target="_blank" rel='noopener noreferrer'>
        <button className="c-button">LEARN MORE</button>
        </a>
    </div>
  )
}
