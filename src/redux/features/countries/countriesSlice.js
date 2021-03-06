// Libs
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Api
import countriesApi from '../../../services/api';

// Request
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
    try {
        const response = await countriesApi.get('/all');
        return response.data;
    } catch (err) {
        return err;
    }
});

const initialState = {
    payload: [],
    status: 'idle',
    error: null,
    region: '',
    name: '',
};

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        selectCountry: (state, action) => {
            state.countryChosen = action.payload;
        },
        selectRegion: (state, action) => {
            state.region = action.payload;
        },
        findCountryName: (state, action) => {
            state.name = action.payload;
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

export const { selectCountry, selectRegion, findCountryName } = countriesSlice.actions;

// aux functions
export const getAllCountries = (state) => state.countries.payload;
export const getRegion = (state) => state.countries.region;
export const getCountryName = (state) => state.countries.name;
export const getStatusApi = (state) => state.countries.status;

export default countriesSlice.reducer;
