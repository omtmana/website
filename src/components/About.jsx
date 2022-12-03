import React from 'react'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className='about-body'>
        <span className='about-list'>
      <h1 style={{fontFamily: 'ms madi', fontSize: '3em'}}> 
      Hi! My name is Olivia. 
      </h1>
          <p> 📍 Born in America. Grew up in the Philippines. Currently in New York City</p>
          <p> 🧩 Civil Engineering dropout with experience in Mathematics education, Civil Engineering, and Marketing.</p>
          <p> 🧘🏻‍♀️ Aspiring tennis player. V3 in indoor bouldering. 5.10d in indoor top-rope. Occasional futball player</p>
          {/* <p> Currently reading: 21 Lessons for the 21st Century </p> */}
        </span>
      </div>
    </div>
  )
}

export default About;
