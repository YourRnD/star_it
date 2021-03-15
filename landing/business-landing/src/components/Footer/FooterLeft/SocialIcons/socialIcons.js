import React from 'react';
import Facebook from './Facebook';
import Twitter from './twitter';
import Instagram from './instagram';
import socialIconsmodule from './socialIcons.module.css';


const SocialIcons = () =>{
    return(
<div className = {socialIconsmodule.iconsWrapper}>  
    <Facebook/>
    <Twitter/>
    <Instagram/> 
</div>
    )
}

export default SocialIcons;