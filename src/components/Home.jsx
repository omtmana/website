import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-header-banner'>
        <div>
          <h1 className='home-name'> Olivia Manalastas </h1>
          <h2 style={{ fontFamily: 'Ms Madi', fontSize: '3em', color: '#FF0066' }}> Software Engineer </h2>
          <button className='home-button'> LinkedIn </button>
          <button className='home-button'> Github </button>
          <button className='home-button'> Resume </button>
        </div>
        <img src='profile_pic.png' className='home-image' />
      </div>
      {/* <div className='home-button-container'>
      </div> */}
    </div>
  )
}

export default Home 