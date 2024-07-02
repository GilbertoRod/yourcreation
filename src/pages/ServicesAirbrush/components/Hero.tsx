import '../ServicesAirbrush.css'
import hero from '../../../assets/Airbrush/hero.jpg'
import waves from '../wavy.svg'
function AirbrushHero() {
  return (
    <div className='airbrush-hero-container'>
        <img src={hero} alt='airbrush' className='airbrush-hero-img'/>
        <div className='airbrush-hero-text'>
            <h1 className='airbrush-hero-title'>CUSTOM AIRBRUSHING</h1>
            <p className='airbrush-hero-subtitle'>SHIRTS, PANTS, HATS, PORTRAITS, & MORE</p>
        </div>
        <div className='spike-waves'>
        <img src={waves}/>
        </div>
        
    </div>
  )
}

export default AirbrushHero