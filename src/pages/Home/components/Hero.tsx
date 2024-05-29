
import '../Home.css'
import HeroVid from '../../../assets/herovid.mp4'


function Hero() {


  return (
    <div className='hero-container'>

        {/*FOR NON-MAC USERS */}
        <video className='hero-item-1' id='vid' autoPlay muted loop playsInline>
          <source src={HeroVid} type='video/mp4' />
        </video>
        
        {/*FOR EVERY USER */}
        <div className='hero-box'>
          <span style={{fontFamily:"Rethink Sans"}}>YOUR CREATION</span>
          <button>GALLERY</button>
        </div>


    
      </div>



  )
}

export default Hero