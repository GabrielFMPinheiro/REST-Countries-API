import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { findCountryName, getCountryName } from '../../redux/features/countries/countriesSlice';

import { Input, Wrapper, SearchIcon } from './Search.elements';

const filterVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: 0.1,
        },
    },
};

function Search() {
    const dispatch = useDispatch();
    const country = useSelector(getCountryName);

    return (
        <Wrapper
            whileTap={{ scale: 0.9 }}
            variants={filterVariants}
            initial="hidden"
            animate="visible"
        >
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
