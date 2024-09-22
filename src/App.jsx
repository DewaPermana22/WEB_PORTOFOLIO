import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Project from "../404";
import Home from "./Home";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Project" element={<Project/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App