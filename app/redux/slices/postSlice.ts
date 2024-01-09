import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import posts from '@/app/api/data/advertisements.json'
import {AdvertisementTypes} from "../../types/AdvertisementTypes";
import {RootState} from "../store";
import {FormAdvertisementType} from "../../types/FormAdvertisementType";





const initialState:AdvertisementTypes[] = posts.advertisements

const postSlice = createSlice(({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action:PayloadAction<FormAdvertisementType>) => {
            const newPost:AdvertisementTypes ={
                ...action.payload,
                id: Math.random(),
            }
            return [...state, newPost];
        },
    }
}))

export const {addPost} = postSlice.actions;

export const postsArr = (state:RootState) => state.posts;

export default postSlice.reducer;