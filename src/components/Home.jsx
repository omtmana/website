import React from 'react'
import '../styles/Home.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleLinkedIn = () => {
    navigate('/about')
  }

  const handleContactMe = () => {
    navigate('/contact')
  }

  return (
    <div className='home'>
      <div className='home-header-banner'>
        <div>
          <h1 className='home-name'> Olivia Manalastas </h1>
          <h2 style={{ fontFamily: 'Ms Madi', fontSize: '3em', color: '#FF0066' }}> Software Engineer </h2>
          <h4 className='home-links'>
            <span onClick={handleLinkedIn} className='link-data'> LinkedIn </span> |
            <span className='link-data'> Github </span> |
            <span className='link-data'> Resume </span> |
            <span onClick={handleContactMe} className='link-data'> Contact Me! </span>
          </h4>
          {/* <button className='home-button'> LinkedIn </button>
          <button className='home-button'> Github </button>
          <br></br>
          <button className='home-button'> Resume </button>
          <button className='home-button'> Contact Me! </button> */}
        </div>
        <img src='profile_pic.png' className='home-image' />
      </div>
      {/* <div className='home-button-container'>
      </div> */}
    </div>
  )
}

export default Home 