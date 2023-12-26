import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";
// import Loader from '../Loader/Loader';
import SideNav from "./AdminComps/SideNav";
import UpperNav from "./AdminComps/UpperNav";
import AddBlog from "./Pages/AddBlog";

const Admin = () => {
  const navigate = useNavigate();

  const handleNavigate = (subPath) => {
    navigate(`/admin${subPath}`);
  };

  return (
    <>
    <div className="mainAdmin">
      <div className="navsMainAdmin">
        <div className="upperNav  mt-16 ml-0 w-full fixed ">
          <UpperNav />
        </div>
        <div className="sideNav h-full flex flex-column mt-28 fixed ">
          <SideNav handleNavigate={handleNavigate}/>
        </div>
      </div>
    </div>
      <Outlet />
    </>
  );
};

export default Admin;
