import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Navbar(){
  return (
    <nav className='navbar'>
      <div className='nav-top-wrapper'>
        <div className='nav-logo'>Your Creation Logo</div>
        <div className='nav-pages'>
          <a><p>GALLERY</p></a>
          <a><p>ORDER</p></a>
          <a><p>REVIEWS</p></a>
          <a><p>FAQs</p></a>
        </div>
        <div className='nav-icons'>
          <div>
          <FontAwesomeIcon icon={faInstagram} size='lg' style={{color:'#9e41b5'}}/>
          </div>
          <div>
          <FontAwesomeIcon icon={faFacebook} size='lg' style={{color:'#186afe'}}/>
          </div>
        </div>
      </div>


    </nav>
  )
}