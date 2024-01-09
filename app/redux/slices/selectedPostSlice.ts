// features/markerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Замените на ваш фактический файл store
const initialState:number = -1

export const selectedPostSlice = createSlice({
    name: 'selectedPost',
    initialState,
    reducers: {
        togglePost: (state, action: PayloadAction<number>) => {
            if (state === action.payload){
                return state
            }else{
                return action.payload
            }
        },
        clearPost:(state)=>{
            return -1
        }
    },
});

export const { togglePost, clearPost } = selectedPostSlice.actions;
export const selectedPost = (state:RootState) => state.activeMarker
export default selectedPostSlice.reducer;