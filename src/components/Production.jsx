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
      <h1><span className={handleCode}>Codes</span><span className={handleBlog}>Blogs</span><span className={handlePicture}>Pictures</span></h1>
    </div>
  )
}

export default Production