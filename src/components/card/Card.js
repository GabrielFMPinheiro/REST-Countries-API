import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    ImgWrapper,
    Wrapper,
    CountryImg,
    InfoWrapper,
    CountryName,
    Description,
    Information,
} from './Card.elements';

const filterVariants = {
    hidden: {
        opacity: 0,
        y: '100vh',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 30,
            delay: 0.1,
        },
    },
};

function Card(props) {
    const { name, flag, population, region, capital } = props;

    return (
        <Link to={`${name}`}>
            <Wrapper
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                variants={filterVariants}
                initial="hidden"
                animate="visible"
            >
                <ImgWrapper>
                    <CountryImg src={flag} alt={name} />
                </ImgWrapper>

                <InfoWrapper>
                    <CountryName>{name}</CountryName>
                    <Description>
                        Population:
                        <Information>{population}</Information>
                    </Description>

                    <Description>
                        Region:
                        <Information>{region}</Information>
                    </Description>

                    <Description>
                        Capital:
                        <Information>{capital}</Information>
                    </Description>
                </InfoWrapper>
            </Wrapper>
        </Link>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.string,
};

Card.defaultProps = {
    capital: '',
};

export default Card;
