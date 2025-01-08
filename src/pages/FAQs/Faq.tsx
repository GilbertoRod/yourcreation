import { useState } from 'react'
import './Faq.css'
function Faq() {
  const [openAccordionBtn, setOpenAccordionBtn] = useState(true)
  return (
    <div>
        <h1>Frequently Asked Questions</h1>
        <div className='faqs-container'>
          <div className="accordion">
            <h2 className='accordion-title'>How does payment work?</h2>
            <button className={openAccordionBtn?'accordion-btn':"accordion-btn accordion-closed"} onClick={()=>{
            setOpenAccordionBtn(!openAccordionBtn)}}>V</button>
            <div className='accordion-info'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet sint nihil vel odit repudiandae perferendis delectus assumenda, nobis reiciendis dicta fuga nam eligendi nemo obcaecati animi? Explicabo, enim doloremque.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Faq