import React, {useEffect} from 'react'
import { Element } from 'react-scroll';

const Sponsor = () => {

    useEffect(() => {
      const handleScroll = () => {
        const elements = document.querySelectorAll('.box');
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
    }, []);
    

  return (
    <div>
      <div className="sponsor">
        <Element name='section1' className='element'>
        <div className="box">
        <h1 className="Title">
            &nbsp;Our partners
        </h1>
        <p className="summary">
            Get some amazing deals from the most trusted cars service center now available
            at San Fransisco exclusively! connect with us to get an experience better than
            any. Upto <b>50%  OFF</b>  on car oil change and interior polish! Why are you still
            waiting for, subscribe to our services and become a part of our well known car
            brand!
        </p>
        <button className="sponsorBtn">
            Learn More &rarr; 
        </button>
        </div>
        </Element>
        
        <Element name='section1' className='element'>
       <div className="box" onscroll="Sponsor">
        <img src="../images/cars/landcruiser1.jpeg" alt="Land Cruiser" className="sponsorImage" />
        <h2 className="companyName">
            Jhon Services
        </h2>
        </div>
        </Element>
      </div>
      <hr />
    </div>
  )
}

export default Sponsor
