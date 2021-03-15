import React from 'react';
import footerStoreButtonsModule from '../footerStoreButtons.module.css';

const GooglePlay = () =>{
    return (
        <a href = "#" className = {footerStoreButtonsModule.buttonLink}>
           <svg xmlns="http://www.w3.org/2000/svg" className = {footerStoreButtonsModule.picture} viewBox="0 0 143 42">
        <path fill="#283139" d="M137.2 41.5H5.8a5.2 5.2 0 0 1-5.3-5.1V5.6C.5 2.8 2.9.5 5.8.5h131.5c2.9 0 5.3 2.3 5.3 5.1v30.8a5.4 5.4 0 0 1-5.4 5.1z"/>
        <path id="hover" fillOpacity=".3" d="M137.2 41.5H5.8a5.2 5.2 0 0 1-5.3-5.1V5.6C.5 2.8 2.9.5 5.8.5h131.5c2.9 0 5.3 2.3 5.3 5.1v30.8a5.4 5.4 0 0 1-5.4 5.1z"/>
        <path fill="#a6a6a6" d="M137.6 1c2.4 0 4.4 2 4.4 4.4v31.3c0 2.4-2 4.4-4.4 4.4H5.4A4.6 4.6 0 0 1 1 36.6V5.4C1 3 3 1 5.4 1h132.2zm.1-1H5.3A5.3 5.3 0 0 0 0 5.2v31.5C0 39.6 2.4 42 5.3 42h132.4c2.9 0 5.3-2.4 5.3-5.2V5.2c0-2.8-2.4-5.2-5.3-5.2z"/>
        <path fill="#fff" stroke="#fff" strokeWidth=".7" d="M50.2 11.1c0 .9-.3 1.6-.8 2.1-.6.6-1.4.9-2.3.9a3.3 3.3 0 0 1-3.3-3.2c0-.9.3-1.7 1-2.3.6-.6 1.4-.9 2.3-.9.5 0 .9.1 1.3.3l1 .7-.6.5c-.4-.5-1-.7-1.7-.7s-1.2.2-1.7.7c-.5.5-.7 1.1-.7 1.8a2.4 2.4 0 0 0 2.4 2.5c.7 0 1.3-.2 1.8-.7.3-.3.5-.7.5-1.3h-2.3v-.8h3.1v.4zm4.9-2.6h-2.9v2h2.6v.8h-2.6v2h2.9v.7h-3.7V7.8h3.7v.7zm3.4 5.5h-.8V8.5H56v-.7h4.4v.8h-1.8V14zm5 0V7.8h.8V14h-.8zm4.4 0h-.8V8.5h-1.8v-.7h4.4v.8h-1.8V14zm10.1-.8c-.6.6-1.4.9-2.3.9-.9 0-1.7-.3-2.3-.9-.6-.6-.9-1.4-.9-2.3 0-.9.3-1.7.9-2.3.6-.6 1.4-.9 2.3-.9.9 0 1.7.3 2.3.9.6.6.9 1.4.9 2.3 0 .9-.3 1.7-.9 2.3zm-4.1-.5c.5.5 1 .7 1.7.7s1.3-.2 1.7-.7c.5-.5.7-1.1.7-1.8s-.2-1.3-.7-1.8c-.5-.5-1-.7-1.7-.7s-1.3.2-1.7.7c-.5.5-.7 1.1-.7 1.8s.2 1.3.7 1.8zm6.2 1.3V7.8h1l3.1 4.8V7.8h.8V14h-.9l-3.2-5.1V14h-.8z"/>
        <path fill="#fff" d="M72.2 23.1a4.4 4.4 0 1 0 0 8.8c2.5 0 4.5-1.9 4.5-4.4 0-2.6-2-4.4-4.5-4.4zm0 7.1c-1.4 0-2.5-1.1-2.5-2.7s1.2-2.7 2.5-2.7c1.4 0 2.5 1.1 2.5 2.7s-1.2 2.7-2.5 2.7zm-9.9-7.1a4.4 4.4 0 1 0 0 8.8c2.5 0 4.5-1.9 4.5-4.4 0-2.6-2-4.4-4.5-4.4zm0 7.1c-1.4 0-2.5-1.1-2.5-2.7s1.2-2.7 2.5-2.7c1.4 0 2.5 1.1 2.5 2.7s-1.1 2.7-2.5 2.7zm-11.7-5.8v1.9h4.6c-.1 1-.5 1.8-1 2.4a5 5 0 0 1-3.5 1.4c-2.8 0-5-2.2-5-5s2.2-5 5-5a5 5 0 0 1 3.4 1.3l1.4-1.3a6.6 6.6 0 0 0-4.8-1.9c-3.9 0-7.1 3.1-7.1 6.9s3.2 6.9 7.1 6.9c2.1 0 3.7-.7 4.9-1.9a6 6 0 0 0 1.7-4.4l-.1-1.2h-6.6zm48 1.5c-.4-1-1.5-2.8-3.9-2.8-2.3 0-4.2 1.8-4.2 4.4 0 2.5 1.9 4.4 4.5 4.4 2.1 0 3.3-1.2 3.8-2l-1.5-1c-.5.7-1.2 1.2-2.2 1.2-1 0-1.7-.5-2.2-1.3l6-2.4-.3-.5zm-6.2 1.5c-.1-1.7 1.4-2.6 2.4-2.6.8 0 1.5.4 1.7.9l-4.1 1.7zm-4.9 4.3h2v-13h-2v13zm-3.2-7.6c-.5-.5-1.4-1-2.4-1a4.4 4.4 0 0 0-4.3 4.4c0 2.5 2.1 4.4 4.3 4.4 1.1 0 1.9-.5 2.4-1h.1v.6c0 1.7-.9 2.6-2.4 2.6-1.2 0-2-.9-2.3-1.6l-1.7.7a4.2 4.2 0 0 0 4 2.6c2.3 0 4.3-1.3 4.3-4.6v-7.9h-1.9v.8zM82 30.2c-1.4 0-2.5-1.1-2.5-2.7s1.1-2.7 2.5-2.7c1.3 0 2.4 1.1 2.4 2.7s-1 2.7-2.4 2.7zm25.9-11.5h-4.7v13h2v-4.9h2.8c2.2 0 4.3-1.6 4.3-4a4.3 4.3 0 0 0-4.4-4.1zm0 6.2h-2.8v-4.5h2.8c1.5 0 2.3 1.2 2.3 2.2 0 1.1-.8 2.3-2.3 2.3zm12.2-1.8c-1.4 0-2.9.6-3.5 2l1.8.7a2 2 0 0 1 1.8-1c1 0 2.1.6 2.1 1.7v.1c-.4-.2-1.1-.5-2.1-.5-1.9 0-3.8 1-3.8 2.9 0 1.7 1.5 2.9 3.3 2.9 1.3 0 2.1-.6 2.5-1.3h.1v1h1.9v-5c0-2.2-1.8-3.5-4.1-3.5zm-.2 7.1c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.4 2.1-1.4.9 0 1.3.2 1.8.4a2.5 2.5 0 0 1-2.4 2.1zm11.2-6.9l-2.3 5.6h-.1l-2.3-5.6h-2.1l3.5 7.9-2 4.4h2.1l5.4-12.2h-2.2zm-17.8 8.4h2v-13h-2v13z"/>
        <g transform="translate(10.4 7.5)">
            <linearGradient id="google_a" x1="-226.4" x2="-227.7" y1="424.8" y2="424.1" gradientTransform="matrix(13.7029 0 0 26.0466 3114.6 -11039.5)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#00a0ff"/>
                <stop offset="0" stopColor="#00a1ff"/>
                <stop offset=".3" stopColor="#00beff"/>
                <stop offset=".5" stopColor="#00d2ff"/>
                <stop offset=".8" stopColor="#00dfff"/>
                <stop offset="1" stopColor="#00e3ff"/>
            </linearGradient>
            <path fill="url(#google_a)" d="M.7.8c-.4.3-.5.8-.5 1.5v23c0 .6.2 1.1.5 1.5l.1.1L13.9 14v-.3L.7.8z"/>
        </g>
        <g transform="translate(23.9 15.5)">
            <linearGradient id="google_b" x1="-235.1" x2="-237.5" y1="444" y2="444" gradientTransform="matrix(10.772 0 0 8.8891 2544.2 -3941.4)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffe000"/>
                <stop offset=".4" stopColor="#ffbd00"/>
                <stop offset=".8" stopColor="orange"/>
                <stop offset="1" stopColor="#ff9c00"/>
            </linearGradient>
            <path fill="url(#google_b)" d="M4.7 10.2L.4 5.9v-.3l4.4-4.3.1.1L10 4.2c1.5.8 1.5 2.2 0 3l-5.2 2.9-.1.1z"/>
        </g>
        <g transform="translate(10.6 6.4)">
            <linearGradient id="google_c" x1="-231.2" x2="-232.5" y1="438.8" y2="437.1" gradientTransform="matrix(17.688 0 0 13.365 4093.3 -5846.2)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ff3a44"/>
                <stop offset="1" stopColor="#c31162"/>
            </linearGradient>
            <path fill="url(#google_c)" d="M18.1 19.2l-4.5-4.4-13.2 13c.5.5 1.3.6 2.2.1l15.5-8.7"/>
        </g>
        <g transform="translate(10.6 20.7)">
            <linearGradient id="google_d" x1="-232.2" x2="-231.6" y1="426.3" y2="425.5" gradientTransform="matrix(17.688 0 0 13.3605 4093.3 -5681.2)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#32a071"/>
                <stop offset=".1" stopColor="#2da771"/>
                <stop offset=".5" stopColor="#15cf74"/>
                <stop offset=".8" stopColor="#06e775"/>
                <stop offset="1" stopColor="#00f076"/>
            </linearGradient>
            <path fill="url(#google_d)" d="M18.1-3.9L2.6-12.5c-.9-.5-1.7-.4-2.2.1L13.6.5l4.5-4.4z"/>
        </g>
    </svg>
        </a>   
    )
};

export default GooglePlay;