import EmbroideryHero from './components/Hero'
import AboutEmbroidery from './components/AboutEmbroidery'
import DTGProducts from './components/DTGProducts'
import DTGPricing from './components/Pricing'
import StoreLocation from '../../components/common/StoreLocation'


type Props = {}

function ServicesEmbroidery({}: Props) {
  return (
    <div>
        <EmbroideryHero/>
        <AboutEmbroidery/>
        <DTGProducts/>
        <DTGPricing/>
        <StoreLocation/>
    </div>
  )
}

export default ServicesEmbroidery