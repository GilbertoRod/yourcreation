
import vinyl from '../../../assets/services/vinyl.jpg'
import embroidery from '../../../assets/services/embroidery.jpg'
import airbrush from '../../../assets/services/airbrush.jpg'
import dtg from '../../../assets/services/dtg.jpg'
import event from '../../../assets/services/events.jpg'
import WaveDivider2 from '../../../components/common/WaveDivider2'
import Cardv3 from '../../../components/common/Cardv3'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Services() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };
  return (
    <>

      <WaveDivider2/>
      <div className='services-container'>
        <p className='home-section-title'>SERVICES</p>
        <p className='home-section-subtitle'>CHECK OUT ALL THE SERVICES THAT WE OFFER!</p>











        
        {/* <div className='service-cards'>
          
          <Cardv3 image={event} title={'Events'} desc={"At Your Creation, we offer live airbrushing for events where guests can choose custom hats or shirts with 100% personalized designs. Whether it's a company event, social gathering, or birthday party, our on-the-spot creations add a unique and memorable touch to any occasion."} sub={'Bring creativity to your birthday party or social event with custom designs'} link={'/services/events'} />
          <Cardv3 image={airbrush} title='Airbrush' desc='At Your Creation, our airbrush service brings your designs to life with vibrant, custom artwork. Using high-quality airbrush techniques, we create unique and eye-catching designs on your apparel. Perfect for creating bold, personalized looks, our airbrush service ensures your clothing makes a statement.' sub={'Great for unique designs on t-shirts, denim, shoes, and much more!'} link={'/'} />

          <Cardv3 image={dtg} title={'DTG'} desc={'At Your Creation, our DTG printing service delivers vibrant, detailed designs directly onto your apparel. Using cutting-edge technology, we ensure your custom prints stand out with clarity and color. Perfect for any design, big or small, our DTG printing brings your vision to life on clothing with precision and quality.'} sub={'Best for detailed prints on t-shirts, sweatshirts, and other apparel.'} link={'/'}/>

          <Cardv3 image={vinyl} title={'Vinyl'} desc={'We use high-quality vinyl to make custom t-shirts. This technique ensures bright, durable designs that stand out. Perfect for personalizing clothing, our vinyl t-shirts are crafted with care and attention to detail, just like all our other services.'} sub={'Perfect for vibrant designs on t-shirts, hoodies, and bags.'} link={'/'}/>



          <Cardv3 image={embroidery} title={'Embroidery'} desc={'Our embroidery service adds a touch of elegance and professionalism to your apparel. Using high-quality threads and precise stitching, we create detailed and durable designs. Perfect for logos, names, and custom artwork, our embroidery ensures your clothing stands out with a polished finish.'} sub={'Ideal for logos and designs on hats, jackets, and uniforms.'} link={'/'}/>





      </div> */}


      </div>
      <div className='services-carousel-container'>
        <Carousel showDots={true} infinite={true} keyBoardControl={true} removeArrowOnDeviceType={["mobile"]} responsive={responsive}>
            <Cardv3 image={event} title={'Events'} desc={"At Your Creation, we offer live airbrushing for events where guests can choose custom hats or shirts with 100% personalized designs. Whether it's a company event, social gathering, or birthday party, our on-the-spot creations add a unique and memorable touch to any occasion."} sub={'Bring creativity to your birthday party or social event with custom designs'} link={'/services/events'} />
            <Cardv3 image={airbrush} title='Airbrush' desc='At Your Creation, our airbrush service brings your designs to life with vibrant, custom artwork. Using high-quality airbrush techniques, we create unique and eye-catching designs on your apparel. Perfect for creating bold, personalized looks, our airbrush service ensures your clothing makes a statement.' sub={'Great for unique designs on t-shirts, denim, shoes, and much more!'} link={'/'} />

            <Cardv3 image={dtg} title={'DTG'} desc={'At Your Creation, our DTG printing service delivers vibrant, detailed designs directly onto your apparel. Using cutting-edge technology, we ensure your custom prints stand out with clarity and color. Perfect for any design, big or small, our DTG printing brings your vision to life on clothing with precision and quality.'} sub={'Best for detailed prints on t-shirts, sweatshirts, and other apparel.'} link={'/'}/>

            <Cardv3 image={vinyl} title={'Vinyl'} desc={'We use high-quality vinyl to make custom t-shirts. This technique ensures bright, durable designs that stand out. Perfect for personalizing clothing, our vinyl t-shirts are crafted with care and attention to detail, just like all our other services.'} sub={'Perfect for vibrant designs on t-shirts, hoodies, and bags.'} link={'/'}/>



            <Cardv3 image={embroidery} title={'Embroidery'} desc={'Our embroidery service adds a touch of elegance and professionalism to your apparel. Using high-quality threads and precise stitching, we create detailed and durable designs. Perfect for logos, names, and custom artwork, our embroidery ensures your clothing stands out with a polished finish.'} sub={'Ideal for logos and designs on hats, jackets, and uniforms.'} link={'/'}/>
        </Carousel>
      </div>
    </>
  )
}

export default Services