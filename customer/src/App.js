import React, {useState} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route
 } from "react-router-dom";
import Header from "./Header";
import Feedbeak from "./Feedbeak";
import ThanksForReview from "./ThanksForReview";
import logo_silpo from "./assets/logo_silpo.png";

function App() {
  const [countStar,setCountStar] = useState(5);    
  const ratingChanged = (newRating) => {
    setCountStar(newRating);
  };
  return (
    <Router className="App">
      <Header />
      <Route path="/QR-code">
        <Feedbeak onChange={ratingChanged} logo_bisnesses={logo_silpo} />
      </Route>
      <Route path="/report">
        <ThanksForReview countStar={countStar} logo_bisnesses={logo_silpo} />
      </Route>
    </Router>
  );
}

export default App;
