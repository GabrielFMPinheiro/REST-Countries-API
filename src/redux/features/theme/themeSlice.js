// Libs
import { createSlice } from '@reduxjs/toolkit';
import { saveLocalStorage, getLocalStorage } from '../../../utils/support';

const initialState = {
    mode: getLocalStorage('theme', 'light'),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            saveLocalStorage('theme', state.mode);
        },
    },
});

export const { changeTheme } = themeSlice.actions;

// aux functions
export const getActualTheme = (state) => state.theme.mode;

export default themeSlice.reducer;
