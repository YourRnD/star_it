import React from 'react';

import download from "./download.module.css";

const DownloadItem = (props) => {
    return (
        <a href={props.link} className={download.link}>
            <img src={props.imgUrl} alt={props.title}/>
        </a>
    );
};

export default DownloadItem;