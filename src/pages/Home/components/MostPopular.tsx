import React from 'react'
import Card from '../../../components/common/Card'
import image1 from '../../../assets/pop_1.jpg'
import image2 from '../../../assets/pop_2.jpg'
import image3 from '../../../assets/pop_3.jpg'
import image4 from '../../../assets/pop_4.jpg'
import image5 from '../../../assets/pop_5.jpg'
import alt from '../../../assets/heroAlt2.jpg'
import '../Home.css'

function MostPopular() {
  return (
    <div className='popular-container'>
    <p className="home-section-title">MOST POPULAR</p>
    <p className="home-section-subtitle">BROWSE OUR MOST POPULAR PRODUCTS</p>
    {/* <hr style={{"width":"100%"}}/> */}

    <div className='cards'>
        <div className='grid-cell'>
        <Card image={image1} title='Air Brushed Denim Jacket' sub="From $40"/>
        </div>

        <div className='grid-cell'>
          <Card image={image2} title='Air Brushed Quinceañera' sub='From $30'/>
        </div>
        <div className='grid-cell'>
          <Card image={image3} title='Airbrushed Portraits' sub='From $80'/>
        </div>
        <div className='grid-cell'>
        <Card image={image4} title='Airbrushed Celebrity T-Shirts' sub='From $200'/>
        </div>
        <div className='grid-cell'>    
          <Card image={image5} title='Air Brushed Denim Jacket' sub="From $40"/>
        </div>

        <div className='grid-cell'>
          <Card image={image2} title='Air Brushed Quinceañera' sub='From $30'/>
        </div>
        <div className='grid-cell'>
          <Card image={image3} title='Airbrushed Portraits' sub='From $80'/>
        </div>
        <div className='grid-cell'>
          <Card image={image4} title='Airbrushed Celebrity T-Shirts' sub='From $200'/>
        </div>



    </div>
    </div>
  )
}

export default MostPopular