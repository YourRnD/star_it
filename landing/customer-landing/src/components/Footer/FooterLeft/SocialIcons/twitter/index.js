import React from 'react';
import socialIconsmodule from '../socialIcons.module.css';
import picture from './twitter.svg';

const Twitter = () => {
    return (
        <a href="#" className={socialIconsmodule.socialLink}><img src={picture} className = {socialIconsmodule.socialPicture} /></a>
    );
};


export default Twitter;