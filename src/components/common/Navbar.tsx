import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Navbar(){
  return (
    <nav className='navbar'>
      <div className='nav-top-wrapper'>
        <div className='nav-logo'>Your Creation</div>
        <div className='nav-pages'>
          <a><p>Gallery</p></a>
          <a><p>Order</p></a>
          <a><p>Reviews</p></a>
          <a><p>FAQs</p></a>
        </div>
        <div className='nav-icons'>
          <FontAwesomeIcon icon={faInstagram} size='lg'/>
          <FontAwesomeIcon icon={faFacebook} size='lg'/>
        </div>
      </div>


    </nav>
  )
}