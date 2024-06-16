import React, { useContext, useState } from "react";
import { Button, Card, Col } from 'react-bootstrap'
import CommentArea from "./CommentArea";
import { ThemeContext } from '../modules/Contexts';
import { useNavigate } from "react-router-dom";

export default function SingleBook({ book, selected, setSelected }) {

    /* const  [selected, setSelected] = useState(false); */
    let [themeCtx, setThemeCtx] = useContext(ThemeContext);
    let navigate = useNavigate();

    console.log(book.img)

  return (
    <Col>
      <Card bg={themeCtx} data-bs-theme={themeCtx} style={{ width: "18rem", border: selected === book.asin ? '2px solid red' : 'none' }} 
      onClick={() => setSelected(book.asin)}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button 
            className="btn btn-dark w-100 my-2"
            onClick={() => navigate('/details/'+book.asin)}
          >Book Details</Button>
        </Card.Body>
      </Card>
      {/* {selected && <CommentArea asin={book.asin} />} */}
    </Col>
  );
}
