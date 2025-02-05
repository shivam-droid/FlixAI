import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        playNowMovies: null,
    },
    reducers: {
        addMovies: (state,action) =>{
            state.playNowMovies = action.payload;
        }
    }
});

export const {addMovies} = movieSlice.actions;

export default movieSlice.reducer;