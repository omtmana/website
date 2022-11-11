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
      <h1>
        <span onClick={handleCode} className='production-code'> Codes </span>|
        <span onClick={handleBlog} className='production-blog'> Blogs </span>|
        <span onClick={handlePicture} className='production-picture'> Pictures </span></h1>
    </div>
  )
}

export default Production