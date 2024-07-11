import Card from '../../../components/common/Card'

import pop1 from '../../../assets/MostPopular/pop1.png'
import pop2 from '../../../assets/MostPopular/pop2.png'
import pop3 from '../../../assets/MostPopular/pop3.png'
import pop4 from '../../../assets/MostPopular/pop4.png'
import pop5 from '../../../assets/MostPopular/pop5.png'
import pop6 from '../../../assets/MostPopular/pop6a.png'
import pop7 from '../../../assets/MostPopular/pop7.png'
import pop8 from '../../../assets/MostPopular/pop8.png'
import '../Home.css'


function MostPopular() {
  return (
    <div className='popular-container'>
    <p className="home-section-title">MOST POPULAR</p>
    <p className="home-section-subtitle">BROWSE OUR MOST POPULAR PRODUCTS</p>
    {/* <hr style={{"width":"100%"}}/> */}

    <div className='cards'>

        <Card image={pop8} title='Airbrush Events' sub="Starting From $300"/>

        <Card image={pop5} title='Airbrushed Denim' sub="Starting From $40"/>



        <Card image={pop3} title='Airbrushed Shoes' sub='Starting From $80'/>


        <Card image={pop2} title='Airbrushed Exclusive Portraits' sub='Starting From $300'/>

        <Card image={pop4} title='Custom DTG Print T-shirt' sub='Starting From $20'/>

        <Card image={pop1} title='T-Shirt Pocket Logo' sub='Starting From $10'/>

        <Card image={pop6} title='Custom Vinyl T-shirt Design' sub='Starting From $15'/>

        <Card image={pop7} title='Embroidered Company Logo' sub='Starting From $20'/>




    </div>
    <button className='contact-us-btn'>See More </button>
    </div>
  )
}

export default MostPopular