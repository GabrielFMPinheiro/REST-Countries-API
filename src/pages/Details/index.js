// Libs
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// Redux aux functions
import { getAllCountries } from '../../redux/features/countries/countriesSlice';

// Components
import {
    Image,
    InformationContainer,
    DetailsContainer,
    Name,
    DataContainer,
    BorderContainer,
    Title,
    Border,
} from './styles';
import Button from '../../components/Button';
import { Wrapper, Container, Specification, Content } from '../../styles/global/styledComponents';

// Framer motion
import fade from '../../styles/motion/variants/fade';

function CountryDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const countries = useSelector(getAllCountries);
    const [countrySelected, setCountrySelected] = useState({});

    useEffect(() => {
        setCountrySelected(countries.find((country) => country.name === id));
    }, [id]);

    const {
        name,
        flags,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
        alpha3Code,
    } = countrySelected;

    return (
        <Wrapper>
            {Object.keys(countrySelected).length && (
                <Container>
                    <Button />

                    <DetailsContainer
                        variants={fade.mode.downUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <Image src={flags.png} alt={alpha3Code} />

                        <InformationContainer>
                            <Name>{name}</Name>

                            <DataContainer>
                                <Specification>
                                    Native Name:
                                    <Content>{nativeName}</Content>
                                </Specification>

                                <Specification>
                                    Population:
                                    <Content>{Number(population).toLocaleString()}</Content>
                                </Specification>

                                <Specification>
                                    Region:
                                    <Content>{region}</Content>
                                </Specification>

                                <Specification>
                                    Sub Region:
                                    <Content>{subregion}</Content>
                                </Specification>

                                <Specification>
                                    Capital:
                                    <Content>{capital}</Content>
                                </Specification>
                            </DataContainer>

                            <DataContainer>
                                <Specification>
                                    Top Level Domain:
                                    <Content>{topLevelDomain.join(',')}</Content>
                                </Specification>

                                {currencies && (
                                    <Specification>
                                        Currencies:
                                        <Content>
                                            {[currencies]
                                                .map((currency) => currency.name)
                                                .join(',')}
                                        </Content>
                                    </Specification>
                                )}

                                <Specification>
                                    Languages:
                                    <Content>
                                        {languages.map((language) => language.name).join(', ')}
                                    </Content>
                                </Specification>
                            </DataContainer>

                            {borders && (
                                <BorderContainer>
                                    <Title>Border Countries:</Title>
                                    {borders.map((border) => {
                                        const actualBorder = countries.find(
                                            (country) => country.alpha3Code === border,
                                        );

                                        return (
                                            <Border
                                                whileHover={{ scale: 1.1, originX: 0 }}
                                                whileTap={{ scale: 0.9 }}
                                                key={border}
                                                onClick={() => navigate(`/${actualBorder.name}`)}
                                            >
                                                {actualBorder.name}
                                            </Border>
                                        );
                                    })}
                                </BorderContainer>
                            )}
                        </InformationContainer>
                    </DetailsContainer>
                </Container>
            )}
        </Wrapper>
    );
}

export default CountryDetails;
