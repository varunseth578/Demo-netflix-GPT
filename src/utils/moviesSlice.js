import { createSlice } from "@reduxjs/toolkit";


const   moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlaying : null,
        trailer : null,
        popularMovies: null,
        HorrorMovies:null,
        TrendingMovies:null,
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
          addHorrorMovies: (state, action) => {
            state.HorrorMovies = action.payload;
          },
          addTrendingMovies: (state, action) => {
            state.TrendingMovies = action.payload;
          },
    },
});


export const {addNowPlaying,addTrailer,addPopularMovies,addHorrorMovies,addTrendingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;