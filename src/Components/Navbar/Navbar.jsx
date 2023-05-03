import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className='n-left'>
            <div className="n-name">Gonzalo</div>
            <Toggle/>
        </div>
        <div className='n-right'>
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true} >
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} >
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonial' smooth={true} >
                    <li>Testimonials</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className='button n-button'>
                Contact
            </button>
            </Link>
            <a href='https://certificates.soyhenry.com/cert?id=7150f7eb-5211-4f4a-b3cf-9e43a2be7c04' target="_blank" rel='noopener noreferrer'>
            <button className='button k-button'>
                 Certificate
            </button>
            </a>
        </div>
    </div>
  )
}

export default Navbar