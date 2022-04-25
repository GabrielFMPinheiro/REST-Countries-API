// Libs
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const { changeTheme } = themeSlice.actions;

// aux functions
export const getActualTheme = (state) => state.theme.mode;

export default themeSlice.reducer;
