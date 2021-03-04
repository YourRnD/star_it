import React from 'react';
import appModule from './App.module.css';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className = {appModule.page}>
      <section className ={appModule.wrapper}>
        <HowItWorks/>
        <Footer/>
      </section>  
    </div>
     
  );
}

export default App;
