import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/olivia-manalastas/')
  }

  const handleGithub = () => {
    window.open('https://github.com/omtmana')
  }

  const handleResume = () => {
    window.open('olivia.pdf')
  }

  const handleContactMe = () => {
    navigate('/contact')
  }

  return (
    <div className='home'>
      <div className='home-header-banner'>
        <div>
          <span>
            <img src='pic2.png' className='home-image' />
          </span>
          <h1 className='home-name'> Olivia Manalastas </h1>
          {/* color: '#FF0066' */}
          <h2 style={{ fontFamily: 'Ms Madi', fontSize: '3em', color:'#A3C1AD'  }}> Full Stack Engineer </h2>
          <h5 className='home-lang'> HTML - CSS - JavaScript - ReactJS - Ruby - Ruby on Rails - SQL </h5>
          <h4 className='home-links'>
            <span onClick={handleLinkedIn} className='link-data'> LinkedIn </span> |
            <span onClick={handleGithub} className='link-data'> Github </span> |
            <span onClick={handleResume} className='link-data'> Resume </span> |
            <span onClick={handleContactMe} className='link-data'> Contact Me! </span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Home;