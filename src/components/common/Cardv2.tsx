
import { Link } from 'react-router-dom'
import './Cardv2.css'
interface Props{
    image:string
    title:string
    desc:string
    sub:string
    link?:string
}

function Card({image,title,desc,sub,link}: Props) {

  return (
    <Link to={link?link:'/'}>
    <div className='card-v2-wrapper'>
        <img className="card-v2-image" alt='Company Service' src={image}/>
        <div className="card-v2-info">
            <div className='card-v2-textual'>
              <div className='card-v2-head'>{title}</div>
              <div className='card-v2-sub'>{sub}</div>

              <div className='card-v2-desc'>{desc}</div>
              
            </div>
            <button className='collection-button'>LEARN MORE</button>
        </div>

    </div>
    </Link>
  )
}

export default Card