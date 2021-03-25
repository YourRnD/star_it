import React from "react";
import styles from "./FormFeedbeak.module.css";
import icon_camera from "./icon_camera.svg";

const FormFeedbeak = () => {
    return(
        <div className={styles.container}>
            <form className={styles.containerForm}>
                <label className={styles.labelBox}>
                    I want to get answer
                    <input type="checkbox" name="answer" value="answer"  className={styles.inputBox} />
                </label>
                <button className={styles.imgCamera}>
                    <img src={icon_camera} alt="Camera" />
                </button>
                <textarea name="feedbeak" className={styles.feedbeakText} placeholder="feedbeak"></textarea>
                <button className={styles.sendButton}><strong>SEND</strong></button>
            </form>
        </div>
    );
}

export default FormFeedbeak;