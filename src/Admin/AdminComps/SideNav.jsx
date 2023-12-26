import React from "react";
import dashboard from "../../Assets/dashboardIcon.svg";
import analytics from "../../Assets/analyticsIcon.svg";
import listedProducts from "../../Assets/listedProducts.svg";
import registeredUsers from "../../Assets/registeredUsersIcon.svg";
import featuredProducts from "../../Assets/featuredProducts.svg";
import listedBlogs from '../../Assets/listedBlogIcon.svg'
const SideNav = () => {
  
  return (
  
      
    <div className="sideMenuNavbar">
      <menu className="sideMenu flex flex-column py-5 px-3 w-62">
        <ul>
          <li className="flex  w-full items-center justify-between my-10 underline-offset-0 " title="Dashboard">
        

            <img
              src={dashboard}
              alt="side nav bar icons"
              className="iconSideNav w-8 "
              />
            Dashboard

          </li>
          <li className="flex  w-full items-center justify-between my-10 underline-offset-0 " title="Analytics">
              
            <img
              src={analytics}
              alt="side nav bar icons"
              className="iconSideNav w-8 "
            />
            Analytics
          </li>
          <li className="flex  w-full items-center justify-between my-10 underline-offset-0 " title="Listed Products">
            <img
              src={listedProducts}
              alt="side nav bar icons"
              className="iconSideNav w-8 "
            />
            Listed Products
          </li>
          <li className=" flex  w-full items-center justify-between my-10 underline-offset-0"  title="Registered">
              
            <img
              src={registeredUsers}
              alt="side nav bar icons"
              className="iconSideNav w-8 "
            />
            Registered Users
          </li>
          <li className="flex  w-full items-center justify-between my-10 underline-offset-0 " title="Featured Products">
              
            <img
              src={featuredProducts}
              alt="side nav bar icons"
              className="iconSideNav w-8 "
            />
            Featured Products
          </li>
          <li className="flex  w-full items-center justify-between my-10 underline-offset-0 " title="Manage Articles">
              
              <img
                src={listedBlogs}
                alt="side nav bar icons"
                className="iconSideNav w-8 "
              />
              Manage Articles
            </li>
        </ul>
      </menu>
    </div>
   

  );
};

export default SideNav;
