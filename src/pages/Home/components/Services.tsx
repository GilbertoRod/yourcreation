

import Cardv2 from '../../../components/common/Cardv2'
import vinyl from '../../../assets/services/vinyl.jpg'
import embroidery from '../../../assets/services/embroidery.jpg'
import airbrush from '../../../assets/services/airbrush.jpg'
import dtg from '../../../assets/services/dtg.jpg'


function Services() {
  return (
    <div className='services-container'>
      <p className='home-section-title'>SERVICES</p>
      <p className='home-section-subtitle'>CHECK OUT ALL THE SERVICES THAT WE OFFER!</p>
      <div className='service-cards'>
    
      <Cardv2 image={vinyl} title='VINYL' sub="Perfect for vibrant designs on t-shirts, hoodies, and bags." desc='We use high-quality vinyl to make custom t-shirts. This technique ensures bright, durable designs that stand out. Perfect for personalizing clothing, our vinyl t-shirts are crafted with care and attention to detail, just like all our other services.'/>
      <Cardv2 image={embroidery} title='EMBROIDERY' sub="Ideal for logos and designs on hats, jackets, and uniforms." desc='Our embroidery service adds a touch of elegance and professionalism to your apparel. Using high-quality threads and precise stitching, we create detailed and durable designs. Perfect for logos, names, and custom artwork, our embroidery ensures your clothing stands out with a polished finish.'/>
      <Cardv2 image={airbrush} title='AIRBRUSH' sub='Great for unique designs on t-shirts, denim, shoes, and much more!' desc='At Your Creation, our airbrush service brings your designs to life with vibrant, custom artwork. Using high-quality airbrush techniques, we create unique and eye-catching designs on your apparel. Perfect for creating bold, personalized looks, our airbrush service ensures your clothing makes a statement.'/>
      <Cardv2 image={dtg} title='DTG' sub='Best for detailed prints on t-shirts, sweatshirts, and other apparel.' desc='At Your Creation, our DTG printing service delivers vibrant, detailed designs directly onto your apparel. Using cutting-edge technology, we ensure your custom prints stand out with clarity and color. Perfect for any design, big or small, our DTG printing brings your vision to life on clothing with precision and quality.'/>
 



    </div>


    </div>
  )
}

export default Services