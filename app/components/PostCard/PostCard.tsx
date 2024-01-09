import styles from './PostCard.module.css'
import {AdvertisementTypes} from "../../types/AdvertisementTypes";
import React from "react";

interface PostComponentProps {
    post: AdvertisementTypes; // Использование типа Post
}

const PostCard:React.FC<PostComponentProps> = ({post}) => {
    return (
        <div className={styles.postCard}>
            <div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>Цена: {post.price}</p>
                <p>Контактное лицо: {post.contact.name}</p>
                <p>Телефон: {post.contact.phone}</p>
                <p>Местоположение: {post.location}</p>
            </div>
        </div>
    );
};

export default PostCard;
