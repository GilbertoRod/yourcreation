function DTGPricing() {
  return (
    <div className='ab-pricing-container'>
        <h1 className='ab-pricing-title'>PRICING</h1>
        <h3 className='home-section-subtitle'>How do we price our Embroidery Services?</h3>
        <div className='pricing-desc'>
            <p className='ab-pricing-desc'>Embroidery pricing varies based on several factors, ensuring you receive a tailored solution for your needs. The pricing depends on the following: </p>
            <p style={{color:"gray", marginTop:12}}>* We can embroider on a wide range of items, including shirts, jackets, hats, bags, and more.</p>
            <ol>

                <li>Design Complexity - <span className='extra-pricing-msg'>The complexity of your design plays a significant role in pricing. More intricate designs require more stitches and time, which may increase the cost.</span></li>

                <li>Location of Embroidery - <span className='extra-pricing-msg'>The cost varies depending on the location of the embroidery, such as the front of a shirt, sleeve, or back of a jacket.</span></li>

                <li>Providing Your Own Items - <span className='extra-pricing-msg'>You have the option to provide your own items for embroidery. If you prefer us to supply the item, an additional fee will be applied depending on the type of apparel you choose.</span></li>
            </ol>
        </div>

        <button className='ab-order-now-btn'>ORDER NOW</button>


    </div>
  )
}

export default DTGPricing