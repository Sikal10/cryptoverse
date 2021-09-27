import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_KEY
    }
}

const BASE_URL = "https://bing-news-search1.p.rapidapi.com";

export const getNews = createAsyncThunk("news/getNews",async (newsCategory, thunkAPI) => {
    try {
        const {data} = await axios.get(`${BASE_URL}/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`, options);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue({error: err.response.data});
    }
})