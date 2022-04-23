/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import countriesApi from '../../services/api';

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        try {
            const response = await countriesApi.get('/all');
            return response.data;
        } catch (err) {
            return err;
        }
    },
);

const initialState = {
    payload: [],
    status: 'idle',
    error: null,
    countryChosen: '',
};

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        selectCountry: (state, action) => {
            state.countryChosen = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.payload = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { selectCountry } = countriesSlice.actions;

export const getAllCountries = (state) => state.countries.payload;

export default countriesSlice.reducer;
