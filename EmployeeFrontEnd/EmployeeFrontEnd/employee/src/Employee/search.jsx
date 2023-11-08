import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import QRCode from "react-qr-code";

function Search() {

  const {eid} = useParams()

  const [id, setId] = useState("");
  const [ename, setEname] = useState("");

  const [empObj, setEmpObj] = useState({});

  const navigate=useNavigate()
  useEffect(() => {
    axios.get("http://localhost:8100/employee/getUser/" +eid).then((response) => {
      console.log(response.data);
      setEmpObj(response.data);
      setId(response.data.id);
      setEname(response.data.name);
    }).catch((error)=>{
       alert("No Employee with id "+eid)
       navigate("/")
    });
  }, [eid]);


  const collectKey=()=>{

    const payload = {
       id:empObj.id,
       name:empObj.name
    }

    axios.put("http://localhost:8100/employee/updateUser",payload).then((response)=>{
         alert("Key is taken")
         navigate("/viewAll")
    })
  }

  return (
    <div className="container" style={{ background: "white" }}>
      <div className="m-5 text-left printArea" style={{ borderRadius: "20px", border: "1px solid #aaa" }}>
        <div className="d-flex" style={{ justifyContent: "space-between", alignItems: "center", background: "darkblue", color: "#fff", borderRadius: "20px 20px 0px 0px" }}>
          <div className="p-2 mr-3">
            <h4>Employee Details</h4>
          </div>
        </div>

        <div className="">
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="mt-4 ml-4">
              <p>Employee Id</p>
              <h2 className="m-1">
                {empObj.id}
              </h2>
            </div>
            <div className="mt-4 ml-4">
              <p>Employee Name</p>
              <h2 className="m-1">
                {empObj.name}
              </h2>
            </div>
             <div className="mt-3 mr-3" style={{ height: "auto", margin: "0 auto", maxWidth: 80, width: "100%" }}>
              <QRCode size={256} style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={JSON.stringify(empObj)} viewBox={`0 0 256 256`} />
            </div>
          </div>
          <button className="ui button primary" onClick={collectKey}>
            Take Key
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
