

import Cardv2 from '../../../components/common/Cardv2'
import vinyl from '../../../assets/Vinyl/vinyl4.jpg'
import embroidery from '../../../assets/Embroidery/Embroidery1.jpg'
import airbrush from '../../../assets/Airbrush/airbrush1.jpg'
import dtg from '../../../assets/DTG/dtg1.jpg'

import event from '../../../assets/Events/event2.png'

import WaveDivider2 from '../../../components/common/WaveDivider2'


function Services() {
  return (
    <>
      <WaveDivider2/>
      <div className='services-container'>
        <p className='home-section-title'>SERVICES</p>
        <p className='home-section-subtitle'>CHECK OUT ALL THE SERVICES THAT WE OFFER!</p>
        <div className='service-cards'>
        <Cardv2 image={event} title='EVENTS' sub='Bring creativity to your birthday party or social event with custom designs' desc="At Your Creation, we offer live airbrushing for events where guests can choose custom hats or shirts with 100% personalized designs. Whether it's a company event, social gathering, or birthday party, our on-the-spot creations add a unique and memorable touch to any occasion." link='/services/events'/>
        <Cardv2 image={vinyl} title='VINYL' sub="Perfect for vibrant designs on t-shirts, hoodies, and bags." desc='We use high-quality vinyl to make custom t-shirts. This technique ensures bright, durable designs that stand out. Perfect for personalizing clothing, our vinyl t-shirts are crafted with care and attention to detail, just like all our other services.'/>
        
        <Cardv2 image={airbrush} title='AIRBRUSH' sub='Great for unique designs on t-shirts, denim, shoes, and much more!' desc='At Your Creation, our airbrush service brings your designs to life with vibrant, custom artwork. Using high-quality airbrush techniques, we create unique and eye-catching designs on your apparel. Perfect for creating bold, personalized looks, our airbrush service ensures your clothing makes a statement.'/>
        <Cardv2 image={dtg} title='DTG' sub='Best for detailed prints on t-shirts, sweatshirts, and other apparel.' desc='At Your Creation, our DTG printing service delivers vibrant, detailed designs directly onto your apparel. Using cutting-edge technology, we ensure your custom prints stand out with clarity and color. Perfect for any design, big or small, our DTG printing brings your vision to life on clothing with precision and quality.'/>

        <Cardv2 image={embroidery} title='EMBROIDERY' sub="Ideal for logos and designs on hats, jackets, and uniforms." desc='Our embroidery service adds a touch of elegance and professionalism to your apparel. Using high-quality threads and precise stitching, we create detailed and durable designs. Perfect for logos, names, and custom artwork, our embroidery ensures your clothing stands out with a polished finish.'/>



      </div>


      </div>
    </>
  )
}

export default Services