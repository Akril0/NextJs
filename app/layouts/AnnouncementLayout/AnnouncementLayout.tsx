'use client'

import styles from "./AnnouncementLayout.module.css";
import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Map = dynamic(
    () => import('../../components/Map/Map'), // Предположим, что ваш компонент карты находится здесь
    { ssr: false } // Отключение серверного рендеринга для этого компонента
);

const AnnouncementLayout = () => {
    const [formActive, setFormActive] = useState<boolean>(false);

    return (
        <div className={styles.gridTemplate}>
            <div className={styles.map}>
                <Map/>
            </div>
            <div className={styles.posts}>
                <Posts/>
            </div>
            <div className={styles.formOpen} onClick={()=>setFormActive(true)}>
                Створити оголошення
            </div>
            <div className={styles.formWrapper}>

                <div className={styles.form + " " + (formActive ? styles.active : '')}>
                    <Form/>
                </div>
                <div className={styles.formBg + " " + (formActive ? styles.active : '')} onClick={()=>setFormActive(false)}/>

            </div>
        </div>
    );
};

export default AnnouncementLayout;
