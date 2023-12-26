import React, {useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function SmSignInSubComp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
  
    //logIn
    const logIn = async (e) => {
      e.preventDefault();
      const baseUrl = 'http://localhost:2013/max-garage/api';

      try {
        const response = await axios.post(`${baseUrl}/user/registration/login`, {
          email:email, password:password
        });
        const data = response.data;
        console.log(data)
        if(data.success===true){
            toast.success(data.message)
        }
         localStorage.setItem('authTokenJWT', data.token);
         const token = data.token;
         
         //Token decoder
       const [header, payload, signature] = token.split('.');
       const decodedPayload = JSON.parse(atob(payload));
        console.log(decodedPayload);

        // clearing fields 
        setEmail(''); setPassword('')
        navigate('/')
      } catch (error) {
        console.log(
          `There was an Error submitting the SignUp Form! ERROR 404: ${error}`
        );
        toast.error(error.response.data.message);
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
                  name="email"
                  className="mt-1 p-2 w-64 border rounded-md"
                  autoComplete="on"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-64 border rounded-md"
                  autoComplete="on"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                <button type='button' className="disabled w-60 rounded text-gray-500 border border-gray-400 hover:border-blue-400 hover:bg-blue-70 bg-white border-black-900 focus:ring focus:border-purple-900 px-4 py-2 my-2 flex justify-around items-center">
                  <img
                    src="/images/googleIcon.png"
                    alt="Login-with-google"
                    className="iconExternal"
                    width={25}
                    height={25}
                  />
                  Login With Google
                </button>

                <button type='button' className=" w-60 rounded text-gray-500 border border-gray-400 hover:border-blue-400 hover:bg-blue-70 bg-white border-black-900 focus:ring focus:border-purple-900 px-4 py-2 my-2 flex justify-around items-center">
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
