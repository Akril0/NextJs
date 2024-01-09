import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AdvertisementTypes} from "../../types/AdvertisementTypes";
import {RootState} from "../store";
import {FormAdvertisementType} from "../../types/FormAdvertisementType";





const initialState:AdvertisementTypes[] = [];

const postSlice = createSlice(({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action:PayloadAction<AdvertisementTypes[]>, )=>{
            return action.payload;
        },
        addPost: (state, action:PayloadAction<FormAdvertisementType>) => {
            const newPost:AdvertisementTypes ={
                ...action.payload,
                id: Math.random(),
            }
            return [...state, newPost];
        },
    }
}))

export const {setPosts, addPost} = postSlice.actions;

export const postsArr = (state:RootState) => state.posts;

export default postSlice.reducer;