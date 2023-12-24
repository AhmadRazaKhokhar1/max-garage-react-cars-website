import React, {useState} from 'react'
import axios from 'axios';

function SmSignInSubComp() {
    const [logInEmail, setLogInEmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");
  
    //logIn
    const logIn = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:')
      } catch (error) {
        console.log(
          `There was an Error submitting the SignUp Form! ERROR 404: ${error}`
        );
      }
    };

    
  return (
    <div>
       <form method="POST" className="leftForm" onSubmit={logIn}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="loginEmail"
                  className="mt-1 p-2 w-64 border rounded-md"
                  autoComplete="on"
                  value={logInEmail}
                  onChange={(e) => setLogInEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  id="loginPassword"
                  name="password"
                  className="mt-1 p-2 w-64 border rounded-md"
                  autoComplete="on"
                  value={logInPassword}
                  onChange={(e) => setLogInPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between w-64 text-gray-700">
                <hr
                  style={{
                    width: "80px",
                    border: "1px solid grey",
                    height: "1px",
                  }}
                />
                OR
                <hr
                  style={{
                    width: "80px",
                    border: "1px solid grey",
                    height: "1px",
                  }}
                />
              </div>
              <div className="externalLogIn">
                <button className=" w-60 rounded text-gray-500 border border-gray-400 hover:border-blue-400 hover:bg-blue-70 bg-white border-black-900 focus:ring focus:border-purple-900 px-4 py-2 my-2 flex justify-around items-center">
                  <img
                    src="/images/googleIcon.png"
                    alt="Login-with-google"
                    className="iconExternal"
                    width={25}
                    height={25}
                  />
                  Login With Google
                </button>

                <button className=" w-60 rounded text-gray-500 border border-gray-400 hover:border-blue-400 hover:bg-blue-70 bg-white border-black-900 focus:ring focus:border-purple-900 px-4 py-2 my-2 flex justify-around items-center">
                  <img
                    src="/images/facebookIcon.jpeg"
                    alt="Login-with-facebook"
                    className="iconExternal"
                    width={25}
                    height={25}
                  />
                  Login With Facebook
                </button>
              </div>
              <br />

              <button type="submit" className="btn-primary">
                Continue
              </button>
            </form>
    </div>
  )
}

export default SmSignInSubComp
