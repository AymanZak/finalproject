import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

import axios from '../modules/ApiAxios'

export default function SingleComment({comment,setAdd,add}) {

  const removeComment = (comment) => {

      axios.delete('/comments/' + comment._id).then(response => {
        setAdd(!add);
      })
      .catch(error => console.error(error))
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="outline-danger" className='float-end' onClick={() => removeComment(comment)}>x</Button>  
    </ListGroup.Item>
  )
}
