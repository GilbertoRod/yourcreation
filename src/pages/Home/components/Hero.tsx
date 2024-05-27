import React from 'react'
import image1 from '../../../assets/hero1.jpg'
import '../Home.css'
import HeroVid from '../../../assets/herovid.mp4'


function Hero() {
  return (
    <div className='hero-container'>
      <video className='hero-item-1' autoPlay muted loop playsInline>
        {/* Nested source tag specifying the video file */}
        <source src={HeroVid} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='hero-box'>
        <span>Your Creation</span>
        <button>Gallery</button>
      </div>
    </div>

  )
}

export default Hero