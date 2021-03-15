import React from 'react';
import DownloadItem from "./DownloadItem";

import download from "./Download.module.css";

import google from "./img/google.svg";
import ios from "./img/ios.svg";


const Download = () => {

    const downloadLinks = [
        {
            link: "#",
            title: "скачать с Google Play",
            imgUrl: google,
        },
        {
            link: "#",
            title: "скачать с App Story",
            imgUrl: ios,
        },
    ];

    const items = downloadLinks.map((item, i) =>
        <DownloadItem
            key = {i}
            link = {item.link}
            title = {item.title}
            imgUrl = {item.imgUrl}
        />);

    return (
        <div className={download.container}>
            {items}
        </div>
    );
};

export default Download;