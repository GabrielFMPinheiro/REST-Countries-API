import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    getRegion,
    selectRegion,
} from '../../features/countries/countriesSlice';

import { REGIONS } from '../../utils/constants';

import {
    Wrapper,
    WrapperSelect,
    SelectContainer,
    ArrowDown,
    WrapperOptions,
    Option,
    Close,
    ArrowUp,
} from './Select.elements';

function Select() {
    const dispatch = useDispatch();
    const regionSelected = useSelector(getRegion);
    const [toggle, setToggle] = useState(false);
    const selectEl = useRef(null);

    useEffect(() => {
        if (regionSelected !== '') {
            selectEl.current.innerText = regionSelected;
        } else {
            selectEl.current.innerText = 'Filter By Region';
        }
    }, [regionSelected]);

    const saveRegion = ({ target }) => {
        dispatch(selectRegion(target.innerText));
        setToggle(!toggle);
    };

    return (
        <Wrapper>
            <WrapperSelect
                onClick={() => setToggle(!toggle)}
                whileTap={{ scale: 0.9 }}
            >
                {regionSelected && (
                    <Close onClick={() => dispatch(selectRegion(''))} />
                )}
                <SelectContainer ref={selectEl}>
                    Filter By Region
                </SelectContainer>

                {toggle ? <ArrowUp /> : <ArrowDown />}
            </WrapperSelect>

            {toggle && (
                <WrapperOptions>
                    {REGIONS.map((region) => (
                        <Option
                            key={region}
                            onClick={saveRegion}
                            whileHover={{ scale: 1.2, originX: 0 }}
                        >
                            {region}
                        </Option>
                    ))}
                </WrapperOptions>
            )}
        </Wrapper>
    );
}

export default Select;
