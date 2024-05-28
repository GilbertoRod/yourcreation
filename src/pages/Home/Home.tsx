import React from 'react'
import Hero from './components/Hero'
import MostPopular from './components/MostPopular'
import About from './components/About'




function Home() {
  return (
    <div>
      <Hero/>
      <MostPopular/>
      <About/>
    </div>
  )
}

export default Home