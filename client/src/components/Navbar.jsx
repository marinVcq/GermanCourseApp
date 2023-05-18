import React from 'react'
import {Link} from 'react-router-dom'
// Assets
import Logo from '../assets/german_flag_icon.png'
import Burger from '../assets/burger_icon.png'
import Cross from '../assets/cross_icon.png'


import { useState, useEffect } from 'react'

const Navbar = () => {

  const [navbarExpand, setNavbarExpand] = useState(false)
  const [bodyScroll, setBodyScroll] = useState(true)

    useEffect(() => {
      navbarExpand ? setBodyScroll(false) : setBodyScroll(true)
      if(!bodyScroll){
        document.body.style.overflowY = 'hidden';
      }else{
        document.body.style.overflowY = 'scroll';
      }      
    })

  const handleToggle = () => {
      setNavbarExpand(prev => !prev)
  }

  return (
    <>
      <div className={navbarExpand ? "bg-layer active": "bg-layer"}></div>
      <div className='navbarContainer'>

        <div className='logo'>
          <img src={Logo}></img>
          <p>Na Klar!</p>
        </div>

        <div className='menuBtn' ><img src={navbarExpand ? Cross : Burger} onClick={handleToggle} ></img></div>

        
        <div className={`menu ${navbarExpand ? " show": ""}`}>
          <Link className='link' to="/lesson"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Leçons</h6></Link>
          <Link className='link' to="/others"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Articles</h6></Link>
          <Link className='link' to="/news"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Actualités</h6></Link>
          <Link className='link' to="/contact"><h6 className='nav-link' onClick={navbarExpand ? handleToggle : null}>Nous contacter</h6></Link>
        </div>
      </div>
    </>
  )
}

export default Navbar