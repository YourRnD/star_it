import React from 'react';
import Index from "../Download/";

import hero from "./style/Hero.module.css";
import description from "./style/Description.module.css";
import circle from "./style/Circle.module.css";

import img from "./img/foto.png";

const Hero = () => {
    return (
        <section className={`${hero.container} row`}>
            <div className={hero.item}>
                <img src={img} alt="img" className={hero.img} width="400" height="595"/>
            </div>
            <div className={`${hero.item} ${circle.container}`}>
                <div className={description.container}>
                    <h1 className={description.text}>StarIt! позволит вам улучшать качество сервисов
                        компаний, участвующих в программе, за счет оценки работы касс, чистоты терминалов и прочего</h1>
                    <p className={description.title}>
                        <span className={description.mark}>Регистрируйся!</span>
                        <span className={description.mark}>Оценивай!</span>
                        <span className={description.mark}>Влияй!</span>
                    </p>
                    <Index/>
                </div>
            </div>
        </section>
    );
};

export default Hero;