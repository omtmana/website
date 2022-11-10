import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Layout.css'

const Header = () => {
  // const [dropDown, setDropDown] = useState([])

  // useEffect(() => {
  //   const nav = [
  //     // add link to Code
  //     { name: 'Code', path: '/' },
  //     // add link to Pictures
  //     { name: 'Pictures', path: '/' },
  //     // add link to Blogs
  //     { name: 'Blogs', path: '/' }
  //   ]
  //   setDropDown(nav)
  // }, [])

  return (
    <>
      <Link to='/' className='link-home' style={{ float: 'left' }}>
        <img src='home.png' className='header-home' />
      </Link>
      <div className='header'>
        <Link to='/about' className='link'>
          <p> About </p>
        </Link>
        <Link to='/production' className='link'>
        <p> Productions </p>
      </Link>
        {/* <button> Production </button>
        <ul>
          {dropDown.map((d, i) => (
            <li key={i}>
              <Link to={d.path}>{d.name}</Link>
            </li>
          ))}
        </ul> */}
        <Link to='/contact' className='link'>
          {/* <img src='telephone.png' className='header-phone' /> */}
          <p> Contact </p>
        </Link>
      </div>
    </>
  )
}

export default Header