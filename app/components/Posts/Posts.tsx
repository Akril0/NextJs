import styles from './Posts.module.css'
import PostCard from "../PostCard/PostCard";
import {clearPost, selectedPost} from "../../redux/slices/selectedPostSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {AdvertisementTypes} from "../../types/AdvertisementTypes";
import { IoClose } from "react-icons/io5";
import {visiblePosts} from "../../redux/slices/visiblePostsSlice";
import {postsArr} from "../../redux/slices/postSlice";



const Posts = () => {
    const  posts = useSelector(postsArr)
    const visible = useSelector(visiblePosts)
    const postId = useSelector(selectedPost)
    const dispatch: AppDispatch =useDispatch()

    const foundItem:AdvertisementTypes | undefined = posts.find(item => item.id === postId);

    return (
        <div className={styles.posts}>
            {foundItem === undefined ? (
                <>
                    <div className={styles.countPosts}>
                        Знайдено {visible.length} оголошеня
                    </div>
                <div >
                    {visible.map((post)=>(
                        <PostCard key={post.id} post={post}/>
                    ))}
                </div>
                </>
            ):
                <div>
                    <button className={styles.closeButton} onClick={()=>dispatch(clearPost())}>
                        <IoClose />
                    </button>
                    <PostCard post={foundItem}/>
                </div>
            }

        </div>
    );
};

export default Posts;
