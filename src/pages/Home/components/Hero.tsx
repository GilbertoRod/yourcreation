import React from 'react'
import image1 from '../../../assets/hero1.jpg'
import '../Home.css'
import HeroVid from '../../../assets/herovid.mp4'


function Hero() {

  return (
    <div className='hero-container'>
      <video className='hero-item-1' id='vid' autoPlay muted loop playsInline>
        <source src={HeroVid} type='video/mp4' />
      </video>
      <div className='hero-box'>
        <span>Your Creation</span>
        <button>Gallery</button>
      </div>
    </div>

  )
}

export default Hero