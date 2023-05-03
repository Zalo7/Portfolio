import React from 'react'
import './Footer.css'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>gonzalolorenzon@gmail.com</span>
            <div className="f-icons">
            <a href='https://github.com/Zalo7' target="_blank" rel='noopener noreferrer'>
                <Github color='white' size='6rem'/>
                </a>
                <a href='https://www.linkedin.com/in/gonzalo-lorenzon-85b40a20b/' target="_blank" rel='noopener noreferrer'>
                <Linkedin color='white' size='6rem'/>
                </a>
            </div>
        </div>
    </div>
  ) 
}

export default Footer