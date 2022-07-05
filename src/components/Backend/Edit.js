import React, { useEffect, useState } from 'react'
import {
  Form,
  FormGroup
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import array from './array';

function Edit() {
  const [name, setname] = useState('');
    const [age, setage] = useState('');
    const[id,setid] = useState('');

    let history = useNavigate();
    var index = array.map(function(e) { 
      return e.id; 
    }).indexOf(id);
    const handelSubmit = (e) =>{

      e.preventDefault(); 
      let a = array[index] 
      a.Name = name
      a.Age = age
      history('/home')
  }

  useEffect(() => {
    setname(localStorage.getItem('Name'))
    setage(localStorage.getItem('Age'))
    setid(localStorage.getItem('id'))
}, [])

  return (
    <>
    <h1>Edit the data</h1>
    <Form>
        
    <FormGroup>
      <label>Name</label>
      <Form.Control value={name} 
                              onChange={e => setname(e.target.value)}  
                              type="text" placeholder="Enter Name" />
      </FormGroup>
      <FormGroup>
      <label>Age</label>
      <Form.Control value={age} 
                              onChange={e => setage(e.target.value)} 
                              type="text" placeholder="Age" />
      </FormGroup>
  <button type='submit' className="btn btn-primary" onClick={e => handelSubmit(e)}>Confirm</button>
   <Link to="/" className="btn btn-danger ml-5">Cancel</Link>
  </Form>
  </>
  )
}

export default Edit