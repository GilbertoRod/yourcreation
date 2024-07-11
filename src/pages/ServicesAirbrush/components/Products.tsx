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
import denim11 from '../../../assets/Airbrush/denim11.jpg'
import denim12 from '../../../assets/Airbrush/denim12.jpg'
import denim13 from '../../../assets/Airbrush/denim13.jpg'
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
import portrait1 from '../../../assets/Airbrush/p1.jpg'
import portrait2 from '../../../assets/Airbrush/p2.jpg'
import portrait3 from '../../../assets/Airbrush/p3.jpg'
import portrait4 from '../../../assets/Airbrush/p4.jpg'
import portrait5 from '../../../assets/Airbrush/p5.jpg'
import portrait6 from '../../../assets/Airbrush/p6.jpg'
import portrait7 from '../../../assets/Airbrush/p7.jpg'
import portrait8 from '../../../assets/Airbrush/p8.jpg'
import portrait9 from '../../../assets/Airbrush/p9.jpg'
import portrait10 from '../../../assets/Airbrush/p10.jpg'
import portrait11 from '../../../assets/Airbrush/p11.jpg'
import portrait12 from '../../../assets/Airbrush/p12.jpg'
import portrait13 from '../../../assets/Airbrush/p13.jpg'
import portrait14 from '../../../assets/Airbrush/p14.jpg'
import portrait15 from '../../../assets/Airbrush/p15.jpg'
import portrait16 from '../../../assets/Airbrush/p16.jpg'
import portrait17 from '../../../assets/Airbrush/p17.jpg'
import portrait18 from '../../../assets/Airbrush/p18.jpg'
import portrait19 from '../../../assets/Airbrush/p19.jpg'
import portrait20 from '../../../assets/Airbrush/p20.jpg'
import portrait21 from '../../../assets/Airbrush/p21.jpg'
import portrait22 from '../../../assets/Airbrush/p22.jpg'
import portrait23 from '../../../assets/Airbrush/p23.jpg'
import portrait24 from '../../../assets/Airbrush/p24.jpg'
import portrait25 from '../../../assets/Airbrush/p25.jpg'
import portrait26 from '../../../assets/Airbrush/p26.jpg'
import portrait27 from '../../../assets/Airbrush/p27.jpg'
import portrait28 from '../../../assets/Airbrush/p28.jpg'
import portrait29 from '../../../assets/Airbrush/p29.jpg'
import portrait30 from '../../../assets/Airbrush/p30.jpg'
import portrait31 from '../../../assets/Airbrush/p31.jpg'
import portrait32 from '../../../assets/Airbrush/p32.jpg'
import portrait33 from '../../../assets/Airbrush/p33.jpg'
import portrait34 from '../../../assets/Airbrush/p34.jpg'
import portrait35 from '../../../assets/Airbrush/p35.jpg'
import portrait36 from '../../../assets/Airbrush/p36.jpg'
import portrait37 from '../../../assets/Airbrush/p37.jpg'
import portrait38 from '../../../assets/Airbrush/p38.jpg'
import portrait39 from '../../../assets/Airbrush/p39.jpg'
import portrait40 from '../../../assets/Airbrush/p40.jpg'
import portrait41 from '../../../assets/Airbrush/p41.jpg'
import portrait42 from '../../../assets/Airbrush/p42.jpg'
import portrait43 from '../../../assets/Airbrush/p43.jpg'
import portrait44 from '../../../assets/Airbrush/p44.jpg'
import portrait45 from '../../../assets/Airbrush/p45.jpg'
import portrait46 from '../../../assets/Airbrush/p46.jpg'
import portrait47 from '../../../assets/Airbrush/p47.jpg'
import portrait48 from '../../../assets/Airbrush/p48.jpg'
import portrait49 from '../../../assets/Airbrush/p49.jpg'
import portrait50 from '../../../assets/Airbrush/p50.jpg'
import portrait51 from '../../../assets/Airbrush/p51.jpg'
import portrait52 from '../../../assets/Airbrush/p52.jpg'

import './Swiper.css'


function AirbrushProducts() {
  return (
    <div className='airbrush-products-container'>
        <div className='airbrush-products-content-wrapper'>
            <h1 className='airbrush-products-title'>OUR PRODUCTS</h1>
            <p className='airbrush-products-subtitle'>SOME OF OUR PREVIOUS WORK</p>
            {/* <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>CARTOON &amp; MOVIE CHARACTER PORTRAITS</h1>
                <AirbrushSlide slides={[foot1,foot2,foot2a,foot3,foot4,foot5,foot6,foot7,foot8,foot9,foot10,foot11,foot12,foot13]} />
            </div>


*/}
            <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>PORTRAITS</h1>
                <AirbrushSlide slides={[
                  {title:"Black and White Canvas Portrait",price:60,image:portrait2},
                  {title:"Detailed Portrait With Red Letters",price:100,image:portrait3},
                  {title:"Pet Portrait With Big Letters",price:90,image:portrait4},
                  {title:"Rest In Pardise Full Size Portrait with wings & 2 Reference Pictures",price:120,image:portrait5},
                  {title:"Rest In Heaven Portrait with Wings",price:80,image:portrait6},
                  {title:"Colored Full-face Canvas Portrait",price:70,image:portrait7},
                  {title:"Detailed Face & Hair Tank Top Portrait",price:100,image:portrait8},
                  {title:"Black & White, Blue Tint, Angel Wings Portrait",price:150,image:portrait9},
                  {title:"Full-Face Detailed Portrait on Denim",price:140,image:denim9},
                  {title:"Dripping Colored Portrait With light Blue Tint Wings",price:200,image:portrait10},
                  {title:"Four Person Exclusive Portrait",price:250,image:portrait11},
                  {title:"Full Head portrait with Colored shadow",price:200,image:portrait12},
                  {title:"Exclusive R.I.P Nipsey Hustle Portrait",price:300,image:portrait13},
                  {title:"Full Body Portrait with outline",price:80,image:portrait14},
                  {title:"TLC NO Scrubs exclusive Portrait",price:250,image:portrait15},
                  {title:"Full T-Shirt Multi Color R.I.P Portrait",price:200,image:portrait16},
                  {title:"Rest In Heaven Pink Accent Portrait",price:80,image:portrait17},
                  {title:"Top Body Portrait with yellow shadow",price:70,image:portrait18},
                  {title:"Two Person Portrait with Bubble background",price:120,image:portrait19},
                  {title:"Black & White Hand on Face Portrait",price:80,image:portrait20},
                  {title:"Top Half Detailed Portrait with Blue Letters",price:120,image:portrait21},
                  {title:"Face Portrait with Star Text & Background",price:120,image:portrait22},
                  {title:"Black & White Portrait On White T-Shirt ",price:90,image:portrait23},
                  {title:"Blue Background top Half Portrait with Name",price:70,image:portrait24},
                  {title:"Two Pet Portrait on Colored Shirt",price:60,image:portrait25},
                  {title:"Football Player Canvas Portrait",price:100,image:portrait26},
                  {title:"Pet Portrait on a Pillow",price:50,image:portrait27},
                  {title:"Self Portrait with two Color Accents & Name",price:80,image:portrait28},
                  {title:"Two Person Colored Portrait on Canvas",price:70,image:portrait29},
                  {title:"Black & White Portrait on a Black T-Shirt",price:60,image:portrait30},
                  {title:"Black & White Two Person Portrait on Canvas",price:70,image:portrait31},
                  {title:"Exclusive Detailed Nipsey Hustle Portrait on Denim Jacket",price:300,image:denim11},
                  {title:"Black & White two person Wedding Portrait on Canvas",price:90,image:portrait32},
                  {title:"R.I.P Two Person Portrait on Basketball",price:60,image:portrait33},
                  {title:"Detailed Portrait on Building wall",price:200,image:portrait34},
                  {title:"Detailed Background Exclusive Black Mamba Portrait on Canvas",price:250,image:portrait35},
                  {title:"Self Portrait with white shadow & two colored text",price:150,image:portrait36},
                  {title:"Colored & Detailed Canvas Portrait",price:150,image:portrait37},
                  {title:"Detailed Football player Portrait with big text",price:130,image:denim7},
                  {title:"Family portrait on canvas",price:190,image:portrait38},
                  {title:"Fairy Portrait on Canvas",price:150,image:portrait39},
                  {title:"Black & White Face canvas portrait",price:100,image:portrait40},
                  {title:"Cartoon Morph portrait with Black Text",price:80,image:portrait41},
                  {title:"Detailed Angel Baby Portrait on Canvas",price:100,image:portrait42},
                  {title:"Two Person Selfie Portrait on Canvas",price:150,image:portrait43},
                  {title:"Family of 3 Portrait on canvas",price:120,image:portrait44},
                  {title:"Two Shadows, Self Portrait on Full Front T-Shirt",price:140,image:portrait45},
                  {title:"Two Shadows, Self Portrait on Full Front T-Shirt",price:140,image:portrait46},
                  {title:"Detailed Portrait on T-Shirt with shadow and text",price:120,image:portrait47},
                  {title:"Two Person Portrait with Text Around",price:120,image:portrait48},
                  {title:"Two Person Dating Portrait on Canvas",price:150,image:portrait49},
                  {title:"Full T-shirt Detailed Portrait with colored clothing",price:130,image:portrait50},
                  {title:"Giant Portrait on Entire T-Shirt",price:150,image:portrait51},
                  {title:"Mod Portrait on t-shirt",price:150,image:portrait52},
                  {title:"Portrait with background splash colors",price:100,image:denim12},
                  {title:"Gray Portrait on black with colored shadow and text",price:90,image:portrait1}]} />
            </div>

            <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>BIRTHDAYS, QUINCEA&#209;ERAS, & SWEET 16s</h1>
                <AirbrushSlide slides={[
                  {title:"Rainbow Roller Skate Birthday T-Shirt",price:35,image:bday1},
                  {title:"Birthday Cartoon Mix",price:40,image:bday2},
                  {title:"Birthday Super Hero Cartoon Mix",price:40,image:bday3},
                  {title:"Pink Roller Skate Birthday T-Shirt",price:35,image:bday4},
                  {title:"Blue Roller Skate Birthday T-Shirt",price:35,image:bday5},
                  {title:"Trolls Birthday Jean Jacket",price:100,images:[bday6a,bday6b]},
                  {title:"Sonic Birthday T-Shirt",price:45,images:[bday7a,bday7b]},
                  {title:"Block Font Birthday T-Shirt & Pants",price:80,images:[bday9a,bday9b]},
                  {title:"Birthday Neon Colors T-Shirt",price:45,image:bday10},
                  {title:"Boss Baby Birthday Shirt & Pants",price:60,image:bday11},
                  {title:"Truck Cartoon Birthday T-shirt & Shorts",price:60,image:bday12},
                  {title:"DTG Airbrush Mix Birthday T-shirt",price:25,image:bday13},
                  {title:"Cookie Monster Cartoon Birthday T-Shirt & Shorts",price:60,image:bday14},
                  {title:"Powerpuff Girls Cartoon Birthday T-Shirt",price:50,images:[bday15a,bday15b]},
                  {title:"Paw Patrol Birthday Girl T-shirt",price:40,images:[bday16a,bday16b]},
                  {title:"Shimmer and Shine Cartoon Birthday T-Shirt",price:50,image:bday17},
                  {title:"My Little Pony Cartoon Birthday T-Shirt ",price:45,image:bday18},
                  {title:"Smurf Cartoon Birithday Shirt",price:40,image:bday19},
                  {title:"Trolls Cartoon Birthday T-Shirt",price:40,image:bday20},
                  {title:"Quinceañera Small Crown T-Shirt",price:35,image:bdayq1},
                  {title:"Quinceañera Big Crown T-Shirt",price:35,image:bdayq2},
                  {title:"Quinceañera Big Gold Crown T-Shirt",price:35,image:bdayq3},
                  {title:"Quinceanera Front and Name on Back T-Shirt",price:45,images:[bdayq4a,bdayq4b]},
                  {title:"Sweet 16 Front & Back Pink Airbrush T-Shirt",price:45,images:[bdays1b,bdays1a]},
                  
                  {title:"Sweet 16 Huge Font T-Shirt",price:50,image:bdays2},
                  {title:"Sweet 16 Blue Airbrush T-shirt",price:40,image:bdays3}]} />
            </div> 
            <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>SHOES & SKATES</h1>
                <AirbrushSlide slides={
                  [{title:"Dragon Ball Z Portrait Shoes",price:120,image:foot1},
                  {title:"Cartoon Character Shoes",price:50,image:foot2},
                  {title:"Dragon & Green Fire Shoes",price:80,image:foot3},
                  {title:"Airbrushed Text Roller Skates",price:50,image:foot4},
                  {title:"Pink Phoenix Drill Boots",price:60,image:foot5},
                  {title:"Rainbow Name Roller Skates",price:50,image:foot6},
                  {title:"Rose Quinceañera Shoes",price:70,image:foot7},
                  {title:"Frozen Olaf Shoes",price:60,image:foot8},
                  {title:"Minion Cartoon Shoes",price:80,image:foot9},
                  {title:"Block Text & Dallas Skyline Shoes",price:60,image:foot10},
                  {title:"Joker Portrait & Flame Shoes",price:100,image:foot11},
                  {title:"Mario & Luigi Cartoon Shoes",price:80,image:foot12},
                  {title:"Quinceañera Shoes",price:50,image:foot13},
                  
                  
                  
                  
                  
                  ]} />
            </div>
            {/* <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>DENIM</h1>
                <AirbrushSlide slides={[denim1,denim2,denim3,denim4,denim5f,denim5b,denim6,denim7,denim8,denim9,denim10,denim11,denim12,denim13]} />
            </div> */}

        </div>

    </div>
  )
}

export default AirbrushProducts







type Props={
  slides:{title:string;
          image?:string;
          images?:string[];
          price:number}[]
}
function AirbrushSlide({slides}: Props) {

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

        grabCursor={true}
        speed={400}
        autoplay={{
          delay: 4000, 
          disableOnInteraction: true, // Continue autoplay after user interactions
          pauseOnMouseEnter: true, // Pause autoplay on mouse hover
        }}
        modules={[FreeMode,Navigation, Autoplay]}
    >
      {slides.map((slide, idx)=>(
      <SwiperSlide className='swiper-slide-flex'>
        <div className='products-slider-element-container'>
          {slide.images?<img className='products-slider-img' alt='denim' src={slide.images[0]}/>:<img className='products-slider-img' alt='denim' src={slide.image}/>}
          <p className='product-slider-title'>{slide.title.toUpperCase()}</p>
          <p className='product-slider-amount'>From &#36;{slide.price} & up</p>
          <button className='product-slider-btn'>ORDER SIMILAR</button>
        </div>

        
      </SwiperSlide>

      ))}

    </Swiper>
  )
}





