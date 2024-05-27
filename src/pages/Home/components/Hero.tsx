import React,{useEffect, useState} from 'react'
import image1 from '../../../assets/hero1.jpg'
import '../Home.css'
import HeroVid from '../../../assets/herovid.mp4'


function Hero() {
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('safari') && !ua.includes('chrome')) {
      setIsSafari(true);
    }
  }, []);

  return (
    <div className='hero-container'>
      <div className='video-player'>
        {!isSafari?
          <video className='hero-item-1' id='vid' autoPlay muted loop playsInline>
          <source src={HeroVid} type='video/mp4' />
        </video>
        :
        <img src={image1}/>
        }
      </div>
      <div className='hero-box'>
        <span>Your Creation</span>
        <button>Gallery</button>
      </div>
    </div>

  )
}

export default Hero