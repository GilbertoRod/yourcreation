import './ServicesEvents.css'
import event from '../../assets/Events/events.jpg'
function ServicesEvents() {
  return (
    <div className='service-events-container'>
        <div className='service-events-text-container'>
            <h1 className='service-events-main-title'>Airbrush Events In The Dallas-FortWorth Area</h1>
            <br/>
            <br/>
            <h1>Looking for a Creative Service to have at your next event?</h1>
            <h2>Look No Further!</h2>
            <br/>
            <br/>

            <p className='service-events-desc'>
                <img src={event} alt='airbrush event' className='service-event-float-img'/>
                <p>At Your Creation, we specialize in bringing creativity to life through live airbrushing at various events. We offer guests the unique opportunity to choose custom-designed hats and/or shirts that are personalized on the spot. This interactive and engaging service ensures that each attendee leaves with a one-of-a-kind memento, reflecting their individual style and preferences. Whether you're hosting a corporate event, social gathering, bat mitzvah, or birthday party, our live airbrushing experience adds a fun and artistic element that guests will cherish long after the event is over.
                <br/>
                <br/>
                Our talented artist (DJ), is equipped to handle a wide range of designs, from simple names and initials to intricate patterns and themes. Each piece is created in real-time, allowing guests to watch their custom design come to life before their eyes. This not only provides a captivating experience but also allows for a high level of customization and creativity. The spontaneity and originality of live airbrushing make it an ideal choice for creating lasting impressions at any event, making Your Creation the go-to service for adding a special flair to your occasion.
                <br/>
                <br/>
                Beyond the immediate excitement of receiving a personalized item, live airbrushing at events fosters a sense of connection and engagement among guests. It serves as a great icebreaker, encouraging interaction and conversation as people admire each other's unique designs. The process of choosing and witnessing the creation of their custom items becomes a memorable part of the event itself. By offering a fun and interactive activity, Your Creation ensures that your event stands out, leaving attendees with not just a tangible keepsake, but also a fond memory of their experience.
                </p>
            </p>
        </div>

    </div>
  )
}

export default ServicesEvents