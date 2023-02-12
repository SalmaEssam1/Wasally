import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'


export default class UserForm extends Component {
  render() {
    return (
      <>
      <Navbar/>
    
      <section className="userForm">
      <div className="container">
      <h3 className='text-center'><span className='green'>U</span>SER</h3>
      <h4>Add Your Personal Information</h4>
      <form action="">
      <div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="nationalId" className="col-form-label">National ID : </label>
  </div>
  <div className="col-lg-10">
    <input type="text"  className="form-control " name='nationalId' placeholder='National ID' />
  </div>
  
</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="dateOfBirth" className="col-form-label">Date Of Birth : </label>
  </div>
  <div className="col-lg-10">
    <input type="date"  className="form-control" name="dateOfBirth" placeholder='Day' />
  </div>
</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="phoneNumber" className="col-form-label">Phone Number : </label>
  </div>
  <div className="col-lg-10">
    <input type="number"  className="form-control" placeholder='Phone Number' name='phoneNumber' />
  </div> 
</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="city" className="col-htmlForm-label">City : </label>
  </div>
  <div className="col-lg-5">
    <input type="text"  className="form-control" placeholder='City Name' name='cityName' />
  </div> 
  <div className="col-lg-5">
    <input type="text"  className="form-control" placeholder='City Id' name='cityId'/>
  </div> 
</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="governate" className="col-form-label">Governate : </label>
  </div>
  <div className="col-lg-5">
    <input type="text"  className="form-control" placeholder='Governate Name' name='governateame' />
  </div> 
  <div className="col-lg-5">
    <input type="text"  className="form-control" placeholder='Governate Id' name='governateId'/>
  </div> 
</div>

<button type="submit" className="btn">SAVE</button>

       </form>
       </div>
        </section>
      <Footer/>
      </>
    )
  }
}