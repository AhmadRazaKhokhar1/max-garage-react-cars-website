import React from 'react'
import Luxry from './Children/Luxry'
import Sports from './Children/Sports'
import Sedan from './Children/Sedan'
import Trucks from './Children/Trucks'
import SUV from './Children/SUV'
import Contact from './Children/Contact'

const Home = () => {
  return (
    <div className='MAIN'>
           
           <section className="bg">
hbhgv
           </section>

            <hr />
          <div id="luxry">
            <Luxry />
          </div>

          <hr />
          <div id="sports">
            <Sports />
          </div>

          <hr />
          <div id="sedan">
            <Sedan />
          </div>

          <hr />
          <div id="trucks">
            <Trucks />
          </div>

          <hr />
          <div id="suv">
            <SUV />
          </div>

          <hr />
          <div id="contact">
            <Contact />
          </div>
    </div>
  )
}

export default Home
