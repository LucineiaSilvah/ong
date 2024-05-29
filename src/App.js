import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home";

import About from "./pages/About/About";
import WhatWeDo from "./components/What-we-do";
import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutVolunteers from "./pages/AboutVolunteers";
import Donate from "./pages/Donate";
import Actions from "./components/Actions";
import Contact from "./components/Contact";



function App() {
 
  return (
    <div className="container">
     <Header/>
   <Routes>
    
    <Route path="/" element={<Home/>}/>

    <Route path="/src/pages/About" element={<About/>}/>
    <Route path="/src/components/What-we-do" element={<WhatWeDo/>}/>
    
    <Route path="/src/pages/AboutVolunteers" element={<AboutVolunteers/>}/>
    <Route path="/src/pages/Donate" element={<Donate/>}/>
   
    <Route path="/src/components/Actions" element={<Actions/>}/>
    <Route path="/src/components/Contact" element={<Contact/>}/>
   </Routes>
   <Footer/>
   </div>
      
  );
}

export default App;
