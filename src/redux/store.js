import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './features/theme/themeSlice';
import countriesReducer from './features/countries/countriesSlice';

export default configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesReducer,
    },
});
