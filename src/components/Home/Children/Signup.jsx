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
    e.target.style.backgroundColor = 'rgb(65, 65, 241)';
    e.target.style.color = ' rgb(255, 255, 255)';
    e.target.style.borderBottom = '3px solid navy'
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
              
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
                  <input type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md" />
                </div>

                
                <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                  <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md" />
                </div>

              
                <div class="mb-4">
                  <label for="password" class="block text-sm font-medium text-gray-600">New Password</label>
                  <input type="password" id="NewPassword" name="password" class="mt-1 p-2 w-full border rounded-md" />
                </div>

                <div class="mb-4">
                  <label for="password" class="block text-sm font-medium text-gray-600">Confirm Password</label>
                  <input type="password" id="ConfirmPassword" name="password" class="mt-1 p-2 w-full border rounded-md" />
                </div>

              
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Sign Up
                </button>

                      </form>
                  </div>

                  <div className="right">
                  <form method='POST' className="leftForm" onSubmit={logIn}>
              

              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md" />
              </div>

          
              <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
                <input type="password" id="CheckPassword" name="password" class="mt-1 p-2 w-full border rounded-md" />
              </div>

            
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
                <h4>
                  A project by
                </h4>
                <h1>
                  Ahmad Raza Khokhar
                </h1>
            </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Signup
