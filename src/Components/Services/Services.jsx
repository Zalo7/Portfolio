import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { Card } from '../Card/Card';
import Resume from './resume.pdf'
import { themeContext } from '../../Context';
import {motion} from 'framer-motion' 

const Services = () => {
  const transition = {duration : 1, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side*/}
        <div className="awesome">
       <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
       <span>Services</span>
       <span>
       My career and some of the tools that I'm used to work with in my day to day basis.
           <br />
       </span>
       <a href={Resume} download>
       <button className='button s-button'>Download CV</button>
       </a>
       <div className='blur s-blurl' style={{background: "#ABF1FF94"}}></div>

        </div>
        {/* right side*/}
        <div className="cards">

           <motion.div
            initial={{ left: "30rem" }}
           whileInView={{left: '20rem'}}
           transition={transition}
            >
               <Card 
               emoji = {HeartEmoji}
               heading = {'Frontend Developer'}
               detail = {"React, Redux, CSS, HTML, Tailwind, React Native"}
               />
           </motion.div>
           {/*second card*/}
           <motion.div
           initial={{ left: "-11rem", top: "12rem" }}
           whileInView={{left: "1rem"}}
           transition={transition}
            >
           <Card
           emoji={Glasses}
           heading={"Designer"}
           detail={"Adobe Illustrator, Adobe Photoshop, Lightroom"}
           />
           </motion.div>
            {/*third card*/}
            <motion.div
              initial={{ top: "19rem", left: "28rem" }}
            whileInView={{ left: "18rem" }}
            transition={transition}
             >
           <Card
           emoji={Humble}
           heading={"Backend Developer"}
           detail={"Javascript, NodeJS, Typescript, PostgreSQL, Sequelize"}
           />
           </motion.div>
           <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services