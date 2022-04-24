import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getStatusApi } from './features/countries/countriesSlice';

import { Countries, CountryDetails, Layout } from './pages';

function App() {
    const statusRequest = useSelector(getStatusApi);

    return (
        <div>
            {statusRequest === 'fulfilled' && (
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Countries />} />
                        <Route path=":id" element={<CountryDetails />} />
                    </Route>
                </Routes>
            )}
        </div>
    );
}

export default App;
