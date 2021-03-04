import React from "react";
import styles from "./HowThisWork.module.css";
import Zoom from 'react-reveal/Zoom';


const ItemHowThisWork = ({items}) => {
    return (
        <Zoom>
            <div className={styles.howThisWorkItems}>
                <img src={items.logo} className={styles.howThisWorkImg} alt="Icon" />
                <div className={styles.howThisWorkCard}>
                    <p className={styles.howThisWorkText}>
                        {items.title}
                    </p>
                </div>
            </div>
        </Zoom>
    );
};

export default ItemHowThisWork;