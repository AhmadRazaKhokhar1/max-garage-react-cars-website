import React, {useEffect} from 'react'
import Luxry from './Children/Luxry'
import Sports from './Children/Sports'
import Sedan from './Children/Sedan'
import Trucks from './Children/Trucks'
import SUV from './Children/SUV'
import Contact from './Children/Contact'
import Sponsor from './Children/Sponsor'
import { Element } from 'react-scroll/modules/mixins/Helpers'
import Signup from './Children/Signup'
const Home = () => {
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
  }, []); 
  return (
    <>
  
    <div >
      <div className="title">
          <h1 className="BrandTitle">M</h1><h4 className="rem">ax</h4>&nbsp;&nbsp; 
          <h1 className="BrandTitle">G</h1><h4 className="rem">arage</h4>
        </div>
      <div className="cont">
        
        <img src="../images/cars/ns1.jpg" alt="Cars cars supra mk4 mk-4 supra 1994" className="bg" />
        <img src="../images/cars/ns3.jpg" alt="Cars cars supra mk4 mk-4 supra 1994" className="bg sc" />
        
      </div>
      </div>
      <div className="MAIN">
      <br />

          <div className="sponsors">
            <Sponsor />
          </div>

        <hr id="luxury"/>
        
          <div  className='animated-div left-to-right'>
            <h1 className="titleMain">
              Luxry Cars
            </h1>
            <Luxry />
          </div>
          
          <Element name='sports' className='element'></Element>
        <hr id="sports"/>
        
          <div  className='animated-div right-to-left'>
          <h1 className="titleMain">
              Sports Cars
            </h1>
            <Sports />
          </div>

          <Element name='sedan' className='element'></Element>
        <hr id="sedan"/>
        
          <div  className='animated-div left-to-right'>
          <h1 className="titleMain">
              Sedan Cars
            </h1>
            <Sedan />
          </div>

         <Element name='trucks' className='element'></Element>
        <hr id="trucks"/>
        
          <div  className='animated-div right-to-left'>
          <h1 className="titleMain">
              Trucks
            </h1>
            <Trucks />
          </div>

          <Element name='suv' className='element'></Element>
        <hr id="suv"/>
        
          <div  className='animated-div left-to-right'>
         <h1 className="titleMain">
              SUV Cars
            </h1>
            <SUV />
          </div>

          <Element name='contact' className='element'></Element>
        <hr id="contact"/>
        
          <div  className='animated-div right-to-left'>
          <h1 className="titleMain">
            Contact US
            </h1>
            <Contact /> 
          </div>
          <hr />

          <Element name='signUp' className='element'></Element>
        <hr id="signUp"/>
        
          <div  className='animated-div left-to-right'>
          <h1 className="titleMain">
            Join Us
            </h1>
            <Signup /> 
          </div>
          <hr />
    </div>

    </>
  )
}

export default Home
