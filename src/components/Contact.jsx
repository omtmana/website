import React, { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className='contact'>
      <h1> Contact Me! </h1>
      <div>
      <form className='contact-form'>
        <div>
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
        <div>
        <input
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        <div>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <input
          type='text'
          placeholder='Write your message here!'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        </div>
        <div>
        <button> Send Message! </button>
        </div>
      </form>

      </div>
    </div>
  )
}

export default Contact