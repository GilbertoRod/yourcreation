import React from 'react'
import './Cardv2.css'
interface Props{
    image:string
    title:string
    sub:string
}

function Card({image,title,sub}: Props) {
  return (
    <div className='card-v2-wrapper'>
        <img className="card-v2-image" src={image}/>
        <div className="card-v2-info">
            <div className='card-v2-textual'>
              <div className='card-v2-head'>{title}</div>
              <div className='card-v2-sub'>{sub}</div>
            </div>


        </div>
    </div>
  )
}

export default Card