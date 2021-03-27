import React from "react";
import './App.css';
import Header from "./Header";
import Feedbeak from "./Feedbeak";
import {
  BrowserRouter as Router,

 } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Feedbeak />
  
    </Router>
  );
}

export default App;
