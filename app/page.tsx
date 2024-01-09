'use client'


import styles from './page.module.css'
import MainLayout from "@/app/layouts/MainLayout/MainLayout";
import Error from "@/app/Error/Error";
import {Provider} from "react-redux";
import {store} from '@/app/redux/store';

export default function Home() {


  return (
      <Provider store={store}>
      <div className={styles.App}>
        <MainLayout/>
        <Error/>
      </div>
      </Provider>);
}
