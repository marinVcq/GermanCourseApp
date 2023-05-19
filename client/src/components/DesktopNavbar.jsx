import React from 'react'
import {Link} from 'react-router-dom'


// Assets
import Logo from '../assets/german_flag_icon.png'
import Burger from '../assets/burger_icon.png'
import Cross from '../assets/cross_icon.png'
import Enter from '../assets/enter_icon.png'


const DesktopNavbar = () => {
  return (
    <div className='navbarContainer'>

        <div className='navbar'>

            <div className='logo'>
                <img src={Logo}></img>
                <p className='textLogo'>Klar</p>
            </div>

            <div className="menu">
                <Link className='link' to="/lesson"><h6 className='nav-link'>Cours</h6></Link>
                <Link className='link' to="/others"><h6 className='nav-link'>Articles</h6></Link>
                <Link className='link' to="/contact"><h6 className='nav-link'>Contact</h6></Link>
                <Link className='link' to="/contributor"><h6 className='nav-link'>Contribuer</h6></Link>
            </div>

            <div className='loginBtnContainer'><button className='loginBtn'><Link className="link" to="/login">Connexion</Link></button> </div>


        </div>






    </div>
  )
}

export default DesktopNavbar