'use client'

import styles from "./AnnouncementLayout.module.css";
import Map from "../../components/Map/Map";
import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";
import {useState} from "react";

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
