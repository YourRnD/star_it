import React from 'react';
import footerLeftModule from './footerLeft.module.css';
import SocialIcons from './SocialIcons/socialIcons'


const FooterLeft = () =>{
    return(
<section className = {footerLeftModule.footerContacts}>
        <address className = {footerLeftModule.footerContacts__address}>
          <div className = {footerLeftModule.footerContacts__address_item}>
            <h4>Call us</h4>
            <a href="tel+377777777" className = {footerLeftModule.footerContacts__item}>
              +3777777777
            </a>
          </div>
          <div div className = {footerLeftModule.footerContacts__address_item}>
          <h4>Subscribe us</h4>
          <SocialIcons/>
          </div>
          <div div className = {footerLeftModule.footerContacts__address_item}>
            <h4>Email us</h4>
            <a href="mailto:YourR&D" className = {footerLeftModule.footerContacts__item}>
            YourR&D@gmail.com
            </a>
          </div>
        </address>
      </section>
    )
}

export default FooterLeft;