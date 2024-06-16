import React from 'react'
import { Alert } from 'react-bootstrap'

export default function NotFound() {
  return (
    <Alert variant='danger' className='text-center'>
        <h1>Pagina non trovata!!!</h1>
    </Alert>
  )
}
