import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
import '../App.css'
 
const UserList = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("https://react-crud-backend-gk7r.onrender.com/users");
    setUser(response.data);
  };
 
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://react-crud-backend-gk7r.onrender.com/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Container>
      <Row>
        <Col md={2}></Col>

        <Col md={8}>
          <Link to="add" className="btn btn-success">
            Add New Student
          </Link><br/><br/>
          <table class="table table-responsive">        
            <thead className="thead-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col" colSpan="2" className="text-center">Actions</th>
              </tr>
            </thead>
            
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <Link
                      to={`edit/${user._id}`}
                      className="btn btn-info is-small mr-1"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="btn btn-danger is-small mr-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>          
        </Col>

        <Col md={2}></Col>      
      </Row>    
  </Container>
  );
};
 
export default UserList;
