
import './styles/App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home/Home';
import Faq from './pages/FAQs/Faq';
import Footer from './components/common/Footer';
import {Suspense} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ServicesEvents from './pages/ServicesEvent/ServicesEvents';
import ScrollToTop from './components/common/ScrollToTop';
import Services from './pages/Services/Services';
import ServicesAirbrush from './pages/ServicesAirbrush/ServicesAirbrush';
import ServicesDTG from './pages/ServicesDTG/ServicesDTG';



function App() {


  return (
    <div className="App">

        <Router>
          <Suspense>
          <Navbar/>
          </Suspense>

          <ScrollToTop/>

          <Suspense fallback={<div>Loading Page...</div>}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/services/events' element={<ServicesEvents/>}/>
                <Route path='/services/airbrush' element={<ServicesAirbrush/>}/>
                <Route path='/services/dtg' element={<ServicesDTG/>}/>
                <Route path='/faq' element={<Faq/>}/>
            </Routes>
          </Suspense>
        </Router>

      <Footer/>
    </div>
  );
}

export default App;
