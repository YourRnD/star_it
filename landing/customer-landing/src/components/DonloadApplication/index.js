import React from 'react';
import styles from './DonloadApplication.module.css';

const DonloadApplication = () => {
    return (
         <div className={styles.container}>
            <p className={styles.content}>
                Скачать Приложение 
            </p>
            <a href="#" className={styles.link}>
                и начать менять жизнь к лучшему!
            </a>
        </div>
    );
}

export default DonloadApplication;