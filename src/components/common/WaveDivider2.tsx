import './WaveDivider.css';

function WaveDivider2() {
  return (
    <div className='wave-page-divider'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 120" className="wave-page-divider-main">
            <path fill="white" fillOpacity="1" d="M0,224L80,218.7C160,213,320,203,480,208C640,213,800,235,960,245.3C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 120" className="wave-page-divider-cover">
            <path fill="var(--primary-color)" fillOpacity="1" d="M0,224L80,218.7C160,213,320,203,480,208C640,213,800,235,960,245.3C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
    </div>
  );
}

export default WaveDivider2;
