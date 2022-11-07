import React, { useState, useEffect } from 'react'
import '../styles/Contact.css'
import CommentDisplayCard from './CommentDisplayCard'

const Contact = () => {
  const [data, setData] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const fetchLink = 'http://localhost:3000/contactMe'

  // GET 
  useEffect(() => {
    fetch(fetchLink)
      .then(res => res.json())
      .then((data) => setData(data))
  })

  //UPDATE displayed items
  const handleAddComment = (newComment) => {
    const updatedCommentSection = [...data, newComment]
    setData(updatedCommentSection)
  }

  // POST
  const handleSubmit = ((e) => {
    e.preventDefault()
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');

    fetch(fetchLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
      }),
    })
      .then((res) => res.json())
      .then((newComment) => handleAddComment(newComment))
  })

  return (
    <div className='contact'>
      <h1> Contact Me! </h1>
      <div>
        <form onSubmit={handleSubmit} className='contact-form'>
          <div>
            <input
              className='input-first-name'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              className='input-last-name'
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              className='input-email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className='input-message'
              type='text'
              placeholder='Write your message here'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button> Send Message! </button>
          </div>
        </form>
      </div>
      <div className='comment-display'>
        {
          data.map((comment) => {
            return <CommentDisplayCard comment={comment} />
          })
        }
      </div>
    </div>
  )
}

export default Contact