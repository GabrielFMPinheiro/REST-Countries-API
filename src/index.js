import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Libs
import App from './App';

// Store
import store from './redux/store';

// Request function
import { fetchCountries } from './redux/features/countries/countriesSlice';

store.dispatch(fetchCountries());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
);
