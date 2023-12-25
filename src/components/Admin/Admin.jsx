import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Loader from '../Loader/Loader';
import SideNav from './SubComps/SideNav';
import UpperNav from './SubComps/UpperNav';

const Admin = () => {
  return (
    <div style={{minHeight:'100vh'}}>
    <div className="upperNav  mt-16 ml-0 w-full fixed ">
      <UpperNav/>
    </div>
    <div className="sideNav h-5/6 flex flex-column w-52 mt-32 fixed ">
      <SideNav/>
    </div>
    </div>
  )
}

export default Admin
