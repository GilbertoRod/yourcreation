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
        <div className='card-image-container'>
        <img className="card-image" alt={title} src={image}/>
        </div>
        <div className="card-info">
            <div className='card-title'>{title}</div>
            <div className='card-sub'>{sub}</div>
        </div>
    </div>
  )
}

export default Card