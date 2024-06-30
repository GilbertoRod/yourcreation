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
            <div className='card-v3-img-container' style={{backgroundImage:`url(${image})`, backgroundPosition:"center",backgroundSize:"cover"}}>

                <h1>{upperTitle}</h1>
                <h3 className='card-v3-sub'>{sub.toUpperCase()}</h3>
                <p className='view-gallery-btn'><Link to={link}>View {title} Gallery</Link></p>
            </div>
    </div>
  )
}

export default Cardv3