import React, { useState } from "react";
import axios from "axios";
import {Container, Row, Col} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import '../App.css'
 
const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("select");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://react-crud-backend-gk7r.onrender.com/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Container>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>   
          <form onSubmit={saveUser}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>  
            </div>
            <div className="field">
              <label className="label">Gender</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                   <option value="select">--- Gender ---</option> 
                   <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="btn btn-success save-btn">
                  Save
                </button>
              </div>
            </div>
          </form>      
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};
 
export default AddUser;
