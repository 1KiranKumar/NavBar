import React from 'react';
import './App.css';
import Navbar from './NavBar/NavBar';
import { Routes, Route} from "react-router-dom";
import Home from './Elements/Home';
import Contact from './Elements/Contact';
import About from './Elements/About';
import Service from './Elements/Service';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="service" element={<Service/>}/>
      </Routes>
     

    </div>
  );
}

export default App;
