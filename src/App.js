import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar_searchbar/just_navbar";


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Navbar/>} />
      
      </Routes>
    </>
  );
}

export default App;
