import React from 'react';
import styles from './WhereItWork.module.css';
import WhereItWorkItem from './WhereItWorkItem';
import Ok_logo from './assets/shopOk.png';
import Wait_logo from './assets/wait.png';
import Atm_logo from './assets/ATM.png';
import People_logo from './assets/people.png';
import Buy_logo from './assets/buy.png';

const content = [
    {
        title: 'Обслуживание на кассе оказалось выше всяких похвал, Вам очень понравилось',
        logo: Ok_logo
    },
    {
        title: 'Вы долго ждете продавца-консультанта, а его все нет и нет',
        logo: Wait_logo
    },
    {
        title: 'Банкомат грязный, подступ неудобный, кнопки залипают',
        logo: Atm_logo
    },
    {
        title: 'Вы хотите порекомендовать или предостеречь от покупки товара',
        logo: People_logo
    },
    {
        title: 'Вы хотите узнать, стоит ли брать тот или иной товар',
        logo: Buy_logo
    }
];

const WhereItWork = () => {

    const itemsCard = content.map((content,i) => <WhereItWorkItem
                items={content}
                key={i} />
            ); 
    return (
        <section className={styles.container} id="WhereItWork">
            <h2 className={styles.title}>
                Где это работает
            </h2>
            <div className={styles.card}>

                {itemsCard}

            </div>
 
        </section>
    );
};

export default WhereItWork;