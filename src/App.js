import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Countries, CountryDetails, Layout } from './pages';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Countries />} />
                <Route path=":id" element={<CountryDetails />} />
            </Route>
        </Routes>
    );
}

export default App;
