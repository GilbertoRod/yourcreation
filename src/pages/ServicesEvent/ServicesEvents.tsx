import './ServicesEvents.css'
import event from '../../assets/Events/events.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faBusinessTime, faEnvelope, faListNumeric, faPeopleGroup, faPhone, faShirt, faSynagogue } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import event1 from '../../assets/Events/event1.mp4'
import event2 from '../../assets/Events/event2.mp4'
import event4 from '../../assets/Events/event4.mp4'
import StoreLocation from '../../components/common/StoreLocation';
import WaveDivider from '../../components/common/WaveDivider';
import WaveDividerLayered from '../../components/common/WaveDividerLayered';


function ServicesEvents() {
  return (
    <div className='service-events-container'>
        <div className='service-events-text-container'>
            <h1 className='service-events-main-title'>Airbrush Events In The Dallas-Fort Worth Area</h1>
            <br/>
            <br/>
            <h1 className='service-events-sub-text'>Looking for a Creative Service to have at your next event? Look no further!</h1>
            <Link to={'/'}><h2 className='no-further-btn'>BOOK EVENT</h2></Link>
        </div>
        <div className='layered-wave-div'>
        <WaveDividerLayered/>
        </div>
        
        <div className='about-events-title-container'>
            <h1 className='about-events-title'>About Our Events</h1>
            <p className='event-pricing-subtitle' style={{marginTop:"20px"}}>LEARN ABOUT OUR EVENTS</p>
        </div>
        <p className='service-events-desc'>

            <img src={event} alt='airbrush event' className='service-event-float-img'/>
            <p>At Your Creation, we specialize in bringing creativity to life through live airbrushing at various events. We offer guests the unique opportunity to choose custom-designed hats and/or shirts that are personalized on the spot. This interactive and engaging service ensures that each attendee leaves with a one-of-a-kind memento, reflecting their individual style and preferences. Whether you're hosting a corporate event, social gathering, bar mitzvah, or birthday party, our live airbrushing experience adds a fun and artistic element that guests will cherish long after the event is over.
            <br/>
            <br/>
            Our talented artist (DJ), is equipped to handle a wide range of designs, from simple names and initials to intricate patterns and themes. Each piece is created in real-time, allowing guests to watch their custom design come to life before their eyes. This not only provides a captivating experience but also allows for a high level of customization and creativity. The spontaneity and originality of live airbrushing make it an ideal choice for creating lasting impressions at any event, making Your Creation the go-to service for adding a special flair to your occasion.
            <br/>
            </p>
        </p>



        <div className='service-events-book-banner'>
            <div id='event-video-1'>
                    <video className='event-pricing-vid-1' autoPlay muted loop playsInline>
                        <source src={event2} type='video/mp4' />
                    </video>
            </div>
            <div className='book-banner-text'>
                <h1>Book Us Now!</h1>
                <br/>
                <button>BOOK NOW</button>
                <p className='banner-contact-info'><FontAwesomeIcon icon={faPhone} color='var(--primary-color)'/> <a href='tel:2148090226' >(214) 809-0226</a></p>
                <p className='banner-contact-info'><FontAwesomeIcon icon={faEnvelope} color='var(--primary-color)'/> <a href='mailto:mtmairbrush@gmail.com'>Mtmairbrush@gmail.com</a></p>
            </div>

        </div>
        <div className='service-events-types-banner'>
            <h1>Choose Us For Your Next</h1>
            <div className='service-events-slide'>
                <div className='service-events-types'>
                    <div><FontAwesomeIcon color='var(--primary-color)' icon={faSynagogue}/> Bar Mitzvahs</div>
                    <div><FontAwesomeIcon color='var(--primary-color)' icon={faBirthdayCake}/> Birthday Parties</div>
                    <div><FontAwesomeIcon color='var(--primary-color)' icon={faBusinessTime}/> Corporate Events</div>
                    <div><FontAwesomeIcon color='var(--primary-color)' icon={faPeopleGroup}/> Organizational Gatherings</div>

                    <div><FontAwesomeIcon color='var(--primary-color)' icon={faSynagogue}/> Bar Mitzvahs</div>
                    <div><FontAwesomeIcon color='var(--primary-color)' icon={faBirthdayCake}/> Birthday Parties</div>
                    <div><FontAwesomeIcon color='var(--primary-color)' icon={faBusinessTime}/> Corporate Events</div>
                    <div><FontAwesomeIcon color='var(--primary-color)' icon={faPeopleGroup}/> Organizational Gatherings</div>
                </div>
            </div>
        </div>

        <div className='event-pricing-container'>

            <h1 className='event-pricing-title'>Event Pricing</h1>
            <p className='event-pricing-subtitle'>OUR PRICING VARIES UPON TWO KEY-FACTORS</p>
            <div className='event-pricing-factors'>
                <div className='event-pricing-factor'>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <div className='factor-icon'>
                        <FontAwesomeIcon icon={faListNumeric}/>
                        </div>
                    </div>

                    <h2>QUANTITY</h2>
                    <p>When booking an event with us at Your Creation, you have the ability to provide up to 200 products(hats/t-shirts) for us to airbrush in real-time. The quantity that you select will determine the total cost of materials. </p>
                </div>

                <div className='event-pricing-factor'>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <div className='factor-icon'>
                            <FontAwesomeIcon icon={faShirt}/>
                        </div>
                    </div>
                    
                    <h2>PRODUCTS</h2>
                    <p>You have the option of providing your own hats/t-shirts, or we can provide them as well. If you choose us to provide the products, we'll charge $15 per t-shirt and $10 per hat.</p>
                </div>
            </div>
            
        </div>

        <div className='recent-events-container'>
            <h1 className='event-pricing-title'>Recent Events</h1>
            <p className='event-pricing-subtitle'>OUR MOST RECENT EVENTS</p>
            <div className='recent-events-video-grid'>

                    <div>
                        <p>        

                            SMU Delta Gamma Sorority Event
                        </p>
                        <video className='recent-events-vid' controls>
                            <source src={event4} type='video/mp4' />
                        </video>
                    </div>

                    <div>
                        <p>Birthday Party Event</p>
                        <video className='recent-events-vid' controls>
                            <source src={event1} type='video/mp4' />
                        </video>
                    </div>


            </div>

        </div>







        <WaveDivider/>
        <div className='get-quote-container'>
            <h2 className='event-pricing-title'>Get A Free Quote</h2>
            <p className='event-pricing-subtitle'>FILL OUT OUR ONLINE FORM OR COME AND VISIT US!</p>
            <button className='event-form-btn'>Event Online Form</button>
            <StoreLocation/>
        </div>




    </div>


  )
}

export default ServicesEvents