import React from 'react'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className='about-body'>
        <span className='about-list'>
          <h1 style={{ fontFamily: 'ms madi', fontSize: '3em' }}>
            Hi! My name is <span style={{ color: 'rgb(95, 158, 160)' }}> Olivia </span>
          </h1>
          {/* <img src='random.png' style={{zIndex: '-1', width: '200px'}}/> */}
          <p> 📍 Born in America. Grew up in the Philippines. Currently in New York City</p>
          <p> 🧩 Civil Engineering background with experience in Mathematics education, Civil Engineering, and Marketing.</p>
          <p> 🧘🏻‍♀️ Aspiring tennis player. V3 in indoor bouldering. 5.10d in indoor top-rope. Occasional futball player</p>
          {/* <p> Currently reading: 21 Lessons for the 21st Century </p> */}
          <span>
            <p> 🏆 <strong> Current Goal: </strong> Solve 3-5 LeetCode or HackerRank problems to improve my DSA knowledge.</p> 
          </span>
        </span>
        {/* <div>
          <img src='random.png' style={{ width: '200px', marginBottom: '-5px' }} />
        </div> */}
      </div>
    </div>
  )
}

export default About;
