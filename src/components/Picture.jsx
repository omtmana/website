import React from 'react'
import '../styles/Picture.css'

const Picture = () => {
  return (
    <div className='picture'>
      <h1 style={{ fontFamily: 'ms madi', fontSize: '3em' }}>
        Check out my shots!
      </h1>
      <div className='picture-container'>
        <div>
          <img src='picture1.jpg' className='picture-img' />
          {/* <p><i>7 Wonder of the World: Chichen Itza</i></p> */}
        </div>
        <div>
          <img src='picture2.jpg' className='picture-img'/>
        </div>
        <div>
          <img src='picture3.jpg' className='picture-img' />
        </div>
      </div>
    </div>
  )
}

export default Picture