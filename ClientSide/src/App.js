import React from 'react'
import './App.css';
  // import { Routes, Route } from 'react-router';
import Customer from './Compponents/Customer/Customer';
import { getAllCustomers } from "../src/action/customer";
import { useEffect } from "react";
import { connect } from "react-redux";
import AddCustomer from './Compponents/Customer/AddCustomer';
import UpdateCustomer from './Compponents/Customer/UpdateCustomer';
import CustomerDetails from './Compponents/Customer/CustomerDetails';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <>
    <img src={"./img/מאוחדת.jpg"} className="rounded mx-auto d-block"></img>
    <Routes>
      <Route path='' element={<Customer/>}/>
      <Route path='Customer' element={<Customer/>}/>
      <Route path='addCustomer' element={<AddCustomer/>}/>
      <Route path='updateCustomer/:id' element={<UpdateCustomer/>}/>
      <Route path='CustomerDetails/:id' element={<CustomerDetails/>}/>
    </Routes>
    </>
  );
}
const mapStateToProps = (state)=>{
  return {
      // selectedCustomer:state.selectedCustomer
  }
}
export default connect(mapStateToProps,{getAllCustomers}) (App);
