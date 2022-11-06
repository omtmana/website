import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      {/* <div> */}
      <Link to='/' className='link'>
        <p> Home Logo </p>
      </Link>
      {/* </div> */}
      <Link to='/about' className='link'>
        <p> About </p>
      </Link>
      <Link to='/production' className='link'>
        <p> Productions </p>
      </Link>
      <Link to='/contact'className='link'>
        <p> Contact</p>
      </Link>
    </div>
  )
}

export default Header