import React, { useEffect, useState } from 'react'
import AddComment from './AddComment';
import CommentList from './CommentList';
import { Alert, Spinner } from 'react-bootstrap';
/* import axios from 'axios'; */
import axios from '../modules/ApiAxios'


/* const URLCommentsAPI = 'https://striveschool-api.herokuapp.com/api/books/'; */

export default function CommentArea({ asin }) {

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [add, setAdd] = useState(false);


    useEffect(() => {
      setIsLoading(true);
        /* fetch(URLCommentsAPI+asin+"/comments/", {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTcxNjAzMTcsImV4cCI6MTcxODM2OTkxN30.bqrIYq7VrpiQgG5X885HS2AfENPgUz0dSGUkrW357Ek' }
        }).then( response => response.json() )
          .then( data => {
                  setComments(data);
                  setIsLoading(false);
                })
          .catch(err => {
            setIsError(true)
            setIsLoading(false);
          }) */
         axios.get('/books/'+asin+"/comments/")
          .then(response => {
            setComments(response.data);
            setIsLoading(false);
          }).catch(err => {
            setIsError(true)
            setIsLoading(false);
          })
     
    }, [add, asin])

  return (
    <div>
        {isLoading && <div className="text-center my-3"><Spinner className='my-3' animation="border" role="status" /> </div>}
        {isError && <div className="text-center my-3"><Alert variant={'danger'}>Errore di caricamento</Alert></div>}
        <AddComment elementId={asin} setAdd={setAdd} add={add} />
        <CommentList comments={comments} setAdd={setAdd} add={add} />
    </div>
  )
}
