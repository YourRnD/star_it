import React from 'react';
import  howItCostsModule from './HowItCosts.module.css';
import HowItCostsItem1 from './HowItCostsItems/HowItCostsItem1'
import HowItCostsItem2 from './HowItCostsItems/HowItCostsItem2'
import HowItCostsItem3 from './HowItCostsItems/HowItCostsItem3'
const HowItCosts = () => {
    return (
    <div id="How much it costs">
        <h2 className={howItCostsModule.HowItCosts__header}>How much it costs</h2>
      <div className={howItCostsModule.HowItCosts}>
        <HowItCostsItem1/>
        <HowItCostsItem2/>
        <HowItCostsItem3/>
      </div>
    </div>  
    );
};

export default HowItCosts;