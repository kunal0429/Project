import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from './Employee/addEmployee';
import GetAllEmployee from './Employee/getAllEmployee';
import Home from './Employee/search';
import Search from './Employee/search';
import SearchEmp from './Employee/searchEmp';
import *as xlsx from 'xlsx';
function App() {
   return (
    <div className="App">
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<SearchEmp/>}></Route>
          <Route path='/addUser' element={<AddEmployee/>}></Route>
            <Route path='/viewAll' element={<GetAllEmployee/>}></Route>
            <Route path='/search/:eid' element={<Search/>}></Route>
           </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App;
