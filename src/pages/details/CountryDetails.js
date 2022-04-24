import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllCountries } from '../../redux/features/countries/countriesSlice';

import {
    Wrapper,
    WrapperContent,
    BackButton,
    BackArrow,
    ImgWrapper,
    CountryImg,
    InfoWrapper,
    WrapperDetails,
    CountryName,
    Container,
    Description,
    Information,
    BorderTitle,
    BorderWrapper,
    Border,
} from './CountryDetails.elements';

function CountryDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const countries = useSelector(getAllCountries);
    const [countrySelected, setCountrySelected] = useState({});

    useEffect(() => {
        setCountrySelected(countries.find((country) => country.name === id));
    }, [id]);

    const {
        name,
        flag,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
    } = countrySelected;

    return (
        <Wrapper>
            {Object.keys(countrySelected).length && (
                <WrapperContent>
                    <BackButton onClick={() => navigate('/')}>
                        <BackArrow />
                        Back
                    </BackButton>

                    <WrapperDetails>
                        <ImgWrapper>
                            <CountryImg src={flag} alt={name} />
                        </ImgWrapper>

                        <InfoWrapper>
                            <CountryName>{name}</CountryName>

                            <Container>
                                <Description>
                                    Native Name:
                                    <Information>{nativeName}</Information>
                                </Description>

                                <Description>
                                    Population:
                                    <Information>{Number(population).toLocaleString()}</Information>
                                </Description>

                                <Description>
                                    Region:
                                    <Information>{region}</Information>
                                </Description>

                                <Description>
                                    Sub Region:
                                    <Information>{subregion}</Information>
                                </Description>

                                <Description>
                                    Capital:
                                    <Information>{capital}</Information>
                                </Description>
                            </Container>

                            <Container>
                                <Description>
                                    Top Level Domain:
                                    <Information>{topLevelDomain.join(',')}</Information>
                                </Description>

                                <Description>
                                    Currencies:
                                    <Information>
                                        {currencies.map((currency) => currency.name).join(',')}
                                    </Information>
                                </Description>

                                <Description>
                                    Languages:
                                    <Information>
                                        {languages.map((language) => language.name).join(', ')}
                                    </Information>
                                </Description>
                            </Container>

                            <Container>
                                <BorderWrapper>
                                    <BorderTitle>Border Countries:</BorderTitle>
                                    {borders.map((border) => {
                                        const countryName = countries.find(
                                            ({ alpha3Code }) => alpha3Code === border,
                                        );

                                        return (
                                            <Border
                                                key={border}
                                                onClick={() => navigate(`/${countryName.name}`)}
                                            >
                                                {countryName.name}
                                            </Border>
                                        );
                                    })}
                                </BorderWrapper>
                            </Container>
                        </InfoWrapper>
                    </WrapperDetails>
                </WrapperContent>
            )}
        </Wrapper>
    );
}

export default CountryDetails;
