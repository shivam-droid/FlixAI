import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        playNowMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addMovies: (state,action) =>{
            state.playNowMovies = action.payload;
        },
        addTrailer: (state,action)=>{
            state.trailerVideo = action.payload;
        }

    }
});

export const {addMovies,addTrailer} = movieSlice.actions;

export default movieSlice.reducer;