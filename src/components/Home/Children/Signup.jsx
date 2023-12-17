import React, { useEffect, useState } from 'react'

const Signup = () => {


//toggle the slider
const [sliderMain, setSliderMain] = useState('');
const [bTL, setBTL] = useState(''); // border top left
const [bTR, setBTR] = useState(''); // border top right
const [bBL, setBBL] = useState(''); // border bottom left
const [bBR, setBBR] = useState(''); // border bottom right
const [active, setActive] = useState('login')


useEffect(()=>{

}, [])
function leftForm(e){
  setSliderMain('-68px');
  setBBL('0px');
  setBBR('155px');
  setBTL('0px');
  setBTR('155px');

  setActive('login');
}
function rightForm(){
 setSliderMain('273px');
 setBBL('155px');
 setBBR('0px');
 setBTL('155px');
 setBTR('0px');

 setActive('signup');
}


// toggle the button 
  const handleClick = (e) => {
    e.target.style.backgroundColor = 'rgb(32, 0, 75, .85)';
    e.target.style.color = ' rgb(255, 255, 255)';
    e.target.style.borderBottom = '3px solid blue'
  }
  const handleBlur = (e) => {
    e.target.style.backgroundColor = 'rgba(199, 199, 199, 0.445)';
    e.target.style.color = 'rgb(94, 94, 94)';
    e.target.style.borderBottom = ''
  }

//   handeling form submissions

// signUP 
const signUp = async(e)=>{
    e.preventDefault();

   try {
    
} catch (error) {
    console.log(`There was an Error submitting the SignUp Form! ERROR 404: ${error}`)
}
}

//logIn
const logIn = async(e)=>{
    e.preventDefault();
    try {
        
    } catch (error) {
        console.log(`There was an Error submitting the SignUp Form! ERROR 404: ${error}`)
    }
    }
  return (
    <div>
        <br />
        <br />
      <div className="main-con">
        <div className="toggle-btn">
            <button className={`btn-main lf  ${active === 'login' ? 'active' : ''}` } onFocus={handleClick} onBlur={handleBlur} onClick={leftForm}>
                Log in
            </button>
            <button className={`btn-main rh ${active === 'signup' ? 'active' : ''}`} onFocus={handleClick} onBlur={handleBlur}  onClick={rightForm}>
                Sign up
            </button>
        </div>
        <br /><br /><br />
        <div className="container-main">

        <div className="left">
            <form method='POST' className="leftForm" onSubmit={signUp}>
              
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                  <input required type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
                </div>

                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                  <input required type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" autoComplete='on'/>
                </div>

              
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-600">New Password</label>
                  <input required type="password" id="NewPassword" name="password" className="mt-1 p-2 w-full border rounded-md" autoComplete='on'/>
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-600">Confirm Password</label>
                  <input required type="password" id="ConfirmPassword" name="password" className="mt-1 p-2 w-full border rounded-md" autoComplete='on'/>
                </div>

              
                <button type="submit" className="btn-primary">
                  Sign Up
                </button>

                      </form>
                  </div>

                  <div className="right">
                  <form method='POST' className="leftForm" onSubmit={logIn}>
              

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input required type="email" id="email" name="loginEmail" className="mt-1 p-2 w-full border rounded-md" autoComplete='on'/>
              </div>

          
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input required type="password" id="loginPassword" name="password" className="mt-1 p-2 w-full border rounded-md" autoComplete='on'/>
              </div>

            
              <button type="submit" className="btn-primary">
                Continue
              </button>

                    </form>
        </div>

        <div className="slider-main" 
        style={{
          translate:`${sliderMain}`,
          borderTopRightRadius:`${bTR}`,
          borderBottomRightRadius:`${bBR}`,
          borderBottomLeftRadius:`${bBL}`,
          borderTopLeftRadius:`${bTL}`
        }}
             >

            <div className="main-content">
                <h1 style={{fontSize:'24px', fontWeight:'900', wordSpacing:'5px', letterSpacing:'3px'}}>
                  MAX GARAGE
                </h1>
                <div className="flex">
                <span>
                  A Product by
                </span>
                &nbsp;
                &nbsp;
                &nbsp;
                <h1 style={{fontWeight:'900', letterSpacing:'2px'}}>
                  Ahmad Raza Khokhar
                </h1>
                </div>
                
            </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Signup
