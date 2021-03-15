import React from 'react';
import styles from './KnowMore.module.css';

const KnowMore = () => {
  return (
    <div className={styles.containerKnowMore}>
        <p className={styles.konwMoreContent}>
            Хотите узнать больше? 
        </p>
        <a href="#" className={styles.knowMoreLink}>
                Получите консультацию
            </a>
    </div>
  );
};

export default KnowMore;