import React from 'react'
import './Cardv3.css'
import { Link } from 'react-router-dom'
type Props = {
    image:string
    title:string
    desc:string
    sub:string
    link:string
}

function Cardv3({image,title,desc,sub,link}: Props) {
    const upperTitle=title.toUpperCase()
  return (
    <div className='card-v3-container'>
            <div className='card-v3-img-container'>
                <img src={image} className='card-v3-img' alt={title}/>
                <h1>{upperTitle}</h1>
            </div>
            <div className='card-v3-text'>

                <h3>{sub.toUpperCase()}</h3>
                <p>{desc}</p>
                <p className='view-gallery-btn'><Link to={link}>View {title} Gallery</Link></p>

            </div>


    </div>
  )
}

export default Cardv3