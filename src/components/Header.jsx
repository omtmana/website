import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Layout.css'

const Header = () => {
  return (
    <div className='header'>
      {/* <div> */}
      <Link to='/' className='link'>
        <img src='home.png'  className='header-home'/>
      </Link>
      {/* </div> */}
      <Link to='/about' className='link'>
        <p> About </p>
      </Link>
      <Link to='/production' className='link'>
        <p> Productions </p>
      </Link>
      <Link to='/contact'className='link'>
        {/* <img src='telephone.png' className='header-phone' /> */}
        <p> Contact </p>
      </Link>
    </div>
  )
}

export default Header