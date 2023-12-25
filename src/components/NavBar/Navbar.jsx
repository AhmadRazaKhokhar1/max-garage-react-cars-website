import React, {useEffect} from 'react'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animated-div');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInView) {
          element.classList.add('visible');
        }
      });
    };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); 


  return (
<header>
    <nav>
      <NavLink to="/" style={{textDecoration:'none', background:'transparent', border:'none'}}>
        <div className="brand">
            <h1 className="brandLogo f">M</h1><span>ax</span>&nbsp;
            <h1 className="brandLogo">G</h1><span>arage</span>&nbsp;
        </div> 
        </NavLink>
        <div className="menu">
          <ul className='list'>
          
                    <Link to="luxury" smooth={true} duration={500}>
                <NavLink to='/'>
                      <li>
                        Luxury CARS
                      </li>
                </NavLink>
                  </Link>

              <Link to="sports" smooth={true} duration={500}>
                <NavLink to='/'>
                  <li>
                  Sports Cars
                  </li>
                </NavLink>
              </Link>
        
            <Link to="sedan" smooth={true} duration={500}>
              <NavLink to='/'>
                  <li>
                    Sedan Cars
                  </li>
              </NavLink>
            </Link>
     
          
            <Link to="trucks" smooth={true} duration={500}>
              <NavLink to='/'>
                  <li>
                    Trucks
                  </li>
              </NavLink>
            </Link>
     
 
            <Link to="suv" smooth={true} duration={500}>
              <NavLink to='/'>
                  <li>
                    SUV
                  </li>
              </NavLink>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
              <NavLink to='/'>
                  <li>
                    Contact Us
                  </li>
              </NavLink>
            </Link>

          </ul>
        </div>
        <div>
           <div className="profileIconContainer">
             <img src='/images/max-garage-profile-image.svg' alt="user-profile-image" className="profileIcon" />
           </div>
        </div>
    </nav>
</header>

  )
}

export default Navbar;
