import React from 'react'
import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

export default function CommentList({comments , setAdd, add}) {
  return (
    <ListGroup>
        {comments.map(comment => <SingleComment key={comment._id} comment={comment} setAdd={setAdd} add={add} />)}
    </ListGroup>
  )
}
