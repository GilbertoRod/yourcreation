

type Props = {}

function DTGPricing({}: Props) {
  return (
    <div className='ab-pricing-container'>
        <h1 className='ab-pricing-title'>PRICING</h1>
        <h3 className='home-section-subtitle'>How do we price our DTG Products?</h3>
        <div className='pricing-desc'>
            <p className='ab-pricing-desc'>All prices vary, there is no set price on any of the DTG print items above, the pricing depends on different factors. These factors include, but are not limited to the following: </p>
            <p style={{color:"gray", marginTop:12}}>* Items that we can print on include any item (Shirt, Pant, etc.) that is made of 100% COTTON</p>
            <ol>
                <li>Each side of a shirt that the customer wants printed.</li>
                <li>The size of the design that's printed on the item.</li>
                <li>The Color of the item that you want printed.<span className='extra-pricing-msg'> (Due to the different costs of DTG solutions that we spray on the items, any colored item will always run at least $5 more than white items)</span></li>
                <li>Providing of item that you want printed. <span className='extra-pricing-msg'>(You have the option to provide your own t-shirt, pants, etc. We charge an additional $5 if you want us to Provide a T-Shirt. At Your Creation, we provide Gildan Black or White T-Shirts if requested.)</span></li>
            </ol>
        </div>

        <button className='ab-order-now-btn'>ORDER NOW</button>


    </div>
  )
}

export default DTGPricing