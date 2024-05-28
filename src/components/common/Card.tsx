import React from 'react'
import './Card.css'
interface Props{
    image:string
    title:string
    sub:string
}

function Card({image,title,sub}: Props) {
  return (
    <div className='card-wrapper'>
        <img className="card-image" src={image}/>
        <div className="card-info">
            <div className='card-title'>{title}</div>
            <div className='card-sub'>{sub}</div>
        </div>
    </div>
  )
}

export default Card