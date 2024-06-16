import React, { useState } from 'react'
import { Button, Row } from 'react-bootstrap';
import SearchBook from './SearchBook';

/* let users = [
    {id:1, name: 'John', lastName: 'Smith', email: 'john.smith@example.com'},
    {id:2, name: 'Mario', lastName: 'Rossi', email: 'mario.rossi@example.com'},
    {id:3, name: 'Francesca', lastName: 'Neri', email: 'francesca.neri@example.com'},
    {id:4, name: 'James', lastName: 'Red', email: 'john.red@example.com'}
] */

export default function UserComponent() {
    
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const handleSearch = (e) => setSearch(e.target.value)

    const loadUsers = () => {
        alert('Loading users...');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }

    const removeUsers = (user) => {
        alert('Delete users... ' + user.name);
        fetch('https://jsonplaceholder.typicode.com/users/'+user.id, {method: 'DELETE'})
            .then(response => response.json())
            .then(json => {
                setUsers(users.filter(u => u.id !== user.id))
            })
    }

    return (
        <>
        <Row><Button variant="warning" onClick={loadUsers}>Carica Dati</Button></Row>
        <Row><SearchBook search={search} handleSearch={handleSearch} /></Row>
        <Row>
            <ul>
             {users
                .filter(user => user.name.toLowerCase().includes(search))
                .map(user => <li className='mb-2'>
                                {user.name} - {user.email} 
                                <Button variant="danger" 
                                        size="sm" 
                                        className='float-end'
                                        onClick={(e) => removeUsers(user)}>x</Button>
                            </li>)} 
            </ul>
        </Row>
        </>
    )
    }
