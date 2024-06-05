import { createSlice } from "@reduxjs/toolkit";


const   moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlaying : null,
        trailer : null,
        popularMovies: null,
    },
    reducers:{
        addNowPlaying: (state,action)=>{
            state.nowPlaying=  action.payload;
        }, 
        addTrailer:(state,action)=>{
            state.trailer=  action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
          },
    },
});


export const {addNowPlaying,addTrailer,addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;