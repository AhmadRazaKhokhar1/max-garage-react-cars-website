import React from "react";
import axios from "axios";
import SideNav from './AdminComps/SideNav'
import UpperNav from "./AdminComps/UpperNav";
import { Outlet } from "react-router-dom";


const Admin = () => {

  return (
    <>
    <div className="mainAdmin">
      <div className="navsMainAdmin mt-0 fixed">
        <div className="upperNav  mt-16 ml-0 w-full fixed ">
          <UpperNav />
        </div>
        <div className="sideNav h-full flex flex-column mt-28 fixed ">
          <SideNav/>
        </div>
      </div>
      <Outlet/>
    </div>
    </>
  );
};

export default Admin;
