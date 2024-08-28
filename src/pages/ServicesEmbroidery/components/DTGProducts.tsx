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
                    {title:"Front Vintage DTG Design",price:15,image:emb1},
                    {title:"Front Vintage DTG Design",price:15,image:emb2},
                    {title:"Front Vintage DTG Design",price:15,image:emb3},
                    {title:"Front Vintage DTG Design",price:15,image:emb4},
                    {title:"Front Vintage DTG Design",price:15,image:emb5},
                    {title:"Front Vintage DTG Design",price:15,image:emb6},
                    {title:"Front Vintage DTG Design",price:15,image:emb7},
                    {title:"Front Vintage DTG Design",price:15,image:emb8},
                    {title:"Front Vintage DTG Design",price:15,image:emb9},
                    {title:"Front Vintage DTG Design",price:15,image:emb10},

                  
                  
                  
                  
                  
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
            <button className='product-slider-btn'>ORDER SIMILAR</button>
          </div>
  
          
        </SwiperSlide>
  
        ))}
  
      </Swiper>
    )
  }
  