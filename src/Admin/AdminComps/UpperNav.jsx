import React from "react";
import addProduct from "../../Assets/addProductIcon.svg";
import addBlog from "../../Assets/addBlogIcon.svg";
import addEmployee from "../../Assets/addEmployeeIcon.svg";
import employeeAttendance from '../../Assets/employeeAttendanceIcon.svg'
import { NavLink } from "react-router-dom";
function UpperNav() {
  return (
    <div>
      <div className="upperNavBar">
        <menu className="upperMenuBar">
          <ul className="flex px-96 py-2 " style={{listStyle:'none'}}>
            <NavLink style={{background:'none', listStyle:'none', all:'initial'}} to="AddProduct">
              <li className="iconsUpperNav">
                <img
                  src={addProduct}
                  alt="Upper Nav Icon"
                  title="Add a product"
                  className="iconUpperNav w-8"
                />
              </li>
            </NavLink>
            <NavLink style={{background:'none', all:'initial', listStyle:'none'}} to="WriteArticle">
              <li className="iconsUpperNav">
                <img
                  src={addBlog}
                  alt="Upper Nav Icon"
                  title="Write an article"
                  className="iconUpperNav w-8"
                />
              </li>
            </NavLink>
            <NavLink style={{background:'none',all:'initial', listStyle:'none'}} to="AddEmployee">
              <li className="iconsUpperNav">
                <img
                  src={addEmployee}
                  alt="Upper Nav Icon"
                  title="Add an employee"
                  className="iconUpperNav w-8"
                />
              </li>
            </NavLink>
            <NavLink style={{background:'none', all:'initial',  listStyle:'none'}} to="EmployeeAttendance">
              <li className="iconsUpperNav ">
                <img
                  src={employeeAttendance}
                  alt="Upper Nav Icon"
                  title="Mark Attendance"
                  className="iconUpperNav active:bg-red-0 w-8"
                />
              </li>
            </NavLink>
          </ul>
        </menu>
      </div>
    </div>
  );
}

export default UpperNav;
