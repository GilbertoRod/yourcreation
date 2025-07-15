import React from 'react'
import DTGHero from './components/Hero'
import AboutDTG from './components/AboutDTG'
import DTGProducts from './components/DTGProducts'
import DTGPricing from './components/Pricing'
import StoreLocation from '../../components/common/StoreLocation'


type Props = {}

function ServicesDTG({}: Props) {
  return (
    <div>
        <DTGHero/>
        <AboutDTG/>
        <DTGProducts/>
        <DTGPricing/>
        {/* <StoreLocation/> */}
    </div>
  )
}

export default ServicesDTG