import {configureStore} from "@reduxjs/toolkit";
import cryptoReducer from "../slices/cryptoSlices/cryptoSlice";
import newsReducer from "../slices/newsSlices/newsSlice";


export const store = configureStore({
    reducer: {
        crypto: cryptoReducer,
        news: newsReducer
    }
});