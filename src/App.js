import React from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import { Routes, Route } from "react-router-dom";

import ProductsList from "./Components/ProductsList";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProductDetails from "./Components/ProductDetails";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> 
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route
          path="About"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />
        <Route
          path="Contact"
          element={
            <>
              <Header />
              <Contact />
            </>
          }
        />
        <Route
          path="Product/:ProductId"
          element={
            <>
              <Header />
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
