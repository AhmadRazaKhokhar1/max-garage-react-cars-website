import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer";
import Error from "./Error";
import Navbar from '../src/components/NavBar/Navbar.jsx'
import LuxuryMain from "./components/LuxuryMain/LuxurysMain.jsx";
import SedanMain from "./components/sedanMain/SedansMain.jsx";
import SportsMain from "./components/sportsMain/SportMain.jsx";
import SuvMain from "./components/suvMain/SuvsMain.jsx";
import TrucksMain from "./components/trucksMain/TruckMain.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Registration from "./components/Registration/Registration.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
<ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Luxury" element={<LuxuryMain />} />

        <Route path="/Sedan" element={<SedanMain />} />

        <Route path="/Sports" element={<SportsMain />} />

        <Route path="/Suv" element={<SuvMain />} />

        <Route path="/Trucks" element={<TrucksMain />} />

        <Route path="/Register" element={<Registration />} />

        <Route path="/Admin" element={<Admin />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
