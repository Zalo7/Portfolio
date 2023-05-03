import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import purple from '../../img/purple.png';
import grey from '../../img/grey.png';
import man from '../../img/man.png'; 
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import crown from '../../img/crown.png'
import thumb from '../../img/thumbup.png'
import glassemoji from '../../img/glassesimoji.png'
import { themeContext } from '../../Context';
import {motion} from 'framer-motion' 

const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration: 2, type: 'spring'}
  return (
   <div className="intro">
       <div className="i-left">
      <div className="i-name">
          <span style= {{color: darkMode? 'white': ''}}>Hi! I am</span>
          <span>Gonzalo Lorenzon</span>
          <span>
              Full Stack Developer with excellent academic experience
              with a lot of aspiration to create and learn new things
          </span>
      </div>

      <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <a href='https://github.com/Zalo7' target="_blank" rel='noopener noreferrer'>
            <img src={Github} alt="" />
            </a>
            <a href='https://www.linkedin.com/in/gonzalo-lorenzon-85b40a20b/' target="_blank" rel='noopener noreferrer'>
            <img src={LinkedIn} alt="" />
            </a>
        </div>
       </div>
       <div className="i-right">

           
           <img src={purple} alt="" />
           <img src={grey} alt="" />
           <img src={man} alt="" />
           <motion.img
           initial={{left: '-36%'}}
           whileInView= {{left: '-14%'}}
           transition={transition}
            src={glassemoji}
            className='floating-glasses'
             alt=""
              />
           <motion.div
           initial={{top: '-4%', left: '74%'}}
           whileInView={{left: '68%'}}
           transition={transition}
            className='floating-div'
            >
               <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
           </motion.div>
           <motion.div
           initial={{top: '-10%', left: '50%'}}
           whileInView={{left: '30%'}}
           transition={transition}

            style={{top: '-8%', left: '33%'}}
            className='floating-div'
            >
           <FloatingDiv image={thumb} txt1='Proficient' txt2='English' />
       </motion.div>
       {/*blur divs*/}
       <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
       <div className="blur" style={{background: "#C1F5FF", top: '17rem', width: '21rem', height: '11rem' }}></div>
       </div>
   </div>
  )
}

export default Intro