import './WaveDivider.css'

function WaveDivider() {
  return (
    <div className='wave-page-divider'>
        <svg xmlns="http://www.w3.org/2000/svg" className='wave-page-divider-main' viewBox="0 224 1440 96"><path fill="white" fillOpacity="1" d="M0,224L80,224C160,224,320,224,480,240C640,256,800,288,960,288C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='wave-page-divider-cover' viewBox="0 224 1440 96"><path fill="var(--primary-color)" fillOpacity="1" d="M0,224L80,224C160,224,320,224,480,240C640,256,800,288,960,288C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    
    </div>
  )
}

export default WaveDivider