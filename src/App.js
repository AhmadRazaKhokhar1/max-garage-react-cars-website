import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home.jsx";
import LuxuryMain from "./Pages/LuxuryMain/LuxurysMain.jsx";
import Admin from "./Admin/Admin.jsx";
import Sedan from "./Pages/sedanMain/SedansMain.jsx";
import SportMain from "./Pages/sportsMain/SportMain.jsx";
import Suv from "./Pages/suvMain/SuvsMain.jsx";
import Truck from "./Pages/trucksMain/TruckMain.jsx";
import Registration from "./Pages/Registration/Registration.jsx";
import AddBlog from './Admin/Pages/AddBlog/AddBlog.jsx'
import AddEmployee from "./Admin/Pages/AddEmployee/AddEmployee.jsx";
import AddProduct from './Admin/Pages/AddProduct/AddProduct.jsx';
import DashBoard from './Admin/Pages/DashBoard/DashBoard.jsx';
import ListedProducts from "./Admin/Pages/ListedProducts/ListedProducts.jsx";
import Analytics from './Admin/Pages/Analytics/Analytics.jsx';
import ListedArticles from './Admin/Pages/ListedArticles/ListedArtciles.jsx';
import EmployeeAttendance from './Admin/Pages/EmployeeAttendance/EmployeeAttendance.jsx';
import Navbar from './Pages/Components/NavBar/Navbar.jsx';
import Error from './Error.jsx';
import RegisteredUsers from "./Admin/Pages/Registeredusers/RegisteredUsers.jsx";
import FeaturedProduct from "./Admin/Pages/FeaturedProducts/FeaturedProduct.jsx";
import ListedArtciles from "./Admin/Pages/ListedArticles/ListedArtciles.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <ToastContainer />
      <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/Luxury" element={<LuxuryMain/> } />

          <Route path="/Sedan" element={<Sedan/> } />

          <Route path="/Sports" element={<SportMain/> } />

          <Route path="/Suv" element={<Suv/> } />

          <Route path="/Trucks" element={<Truck/>} />

          <Route path="/Register" element={<Registration/> } />

          <Route path="*" element={<Error/> } />

        {/* //nested routes  */}
        <Route path="/Admin" element={<Admin/> }>
            <Route path="WriteArticle" element={<AddBlog/> }/>
            <Route path="Addproduct" element={<AddProduct/> } />
            <Route path="AddEmployee" element={<AddEmployee/> }/>
            <Route path="EmployeeAttendance" element={<EmployeeAttendance/>}/>
            <Route path="DashBoard" element={<DashBoard/> }/>
            <Route path="ListedProducts" element={<ListedProducts/> }/>
            <Route path="ListedArticles" element={<ListedArticles/> }/>
            <Route path="Analytics" element={<Analytics/> }/>
            <Route path="RegisteredUsers" element={<RegisteredUsers/> }/>
            <Route path="FeaturedProducts" element={<FeaturedProduct/> }/>
            <Route path="ListedArticles" element={<ListedArtciles/> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
