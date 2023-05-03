import React, { useContext } from 'react'
import './Work.css' 
import react from '../../img/react.png'
import css from '../../img/css.png'
import html from '../../img/html.png'
import javascript from '../../img/javascript.png'
import redux from '../../img/redux.png'
import { themeContext } from '../../Context';
import {motion} from 'framer-motion' 
import Link from 'react-scroll/modules/components/Link'


const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
    <div className="awesome">
       <span style={{color: darkMode? 'white': ''}}>Learned all this</span>
       <span>Technologies</span>
       <span>
           Some of the technologies I manage with excellence
           <br />
           React - Redux - HTML - Javascript - Tailwind CSS 
         
       </span>
       
       <Link spy={true} to='Contact' smooth={true} >
       <button className='button s-button' id='hire'>Hire me</button>
       </Link>
       <div className='blur s-blurl' style={{background: "#ABF1FF94"}}></div>

        </div>
        {/* right side */}
        <div className='w-right'>
          <motion.div
          initial={{ rotate:45 }}
          whileInView={{ rotate: 0}}
          viewport={{margin: '-40px'}}
          transition={{duration: 3.5, type: 'spring'}}
           className="w-mainCircle" >
            <div className="w-secCircle">
              <img src={react} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={redux} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={javascript} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={css} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={html} alt="" />
            </div>
          </motion.div>
          {/* background Circles */}
          <div className="w-backCircle violetCircle"></div>
          <div className="w-backCircle greyCircle"></div>

        </div>

    </div>
  )
}

export default Work