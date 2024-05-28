import React,{useEffect, useState} from 'react'
import image1 from '../../../assets/heroAlt2.jpg'
import '../Home.css'
import HeroVid from '../../../assets/herovid.mp4'


function Hero() {
  const [isSafari, setIsSafari] = useState<boolean>(false);
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('safari') && !ua.includes('chrome')) {
      setIsSafari(true);
    }
  }, []);

  return (
    <div className='hero-container'>

        {!isSafari?
        <>
        <video className='hero-item-1' id='vid' autoPlay muted loop playsInline>
          <source src={HeroVid} type='video/mp4' />
        </video>
        <div className='hero-box'>
          <span style={{fontFamily:"Rethink Sans"}}>YOUR CREATION</span>
          <button>GALLERY</button>
        </div>
        </>
        :
        <>
          <img className='hero-item-1' src={image1}/>
          <div className='hero-box'>
        <span className='hero-title'>Your Creation</span>
        <button>Gallery</button>
      </div>
        </>
        }
      </div>



  )
}

export default Hero