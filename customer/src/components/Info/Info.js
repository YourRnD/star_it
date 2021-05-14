import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";

import Send from "../Send/Send";
import Feedback from "../Feedback/Feedback";
import Time from "../Time/Time";
import About from "../About/About";
import info from "../Info/info.module.css";

const Info = (props) => {
    const businessId = props.match.params.businessId;
    const pointerId = props.match.params.pointerId;
    const requestURL = `http://localhost:3004/business/${businessId}`;

    const [business, setBusiness] = useState(null);
    const [address, setAddress] = useState(null);
    const [point, setPoint] = useState(null);
    const [logo, setLogo] = useState(null);
    const [comment, setComment] = useState(null);
    const [answer, setAnswer] = useState(false);
    const [rating, setRating] = useState(5);
    const [color, setColor] = useState('130, 160, 220');

    function sendRequest(url){
        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
    }

    useEffect(() => {
        let error = (bool) => {
            return bool;
        };
        let loading = (bool) => {
            return bool;
        };
        loading(true);

        sendRequest(requestURL)
            .then(value => {
                loading(false);
                error(false);
                setBusiness(value.name);
                setPoint(value.points[pointerId].id);
                setAddress(value.points[pointerId].address);
                setLogo(value.logo);
                setColor(value.color);
            })
            .catch(err => {
                console.log(err);
                loading(false);
                error(true);
            });

    }, []);
    useEffect(()=>{
        document.documentElement.style.setProperty('--rgb-dark-blue', color);
    });

    const userComment = (newComment) => {
        setComment(newComment);
    };

    const userAnswer = (bool) => {
        setAnswer(bool);
    };

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className={info.container}>
            <About
                businessName={business}
                businessAddress={address}
                businessPoint={point}
                logo={logo}
            />
            <Time/>
            <Feedback value=''
                      comment={comment}
                      onClick={userComment}
                      isAnswer={userAnswer}
                      userRating={rating}
                      changeRating={ratingChanged}
            />
            <Send
                businessId={businessId}
                pointerId={pointerId}
                rating={rating}
                comment={comment}
                answer={answer}
                logo={logo}
            />
        </div>
    );
};

const InfoWithRouter = withRouter(Info);
export default InfoWithRouter;


