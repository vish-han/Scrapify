import "./App.css";
import {useState,useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Aos from "aos";
import Auth from "./pages/Auth";
import Info from "./pages/Info";
import Navbar from "./components/Navbar";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";
import Error from "./pages/Error";



function App() {

  Aos.init();
  return (
   <>
    <div className="App font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Auth />} />
        <Route path="info" element={<Info />} />
        <Route path="deals" element={<Deals />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<Error/>}/>
       
      </Routes>
    </div>
    </> 
  ); 	
}

export default App;
