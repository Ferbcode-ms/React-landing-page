import React from 'react'
import '../index.css'
const Navbar = () => {
  return (
    <div className="container">

    <nav className='navbar'>
        <img src="./public/img/brand_logo.png" alt="logo" />
        
        <ul className='navbar-list'>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>

        <button>Login</button>
    </nav>
    </div>
  )
}

export default Navbar