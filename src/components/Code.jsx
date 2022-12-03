import React from 'react'
import '../styles/Code.css'
import { useNavigate } from 'react-router-dom'

const Code = () => {
  let navigate = useNavigate()

  const handleCodeOne = () => {
    window.open('https://github.com/omtmana/qrCode')
  }

  const handleCodeTwo = () => {
    window.open('https://github.com/tcloma/Flypto-Crypto')
  }

  const handleCodeThree = () => {
    window.open('https://github.com/omtmana/omtm-phase-2-project.git')
  }

  return (
    <div className='code'>
      {/* <h1 style={{ fontFamily: 'Ms Madi' }}> Check out my code! </h1> */}
      <div className='code-container'>
        <div className='code-card'>
          <h1> Scan Me! </h1>
          <img />
          <button className='code-button' onClick={handleCodeOne}>Github</button>
        </div>
        <div className='code-card'>
          <h1> Flypto </h1>
          <button className='code-button' onClick={handleCodeTwo}>Github</button>
        </div>
        <div className='code-card'>
          <h1> OMT </h1>
          <button className='code-button' onClick={handleCodeThree}>Github</button>
        </div>
      </div>
    </div>
  )
}

export default Code