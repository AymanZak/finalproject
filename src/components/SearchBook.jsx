import React from 'react'
import { Col, Form } from 'react-bootstrap'

export default function SearchBook({ search, handleSearch }) {
  return (
    <Col>
        <Form.Group className="m-3">
          <Form.Control 
                  type="search" 
                  placeholder="Cerca un libro..."
                  value={search}
                  onChange={handleSearch}
          />
        </Form.Group> 
    </Col>
  )
}
