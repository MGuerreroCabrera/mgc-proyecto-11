import "./App.css";
import React from 'react'
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character/Character";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const App = () => {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/character/:id" element={<Character/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App