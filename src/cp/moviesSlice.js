import { createSlice } from "@reduxjs/toolkit";


const   moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlaying : null,
        trailer : null
    },
    reducers:{
        addNowPlaying: (state,action)=>{
            state.nowPlaying=  action.payload;
        }, 
        addTrailer:(state,action)=>{
            state.trailer=  action.payload;
        }
    },
});


export const {addNowPlaying,addTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;