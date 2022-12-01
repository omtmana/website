import React from 'react'
import '../styles/Picture.css'

const Picture = () => {
  return (
    <div className='picture'>
      {/* <h1 style={{ fontFamily: 'ms madi', fontSize: '3em' }}>
        Check out my shots!
      </h1> */}
      <div className='picture-container'>
        <div className='picture-wrap'>
          <img src='picture1.jpg' className='picture-img' />
          <p className='picture-description'><i>7 Wonder of the World: Chichen Itza</i></p>
        </div>
        <div className='picture-wrap'>
          <img src='picture2.jpg' className='picture-img'/>
          <p className='picture-description'><i> Tulum Sunrise</i></p>
        </div>
        <div className='picture-wrap'>
          <img src='picture3.jpg' className='picture-img' />
          <p className='picture-description'> Tulum Blanket of Stars</p>
        </div>
        {/* <div className='picture-wrap'>
          <img src='picture4.jpg' className='picture-img'/>
        </div> */}
        <div className='picture-wrap'>
          <img src='picture5.jpg' className='picture-img' />
          <p className='picture-description'> Redwood National Park</p>
        </div>
        {/* <div className='picture-wrap'>
          <img src='picture6.jpg' className='picture-img' />
        </div> */}
        <div className='picture-wrap'>
          <img src='picture7.jpg' className='picture-img' />
          <p className='picture-description'>Haleakalā National Park</p>
        </div>
        <div className='picture-wrap'>
          <img src='picture8.jpg' className='picture-img' />
          <p className='picture-description'>Times Square, NY</p>
        </div>
        <div className='picture-wrap'>
          <img src='picture9.jpg' className='picture-img' />
          <p className='picture-description'>A person sitting down</p>
        </div>
        {/* <div className='picture-wrap'>
          <img src='picture10.jpg' className='picture-img' />
        </div> */}
      </div>
    </div>
  )
}

export default Picture