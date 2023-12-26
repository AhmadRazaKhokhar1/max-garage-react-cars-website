import React from "react";
import Signup from "./Children/Signup";
import Footer from "../Components/Footer/Footer";

const Registration = () => {
  return (
    <>
    <div style={{ paddingTop: "90px", top: "40px" }}>
      <div className=" registrationContainer">
        <h1 className="titleMain">Join Us</h1>
        <Signup />
      </div>
      <hr />
    </div>
    <Footer/>
    </>
  );
};

export default Registration;
