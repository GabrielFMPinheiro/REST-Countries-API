// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Link } from 'react-router-dom';
import { Wrapper, Image, DataWrapper, Name } from './styles';
import { Specification, Content } from '../../styles/global/styledComponents';

// Framer motion
import fade from '../../styles/motion/variants/fade';

function Card(props) {
    const { name, flag, population, region, capital } = props;

    return (
        <Link to={`${name.replace(/ /g, '%20')}`}>
            <Wrapper
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                variants={fade.mode.downUp}
                initial="hidden"
                animate="visible"
            >
                <Image src={flag.replace(/ /g, '%20')} alt={name} />

                <DataWrapper>
                    <Name>{name}</Name>

                    <Specification>
                        Population:
                        <Content>{population}</Content>
                    </Specification>

                    <Specification>
                        Region:
                        <Content>{region}</Content>
                    </Specification>

                    <Specification>
                        Capital:
                        <Content>{capital}</Content>
                    </Specification>
                </DataWrapper>
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
