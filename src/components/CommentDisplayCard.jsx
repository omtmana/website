import React from 'react'

const CommentDisplayCard = ({comment}) => {
   const {firstName, lastName, email, message} = comment
  return (
    <div>
      <h3>{firstName} {lastName}</h3>
      <h4>{email}</h4>
      <p>{message}</p>
    </div>
  )
}

export default CommentDisplayCard