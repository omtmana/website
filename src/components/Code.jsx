import React from 'react'
import '../styles/Code.css'

const Code = () => {
  return (
    <div className='code'>
      <h1 style={{ fontFamily: 'Ms Madi' }}> Check out my code! </h1>
      <div className='code-container'>
        <div className='code-card'>
          <h1> Scan Me! </h1>
          <img />
          <button className='code-button'>Github</button>
        </div>
        <div className='code-card'>
          <h1> Flypto </h1>
          <button className='code-button'>Github</button>
        </div>
      </div>
    </div>
  )
}

export default Code