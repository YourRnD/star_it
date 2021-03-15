import React from 'react';
import socialIconsmodule from '../socialIcons.module.css';
import picture from './facebook.svg';

const Facebook = () => {
    return (
        <a href="https://www.facebook.com/Star-It-148078898545796" className={socialIconsmodule.socialLink}>
            <img src={picture} className = {socialIconsmodule.socialPicture} alt="Facebook"/>
        </a>

    );
};


export default Facebook;