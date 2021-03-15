import React from 'react';

import Download from "../Download/";

import hero from "./style/Hero.module.css";
import description from "./style/Description.module.css";
import circle from "./style/Circle.module.css";

import img from "./img/marketing.png";

const Hero = () => {
    return (
        <section className={`${hero.container} row`}>
            <div className={hero.item}>
                <img src={img} alt="img" className={hero.img} width="400" height="595"/>
            </div>
            <div className={`${hero.item} ${circle.container}`}>
                <div className={description.container}>
                    <h1 className={description.text}>StarIt! позволит вам узнавать недостатки и преимущества вашего
                        продукта без лишних телодвижений</h1>
                    <p className={description.title}><span className={description.mark}>Маркетинг</span> без обратной
                        связи - как современный телевизор без пульта</p>
                    <Download/>
                </div>
            </div>
        </section>
    );
};

export default Hero;