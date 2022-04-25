// Libs
import React from 'react';
import { useSelector } from 'react-redux';

// Redux aux functions
import { getStatusApi } from './redux/features/countries/countriesSlice';

// Routes
import Path from './navigate/Path';

function App() {
    const statusRequest = useSelector(getStatusApi);

    return <div>{statusRequest === 'fulfilled' && <Path />}</div>;
}

export default App;
