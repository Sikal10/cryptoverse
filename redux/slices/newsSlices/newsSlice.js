import {createSlice} from "@reduxjs/toolkit";
import {getNews} from "./newsAPI";

const initialState = {
    loading: "idle",
    cryptoNews: [],
    success: false,
    error: false
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: {
        [getNews.pending]: (state) => {
            state.loading = "loading"
        },
        [getNews.fulfilled]: (state, action) => {
            state.loading = "loaded"
            state.success = true
            state.cryptoNews = action.payload.value
        },
        [getNews.rejected]: (state, action) => {
            state.loading = "error"
            state.errorMsg = action.payload
        }
    }
});

//selectors
export const selectNews = state => state.news.cryptoNews;
export const selectIsNewsLoading = state => state.news.loading;

export default newsSlice.reducer;

