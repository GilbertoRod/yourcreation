
import './styles/App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home/Home';
import Faq from './pages/FAQs/Faq';
import Footer from './components/common/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ServicesEvents from './pages/ServicesEvent/ServicesEvents';



function App() {
  return (
    <div className="App">

        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services/events' element={<ServicesEvents/>}/>
            <Route path='/faq' element={<Faq/>}/>
          </Routes>
        </Router>

      <Footer/>
    </div>
  );
}

export default App;
