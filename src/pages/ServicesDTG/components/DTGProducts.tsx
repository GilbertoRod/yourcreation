import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation,Autoplay } from 'swiper/modules';
import dtg1 from '../../../assets/DTG/dtg1.jpg'
import dtg2 from '../../../assets/DTG/dtg2.jpg'
import dtg3 from '../../../assets/DTG/dtg3.jpg'
import dtg4 from '../../../assets/DTG/dtg4.jpg'
import dtg5 from '../../../assets/DTG/dtg5.jpg'
import dtg6 from '../../../assets/DTG/dtg6.jpg'
import dtg7 from '../../../assets/DTG/dtg7.jpg'
import dtg8 from '../../../assets/DTG/dtg8.jpg'
import dtg9 from '../../../assets/DTG/dtg9.jpg'
import dtg10 from '../../../assets/DTG/dtg10.jpg'
import dtg11 from '../../../assets/DTG/dtg11.jpg'
import dtg12 from '../../../assets/DTG/dtg12.jpg'
import dtg13 from '../../../assets/DTG/dtg13.jpg'
import dtg14 from '../../../assets/DTG/dtg14.jpg'
import dtg15 from '../../../assets/DTG/dtg15.jpg'
import dtg16 from '../../../assets/DTG/dtg16.jpg'
import dtg17 from '../../../assets/DTG/dtg17.jpg'
import dtg18 from '../../../assets/DTG/dtg18.jpg'
import dtg19 from '../../../assets/DTG/dtg19.jpg'
import dtg20 from '../../../assets/DTG/dtg20.jpg'
import dtg21 from '../../../assets/DTG/dtg21.jpg'
import dtg22 from '../../../assets/DTG/dtg22.jpg'
import dtg23 from '../../../assets/DTG/dtg23.jpg'
import dtg24 from '../../../assets/DTG/dtg24.jpg'
import dtg25 from '../../../assets/DTG/dtg25.jpg'
import dtg26 from '../../../assets/DTG/dtg26.jpg'
import dtg27 from '../../../assets/DTG/dtg27.jpg'





function DTGProducts() {
  return (
    <div className='airbrush-products-container'>



            <div className='airbrush-products-content-wrapper'>
            <div className='airbrush-products-slider'>
                <h1 className='airbrush-products-slider-title'>OUR PREVIOUS WORK</h1>
                <AirbrushSlide slides={
                  [
                    {title:"Front Vintage DTG Design",price:15,image:dtg3},
                    {title:"Full Front & Full Back Custom DTG Design",price:35,image:dtg1},
                    {title:"DTG Company Corner Logo and Full Back Logo",price:30,image:dtg2},
                    {title:"Front custom DTG design Colored T-shirt",price:20,image:dtg4},
                    {title:"DTG Rest In Peace on White T-shirt",price:15,image:dtg5},
                    {title:"Family DTG Front Design on Black t-shirt",price:20,image:dtg7},
                    {title:"Family Trip DTG White T-Shirts",price:15,image:dtg9},
                    {title:"Front DTG Colored t-shirt Character",price:20,image:dtg10},
                    {title:"Front DTG Onesie Character",price:20,image:dtg11},
                    {title:"Front Custom DTG Designs with Names",price:20,image:dtg12},
                    {title:"Huge DTG Custom Designs on White T-Shirt",price:15,image:dtg13},
                    {title:"DTG Image & Letters on Colored T-Shirt ",price:20,image:dtg14},
                    {title:"DTG Family Reunion Designs on Colored T-Shirts ",price:20,image:dtg15},
                    {title:"DTG Breast Cancer Awareness Design on White T-Shirt",price:15,image:dtg16},
                    {title:"DTG Custom Design on Red T-Shirt",price:20,image:dtg17},
                    {title:"DTG Custom Washed & Worn Design on White T-Shirt ",price:15,image:dtg18},
                    {title:"DTG Custom Washed & Worn Design on Heather Gray T-Shirt",price:20,image:dtg20},
                    {title:"DTG Organization T-Shirts",price:20,image:dtg21},
                    {title:"DTG Simple Custom Design on White T-Shirt",price:20,image:dtg22},
                    {title:"DTG Custom Huge Back Design on White T-Shirt",price:15,image:dtg23},
                    {title:"DTG Custom Three Color Design on Black T-Shirt",price:20,image:dtg24},
                    {title:"DTG Custom Drippy Colorful design on White T-Shirt ",price:15,image:dtg25},
                    {title:"DTG Custom Football Player Design on White T-Shirt",price:15,image:dtg26},
                    {title:"DTG Custom Business Design on Back of Black T-Shirt",price:20,image:dtg27},

                  
                  
                  
                  
                  
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
  