import React from "react";
import dashboard from "../../Assets/dashboardIcon.svg";
import analytics from "../../Assets/analyticsIcon.svg";
import listedProducts from "../../Assets/listedProducts.svg";
import registeredUsers from "../../Assets/registeredUsersIcon.svg";
import featuredProducts from "../../Assets/featuredProducts.svg";
import listedBlogs from "../../Assets/listedBlogIcon.svg";
import { NavLink } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="sideMenuNavbar">
      <menu className="sideMenu flex flex-column py-5 px-3 w-62">
        <ul>
          <NavLink to="Dashboard">
            <li
              className="flex  w-full items-center justify-between my-10 "
              title="Dashboard"
            >
              <img
                src={dashboard}
                alt="side nav bar icons"
                className="iconSideNav w-8 "
              />
            </li>
          </NavLink>
          <NavLink to="Analytics">
            <li
              className="flex  w-full items-center justify-between my-10 "
              title="Analytics"
            >
              <img
                src={analytics}
                alt="side nav bar icons"
                className="iconSideNav w-8 "
              />
            </li>
          </NavLink>
          <NavLink to="Listedproducts">
            <li
              className="flex  w-full items-center justify-between my-10 "
              title="Listed Products"
            >
              <img
                src={listedProducts}
                alt="side nav bar icons"
                className="iconSideNav w-8 "
              />
            </li>
          </NavLink>
          <NavLink to="RegisteredUsers">
            <li
              className=" flex  w-full items-center justify-between my-10"
              title="Registered"
            >
              <img
                src={registeredUsers}
                alt="side nav bar icons"
                className="iconSideNav w-8 "
              />
            </li>
          </NavLink>
          <NavLink to="FeaturedProducts">
            <li
              className="flex  w-full items-center justify-between my-10 "
              title="Featured Products"
            >
              <img
                src={featuredProducts}
                alt="side nav bar icons"
                className="iconSideNav w-8 "
              />
            </li>
          </NavLink>
          <NavLink to="ListedArticles">
            <li
              className="flex  w-full items-center justify-between my-10 "
              title="Manage Articles"
            >
              <img
                src={listedBlogs}
                alt="side nav bar icons"
                className="iconSideNav w-8 "
              />
            </li>
          </NavLink>
        </ul>
      </menu>
    </div>
  );
};

export default SideNav;
