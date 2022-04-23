import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '../features/theme/themeSlice';
import countriesReducer from '../features/api/countriesSlice';

export default configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesReducer,
    },
});
