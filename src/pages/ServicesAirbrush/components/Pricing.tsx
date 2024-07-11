import React from 'react'

type Props = {}

function Pricing({}: Props) {
  return (
    <div className='ab-pricing-container'>
        <h1 className='ab-pricing-title'>PRICING</h1>
        <h3 className='home-section-subtitle'>How do we price our items?</h3>
        <div className='pricing-desc'>
            <p className='ab-pricing-desc'>All prices vary, there is no set price on any of the items above, the pricing depends on customizable options. These options include, but are not limited to the following: </p>
            <p style={{color:"gray", marginTop:12}}>* Items that we can airbrush include Helmets, Footwear, Outerwear, and Many More!</p>
            <ol>
                <li>Amount of people, faces, or characters on the item</li>
                <li>Size of the portrait, font, or character on the item.</li>
                <li>Amount of colors used & the color of item.</li>
            </ol>
        </div>

        <button className='ab-order-now-btn'>ORDER NOW</button>


    </div>
  )
}

export default Pricing