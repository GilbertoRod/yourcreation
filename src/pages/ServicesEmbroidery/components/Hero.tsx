
import hero from '../../../assets/Embroidery/embroideryHero.jpg'


function EmbroideryHero() {
  return (
    <div className='airbrush-hero-container'>
        <img src={hero} alt='airbrush' className='airbrush-hero-img' style={{objectPosition:"center"}}/>
        <div className='airbrush-hero-text'>
            <h1 className='airbrush-hero-title'>Custom Embroidery</h1>
            <p className='airbrush-hero-subtitle'>SHIRTS, SWEATERS, PANTS, & MORE</p>
        </div>
        {/* <div className='spike-waves'>
        <img src={curve} className='wave'/>
        </div> */}
        
    </div>
  )
}

export default EmbroideryHero