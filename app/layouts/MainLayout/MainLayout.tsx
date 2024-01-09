import AnnouncementLayout from "../AnnouncementLayout/AnnouncementLayout";
import styles from './MainLayout.module.css'
const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <div className={styles.announcementLayout}> <AnnouncementLayout/></div>
        </div>
    );
};

export default MainLayout;
