import React from 'react'
import './Portifolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Amazona from "../../img/Projeto_Amazona.png";
import Portifolio_Image from "../../img/Projeto_Portifolio.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css'

function Portifolio() {
  return (
     <div className="portifolio" id="Portifolio">
        <span>Projetos Recentes</span>
        <span>Portfolio</span>

        <Swiper spaceBetween={10} slidesPerView={3} granCursor={true} className='portifolio-slider'>
          <SwiperSlide>
               <a href="https://github.com/alexandre17git/amazona.git">
               <img src={Amazona} alt="" />
               </a>
          </SwiperSlide>
          <SwiperSlide>
               <img src={Portifolio_Image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img src={MusicApp} alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img src={HOC} alt="" />
          </SwiperSlide>
        </Swiper>
     </div>
  )
}

export default Portifolio