import React from 'react';
import addProduct from '../../../Assets/addProductIcon.svg';
import addBlog from '../../../Assets/addBlogIcon.svg';
import addEmployee from '../../../Assets/addEmployeeIcon.svg';
import employeeAttendance from '../../../Assets/employeeAttendanceIcon.svg';
function UpperNav() {
  return (
    <div>
      <div className="upperNavBar">
        <menu className="upperMenuBar">
            <ul className='flex px-96 py-2'>
                <li className='iconsUpperNav'><img src={addProduct} alt='Upper Nav Icon' className="iconUpperNav w-12" /></li>
                <li className='iconsUpperNav'><img src={addBlog} alt='Upper Nav Icon' className="iconUpperNav w-12" /></li>
                <li className='iconsUpperNav'><img src={addEmployee} alt='Upper Nav Icon' className="iconUpperNav w-12" /></li>
                <li className='iconsUpperNav'><img src={employeeAttendance} alt='Upper Nav Icon' className="iconUpperNav w-12" /></li>
            </ul>
        </menu>
      </div>
    </div>
  )
}

export default UpperNav
