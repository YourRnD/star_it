import React from 'react';
import HowItWorksItemModule from './HowItWorksItem.module.css';
import servBetterPicture from './images/servis-better.png'

const HowItWorksItem3 = () =>{
    return(
        <section className={HowItWorksItemModule.HowItWorks__item}>
                <h3 className = {HowItWorksItemModule.cardTitle}> 
               Service gets better
                </h3> 
            <img src = {servBetterPicture} className = {HowItWorksItemModule.picture}></img>
        </section> 
    )
};

export default HowItWorksItem3;