import vinyl from '../../../assets/services/vinyl.jpg';
import embroidery from '../../../assets/services/embroidery.jpg';
import airbrush from '../../../assets/services/airbrush.jpg';
import dtg from '../../../assets/services/dtg.jpg';
import event from '../../../assets/services/events.jpg';
import WaveDivider2 from '../../../components/common/WaveDivider2';
import Cardv3 from '../../../components/common/Cardv3';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation,Autoplay } from 'swiper/modules';
import './Swiper.css'


function Services() {
  return (
    <>
      <WaveDivider2 />
      <div className='services-container'>
        <p className='home-section-title'>SERVICES</p>
        <p className='home-section-subtitle'>CHECK OUT ALL THE SERVICES THAT WE OFFER!</p>
      </div>

      <Swiper
        breakpoints={{
          1500:{
            slidesPerView: 3,
            spaceBetween: 15
          },
          860: {
            slidesPerView: 2,
            spaceBetween: 15
          }
        }}

        freeMode={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000, // Delay in milliseconds (3 seconds)
          disableOnInteraction: true, // Continue autoplay after user interactions
          pauseOnMouseEnter: true, // Pause autoplay on mouse hover
        }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <Cardv3
            image={event}
            title={'Events'}
            desc={
              "At Your Creation, we offer live airbrushing for events where guests can choose custom hats or shirts with 100% personalized designs. Whether it's a company event, social gathering, or birthday party, our on-the-spot creations add a unique and memorable touch to any occasion."
            }
            sub={'Bring creativity to your birthday party or social event with custom designs'}
            link={'/services/events'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cardv3
            image={airbrush}
            title='Airbrush'
            desc='At Your Creation, our airbrush service brings your designs to life with vibrant, custom artwork. Using high-quality airbrush techniques, we create unique and eye-catching designs on your apparel. Perfect for creating bold, personalized looks, our airbrush service ensures your clothing makes a statement.'
            sub={'Great for unique designs on t-shirts, denim, shoes, and much more!'}
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cardv3
            image={dtg}
            title={'DTG'}
            desc={
              'At Your Creation, our DTG printing service delivers vibrant, detailed designs directly onto your apparel. Using cutting-edge technology, we ensure your custom prints stand out with clarity and color. Perfect for any design, big or small, our DTG printing brings your vision to life on clothing with precision and quality.'
            }
            sub={'Best for detailed prints on t-shirts, sweatshirts, and other apparel.'}
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cardv3
            image={vinyl}
            title={'Vinyl'}
            desc={
              'We use high-quality vinyl to make custom t-shirts. This technique ensures bright, durable designs that stand out. Perfect for personalizing clothing, our vinyl t-shirts are crafted with care and attention to detail, just like all our other services.'
            }
            sub={'Perfect for vibrant designs on t-shirts, hoodies, and bags.'}
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cardv3
            image={embroidery}
            title={'Embroidery'}
            desc={
              'Our embroidery service adds a touch of elegance and professionalism to your apparel. Using high-quality threads and precise stitching, we create detailed and durable designs. Perfect for logos, names, and custom artwork, our embroidery ensures your clothing stands out with a polished finish.'
            }
            sub={'Ideal for logos and designs on hats, jackets, and uniforms.'}
            link={'/'}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Services;
