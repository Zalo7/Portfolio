import React, { useContext } from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import ScreenPg from "../../img/ScreenPg.png"
import ScreenDogs from "../../img/ScreenDogs.png"
import ScreenCountries from "../../img/ScreenCountries.png"
import ScreenFood from "../../img/ScreenFood2.png"
import 'swiper/css'
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
    
    {/* heading */}
    <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
    <span>Portfolio </span>

    {/* slider */}
    <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'
    >
      <SwiperSlide>
      <a href='https://www.linkedin.com/feed/update/urn:li:activity:6929448154949922816/' target="_blank" rel='noopener noreferrer'>
        <img src={ScreenPg} alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a href='https://github.com/Zalo7/PI-Food' target="_blank" rel='noopener noreferrer'>
        <img src={ScreenFood} alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a href='https://www.linkedin.com/feed/update/urn:li:activity:6893115116012068864/' target="_blank" rel='noopener noreferrer'>
        <img src={ScreenDogs} alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a href='https://github.com/Zalo7/PI-Countries' target="_blank" rel='noopener noreferrer'>
        <img src={ScreenCountries} alt="" />
        </a>
      </SwiperSlide>

    </Swiper>
    </div>
  )
}

export default Portfolio