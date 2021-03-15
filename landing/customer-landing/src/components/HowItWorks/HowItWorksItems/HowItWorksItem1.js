import React from 'react';
import HowItWorksItemModule from './HowItWorksItem.module.css';
import qrPicture from './images/qr-code.png';

const HowItWorksItem1 = () =>{
    return(
        <section className={HowItWorksItemModule.HowItWorks__item}>
            <h3 className = {HowItWorksItemModule.cardTitle}> 
               Scan QR-code
            </h3>
            <img src = {qrPicture} className = {HowItWorksItemModule.picture} alt="img"/>
            <div className = {HowItWorksItemModule.card__top}> 
            </div>
        </section> 
    )
};

export default HowItWorksItem1;