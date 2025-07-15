import'./Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className='main-footer-content'>
        <div>
          <h1>OUR SERVICES</h1>
          <div>
            <p>VINYL</p>
            <p>EMBROIDERY</p>
            <p>AIRBRUSH</p>
            <p>DTG</p>
            <p>EVENTS</p>
          </div>
        </div>
        <div>
          <h1>YOUR CREATION</h1>
          {/* <p>
                Mon - Sat: 12pm-6pm
                <br/>
                Sunday: 12pm-5pm
                <br/>
          </p> */}
          <br/>
          <p>Call or Text (214) 809-0226</p>

          <p>Mtmairbrush@gmail.com</p>
          <p></p>
          <div className='footer-socials'>
            <a href='https://www.instagram.com/your_creation/' style={{marginRight:'12px'}} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faInstagram} size='lg' style={{color:'var(--primary-color)'}}/>
            </a>

            <a href='https://www.facebook.com/yourcreationair' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faFacebook} size='lg' style={{color:'var(--primary-color)'}}/>
            </a>
          </div>
        </div>
      </div>

      <div className='footer-signature'>
        <p>Your Creation &copy; All Rights Reserved 2024 | Developed By <a href='https://gilbertorodriguez.me/' rel='noreferrer' target='_blank' style={{color:'var(--primary-color)'}}>GilbertoRodriguez.me</a></p>
      </div>
    </div>
  )
} 

export default Footer