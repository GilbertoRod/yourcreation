import React, { useState } from 'react'
import './Cardv2.css'
interface Props{
    image:string
    title:string
    sub:string
}

function Card({image,title,sub}: Props) {
  const [displayInfo,setDisplayInfo]=useState(false);
  return (
    <div className='card-v2-wrapper'>
        <img className="card-v2-image" src={image}/>
        <div className={displayInfo?"card-v2-info":"card-v2-info card-v2-info-hidden"} onClick={():void=>setDisplayInfo(!displayInfo)}>
            <div className='card-v2-textual'>
              <div className='card-v2-head'>{title}</div>
              <div className='card-v2-show-hide-wrapper'>
                {!displayInfo?<p className='card-v2-show-hide-info'>see more</p>:<p className='card-v2-show-hide-info card-v2-show-hide-info-invisible'>see more</p>}
                <div className={displayInfo?'card-v2-sub card-v2-sub-visible':'card-v2-sub'}>{sub}</div>
              
                {displayInfo?<p className='card-v2-show-hide-info'>see less</p>:<p className='card-v2-show-hide-info card-v2-show-hide-info-invisible'></p>}
              </div>
              
            </div>
        </div>
        <a><button className='collection-button'>View Collection</button></a>
    </div>
  )
}

export default Card