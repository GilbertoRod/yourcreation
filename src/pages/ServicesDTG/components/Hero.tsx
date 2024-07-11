
import hero from '../../../assets/DTG/dtg1.jpg'


function DTGHero() {
  return (
    <div className='airbrush-hero-container'>
        <img src={hero} alt='airbrush' className='airbrush-hero-img' style={{objectPosition:"center"}}/>
        <div className='airbrush-hero-text'>
            <h1 className='airbrush-hero-title'>CUSTOM DTG PRINTING</h1>
            <p className='airbrush-hero-subtitle'>SHIRTS, SHORTS, PANTS, & HOODIES</p>
        </div>
        {/* <div className='spike-waves'>
        <img src={curve} className='wave'/>
        </div> */}
        
    </div>
  )
}

export default DTGHero