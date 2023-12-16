import React, {useEffect} from 'react'
import { Link } from 'react-scroll';

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

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Empty dependency array to run the effect only once on mount


  return (
<header>
    <nav>
      <a href="/">
        <div className="brand">
            <h1 className="brandLogo f">M</h1><span>ax</span>&nbsp;
            <h1 className="brandLogo">G</h1><span>arage</span>&nbsp;
        </div> 
        </a>
        <div className="menu">
          <ul className='list'>
          
        
                  <li>
                  <a href="#luxury">

                  Luxury CARS
                  </a>
                  </li>
              <Link to="sports" smooth={true} duration={500}>
                  <li>
                  Sports Cars
                  </li>
              </Link>
        
            <Link to="sedan" smooth={true} duration={500}>
                <li>
                  Sedan Cars
                </li>
                </Link>
     
          
            <Link to="trucks" smooth={true} duration={500}>
                <li>
                  Trucks
                </li>
                </Link>
     
 
            <Link to="suv" smooth={true} duration={500}>
                <li>
                  SUV
                </li>
                </Link>

            <Link to="contact" smooth={true} duration={500}>
                <li>
                  Contact Us
                </li>
                </Link>

          </ul>
        </div>
        <div>
           <ul className='lists'>
           <Link to="signUp" smooth={true} duration={500}>
             <li>
              LogIn
             </li>
          </Link>    

             /&nbsp;&nbsp;
           <Link to="signUp" smooth={true} duration={500}>
             <li>
              SignUp
             </li>
             </Link>
           </ul>
        </div>
    </nav>
</header>

  )
}

export default Navbar;
