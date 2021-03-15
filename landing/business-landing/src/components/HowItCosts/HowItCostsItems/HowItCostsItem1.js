import React from 'react';
import HowItCostsItemModule from './HowItCostsItem.module.css';
// import picture from './HowItCostsItems/icon.png';

const HowItCostsItem1 = () =>{
    return(
        <section className={HowItCostsItemModule.HowItCosts__item}>
            <div className = {HowItCostsItemModule.card__top}>
                <div className = {HowItCostsItemModule.iconWrapper}>
                <span className = {`${HowItCostsItemModule.icon}  ${HowItCostsItemModule.premium}`}> </span>
                </div>
               <strong className = {HowItCostsItemModule.cardTitle}> 
                    Star-It Premium
                </strong> 
                <div className = {HowItCostsItemModule.price}>$299.99/Year</div>
            </div>
            <label className={HowItCostsItemModule.check}>
                    <input type="checkbox" checked className={HowItCostsItemModule.check__input}/>
                    <span className={HowItCostsItemModule.check__box}/>
                    <span>Advertisement of your products</span>
            </label>
            <label className={HowItCostsItemModule.check}>
                    <input type="checkbox" checked className={HowItCostsItemModule.check__input}/>
                    <span className={HowItCostsItemModule.check__box}/>
                    <span>Get a global analysis</span>
            </label>
            <label className={HowItCostsItemModule.check}>
                    <input type="checkbox" checked className={HowItCostsItemModule.check__input}/>
                    <span className={HowItCostsItemModule.check__box}/>
                    <span>Get a local analysis</span>
            </label>   
        </section> 
    )
};

export default HowItCostsItem1;