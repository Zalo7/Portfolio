import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className="experience" id='Experience'>
        <div className="achievement">
        <div className="circle" >4+</div>
        <span>learned</span>
        <span>Languages</span>
    </div>
    <div className="achievement">
    <div className="circle">5+</div>
    <span>completed</span>
    <span>Projects</span>
       </div>
       <div className="achievement">
           <div className="circle">10+</div>
           <span>skilled</span>
           <span>Technologies</span>
       </div>
      </div>
  )
}

export default Experience