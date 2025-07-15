import Hero from './components/Hero'
import MostPopular from './components/MostPopular'
import About from './components/About'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Location from './components/Location'




function Home() {
  return (
    <div>
      <Hero/>
      <MostPopular/>
      <About/>
      <Services/>
      <Reviews/>
      {/* <Location/> */}
    </div>
  )
}

export default Home