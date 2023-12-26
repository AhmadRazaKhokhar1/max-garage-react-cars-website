import React, { useState } from "react";
import defaultProfile from '../../../../Assets/defaultImage.png'
import { JobOptions, FamousDegreesInPakistan } from "./options";
import axios from "axios";
import { toast } from "react-toastify";

function FormRegisterSubComp({passBool}) {
  const baseUrl = "http://localhost:2013/max-garage/api/user/registration";

  //Register
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [showImage, setShowImage] = useState(defaultProfile);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [industry, setIndustry] = useState("");
  const [qualification, setQualification] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerNewUser = async (e) => {
    e.preventDefault();
  //  clear previous tokens
  localStorage.removeItem('authTokenJWT');
    try {
      if (password !== confirmPassword) {
        return toast.warning("Passwords Must Match");
      } else if (password.length < 8) {
        return toast.warn("Password Must Be Of Atleast 8 Characters Including Spaces");
      } else if (age > 120) {
        return toast.warn("Please Enter A Valid Age");
      } else if (phone.length > 11 || phone.length < 11) {
        return toast.warn("Please Enter A Valid Phone");
      }

      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("profileImage", profileImage);
      formData.append("coverImage", coverImage);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("age", age);
      formData.append("gender", gender);
      formData.append("industry", industry);
      formData.append("qualification", qualification);
      formData.append("password", password);

      const response = await axios.post(`${baseUrl}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      passBool(false)
      const data = response.data;
      if (data.success === true) {
        toast.success(data.message);
        toast.info(`${data.userDetails.fullName} Please login to continue`)
        console.log(data.message);
      }

      //clearing the fields after submission
      setFullName("");
      setAge("");
      setEmail("");
      setPhone("");
      setGender("");
      setIndustry("");
      setQualification("");
      setPassword("");
      setConfirmPassword("");
      setProfileImage("");
      setShowImage("");

    
    } catch (error) {
      console.log(`Error in Register: ${error}`);
      toast.error(error.response.data.message);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setProfileImage(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setShowImage(reader.result); // Update with the data URL
        }
      };

      reader.readAsDataURL(file); // Read the selected file as a data URL
    } else {
      toast.warning("Please select a valid image");
    }
  };

  const degree = FamousDegreesInPakistan;

  return (
    <div>
      <form method="POST" className="leftForm" onSubmit={registerNewUser}>
        <div className="mb-1 profileImagePreview absolute mb-96 mr-28 ">
          <img
            src={showImage ? showImage : defaultProfile}
            alt={fullName}
            className="profileImageRegister"
          />
        </div>
        <div className="flex items-center justify-between ddd my-1">
          <div className="mb-1">
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
              className="mt-1 p-2 w-48 mr-2 border rounded-md"
              autoComplete="on"
              autoCapitalize="on"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="profileImage"
              className="block text-sm font-medium text-gray-600  w-48 mr-2"
            >
              profileImage
            </label>
            <input
              required
              type="file"
              id="profileImage"
              name="profileImage"
              className="mt-1 p-2 w-48 mr-2 border rounded-md"
              autoComplete="on"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-between ddd my-1">
          <div className="mb-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600  w-48 mr-2"
            >
              Email
            </label>
            <input
              required
              type="email"
              id="emailReg"
              name="email"
              className="mt-1 p-2 w-48 mr-2 border rounded-md"
              placeholder="Enter your email"
              autoComplete="on"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="Phone"
              className="block text-sm font-medium text-gray-600  w-8 mr-2"
            >
              Phone
            </label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-48 mr-2 border rounded-md"
              autoComplete="on"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between ddd my-1">
        <div className="mb-1 ">
          <label
            htmlFor="gender"
            className="flex text-sm font-medium text-gray-600 w-8 mr-32"
          >Gender </label>
            <select
              name="gender"
              id="gender"
              className="mt-1 p-2 w-48 border rounded-md mr-2"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male" defaultChecked>
                Male
              </option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
         
        </div>
       
          <div className="mb-1">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-600  w-8 mr-2"
            >
              Age
            </label>
            <input
              required
              type="number"
              id="age"
              name="age"
              className="mt-1 p-2 w-48 mr-2 border rounded-md"
              autoComplete="on"
              placeholder="Enter your age"
              min={12}
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          </div>
        <div className="flex items-center justify-between ddd my-1">
          
          <div className="mb-1">
            <label
              htmlFor="qualification"
              className="block text-sm font-medium text-gray-600  w-8 mr-2"
            >
              Field
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="mt-1 p-2 w-48 border rounded-md mr-2"
            >
              <option value={null}>Select</option>
              {JobOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
       

        <div className="mb-1">
        <label
              htmlFor="qualification"
              className="block text-sm font-medium text-gray-600  w-8 mr-2"
            >
               Qualification
            </label>
          <select
            name="qualification"
            id="qualification"
            value={qualification}
            onChange={(e) => {
              setQualification(e.target.value);
            }}
            className="mt-1 p-2 w-48 border rounded-md "
          >
            <option value={null}>Select</option>
            {degree.map((e) => {
              return (
                  <option key={e} value={e}>
                    {e}
                  </option>
              );
            })}
          </select>
        </div>
        </div>

        <div className="flex items-center justify-between ddd my-1">
          <div className="mb-1">
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
              className="mt-1 p-2 border rounded-md  w-48 mr-2"
              autoComplete="on"
              value={password}
              placeholder="Confirm password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="mb-1">
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
              className="mt-1 p-2 border rounded-md  w-48 mr-2"
              autoComplete="on"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default FormRegisterSubComp;
