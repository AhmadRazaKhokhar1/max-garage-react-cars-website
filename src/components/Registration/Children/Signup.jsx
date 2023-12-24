import React, { useState } from "react";
import FormRegisterSubComp from "./SubComps/SmRegisterSubComp";
import SmSignInSubComp from "./SubComps/SmSignInSubComp";
import SmContentSubComp from "./SubComps/SmContentSubComp";
const Signup = () => {
  //toggle the slider
  const [sliderMain, setSliderMain] = useState("");
  const [bTL, setBTL] = useState(""); // border top left
  const [bTR, setBTR] = useState(""); // border top right
  const [bBL, setBBL] = useState(""); // border bottom left
  const [bBR, setBBR] = useState(""); // border bottom right
  const [active, setActive] = useState("login");

  function leftForm() {
    setSliderMain("-70px");
    setBBL("0px");
    setBBR("155px");
    setBTL("0px");
    setBTR("155px");

    setActive("login");
  }
  function rightForm() {
    setSliderMain("478px");
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
            <FormRegisterSubComp />
          </div>

          {/* LOGIN FORM  */}
          <div className="right">
            <SmSignInSubComp />
          </div>

          <div
            className="slider-main"
            style={{
              translate: `${sliderMain}`,
              borderTopRightRadius: `${bTR}`,
              borderBottomRightRadius: `${bBR}`,
              borderBottomLeftRadius: `${bBL}`,
              borderTopLeftRadius: `${bTL}`,
            }}
          >
            <SmContentSubComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
