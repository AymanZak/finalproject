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
    /* fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      body: JSON.stringify(comments),
      headers: { 
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTcxNjAzMTcsImV4cCI6MTcxODM2OTkxN30.bqrIYq7VrpiQgG5X885HS2AfENPgUz0dSGUkrW357Ek' 
      }
    }).then(response => response.json())
      .then(data => {
        // se tutto va a buon fine
        // console.log(data)
        // alert('Il commento è stato aggiunto!!!!')
        setAdd(!add)
        setComments({comment: '', rate: 0, elementId: elementId})
      })
      .catch(error => console.error(error)) */
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





/* let obj  = { name: 'mario', lastName: 'rossi', city: 'Paris'}
let obj2 = obj;
let obj3;
Object.assign(obj3, obj);
let obj4 = { ...obj }

obj2.name = 'Antonio';
console.log(obj.name);
console.log(obj2.name);


console.log(obj);
console.log(...obj) */