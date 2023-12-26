import React from 'react'
import Luxry from "./Luxry";
import Sports from "./Sports";
import Sedan from "./Sedan";
import Trucks from "./Trucks";
import SUV from "./SUV";
import Contact from "./Contact";
import Sponsor from "./Sponsor";
import { Element } from "react-scroll/modules/mixins/Helpers";


function Main() {
  return (
    <div>
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
    </div>
  )
}

export default Main
