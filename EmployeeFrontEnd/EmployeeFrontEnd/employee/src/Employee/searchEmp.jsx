import React, { useState } from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";


function SearchEmp() {
  const [eid, setEid] = useState("");

  const navigate = useNavigate()

  const submit = () => {
      navigate(`/search/${eid}`);
    
  };

  return (
    <div>
      <div className="home">
      <Navbar></Navbar>
        <div className="body">
          <div className="container">
            <div className="content">
              <div class="ui equal width form">
                <div class="fields text-left">
                  <div class="p-4 field">
                    <label>Enter Employee Id</label>
                    <input type="text" placeholder="Employee Id" value={eid} onChange={(event) => setEid(event.target.value)} />
                  </div>
                </div>
              </div>
              <div className="search-btn">
                <button class="ui large primary button" type="submit" onClick={submit}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchEmp;
