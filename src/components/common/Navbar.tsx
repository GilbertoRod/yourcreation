import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Navbar(){
  return (
    <nav className='navbar'>
      <div className='nav-top-wrapper'>
        <a href='/'><div className='nav-logo'>Logo</div></a>
        <div className='nav-pages'>
          <a href='/'><p>GALLERY</p></a>
          <a href='/'><p>ORDER</p></a>
          <a href='/'><p>REVIEWS</p></a>
          <a href='/'><p>FAQs</p></a>
        </div>
        <div className='nav-icons'>
          <a href='https://www.instagram.com/your_creation/' target='_blank' rel='noreferrer'>
            <div>
              <FontAwesomeIcon icon={faInstagram} size='lg' style={{color:'#9e41b5'}}/>
            </div>
          </a>

          <a href='https://www.facebook.com/yourcreationair' target='_blank' rel='noreferrer'>
            <div>
              <FontAwesomeIcon icon={faFacebook} size='lg' style={{color:'#186afe'}}/>
            </div>
          </a>
        </div>
      </div>


    </nav>
  )
}