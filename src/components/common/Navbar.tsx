import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'

export default function Navbar(){

  const[burgerX,setBurgerX]=useState<boolean>(false);

  useEffect(()=>{
    if(burgerX){
      document.body.style.overflow='hidden';
    }
    return(()=>{document.body.style.overflow='visible';})
  },[burgerX])

  const handleBurger=()=>{
    setBurgerX(!burgerX)
  }
  return (
    <nav className='navbar'>
      <div className='nav-top-wrapper'>
        <a href='/'><div className='nav-logo'>Logo</div></a>
        {burgerX&&<div onClick={handleBurger} className='nav-close-sidebar'/>}
        <div className='nav-hamburger' onClick={handleBurger}>
          <div className={burgerX?'burger-line-1 x':'burger-line-1'}/>
          <div className={burgerX?'burger-line-2 x':'burger-line-2'}/>
        </div>


        <div className={burgerX?'nav-pages-sidebar':'nav-pages-sidebar hide'}>
          <div><a href='/'><p>GALLERY</p></a></div>
          <div><a href='/'><p>ORDER</p></a></div>
          <div><a href='/'><p>REVIEWS</p></a></div>
          <div><a href='/'><p>FAQs</p></a></div>
        </div>
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