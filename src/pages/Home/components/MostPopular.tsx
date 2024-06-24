import Card from '../../../components/common/Card'
import denim from '../../../assets/Airbrush/airbrushdenim1.jpg'
import image2 from '../../../assets/pop_2.jpg'
import image4 from '../../../assets/pop_4.jpg'
import events from '../../../assets/Events/events.jpg'
import dtgFront from '../../../assets/DTG/dtg4.jpg'
import dtgPocket from '../../../assets/DTG/dtgcorner1.jpg'
import vinyl from '../../../assets/Vinyl/vinyl1.jpg'
import embroidery from '../../../assets/Embroidery/Embroidery5.jpg'

import '../Home.css'

function MostPopular() {
  return (
    <div className='popular-container'>
    <p className="home-section-title">MOST POPULAR</p>
    <p className="home-section-subtitle">BROWSE OUR MOST POPULAR PRODUCTS</p>
    {/* <hr style={{"width":"100%"}}/> */}

    <div className='cards'>

        <Card image={events} title='Airbrush Events' sub="From $300"/>

        <Card image={denim} title='Airbrushed Denim' sub="From $40"/>



        <Card image={image2} title='Airbrushed Quinceañera' sub='From $35'/>


        <Card image={image4} title='Airbrushed Exclusive Portraits' sub='From $300'/>

        <Card image={dtgFront} title='Custom DTG Print T-shirt' sub='From $20'/>

        <Card image={dtgPocket} title='T-Shirt Pocket Logo' sub='From $10'/>

        <Card image={vinyl} title='Custom Vinyl T-shirt Design' sub='From $15'/>

        <Card image={embroidery} title='Barber Cape Logo Embroidery' sub='From $20'/>




    </div>
    <button className='contact-us-btn'>See More </button>
    </div>
  )
}

export default MostPopular