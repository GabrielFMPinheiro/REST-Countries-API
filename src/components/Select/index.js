// Libs
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux aux functions
import { getRegion, selectRegion } from '../../redux/features/countries/countriesSlice';

// constants
import { REGIONS as regions } from '../../utils/constants';

// Components
import {
    Wrapper,
    Filter,
    Name,
    ArrowDownIcon,
    Container,
    Option,
    CloseIcon,
    ArrowUpIcon,
} from './styles';

// Framer motion
import fade from '../../styles/motion/variants/fade';

function Select() {
    const dispatch = useDispatch();
    const regionChosen = useSelector(getRegion);
    const [toggle, setToggle] = useState(false);
    const nameEl = useRef(null);

    useEffect(() => {
        if (regionChosen !== '') {
            nameEl.current.innerText = regionChosen;
        } else {
            nameEl.current.innerText = 'Filter By Region';
        }
    }, [regionChosen]);

    return (
        <Wrapper
            whileTap={{ scale: 0.9 }}
            variants={fade.mode.rightLeft}
            initial="hidden"
            animate="visible"
        >
            <Filter onClick={() => setToggle(!toggle)}>
                {regionChosen && <CloseIcon onClick={() => dispatch(selectRegion(''))} />}
                <Name ref={nameEl}>Filter By Region</Name>

                {toggle ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </Filter>

            {toggle && (
                <Container>
                    {regions.map((region) => (
                        <Option
                            key={region}
                            onClick={(e) => {
                                dispatch(selectRegion(e.target.innerText));
                                setToggle(!toggle);
                            }}
                            whileHover={{ scale: 1.2, originX: 0 }}
                        >
                            {region}
                        </Option>
                    ))}
                </Container>
            )}
        </Wrapper>
    );
}

export default Select;
