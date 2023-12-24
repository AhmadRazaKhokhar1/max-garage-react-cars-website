import React, {useState} from "react";
import axios from "axios";

function FormRegisterSubComp() {
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
      <form method="POST" className="leftForm" onSubmit={registerNewUser}>
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
              <label className="flex justify-between w-18" htmlFor="Female">
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
            Field
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
  );
}

export default FormRegisterSubComp;
