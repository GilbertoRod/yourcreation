import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation,Autoplay } from 'swiper/modules';
import vin1 from '../../../assets/Vinyl/vinyl1.jpg'
import vin2 from '../../../assets/Vinyl/vinyl2.jpg'
import vin3 from '../../../assets/Vinyl/vinyl3.jpg'
import vin4 from '../../../assets/Vinyl/vinyl4.jpg'
import vin5 from '../../../assets/Vinyl/vinyl5.jpg'
import vin7 from '../../../assets/Vinyl/vinyl7.jpg'
import vin8 from '../../../assets/Vinyl/vinyl8.jpg'
import vin9 from '../../../assets/Vinyl/vinyl9.jpg'
import vin10 from '../../../assets/Vinyl/vinyl10.jpg'
import vin11 from '../../../assets/Vinyl/vinyl11.jpg'








function VinylProducts() {
  return (
    <div className='airbrush-products-container'>



            <div className='airbrush-products-content-wrapper'>
            <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>OUR PREVIOUS WORK</h1>
                <AirbrushSlide slides={
                  [
                    {title:"Front T-Shirt Large  Vinyl Pink & Silver Glitter Design",price:18,image:vin1},
                    {title:"Front T-Shirt Large Vinyl Red & Silver Glitter Design",price:18,image:vin2},
                    {title:"Front T-Shirt Large Vinyl three Color Design",price:15,image:vin3},
                    {title:"Front T-Shirt Vinyl Large Text Design",price:15,image:vin4},
                    {title:"Large two colored Glitter Vinyl & Outline",price:18,image:vin5},
                    {title:"Back Jersey with two colored Glitter Vinyl & Outline",price:18,image:vin7},
                    {title:"Large Vinyl Logo with text on T-shirt",price:15,image:vin8},
                    {title:"Large Vinyl Logo on T-shirt",price:15,image:vin9},
                    {title:"Front Jersey With Vinyl",price:10,image:vin10},
                    {title:"Back Jersey with Vinyl",price:10,image:vin11},

                  
                  
                  
                  
                  
                  ]} />
            </div>
            </div>
    </div>
  )
}

export default VinylProducts


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
  