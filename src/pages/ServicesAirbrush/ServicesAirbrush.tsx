import StoreLocation from '../../components/common/StoreLocation'
import './ServicesAirbrush.css'
import AboutAirbrush from './components/AboutAirbrush'
import AirbrushHero from './components/Hero'
import Pricing from './components/Pricing'
import AirbrushProducts from './components/Products'
import pencildiv from './pencil.svg'


function ServicesAirbrush() {
  return (
    <>
    <div>
        <AirbrushHero/>
        <AboutAirbrush/>
        <AirbrushProducts/>
        <Pricing/>
        <StoreLocation/>
        
    </div>
    {/* <img className="spike-pencil-waves" src={pencildiv}/> */}
    </>
  )
}

export default ServicesAirbrush