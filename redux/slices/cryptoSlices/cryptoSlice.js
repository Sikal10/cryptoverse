import {createSlice} from "@reduxjs/toolkit";
import {getAllCryptos, getACrypto} from "./cryptoAPI";

const initialState = {
    loading: "idle",
    coins: [],
    base: {},
    stats: {},
    success: false,
    error: false,
    coinHistory: [],
    coin: {},
    priceChange: null
};

export const cryptoSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCryptos.pending]: (state) => {
            state.loading = "loading"
        },
        [getAllCryptos.fulfilled]: (state, action) => {
            state.loading = "loaded"
            state.success = true
            state.coins = action.payload?.data?.coins
            state.base = action.payload?.data?.base
            state.stats = action.payload?.data?.stats
        },
        [getAllCryptos.rejected]: (state, action) => {
            state.loading = "error"
            state.errorMsg = action.payload
        },
        [getACrypto.pending]: (state) => {
            state.loading = "loading"
        },
        [getACrypto.fulfilled]: (state, action) => {
            state.loading = "loaded"
            state.success = action.payload.success
            state.coin = action.payload.coin
            state.coinHistory = action.payload.coinHistory
            state.priceChange = action.payload.priceChange
        },
        [getACrypto.rejected]: (state, action) => {
            state.loading = "error"
            state.errorMsg = action.payload.error
        }
    }
});

//selectors
export const selectCryptos = state => state.crypto;

export default cryptoSlice.reducer;

