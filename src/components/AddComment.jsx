import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
/* import axios from 'axios' */
import axios from '../modules/ApiAxios'

export default function AddComment({elementId, setAdd, add}) {

  const [comments, setComments] = useState({comment: '', rate: 0, elementId: elementId})

  let setCommentHandler = (e) => {
    setComments({
      ...comments, // {comment: '', rate: 0, elementId: elementId}
      comment: e.target.value,
      elementId: elementId
    })
  }

  let setRateHandler = (e) => {
    setComments({
      ...comments, // {comment: '', rate: 0, elementId: elementId}
      rate: e.target.value,
      elementId: elementId
    })
  }

  let sendComment = () => {
    console.log(comments)
    axios.post('/comments/', comments).then(response => {
      setAdd(!add)
      setComments({comment: '', rate: 0, elementId: elementId})
    }).catch(error => console.error(error))
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control 
                type="text" 
                placeholder="Inserisci qui il tuo commento"
                onChange={setCommentHandler}        
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example" onChange={setRateHandler}>
          <option>Open this select menu</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="dark" onClick={sendComment}>Add Comment</Button>
      </Form.Group>
    </Form>
  )
}




