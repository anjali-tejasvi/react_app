import React from 'react'
import {Link} from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem
}from 'react-bootstrap';
function UserList() {
  return (
    <ListGroup className='mt-4'>
      <ListGroupItem className="d-flex ">
        <strong>User One</strong>
      <div className='ml-auto'>
        <Link to="/Edit" className='edit'>Edit</Link>
        <button className='delete'>Delete</button>
      </div>
      </ListGroupItem>
      
    </ListGroup>
  )
}

export default UserList