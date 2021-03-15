import React from 'react';
import socialIconsmodule from '../socialIcons.module.css';
import picture from './instagram.svg';

const Instagram = () => {
    return (
        <a href="#" className={socialIconsmodule.socialLink}><img src={picture} className = {socialIconsmodule.socialPicture} alt="instagram"/></a>
    );
};


export default Instagram;