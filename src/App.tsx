
import './styles/App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home/Home';
import Faq from './pages/FAQs/Faq';
import Footer from './components/common/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar/>
        <Router>
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/faq" Component={Faq}/>
          </Routes>
        </Router>

      <Footer/>
    </div>
  );
}

export default App;
