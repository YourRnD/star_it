import React from 'react';

import nav from "./Nav.module.css"

const NavItem = (props) => {
    return (
        <li className={nav.item}>
            <a className={nav.link} href={props.link}>{props.text}</a>
        </li>
    );
};

export default NavItem;