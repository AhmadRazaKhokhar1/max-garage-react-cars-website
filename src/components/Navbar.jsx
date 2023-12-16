import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<header>
    <nav>
      <Link to='/'>
        <div className="brand">
            <h1 className="brandLogo f">M</h1><span>ax</span>&nbsp;
            <h1 className="brandLogo">G</h1><span>arage</span>&nbsp;
        </div> 
      </Link>
        <div className="menu">
          <ul className='list'>
              <a href="#luxry"> 
                  <li>
                  Luxury CARS
                  </li>
              </a>
              <a href="#sports">
                  <li>
                  Sports Cars
                </li>
              </a>
            <a href="#sedan">
                <li>
                  Sedan Cars
                </li>
              </a>
            <a href="#trucks">
                <li>
                  Trucks
                </li>
              </a>
            <a href="#suv">
                <li>
                  SUV
                </li>
              </a>
            <a href="#contact">
                <li>
                  Contact Us
                </li>
              </a>
          </ul>
        </div>
        <div>
           <ul className='lists'>
             <li>
              Login
             </li>
             /&nbsp;&nbsp;
             <li>
              Signup
             </li>
             
           </ul>
        </div>
    </nav>
</header>

  )
}

export default Navbar;
