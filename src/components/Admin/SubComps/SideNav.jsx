import React from "react";
import dashboard from "../../../Assets/dashboardIcon.svg";
import analytics from "../../../Assets/analyticsIcon.svg";
import listedProducts from "../../../Assets/listedProducts.svg";
import registeredUsers from "../../../Assets/registeredUsersIcon.svg";
import featuredProducts from "../../../Assets/featuredProducts.svg";

const SideNav = () => {
  return (
    <div className="sideMenuNavbar">
      <menu className="sideMenu felx flex-column py-5 px-5 z-0 w-72">
        <ul>
          <li className="flex  w-full items-center justify-between my-10 underline-offset-0 ">
            

            <img
              src={dashboard}
              alt="side nav bar icons"
              className="iconSideNav w-12 "
              title="Dashboard"
              />
            Dashboard
            
          </li>
          <li className="flex  w-full items-center justify-between my-10 underline-offset-0 ">
            

            <img
              src={analytics}
              alt="side nav bar icons"
              className="iconSideNav w-12 "
              title="Analytics"
              />
            Analytics
            
          </li>
          <li className="flex  w-full items-center justify-between my-10 underline-offset-0 ">
            

            <img
              src={listedProducts}
              alt="side nav bar icons"
              className="iconSideNav w-12 "
              title="Listed Products"
              />
            Listed Products
            
          </li>
          <li className=" flex  w-full items-center justify-between my-10 underline-offset-0 ">
            

            <img
              src={registeredUsers}
              alt="side nav bar icons"
              className="iconSideNav w-12 "
              title="Registered Users"
              />
            Registered Users
            
          </li>
          <li className="flex  w-full items-center justify-between my-10 underline-offset-0 ">
            

            <img
              src={featuredProducts}
              alt="side nav bar icons"
              className="iconSideNav w-12 "
              title="Featured Products"
              />
            Featured Products
            
          </li>
        </ul>
      </menu>
    </div>
  );
};

export default SideNav;
