import GoogleLogo from '../../../assets/Google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ReviewSlider from '../../../components/common/ReviewSlider'

const reviews = [
    {
      title: "Catera Grayson",
      body: "Service were awesome. I asked and it was done. I called last minute and he gave me an eta of the next day. I asked can it be done at closing time because it was very urgent. Because of my baby's photo shoot. And it was done, and came out better than expected. Thanks so much, we love them."
    },
    {
      title: "Rachel Newburn",
      body: "Daron created personalized baseball caps for over 40 kids during a party I recently had. In addition, he painted a pair of sneakers for my son to wear during the party. He was amazing and my only regret was not asking him to do hats for the adults too! He was such a hit and each design was unique. He was great to work with and was punctual for the event and for the work he did on the sneakers prior to the event. I would hire him again and again!"
    },
    {
        title: "Suzanna Caballero",
        body: "I love how my shirt came out, I sent all the info I wanted on my shirt threw text and paid threw invoice in the morning and it was ready around 3pm that same day, thank you so much for making this shirt happen before my friends bday I really appreciate it."
      },
    {
        title: "Averie Beaty",
        body: "I don’t leave reviews often, but this man deserves his props. I brought my shirt in with the need of a quick turnaround thinking I’d get it back in maybe 2-3 days but he literally airbrushed my shirt for me in 10 MINUTES and it turned out so good!! I found him on TikTok and just went with my gut and I’m so glad I did."
    },
    {
        title:"Lady Hawkins",
        body:"I am super happy that I found this place so close to home. I went in with just some scattered ideas for my daughter's birthday shirt and the guy took my ideas and made it a reality! My daughter was thrilled when I brought her shirt home today and I even ordered a shirt for myself since my own birthday is 18 days away. I can't wait to see what magic he will perform on my shirt."
    },
    {
        title:"Lindsey Starkey",
        body:"DJ did such an amazing job on our shirts!! We called and needed them same day and he was able to get them done. They were above and beyond any expectation!! They turned out amazing!!! Highly recommended!!"
    },
    {
        title:"C Reed",
        body:"Very professional and the work is amazing recommend 10/10 he has my business for life"
    },
    {
        title:"Dariela Zapata",
        body:"I ordered some shirts as a last minute idea and DJ was very accommodating with a quick turnover time.  I gave him ideas on what I wanted and he clarified right before i left to make sure the order was correct. Received my shirts yesterday and I loved them, they were better on shirt than my idea. He did a great job. I will definitely be a returning customer."
    },
    {
        title:"Belinda Ruiz",
        body:"Excellent customer service and care for our needs. They did an awesome job on mine and all my family's shirts in memory of my beloved nephew. Good pricing and timing for a job well done. I refer this place to anyone. And I'm not from the area. Had to come across town because the stores nearby couldn't provide services for me. Thank you Creations!"
    },
    {
        title:"Kellie West",
        body:"My review is way overdue, but I loved this place! I had some shirts and masks airbrushed for my son's 10th Birthday. My order was ready just in time considering I had only ordered a week before the party. They were so kind and on point with what I wanted. I'll definitely go back when I need more work. I love airbrushed t-shirts."
    }
  ];
function Reviews() {
  return (
    <div className='reviews-wrapper'>
        <h1 className='home-section-title'>OUR CUSTOMER REVIEWS</h1>
        <img className='reviews-google-logo' src={GoogleLogo} alt="Google Logo"/>
        <div className='stars'>
            <FontAwesomeIcon icon={faStar} color='gold' size='xl'/>
            <FontAwesomeIcon icon={faStar} color='gold' size='xl'/>
            <FontAwesomeIcon icon={faStar} color='gold' size='xl'/>
            <FontAwesomeIcon icon={faStar} color='gold' size='xl'/>
            <FontAwesomeIcon icon={faStar} color='gold' size='xl'/>
        </div>
        <div>(100+ Five Star Reviews)</div>

        <ReviewSlider reviews={reviews}/>

    </div>
  )
}

export default Reviews