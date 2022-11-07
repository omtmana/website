import React from 'react'
import '../styles/Home.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/olivia-manalastas/')
  }

  const handleGithub = () => {
    window.open('https://github.com/omtmana')
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
            <span onClick={handleGithub}className='link-data'> Github </span> |
            <span className='link-data'> Resume </span> |
            <span onClick={handleContactMe} className='link-data'> Contact Me! </span>
          </h4>
        </div>
        <img src='profile_pic.png' className='home-image' />
      </div>
    </div>
  )
}

export default Home;