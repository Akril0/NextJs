import AnnouncementLayout from "../AnnouncementLayout/AnnouncementLayout";
import styles from './MainLayout.module.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setPosts} from "@/app/redux/slices/postSlice";
import {setError} from "@/app/redux/slices/errorSlice";
const MainLayout = () => {
    const dispatch = useDispatch()
    useEffect(() => {

        fetch('/api/posts')
            .then(response => {
                return response.json();
            })
            .then(data => {
                dispatch(setPosts(data));
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);
    return (
        <div className={styles.mainLayout}>
            <div className={styles.announcementLayout}> <AnnouncementLayout/></div>
        </div>
    );
};

export default MainLayout;
