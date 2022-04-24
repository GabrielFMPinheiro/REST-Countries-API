import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { findCountryName, getCountryName } from '../../features/countries/countriesSlice';

import { Input, Wrapper, SearchIcon } from './Search.elements';

function Search() {
    const dispatch = useDispatch();
    const country = useSelector(getCountryName);

    return (
        <Wrapper whileTap={{ scale: 0.9 }}>
            <SearchIcon />
            <Input
                placeholder="Search for a country…"
                onChange={({ target }) => dispatch(findCountryName(target.value))}
                value={country}
            />
        </Wrapper>
    );
}

export default Search;
