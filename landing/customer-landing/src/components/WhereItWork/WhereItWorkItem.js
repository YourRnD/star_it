import React from 'react';
import styles from './WhereItWork.module.css';

const WhereItWorkItem = ({items}) => {
    return (
        <div className={styles.items}>
        <img src={items.logo} className={styles.img} alt="Icon" />
        <div className={styles.content}>
            <p className={styles.text}>
                {items.title}
            </p>
        </div>
    </div>
    );
}

export default WhereItWorkItem;