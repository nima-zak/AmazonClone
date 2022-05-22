import React from "react";
import "./App.css";
import Checkout from "./component/Checkout";
import Home from "./component/Home.js";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Return from "./component/Return";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          
            <Route path="/" element={<Home />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="Return" element={<Return />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
