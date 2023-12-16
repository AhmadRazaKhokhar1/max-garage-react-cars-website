import { React, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Error from './Error'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
   
     <BrowserRouter>

    <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<Error />} />
        </Routes>
   <Footer />

     </BrowserRouter>


   </>
  );
}

export default App;
