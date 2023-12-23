import React, { useEffect, useMemo, useState } from "react";
import Luxry from "./Children/Luxry";
import Sports from "./Children/Sports";
import Sedan from "./Children/Sedan";
import Trucks from "./Children/Trucks";
import SUV from "./Children/SUV";
import Contact from "./Children/Contact";
import Sponsor from "./Children/Sponsor";
import { Element } from "react-scroll/modules/mixins/Helpers";
import car1 from "../../../src/ns1.jpg";
import car2 from "../../../src/ns3.jpg";
import car3 from "../../../src/sp1.jpg";
import car4 from "../../../src/sp2.jpg";
import car5 from "../../../src/amg.jpeg";
import car6 from "../../../src/amg2.jpeg";
import { useHistory } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem('authTokenJWT');
 const history = useHistory()
  if(!token){
    history.push('/Register')
  }
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

const changeImages =()=>{ setInterval(()=>{

    const p1 = new Promise((res, rej) => {
      setInterval(function () {
        if (leftImage === car1 && rightImage === car2) {
          const a = setLeftImage(car3);
          const b = setRightImage(car4);
          res(a, b);
        }
      }, 8000);
    });
    const p2 = new Promise((res, rej) => {
      setInterval(function () {
        if (leftImage === car3 && rightImage === car4) {
          const a = setLeftImage(car5);
          const b = setRightImage(car6);
          res(a, b);
        }
      }, 8000);
    });
    const p3 = new Promise((res, rej) => {
      // setInterval(function () {
        if (leftImage === car5 && rightImage === car6) {
          const a = setLeftImage(car1);
          const b = setRightImage(car2);
          res(a, b);
        }
      // }, 8000);
    });
    p1.then((resolve) => {
      resolve(p2);
    })
      .then((resolve) => {
        resolve(p3);
      })
      .catch((err) => {
        console.log(err);
      });

}, 8000)
}

useEffect(()=>{changeImages();}, [])


  return (
    <>
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
            style={{ transition: "2s ease-in-out"}}
          />
          <img
            src={rightImage}
            alt="Cars cars supra mk4 mk-4 supra 1994"
            className="bg sc"
            style={{ transition: "2s ease-in-out"}}
          />
        </div>
      </div>
      <div className="MAIN">
        <br />

        <div className="sponsors">
          <Sponsor />
        </div>

        <hr id="luxury" />

        <div className="animated-div bottom-to-top">
          <h1 className="titleMain">Luxry Cars</h1>
          <Luxry />
        </div>

        <Element name="sports" className="element"></Element>
        <hr id="sports" />

        <div className="animated-div bottom-to-top">
          <h1 className="titleMain">Sports Cars</h1>
          <Sports />
        </div>

        <Element name="sedan" className="element"></Element>
        <hr id="sedan" />

        <div className="animated-div bottom-to-top">
          <h1 className="titleMain">Sedan Cars</h1>
          <Sedan />
        </div>

        <Element name="trucks" className="element"></Element>
        <hr id="trucks" />

        <div className="animated-div bottom-to-top">
          <h1 className="titleMain">Trucks</h1>
          <Trucks />
        </div>

        <Element name="suv" className="element"></Element>
        <hr id="suv" />

        <div className="animated-div bottom-to-top">
          <h1 className="titleMain">SUV Cars</h1>
          <SUV />
        </div>

        <Element name="contact" className="element"></Element>
        <hr id="contact" />

        <div className="animated-div bottom-to-top">
          <h1 className="titleMain">Contact US</h1>
          <Contact />
        </div>
        <hr />

        <br />
        <br />
      </div>
    </>
  );
};

export default Home;
