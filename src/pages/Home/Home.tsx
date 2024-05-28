import React from 'react'
import Hero from './components/Hero'
import MostPopular from './components/MostPopular'
import About from './components/About'
import Services from './components/Services'




function Home() {
  return (
    <div>
      <Hero/>
      <MostPopular/>
      <About/>
      <Services/>
    </div>
  )
}

export default Home