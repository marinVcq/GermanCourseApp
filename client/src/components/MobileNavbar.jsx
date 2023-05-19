import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

// Assets
import Logo from '../assets/german_flag_icon.png'
import Burger from '../assets/burger_icon.png'
import Cross from '../assets/cross_icon.png'
import Enter from '../assets/enter_icon.png'

const MobileNavbar = () => {

    const [navbarExpand, setNavbarExpand] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [bodyScroll, setBodyScroll] = useState(true)
  
    // Check for expand
    useEffect(() => {
      navbarExpand ? setBodyScroll(false) : setBodyScroll(true)
      if(!bodyScroll){
        document.body.style.overflowY = 'hidden';
      }else{
        document.body.style.overflowY = 'scroll';
      }      
    })
  
    // Check the viewport
    useEffect(() => {
  
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
  
      }, [])
  
    const handleToggle = () => {
        setNavbarExpand(prev => !prev)
    }
  
    return (
      <>
        <div className={navbarExpand ? "bg-layer active": "bg-layer"}></div>
        <div className='navbarContainer'>
  
          <div className='logo'>
            <img src={Logo}></img>
            <p className='textLogo'>Klar</p>
          </div>
  
          <div className='loginBtnContainer'><button className='loginBtn'><Link className="link" to="/login">Connexion</Link></button> </div>
          <div className='menuBtn' style={screenWidth < 800 ? {display: "block"}: {display: "none"}} ><img src={navbarExpand ? Cross : Burger} onClick={handleToggle} ></img></div>
          

        </div>

        <div className={`menu ${navbarExpand && screenWidth < 800 ? "show": ""}`}>
            <Link className='link' to="/lesson"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Cours</h6></Link>
            <Link className='link' to="/others"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Articles</h6></Link>
            <Link className='link' to="/contact"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Contact</h6></Link>
        </div>
        
      </>
    )
}

export default MobileNavbar