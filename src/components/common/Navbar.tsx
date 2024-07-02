import { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


function Navbar() {
    const[showSidebar,setShowSidebar]=useState<boolean>(false);
    const handleSidebar=()=>{
        
        setShowSidebar(!showSidebar);
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 1199 && showSidebar) {
            setShowSidebar(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [showSidebar]);


    useEffect(()=>{
        if(showSidebar && window.innerWidth <= 1199){
            document.body.style.overflow="hidden"; //fix this, every other click on the nav page element activates this even though the screen is big
        }
        else{
            document.body.style.overflow="initial";
        }
    },[showSidebar])

    const[showGalleryDropdown,setShowGalleryDropdown]=useState<boolean>(false);
    const handleGalleryDropdown=()=>{
        setShowGalleryDropdown(!showGalleryDropdown);
    }
    const[showOrderDropdown,setShowOrderDropdown]=useState<boolean>(false);
    const handleOrderDropdown=()=>{
        setShowOrderDropdown(!showOrderDropdown);
    }

    return (
        <nav>
            <div className={showSidebar?'blacked-out-cover':'hide-blacked-out-cover'} onClick={handleSidebar}/>
            <Link to={'/'} className='nav-logo-wrapper'>
                <img className='nav-logo' src={logo} alt='logo'/>
            </Link>
            <div className={showSidebar?"hamburger x":'hamburger'} onClick={handleSidebar}>
                <div className='hamburger-line-1'/>
                <div className='hamburger-line-2'/>
                <div className='hamburger-line-3'/>
            </div>
            <div className={showSidebar?'nav-items-wrapper sidebar':'nav-items-wrapper'}>

                <div className={showSidebar?'nav-sidebar-content-wrapper':"nav-items-wrapper"}>
                    <Link to={'/'} onClick={handleSidebar} className='nav-item'>HOME</Link>


                    <div className='dropdown-item' onClick={handleGalleryDropdown}>
                        <div className='dropdown-title'>
                            SERVICES
                            <div className={showGalleryDropdown?'drop-indicator minus':'drop-indicator'}>
                                <div className='drop-line-1'/>
                                <div className='drop-line-2'/>
                            </div>
                        </div>
                        <div className={showGalleryDropdown? 'dropdown-content sidebar':'dropdown-content'}>
                            <Link to={'/services'} onClick={handleSidebar} className='dropdown-content-item'>ALL SERVICES</Link>
                            <Link to={'/services/airbrush'} onClick={handleSidebar} className='dropdown-content-item'>AIRBRUSH</Link>
                            <Link to={'/'} onClick={handleSidebar} className='dropdown-content-item'>DTG</Link>
                            <Link to={'/'} onClick={handleSidebar} className='dropdown-content-item'>EMBROIDERY</Link>
                            <Link to={'/'} onClick={handleSidebar} className='dropdown-content-item'>VINYL</Link>
                            <Link to={'/services/events'} onClick={handleSidebar} className='dropdown-content-item'>EVENTS</Link>
                        </div>
                    </div>



                    <div className='dropdown-item' onClick={handleOrderDropdown}>
                        <div className='dropdown-title'>
                            ORDER
                            <div className={showOrderDropdown?'drop-indicator minus':'drop-indicator'}>
                                <div className='drop-line-1'/>
                                <div className='drop-line-2'/>
                            </div>
                        </div>
                        <div className={showOrderDropdown? 'dropdown-content sidebar':'dropdown-content'}>
                            <Link to={'/'} onClick={handleSidebar} className='dropdown-content-item'>CUSTOM ORDER</Link>
                            <Link to={'/'} onClick={handleSidebar} className='dropdown-content-item'>GROUP ORDER</Link>
                            <Link to={'/'} onClick={handleSidebar} className='dropdown-content-item'>EVENT ORDER</Link>

                        </div>
                    </div>
                    <Link to={'/'} onClick={handleSidebar} className='nav-item'>CONTACT US</Link>
                    <Link to={'/faq'} onClick={handleSidebar} className='nav-item'>FAQs</Link>

                </div>
            </div>





        </nav>
    )
}

export default Navbar