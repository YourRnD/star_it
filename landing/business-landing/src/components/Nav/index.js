import React from 'react';
import NavItem from "./NavItem";

import nav from "./Nav.module.css";

import Scroll from "../../Hooks/Scroll/";

const Nav = (props) => {
    const scroll = Scroll();

    const navItem = props.data.map((item, i) =>
        <NavItem
            key={i}
            link={item.link}
            text={item.text}
        />);

    const navSize = () => {
        if(scroll < 1){
            return nav.list;
        }
        else{
            return `${nav.list} ${nav.list_small}`;
        }
    };

    return (
        <nav className={nav.container}>
            <ul className={navSize()}>{navItem}</ul>
        </nav>
    );
};

export default Nav;