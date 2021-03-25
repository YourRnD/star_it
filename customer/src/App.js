import React from "react";
import './App.css';
import Header from "./Header";
import Feedbeak from "./Feedbeak";
import {
  BrowserRouter as Router,
  Route
 } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route>
        <Feedbeak />
      </Route>
      <Route>
        <ThanksReview />
      </Route>
    </Router>
  );
}

export default App;
