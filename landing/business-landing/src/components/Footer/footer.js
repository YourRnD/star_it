import React from 'react';
import footerModule from './footer.module.css';
import FooterRight from './FooterRight/footerRight'
import FooterLeft from './FooterLeft/FooterLeft';

const Footer = () =>{
    return(
        <footer className = {footerModule.footer}>
          <FooterLeft/>
          <FooterRight/>
      </footer>
    )
};
export default Footer;