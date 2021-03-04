import React from 'react';

import btn from "./Btn.module.css";
import hamburger from "./Hamburger.module.css";

const ButtonMenu = (props) => {
    return (
        <button className={btn.menu} onClick={() => props.onClick(props.isMenuOpen)}>
            Menu
            <div className={props.statusBtn ? `${hamburger.close} ${hamburger.box}` : hamburger.box}>
                <span/>
                <span/>
                <span/>
            </div>
        </button>
    );
};

export default ButtonMenu;