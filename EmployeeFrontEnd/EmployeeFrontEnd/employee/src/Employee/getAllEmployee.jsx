import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

function GetAllEmployee() {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8100/employee/getAllUsers").then((response) => {
      setList(response.data);
      console.log(response.data)
    });
  },[]);

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div class="ui huge header m-3">
          <h2>View All the Employees</h2>
        </div>

        <div>
          <table class="ui red table">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Employee Key</th>
              </tr>
            </thead>
            {list.length > 0 &&
              list.map((l) => (
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.name}</td>
                  {/* <td>{l.keyCollected ? ("true") : ("false")}</td> */}
                  {/* <td>{l.keyCollected.toString()}</td> */}
                  <td>{`${l.keyCollected}`}</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default GetAllEmployee;