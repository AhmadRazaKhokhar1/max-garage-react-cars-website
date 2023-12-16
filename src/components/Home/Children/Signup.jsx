import React from 'react'

const Signup = () => {

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
            <button className="btn-main lf" onFocus={handleClick} onBlur={handleBlur}>
                Sign up
            </button>
            <button className="btn-main rh" onFocus={handleClick} onBlur={handleBlur}>
                Log in
            </button>
        </div>
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

              
                <div class="mb-6">
                  <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
                  <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md" />
                </div>

              
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Sign Up
                </button>

                      </form>
                  </div>

                  <div className="right">
                      <form method='POST' className="rightForm" onSubmit={logIn}>

                      <input type="email" name="username" id="username" placeholder='Enter your email' required />
                          <input type="tel" name="username" id="username" placeholder='Enter your phone' required />

                          <input type="submit" id='logIn' value="Continue" />

            </form>
        </div>

        <div className="slider-main">
            <div className="main-content">
                <h1>

                </h1>
            </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Signup
