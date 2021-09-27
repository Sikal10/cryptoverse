import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_KEY
    }
}

const BASE_URL = "https://coinranking1.p.rapidapi.com/coins";

export const getAllCryptos = createAsyncThunk("crypto/getAllCryptos",async (_, thunkAPI) => {
    try {
        const {data} = await axios.get(`${BASE_URL}`, options);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue({error: err.response.data});
    }

});

export const getACrypto = createAsyncThunk("crypto/getACrypto",async ({coinId, timePeriod}, thunkAPI) => {
    try {
        const {data} = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${coinId}`, options);
        const coin = await data?.data?.coin;
        const success = await data?.status;
        const historyData = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${coinId}/history/${timePeriod}`, options)
        const coinHistory = await historyData?.data?.data?.history;
        const priceChange = await historyData?.data?.data?.change;

        return {coin, success, coinHistory, priceChange}
    } catch (err) {
        return thunkAPI.rejectWithValue({error: err.response.data});
    }

});
