import React from 'react';
import  HowItWorksModule from './HowItworks.module.css';
import HowItWorksItem1 from './HowItWorksItems/HowItWorksItem1';
import HowItWorksItem2 from './HowItWorksItems/HowItWorksItem2';
import HowItWorksItem3 from './HowItWorksItems/HowItWorksItem3';

const HowItWorks = () => {
    return (
    <div id="HowItworks">
        <h2 className={HowItWorksModule.HowItWorks__header}>How it works</h2>
      <div className={HowItWorksModule.HowItWorks}>
        <HowItWorksItem1/>
        <HowItWorksItem2/>
        <HowItWorksItem3/>
      </div>
    </div>  
    );
};

export default HowItWorks;