import React from "react";
import "./App.css";
import Checkout from "./component/Checkout";
import Home from "./component/Home.js";
import Login from "./component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          
            <Route path="/" element={<Home />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="login" element={<Login />}></Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
