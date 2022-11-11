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
      <div onClick={handleCode} className='production-code'>
        <h1> Codes </h1>
        </div>
        <div onClick={handleBlog} className='production-blog'>
          <h1> Blogs </h1>
        </div>
        <div onClick={handlePicture} className='production-picture'>
          <h1> Pictures </h1>
        </div>
    </div>
  )
}

export default Production