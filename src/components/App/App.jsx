import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import UserForm from '../UserForm/UserForm';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import Home from "../Home/Home";
import Navbar from '../Navbar/Navbar';
import StudentForm from '../StudentForm/StudentForm';
import DetailsOfShippmentUser from '../DetailsOfShippmentUser/DetailsOfShippmentUser';
import DetailsOfShipmentOfUser1 from '../DetailsOfShipmentOfUser1/DetailsOfShipmentOfUser1';
import DetailsOfShippmentUser2 from '../DetailsOfShippmentUser2/DetailsOfShippmentUser2';
import DetailsOfShipmentOfUser3 from '../DetailsOfShipmentOfUser3/DetailsOfShipmentOfUser3';
import UserDetails1 from '../UserDetails1/UserDetails1';
import DetailsOfShippmentUser4 from '../DetailsOfShipmentOfUser4/DetailsOfShipmentOfUser4';
import UserDetails2 from '../UserDetails2/UserDetails2';
import TripDetails from '../TripDetails/TripDetails';
export default class App extends Component {
  render() {
    return (
      <>
          
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/userform" element={<UserForm />} />
              <Route path="/studentform" element={<StudentForm />} />
              <Route path="/employeeform" element={<EmployeeForm />} />
              <Route path="/detailspfshippmentuser" element={<DetailsOfShippmentUser />} />
              <Route path="/detailspfshippmentuser1" element={<DetailsOfShipmentOfUser1 />} />
              <Route path="/detailspfshippmentuser2" element={<DetailsOfShippmentUser2 />} />
              <Route path="/detailspfshippmentuser3" element={<DetailsOfShipmentOfUser3 />} />
              <Route path="/detailspfshippmentuser4" element={<DetailsOfShippmentUser4 />} />

              <Route path="/userdetails1" element={<UserDetails1 />} />
              <Route path="/userdetails2" element={<UserDetails2 />} />
              <Route path="/tripdetails" element={<TripDetails />} />




              </Routes>
        
      </>
    )
  }
}
