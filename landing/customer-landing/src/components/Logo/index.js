import React from 'react';

import logo from "./Logo.module.css";

import imgLogo from "./img/logo.svg";

import Scroll from "../../Hooks/Scroll/";

const Logo = () => {
    const scroll = Scroll();

    const logotype = {
        text: "StarIt",
        title: "logotype",
    };

    const logoSize = () => {
        if(scroll < 1){
            return logo.img;
        }
        else{
            return `${logo.img} ${logo.img_small}`;
        }
    };

    return (
        <div className={logo.container}>
            <img className={logoSize()} src={imgLogo} alt={logotype.title}/>
            <p className={logo.text}>{logotype.text}</p>
        </div>
    );
};

export default Logo;