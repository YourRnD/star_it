import React from 'react';
import HowItWorksItemModule from './HowItWorksItem.module.css';
import evaluetePicture from './images/evaluete.png'

const HowItWorksItem2 = () =>{
    return(
        <section className={HowItWorksItemModule.HowItWorks__item}>
               <h3 className = {HowItWorksItemModule.cardTitle}> 
                    Evaluate the product
                </h3> 
            <img src = {evaluetePicture} className = {HowItWorksItemModule.picture}></img>
        </section> 
    )
};

export default HowItWorksItem2;