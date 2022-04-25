// Libs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux aux functions
import { findCountryName, getCountryName } from '../../redux/features/countries/countriesSlice';

// Components
import { Input, Wrapper, SearchIcon } from './styles';

// Framer motion
import fade from '../../styles/motion/variants/fade';

function Search() {
    const dispatch = useDispatch();
    const country = useSelector(getCountryName);

    return (
        <Wrapper
            whileTap={{ scale: 0.9 }}
            variants={fade.mode.rightLeft}
            initial="hidden"
            animate="visible"
        >
            <SearchIcon />
            <Input
                placeholder="Search for a country…"
                onChange={(e) => dispatch(findCountryName(e.target.value))}
                value={country}
            />
        </Wrapper>
    );
}

export default Search;
