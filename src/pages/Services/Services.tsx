import './Services.css'
import Cardv2 from '../../components/common/Cardv2'
import event from '../../assets/services/events.jpg'
import airbrush from '../../assets/services/airbrush.jpg'
import dtg from '../../assets/services/dtg.jpg'
import vinyl from '../../assets/services/vinyl.jpg'
import embroidery from '../../assets/services/embroidery.jpg'
type Props = {}

function Services({}: Props) {
  return (
    <div className='services-page-container'>
        <h1 className='services-page-title'>OUR SERVICES</h1>
        <p className='services-page-subtitle'>WHICH SERVICE IS BEST FOR YOU?</p>
        <div className='service-cards'>
          <Cardv2 image={event} title={'Events'} desc={"At Your Creation, we offer live airbrushing for events where guests can choose custom hats or shirts with 100% personalized designs. Whether it's a company event, social gathering, or birthday party, our on-the-spot creations add a unique and memorable touch to any occasion."} sub={'Bring creativity to your birthday party or social event with custom designs'} link={'/services/events'} />
          <Cardv2 image={airbrush} title='Airbrush' desc='At Your Creation, our airbrush service brings your designs to life with vibrant, custom artwork. Using high-quality airbrush techniques, we create unique and eye-catching designs on your apparel. Perfect for creating bold, personalized looks, our airbrush service ensures your clothing makes a statement.' sub={'Great for unique designs on t-shirts, denim, shoes, and much more!'} link={'/services/airbrush'} />

          <Cardv2 image={dtg} title={'DTG'} desc={'At Your Creation, our DTG printing service delivers vibrant, detailed designs directly onto your apparel. Using cutting-edge technology, we ensure your custom prints stand out with clarity and color. Perfect for any design, big or small, our DTG printing brings your vision to life on clothing with precision and quality.'} sub={'Best for detailed prints on t-shirts, sweatshirts, and other apparel.'} link={'/services/dtg'}/>

          <Cardv2 image={vinyl} title={'Vinyl'} desc={'We use high-quality vinyl to make custom t-shirts. This technique ensures bright, durable designs that stand out. Perfect for personalizing clothing, our vinyl t-shirts are crafted with care and attention to detail, just like all our other services.'} sub={'Perfect for vibrant designs on t-shirts, hoodies, and bags.'} link={'/'}/>



          <Cardv2 image={embroidery} title={'Embroidery'} desc={'Our embroidery service adds a touch of elegance and professionalism to your apparel. Using high-quality threads and precise stitching, we create detailed and durable designs. Perfect for logos, names, and custom artwork, our embroidery ensures your clothing stands out with a polished finish.'} sub={'Ideal for logos and designs on hats, jackets, and uniforms.'} link={'/'}/>





      </div>

    </div>
  )
}

export default Services