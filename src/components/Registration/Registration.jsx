import React from 'react'
import Signup from './Children/Signup';


const Registration = () => {
  return (
    <div style={{paddingTop:'90px', top:'50px'}}>
        <hr id="signUp"/>
        
          <div  className=' registrationContainer'>
          <h1 className="titleMain">
            Join Us
            </h1>
            <Signup />
          </div>
          <hr />

    </div>
  )
}

export default Registration;
