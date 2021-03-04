import React from 'react';
import styles from './HowThisWork.module.css';
import ItemHowThisWork from './ItemHowThisWork';


const HowThisWork = ({item}) => {

    const itemsCard = item.map((items, i) => <ItemHowThisWork
        items={items}
        key={i}/>);

    return (
        <section className={styles.containerHowThisWork} id="HowThisWork">
            <h2 className={styles.howThisWorkTitle}>
                Как это работает
            </h2>
            <div className={styles.howThisWorkCard}>

                {itemsCard}

            </div>

        </section>
    );
};

export default HowThisWork;