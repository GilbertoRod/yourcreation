
import hero from '../../../assets/Vinyl/VinylHero2.jpg'


function VinylHero() {
  return (
    <div className='airbrush-hero-container'>
        <img src={hero} alt='airbrush' className='airbrush-hero-img' style={{objectPosition:"center"}}/>
        <div className='airbrush-hero-text'>
            <h1 className='airbrush-hero-title'>Custom Vinyl</h1>
            <p className='airbrush-hero-subtitle'>SHIRTS, SWEATERS, PANTS, BAGS, & MORE</p>
        </div>
        {/* <div className='spike-waves'>
        <img src={curve} className='wave'/>
        </div> */}
        
    </div>
  )
}

export default VinylHero