import React, {useState} from 'react';
import Nav from "../Nav/";
import Logo from "../Logo/";
import ButtonMenu from "../ButtonMenu/";

import PageWidth from "../../Hooks/PageWidth/";
import Scroll from "../../Hooks/Scroll/";

import header from "./Header.module.css";

const Header = () => {
    const navItemData = [
        {
            text: "Как это работает",
            link: "#HowThisWork",
        },
        {
            text: "Сколько это стоит",
            link: "#How much it costs",
        }];

    const maxWidth = 768;
    const width = PageWidth();
    const scroll = Scroll();
    let [isMenuOpen, setMenuStatus] = useState(false);

    const handleOpenMenu = (isMenuOpen) => {
        setMenuStatus(!isMenuOpen);
    };

    const nav =
        <Nav
            data={navItemData}
            isMenuOpen={handleOpenMenu}
        />;

    const btnMenu =
        <ButtonMenu
            statusBtn = {isMenuOpen}
            isMenuOpen={handleOpenMenu}
            onClick={setMenuStatus}
        />;

    const showHeader = () => {
        if(scroll < 1){
            return header.container;
        }
        else{
            return `${header.container} ${header.container_small}`;
        }
    };

    return (
        <header className= {showHeader()}>
            <div className={`${header.wrap} row`}>
                <Logo/>
                {width < maxWidth ? btnMenu : null}
                {width > maxWidth ? nav : isMenuOpen ? nav : null}
            </div>
        </header>
    );
};

export default Header;