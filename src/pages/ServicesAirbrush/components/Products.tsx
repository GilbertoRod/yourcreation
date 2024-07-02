import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation,Autoplay } from 'swiper/modules';
import denim1 from '../../../assets/Airbrush/denim1.jpg'
import denim2 from '../../../assets/Airbrush/denim2.jpg'
import denim3 from '../../../assets/Airbrush/denim3.jpg'
import denim4 from '../../../assets/Airbrush/denim4.jpg'
import denim5f from '../../../assets/Airbrush/denim5f.jpg'
import denim5b from '../../../assets/Airbrush/denim5b.jpg'
import denim6 from '../../../assets/Airbrush/denim6.jpg'
import denim7 from '../../../assets/Airbrush/denim7.jpg'
import denim8 from '../../../assets/Airbrush/denim8.jpg'
import denim9 from '../../../assets/Airbrush/denim9.jpg'
import denim10 from '../../../assets/Airbrush/denim10.jpg'
import foot1 from '../../../assets/Airbrush/foot1.jpg'
import foot2 from '../../../assets/Airbrush/foot2.jpg'
import foot2a from '../../../assets/Airbrush/foot2a.jpg'
import foot3 from '../../../assets/Airbrush/foot3.jpg'
import foot4 from '../../../assets/Airbrush/foot4.jpg'
import foot5 from '../../../assets/Airbrush/foot5.jpg'
import foot6 from '../../../assets/Airbrush/foot6.jpg'
import foot7 from '../../../assets/Airbrush/foot7.jpg'
import foot8 from '../../../assets/Airbrush/foot8.jpg'
import foot9 from '../../../assets/Airbrush/foot9.jpg'
import foot10 from '../../../assets/Airbrush/foot10.jpg'
import foot11 from '../../../assets/Airbrush/foot11.jpg'
import foot12 from '../../../assets/Airbrush/foot12.jpg'
import foot13 from '../../../assets/Airbrush/foot13.jpg'
import bday1 from '../../../assets/Airbrush/bday1.jpg'
import bday2 from '../../../assets/Airbrush/bday2.jpg'
import bday3 from '../../../assets/Airbrush/bday3.jpg'
import bday4 from '../../../assets/Airbrush/bday4.jpg'
import bday5 from '../../../assets/Airbrush/bday5.jpg'
import bday6a from '../../../assets/Airbrush/bday6a.jpg'
import bday6b from '../../../assets/Airbrush/bday6b.jpg'
import bday7a from '../../../assets/Airbrush/bday7a.jpg'
import bday7b from '../../../assets/Airbrush/bday7b.jpg'
import bday8 from '../../../assets/Airbrush/bday8.jpg'
import bday9a from '../../../assets/Airbrush/bday9a.jpg'
import bday9b from '../../../assets/Airbrush/bday9b.jpg'
import bday10 from '../../../assets/Airbrush/bday10.jpg'
import bday11 from '../../../assets/Airbrush/bday11.jpg'
import bday12 from '../../../assets/Airbrush/bday12.jpg'
import bday13 from '../../../assets/Airbrush/bday13.jpg'
import bday14 from '../../../assets/Airbrush/bday14.jpg'
import bday15a from '../../../assets/Airbrush/bday15a.jpg'
import bday15b from '../../../assets/Airbrush/bday15b.jpg'
import bday16a from '../../../assets/Airbrush/bday16a.jpg'
import bday16b from '../../../assets/Airbrush/bday16b.jpg'
import bday17 from '../../../assets/Airbrush/bday17.jpg'
import bday18 from '../../../assets/Airbrush/bday18.jpg'
import bday19 from '../../../assets/Airbrush/bday19.jpg'
import bday20 from '../../../assets/Airbrush/bday20.jpg'
import bdayq1 from '../../../assets/Airbrush/bdayq1.jpg'
import bdayq2 from '../../../assets/Airbrush/bdayq2.jpg'
import bdayq3 from '../../../assets/Airbrush/bdayq3.jpg'
import bdayq4a from '../../../assets/Airbrush/bdayq4a.jpg'
import bdayq4b from '../../../assets/Airbrush/bdayq4b.jpg'
import bdayq5 from '../../../assets/Airbrush/bdayq5.jpg'
import bdays1a from '../../../assets/Airbrush/bdays1a.jpg'
import bdays1b from '../../../assets/Airbrush/bdays1b.jpg'
import bdays2 from '../../../assets/Airbrush/bdays2.jpg'
import bdays3 from '../../../assets/Airbrush/bdays3.jpg'



import './Swiper.css'


function AirbrushProducts() {
  return (
    <div className='airbrush-products-container'>
        <div className='airbrush-products-content-wrapper'>
            <h1 className='airbrush-products-title'>OUR PRODUCTS</h1>
            <p className='airbrush-products-subtitle'>SOME OF OUR PREVIOUS WORK</p>
            <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>BIRTHDAYS, QUINCEA&#209;ERAS, & SWEET 16s</h1>
                <AirbrushSlide images={[bday1,bday2,bday3,bday4,bday5,bday6a,bday6b,bday7a,bday7b,bday8,bday9a,bday9b,bday10,bday11,bday12,bday13,bday14,bday15a,bday15b,bday16a,bday16b,bday17,bday18,bday19,bday20,bdayq1,bdayq2,bdayq3,bdayq4a,bdayq4b,bdayq5,bdays1a,bdays1b,bdays2,bdays3]} />
            </div>
            <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>DENIM</h1>
                <AirbrushSlide images={[denim1,denim2,denim3,denim4,denim5f,denim5b,denim6,denim7,denim8,denim9,denim10]} />
            </div>
            <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>SHOES & SKATES</h1>
                <AirbrushSlide images={[foot1,foot2,foot2a,foot3,foot4,foot5,foot6,foot7,foot8,foot9,foot10,foot11,foot12,foot13]} />
            </div>
        </div>

    </div>
  )
}

export default AirbrushProducts







type Props={
  images:string[]
}
function AirbrushSlide({images}: Props) {

  return (
    <Swiper
        breakpoints={{
          1500:{
            slidesPerView: 4,
            spaceBetween: 15,
            
          },
          860: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          550:{
            slidesPerView: 2,
            spaceBetween: 15
          },
          0:{
            slidesPerView: 1,
            spaceBetween:15
          }
        }}

        freeMode={true}
        pagination={{clickable:true}}
        navigation={true}
        // autoplay={{
        //   delay: 3000, 
        //   disableOnInteraction: true, // Continue autoplay after user interactions
        //   pauseOnMouseEnter: true, // Pause autoplay on mouse hover
        // }}
        modules={[FreeMode, Navigation, Autoplay]}
    >
      {images.map((image, idx)=>(
      <SwiperSlide className='swiper-slide-flex'>
        <img className='products-slider-img' alt='denim' src={image}/>

      </SwiperSlide>

      ))}

    </Swiper>
  )
}





