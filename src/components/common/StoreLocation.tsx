
import'./StoreLocation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons'
function StoreLocation() {

  return (
    <div className='location-store-name'>
        <div className='location-wrapper'>
        {/* <iframe title='Your Creation Location On Map' className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.7751756603598!2d-96.99584488883258!3d32.824721481436754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea42e9c21ca1b%3A0x82a19f9c6a40ca10!2sYour%20Creation!5e0!3m2!1sen!2sus!4v1716950856207!5m2!1sen!2sus" 
        style={{border:'0'}}
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        <div className='location-info'>
            <p className='home-section-title'>YOUR CREATION</p>
            <br/>
            {/* <p style={{color:'var(--primary-color)'}}><FontAwesomeIcon icon={faLocationDot} color='black'/> 940 N Belt Line Rd #107, Irving, TX 75061</p> */}
            <br/>
            <p>Hours:
                <br/>
                Mon - Sat: 12pm-6pm
                <br/>
                Sunday: 12pm-5pm
                <br/>
                <br/>
                <a href='tel:2148090226' rel='noreferrer'><FontAwesomeIcon icon={faPhone}/> (214) 809-0226</a>
                <br/>
                <br/>
                <a href='mailto:Mtmairbrush@gmail.com' rel='noreferrer'><FontAwesomeIcon icon={faEnvelope}/> Mtmairbrush@gmail.com</a>
            </p>
        </div>

    </div>
  )
}

export default StoreLocation