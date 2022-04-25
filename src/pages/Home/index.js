// Libs
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import { Card, Search, Select } from '../../components';
import { FiltersContainer, CardsContainer } from './styles';
import { Wrapper, Container } from '../../styles/global/styledComponents';

// Redux aux functions
import {
    getAllCountries,
    getCountryName,
    getRegion,
} from '../../redux/features/countries/countriesSlice';

function Home() {
    const allCountries = useSelector(getAllCountries);
    const regionToFilter = useSelector(getRegion);
    const countryToFilter = useSelector(getCountryName);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        let countriesFiltered = [...allCountries];

        if (regionToFilter) {
            countriesFiltered = countriesFiltered.filter(({ region }) => region === regionToFilter);
        }

        if (countryToFilter) {
            /* prettier-ignore */
            countriesFiltered = countriesFiltered.filter(({ name }) => (
                name.toLowerCase().includes(countryToFilter.toLowerCase())
            ));
        }

        setCountries(countriesFiltered);
    }, [allCountries, regionToFilter, countryToFilter]);

    return (
        <div>
            <Wrapper>
                <Container>
                    <FiltersContainer>
                        <Search />
                        <Select />
                    </FiltersContainer>

                    <CardsContainer>
                        {countries.map(({ name, flags, population, region, capital }) => (
                            <Card
                                key={name}
                                name={name}
                                flag={flags.png}
                                population={Number(population).toLocaleString()}
                                region={region}
                                capital={capital}
                            />
                        ))}
                    </CardsContainer>
                </Container>
            </Wrapper>
        </div>
    );
}

export default Home;
