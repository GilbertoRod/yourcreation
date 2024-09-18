function VinylPricing() {
  return (
    <div className='ab-pricing-container'>
        <h1 className='ab-pricing-title'>PRICING</h1>
        <h3 className='home-section-subtitle'>How do we price our Vinyl Services?</h3>
        <div className='pricing-desc'>
            <p className='ab-pricing-desc'>Vinyl design prices are determined by various factors to ensure a custom fit for your project. The pricing is influenced by the following: </p>
            <p style={{color:"gray", marginTop:12}}>* We can apply vinyl to a variety of items, including t-shirts, hoodies, bags, and more.</p>
            <ol>

                <li>Design Size & Complexity - <span className='extra-pricing-msg'>Larger and more intricate designs may require additional vinyl and labor, affecting the overall cost.</span></li>

                <li>Number of Colors - <span className='extra-pricing-msg'>Vinyl printing typically involves solid colors, and each additional color may increase the price due to the need for separate layers of vinyl.</span></li>

                <li>Providing Your Own Items - <span className='extra-pricing-msg'>You can supply your own items for vinyl printing, or if you prefer, we can provide the apparel at an additional cost depending on the type and color of the item.</span></li>
            </ol>
        </div>

        <button className='ab-order-now-btn'>ORDER NOW</button>


    </div>
  )
}

export default VinylPricing