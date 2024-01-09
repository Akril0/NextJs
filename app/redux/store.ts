// app/store.ts
import {configureStore} from '@reduxjs/toolkit';
import selectedPost from "./slices/selectedPostSlice";
import visiblePosts from "./slices/visiblePostsSlice";
import errorReducer from './slices/errorSlice';
import postReducer from './slices/postSlice';
export const store = configureStore({
    reducer: {
        activeMarker: selectedPost,
        visiblePosts: visiblePosts,
        error: errorReducer,
        posts: postReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch