import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router-dom";

import Send from "../Send/Send";
import Feedback from "../Feedback/Feedback";
import Time from "../Time/Time";
import About from "../About/About";
import info from "../Info/info.module.css";

const Info = (props) => {
    const businessId = props.match.params.businessId;
    const pointerId = props.match.params.pointerId;

    const [business, setBusiness] = useState(null);
    const [address, setAddress] = useState(null);
    const [point, setPoint] = useState(null);
    const [logo, setLogo] = useState(null);
    const [comment, setComment] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        let error = (bool) => {
            return bool;
        };
        let loading = (bool) => {
            return bool;
        };
        loading(true);
        fetch(`http://localhost:3000/business.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(value => {
                loading(false);
                error(false);
                setBusiness(value.business[businessId].name);
                setPoint(value.business[businessId].points[pointerId].id);
                setAddress(value.business[businessId].points[pointerId].address);
                setLogo(value.business[businessId].logo);
            })
            .catch(err => {
                console.log(err);
                loading(false);
                error(true);
            });
    }, []);

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
