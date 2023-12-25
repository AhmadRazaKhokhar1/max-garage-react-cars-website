import React, { useEffect, useState } from "react";

import car1 from "../../../src/Assets/ns1.jpg";
import car2 from "../../../src/Assets/ns3.jpg";
import car3 from "../../../src/Assets/sp1.jpg";
import car4 from "../../../src/Assets/sp2.jpg";
import car5 from "../../../src/Assets/amg.jpeg";
import car6 from "../../../src/Assets/amg2.jpeg";
import Main from "./Children/Main";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Home = () => {
  const [loaded, setLoaded] = useState(true);

  //Token verification
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authTokenJWT");
    if (!token) {
      navigate("/Register");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animated-div");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [leftImage, setLeftImage] = useState(car1);
  const [rightImage, setRightImage] = useState(car2);

  function changeImages() {
    setInterval(() => {
      new Promise((res, rej) => {
        setInterval(function () {
          if (leftImage === car1 && rightImage === car2) {
            const a = setLeftImage(car3);
            const b = setRightImage(car4);
            res(a, b);
          }
        }, 8000);
      })
        .then(function (resolve) {
          setInterval(function () {
            if (leftImage === car3 && rightImage === car4) {
              const a = setLeftImage(car5);
              const b = setRightImage(car6);
              resolve(a, b);
            }
          }, 8000);
        })
        .then((res) => {
          setInterval(function () {
            if (leftImage === car5 && rightImage === car6) {
              const a = setLeftImage(car1);
              const b = setRightImage(car2);
              res(a, b);
            }
          }, 8000);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  useEffect(() => {
    const main = setInterval(() => {
      changeImages();
      return () => {
        clearInterval(main);
      };
    }, 2000);
    setLoaded(false);
  }, []);

  return (
    <>
      {loaded ? (
        <Loader />
      ) : (
        <div>
          <div></div>
          <div>
            <div className="title">
              <h1
                className="BrandTitle"
                style={{ transform: "translateZ(100deg)" }}
              >
                M
              </h1>
              <h4 className="rem">ax</h4>&nbsp;&nbsp;
              <h1 className="BrandTitle">G</h1>
              <h4 className="rem">arage</h4>
            </div>
            <div className="cont">
              <img
                src={leftImage}
                alt="Cars cars supra mk4 mk-4 supra 1994"
                className="bg cc"
                style={{ transition: "2s ease-in-out" }}
              />
              <img
                src={rightImage}
                alt="Cars cars supra mk4 mk-4 supra 1994"
                className="bg sc"
                style={{ transition: "2s ease-in-out" }}
              />
            </div>
          </div>

          <Main />
        </div>
      )}
    </>
  );
};

export default Home;
