'use client'


import styles from './page.module.css'
import MainLayout from "@/app/layouts/MainLayout/MainLayout";
import Error from "@/app/Error/Error";
import {Provider, useDispatch} from "react-redux";
import {store} from '@/app/redux/store';
import {useEffect} from "react";
import {setPosts} from "@/app/redux/slices/postSlice";
import {setError} from "@/app/redux/slices/errorSlice";

export default function Home() {


  return (
      <Provider store={store}>
      <div className={styles.App}>
        <MainLayout/>
        <Error/>
      </div>
      </Provider>);
}
