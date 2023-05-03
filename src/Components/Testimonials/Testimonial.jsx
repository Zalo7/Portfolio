import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../../img/Profilepic1.png"
import profile2 from "../../img/Profilepic2.png"
import profile3 from "../../img/Profilepic3.png"
import profile4 from "../../img/Profilepic4.png"
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";


const Testimonial = () => {
  const clients =[
      {
          img: profile2,
          review:
          "During the period of time that I worked with Gonzalo, he proved to be very capable of carrying out the tasks assigned to him, he has a lot of potential and he is also an excellent colleague and person."
      },
      {
          img: profile1,
          review:
          "Gonzalo is an analytical person, always with a good predisposition, in case of any doubt to help someone he is always available. He is always learning new things and improving what he already knows."
      },
      {
        img: profile3,
        review:
        "I worked with Gonzalo on a project, he has been excellent in his work as a Full Stack developer. His willingness to learn and take on new responsibilities is something to be highlighted in any professional field. His initiative to improve aesthetics increased the value of the final product. I felt comfortable working with him."
    },
    {
        img: profile4,
        review:
        "Gonzalo is an intelligent and creative developer, with a taste for challenges and great empathy. I know that any project he works on will have a greater chance of success due to his professionalism, experience and values."
    },
  ]

  return (
    <div className="t-wrapper" id="Testimonial">
        <div className="t-heading">
        <span>Partners always like </span>
        <span> Working </span>
        <span >with me... </span>
        <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
        <div className='blur t-blur2' style={{background: "skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
          {clients.map((client, index)=> {
              return(
                  <SwiperSlide key={index}>
                      <div className="testimonial">
                      <img src={client.img} alt=""/>
                      <span>{client.review}</span>
                      </div>
                  </SwiperSlide> 
                  
              )
          })}
        </Swiper>
    </div>
  )
}

export default Testimonial