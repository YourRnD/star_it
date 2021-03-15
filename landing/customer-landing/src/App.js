import React from 'react';

import './App.css';
import appModule from './App.module.css';

import Header from "./components/Header/";
import Hero from "./components/Hero/";
import DonloadApplication from './components/DonloadApplication';
import WhereItWork from './components/WhereItWork';
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <DonloadApplication />
      <WhereItWork />
      <DonloadApplication />

        <div className = {appModule.page}>
          <section className ={appModule.wrapper}>
            <HowItWorks/>
            <Footer/>
          </section>
        </div>
    </div>
  );
}

export default App;
