import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation,Autoplay } from 'swiper/modules';
import emb1 from '../../../assets/Embroidery/Embroidery1.jpg'
import emb2 from '../../../assets/Embroidery/Embroidery2.jpg'
import emb3 from '../../../assets/Embroidery/Embroidery3.jpg'
import emb4 from '../../../assets/Embroidery/Embroidery4.jpg'
import emb5 from '../../../assets/Embroidery/Embroidery5.jpg'
import emb6 from '../../../assets/Embroidery/Embroidery6.jpg'
import emb7 from '../../../assets/Embroidery/Embroidery7.jpg'
import emb8 from '../../../assets/Embroidery/Embroidery8.jpg'
import emb9 from '../../../assets/Embroidery/Embroidery9.jpg'
import emb10 from '../../../assets/Embroidery/Embroidery10.jpg'






function DTGProducts() {
  return (
    <div className='airbrush-products-container'>



            <div className='airbrush-products-content-wrapper'>
            <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>OUR PREVIOUS WORK</h1>
                <AirbrushSlide slides={
                  [
                    {title:"Embroidered Barbershop logo on shirt",price:8,image:emb1},
                    {title:"Embroidered Name on Pillow Case",price:10,image:emb2},
                    {title:"Embroidered name and Logo on shirt",price:15,image:emb3},
                    {title:"Front Vintage DTG Design",price:12,image:emb4},
                    {title:"Big Embroidered Barbershop logo on Barber Cape",price:10,image:emb5},
                    {title:"Small Embroidered Barbershop logo on Barber Cape",price:5,image:emb6},
                    {title:"Embroidered Initials on Grauation Stole",price:5,image:emb7},
                    {title:"Embroidered Corner School Logo",price:8,image:emb8},
                    {title:"Large embroidered text on Shirt",price:12,image:emb9},
                    {title:"Embroidered name on front of t-shirt",price:5,image:emb10},

                  
                  
                  
                  
                  
                  ]} />
            </div>
            </div>
    </div>
  )
}

export default DTGProducts


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
            {/* <button className='product-slider-btn'>ORDER SIMILAR</button> */}
          </div>
  
          
        </SwiperSlide>
  
        ))}
  
      </Swiper>
    )
  }
  