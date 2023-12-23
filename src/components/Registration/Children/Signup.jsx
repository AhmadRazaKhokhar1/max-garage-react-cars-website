import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  //Login and Register Operations

  const baseUrl = "http://localhost:2013/max-garage/api/user/registration";
  //Register
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState([
    "images/max-garage-profile-image.svg",
  ]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [industry, setIndustry] = useState("");
  const [qualification, setQualification] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerNewUser = async () => {
    try {
      const response = await axios.post(`${baseUrl}/register`, {
        fullName: fullName,
        profileImage: profileImage,
        email: email,
        phone: phone,
        age: age,
        gender: gender,
        industry: industry,
        qualification: qualification,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(`Error in Register: ${error}`);
    }
  };
  //toggle the slider
  const [sliderMain, setSliderMain] = useState("");
  const [bTL, setBTL] = useState(""); // border top left
  const [bTR, setBTR] = useState(""); // border top right
  const [bBL, setBBL] = useState(""); // border bottom left
  const [bBR, setBBR] = useState(""); // border bottom right
  const [active, setActive] = useState("login");

  function leftForm() {
    setSliderMain("-68px");
    setBBL("0px");
    setBBR("155px");
    setBTL("0px");
    setBTR("155px");

    setActive("login");
  }
  function rightForm() {
    setSliderMain("273px");
    setBBL("155px");
    setBBR("0px");
    setBTL("155px");
    setBTR("0px");

    setActive("signup");
  }

  // toggle the button
  const handleClick = (e) => {
    e.target.style.backgroundColor = "rgb(32, 0, 75, .85)";
    e.target.style.color = " rgb(255, 255, 255)";
    e.target.style.borderBottom = "3px solid blue";
  };
  const handleBlur = (e) => {
    e.target.style.backgroundColor = "rgba(199, 199, 199, 0.445)";
    e.target.style.color = "rgb(94, 94, 94)";
    e.target.style.borderBottom = "";
  };

  //   handeling form submissions

  // signUP
  const signUp = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      console.log(
        `There was an Error submitting the SignUp Form! ERROR 404: ${error}`
      );
    }
  };

  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  //logIn
  const logIn = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(
        `There was an Error submitting the SignUp Form! ERROR 404: ${error}`
      );
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Check if the result is a data URL before setting the image source
        // if (typeof reader.result === 'string') {
        setProfileImage(reader.result);
        // }
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="main-con">
        <div className="toggle-btn">
          <button
            className={`btn-main lf  ${active === "login" ? "active" : ""}`}
            onFocus={handleClick}
            onBlur={handleBlur}
            onClick={leftForm}
          >
            Log in
          </button>
          <button
            className={`btn-main rh ${active === "signup" ? "active" : ""}`}
            onFocus={handleClick}
            onBlur={handleBlur}
            onClick={rightForm}
          >
            Sign up
          </button>
        </div>
        <br />
        <br />
        <br />
        <div className="container-main">
          <div className="left">
            <form method="POST" className="leftForm" onSubmit={signUp}>
              <div className="mb-4 profileImagePreview">
                <img
                  src={
                    profileImage
                      ? profileImage
                      : "/images/max-garage-profile-image.svg"
                  }
                  alt={fullName}
                  className="profileImageRegister"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-64 border rounded-md"
                  autoComplete="on"
                  autoCapitalize="on"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="profileImage"
                  className="block text-sm font-medium text-gray-600  w-64"
                >
                  profileImage
                </label>
                <input
                  required
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  className="mt-1 p-2 w-full border rounded-md"
                  autoComplete="on"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600  w-64"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your email"
                  autoComplete="on"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="Phone"
                  className="block text-sm font-medium text-gray-600  w-64"
                >
                  Phone
                </label>
                <input
                  required
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 p-2 w-full border rounded-md"
                  autoComplete="on"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="mb-4 ">
                <label
                  htmlFor="gender"
                  className="flex text-sm font-medium text-gray-600 w-64"
                >
                  <div className="flex w-40 justify-center items-center flex flex-row ">
                    <label
                      className="flex justify-center items-center w-32 my-2"
                      htmlFor="Male"
                    >
                      Male
                      <input
                        required
                        type="radio"
                        id="Male"
                        name="gender"
                        className="mx-8 inline-flex w-4 justify-between align-center border rounded-md"
                        value="Male"
                        title="Male"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        defaultChecked
                      />
                    </label>
                    <label
                      className="flex justify-between w-18"
                      htmlFor="Female"
                    >
                      Female
                      <input
                        required
                        type="radio"
                        id="Female"
                        name="gender"
                        className="mx-8 inline-flex w-4 justify-between align-center border rounded-md"
                        value="Female"
                        title="Female"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                    </label>
                    <label
                      className="flex justify-center items-center w-32 my-2"
                      htmlFor="Transgender"
                    >
                      Other
                      <input
                        required
                        type="radio"
                        id="Transgender"
                        name="gender"
                        title="Other"
                        className="mx-8 inline-flex w-4 justify-between align-center border rounded-md"
                        autoComplete="on"
                        value="Other"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                    </label>
                  </div>
                </label>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-600  w-64"
                >
                  Age
                </label>
                <input
                  required
                  type="number"
                  id="age"
                  name="age"
                  className="mt-1 p-2 w-full border rounded-md"
                  autoComplete="on"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="qualification"
                  className="block text-sm font-medium text-gray-600  w-64"
                >
                  Qualification
                </label>
                <input
                  required
                  type="text"
                  id="qualification"
                  name="qualification"
                  className="mt-1 p-2 w-full border rounded-md"
                  autoComplete="on"
                  placeholder="Qualification"
                  value={qualification}
                  onChange={(e) => {
                    setQualification(e.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="qualification"
                  className="block text-sm font-medium text-gray-600  w-64"
                >
                  Industry
                </label>
                <input
                  required
                  type="text"
                  id="industry"
                  name="industry"
                  className="mt-1 p-2 w-full border rounded-md"
                  autoComplete="on"
                  placeholder="Your profession"
                  value={industry}
                  onChange={(e) => {
                    setIndustry(e.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 "
                >
                  New Password
                </label>
                <input
                  required
                  type="password"
                  id="NewPassword"
                  name="password"
                  className="mt-1 p-2 border rounded-md  w-64"
                  autoComplete="on"
                  value={password}
                  placeholder="Confirm password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  required
                  type="password"
                  id="ConfirmPassword"
                  name="password"
                  className="mt-1 p-2 border rounded-md  w-64"
                  autoComplete="on"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>

              <button type="submit" className="btn-primary">
                Sign Up
              </button>
            </form>
          </div>

          {/* LOGIN FORM  */}
          <div className="right">
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

          <div
            className="slider-main"
            style={{
              translate: `${sliderMain}`,
              borderTopRightRadius: `${bTR}`,
              borderBottomRightRadius: `${bBR}`,
              borderBottomLeftRadius: `${bBL}`,
              borderTopLeftRadius: `${bTL}`,
              display: "none",
            }}
          >
            <div className="main-content">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  wordSpacing: "5px",
                  letterSpacing: "3px",
                }}
              >
                MAX GARAGE
              </h1>
              <div className="flex">
                <span>A Product by</span>
                &nbsp; &nbsp; &nbsp;
                <h1 style={{ fontWeight: "900", letterSpacing: "2px" }}>
                  Ahmad Raza Khokhar
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
