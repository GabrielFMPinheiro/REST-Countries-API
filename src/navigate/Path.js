// Libs
import React from 'react';

// Components
import { Route, Routes } from 'react-router-dom';
import { Home, Details, Layout } from '../pages';

function Path() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=":id" element={<Details />} />
            </Route>
        </Routes>
    );
}

export default Path;
