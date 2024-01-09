// features/markerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {AdvertisementTypes} from "../../types/AdvertisementTypes"; // Замените на ваш фактический файл store
const initialState:AdvertisementTypes[] = []

export const visiblePostsSlice = createSlice({
    name: 'visiblePosts',
    initialState,
    reducers: {
        setVisiblePosts: (state, action: PayloadAction<AdvertisementTypes[]>) => {
           return action.payload
        },

    },
});

export const { setVisiblePosts } = visiblePostsSlice.actions;
export const visiblePosts = (state:RootState) => state.visiblePosts
export default visiblePostsSlice.reducer;