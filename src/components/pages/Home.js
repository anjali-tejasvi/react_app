import React from 'react'
//import React, { useEffect, useState } from "react";
//import axios from "axios";
// import { API_BASE_PATH } from "../API_url";
import {Link, NavLink } from "react-router-dom";
import array from '../Backend/array';
import {useNavigate} from 'react-router-dom';

export default function Home() {

 // let url = 'https://reqres.in/api/users';
  let history = useNavigate();
  //const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get('https://reqres.in/api/users').then((res) => {
  //     if (res && res.data && res.data.data) {
  //       setUsers(res.data.data);
  //     }
  //   });
  // }, []);


  //DELETE BTN
  function deleted(ID){
    var index =  array.findIndex((x) => x.id === ID);
    array.splice(index,1);
    history("/");
  }

  return (
   
    <table border="2px" className="tablerow">
      <thead className="tableHead">
      <tr className="tablerow">
        <th className="tablerow">Name</th>
        <th className="tablerow">Age</th>
        <th className="tablerow">Action</th>
      </tr>
      </thead>

      {array.map((item) => {
return(
<tr>
      <td className="tablerow">{item.Name}</td>
      <td className="tablerow">{item.Age}</td>
      {/* {users.map((item) => {
        return (
          <tr key={item.id}>
            <td className="tablerow">
            {item.Name}
            </td>
            <td className="tablerow">{item.Age}</td> */}
            {/* <td className="tablerow">
              {item.first_name} {item.last_name}
            </td>
            <td className="tablerow">{item.email}</td> */}
            <td className="tablerow">
              <NavLink to={'/edit'} >
                <button className="edit">edit</button>
              </NavLink>
              
                <button className="delete" onClick={(e)=> deleted(item.id)}>delete</button>
             
            </td>
          </tr>
         
        );
      })}
      <Link to="/create">
      <button className="addUser">ADD USER</button>
      </Link>

    </table>
  );
}