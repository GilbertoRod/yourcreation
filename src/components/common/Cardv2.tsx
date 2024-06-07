
import './Cardv2.css'
interface Props{
    image:string
    title:string
    desc:string
    sub:string
}

function Card({image,title,desc,sub}: Props) {

  return (
    <div className='card-v2-wrapper'>
        <img className="card-v2-image" alt='Company Service' src={image}/>
        <div className="card-v2-info">
            <div className='card-v2-textual'>
              <div className='card-v2-head'>{title}</div>
              <div className='card-v2-sub'>{sub}</div>

              <div className='card-v2-desc'>{desc}</div>
              
            </div>
            <a href='/'><button className='collection-button'>View {title}</button></a>
        </div>

    </div>
  )
}

export default Card