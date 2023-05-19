import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

// Side components
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

// Assets
import Logo from '../assets/german_flag_icon.png'
import Burger from '../assets/burger_icon.png'
import Cross from '../assets/cross_icon.png'
import Enter from '../assets/enter_icon.png'



const Navbar = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  // Check the viewport
  useEffect(() => {

      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener('resize', changeWidth)

    }, [])

  return (
    <>
      { screenWidth < 800 ? <MobileNavbar/> : <DesktopNavbar/>}
    </>
  )
}

export default Navbar