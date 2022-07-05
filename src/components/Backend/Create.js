// import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
// import {
//   Form,
//   FormGroup
// } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// //import axios from 'axios';

// function Create() {

//    // let history = useNavigate();

//     const [name, setname] = useState('');
//     const [age, setage] = useState('');

//   // const [user, setUser] = useState({
//   //   first_name: "",
//   //   email: ""
//   // })


//   // const {first_name, email} = user;
//   // const onInputChange = e =>{
//   //   // console.log(e.target.value);
//   //   setUser({...user,[e.target.name]: e.target.value})
//   // }

//   // const onSubmit = async e => {
//   //   e.preventDefault();
//   //   await axios.post("https://reqres.in/api/users", user);
//   //   history.push("/home");
//   // }

//   return (
//     <Form>
//  <Form.Group className="mb-3" controlId="formBasicName">
//     <Form.Control onChange={e => setname(e.target.value)} 
//                   type="text"
//                   placeholder="Enter Name" required/> 
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicAge">
//     <Form.Control onChange={e => setage(e.target.value)} 
//                   type="text"
//                   placeholder="Age" required/>
//   </Form.Group>

//       {/* <FormGroup>
//         <label>Name</label>
//         <input type="text" placeholder="enter Name" 
//           name= "first_name"
//           value={user.first_name}
//           onChange={e => onInputChange(e)}
//         />
//         </FormGroup>
//         <FormGroup>
//         <label>Email</label>
//         <input type="text" placeholder="email-id" 
//         name="email"
//         value={user.email}
//         onChange={e => onInputChange(e)}

//         />
//         </FormGroup> */}
        
//     <button type='submit' className="btn btn-primary ">Submit</button>
//      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
//     </Form>
//   )
// }

// export default Create