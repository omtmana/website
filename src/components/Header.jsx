import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Layout.css'

const Header = () => {
  return (
    <>
      <Link to='/' className='link-home' style={{ float: 'left' }}>
        {/* <img src='home.png' className='header-home' /> */}
        <h1 className='header-home' style={{fontFamily: 'ms madi', textDecoration:'none'}}> Olivia M. </h1>
      </Link>
      <div className='header'>
        <Link to='/about' className='link'>
          <p> About </p>
        </Link>
        <Link to='/production' className='link'>
        <p> Productions </p>
      </Link>
        <Link to='/contact' className='link'>
          <p> Contact </p>
        </Link>
      </div>
    </>
  )
}

export default Header