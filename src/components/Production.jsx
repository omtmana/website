import React from 'react'
import '../styles/Production.css'
import Code from './Code'
import { useNavigate } from 'react-router-dom'

const Production = () => {
  let navigate = useNavigate()

  const handleCode = (() => {
    navigate('/code')
  })

  const handleBlog = (() => {
    navigate('/blog')
  })

  const handlePicture = (() => {
    navigate('/picture')
  })

  return (
    <div className='production'>
      {/* <h1>
        <span onClick={handleCode} className='production-code'> Codes </span>|
        <span onClick={handleBlog} className='production-blog'> Blogs </span>|
        <span onClick={handlePicture} className='production-picture'> Pictures </span>
        </h1> */}
      <div>
        <div onClick={handleCode} className='production-code'>
          <h1> Code </h1>
        </div>
        <div onClick={handleBlog} className='production-blog'>
          <h1> Blogs </h1>
        </div>
        <div onClick={handlePicture} className='production-picture'>
          <h1> Pictures </h1>
        </div>
      </div>

   </div>
  )
}

export default Production