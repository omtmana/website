import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-header-banner'>
        <h1 className='home-name'> Olivia Manalastas </h1>
        <h2 style={{fontFamily:'Ms Madi', fontSize:'3em'}}> Software Engineer </h2> 
      </div>
      <div className='home-info-buttons'>
        <button className='home-button'> LinkedIn </button>
        <button className='home-button'> Github </button>
        <button className='home-button'> Resume </button>
      </div>
    </div>
  )
}

export default Home 