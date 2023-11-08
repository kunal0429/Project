import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

function AddEmployee() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");


  const navigate = useNavigate();

  const submit = () => {
    const payload = {
      id: id,
      name: name,
    };

    axios.post("http://localhost:8100/employee/addUser/", payload).then((resp) => {
      alert("Employee is added Successfully");
      console.log(resp.data);
        navigate("/viewAll");
    });
  };

  return (
    <div>
      <Navbar/>
      <div className="container-fluid page" style={{ padding: "1rem", margin: "0px" }}>
        <div className="container register text-left ui form p-5 m-5" style={{ width: "45vw" }}>
          <div className="heading text-center pb-5">
            <h1>Fill the details of the Employee</h1>
          </div>
          <div class="field">
            <label>Employee Id</label>
            <input type="text" name="emp-id" placeholder="Employee Id" value={id} onChange={(event) => setId(event.target.value)} />
          </div>
          <div class="field">
            <label>Employee Name</label>
            <input type="text" name="emp-name" placeholder="Employee Name" value={name} onChange={(event) => setName(event.target.value)} />
          </div>

          <button class="ui button" type="submit" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
