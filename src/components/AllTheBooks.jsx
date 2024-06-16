import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'
import SearchBook from './SearchBook';
import CommentArea from './CommentArea';

export default function AllTheBooks(props) {

  /* const [search, setSearch] = useState(''); */
  /* const handleSearch = (e) => setSearch(e.target.value) */
  const  [selected, setSelected] = useState(false);

  return (

    <Row>
      <Col md={12}>
      {/* <Row><SearchBook search={search} handleSearch={handleSearch} /></Row> */}
        <Row> {props.books
              .filter(book => book.title.toLowerCase().includes(props.searchQuery))
              .map(book => <SingleBook 
                                key={book.asin} 
                                book={book}
                                selected = {selected}
                                setSelected = {setSelected}
                                 />)} 
        </Row>
      </Col>
      {/* <Col md={3}>
        <CommentArea asin={selected}  />
      </Col> */}
    </Row>
  )
}
