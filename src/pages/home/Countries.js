import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, Search, Select } from '../../components';
import {
    getAllCountries,
    getCountryName,
    getRegion,
    getStatusApi,
} from '../../redux/features/countries/countriesSlice';
import { Wrapper, WrapperFilters, WrapperContent, WrapperCards } from './Countries.elements';

function Home() {
    const allCountries = useSelector(getAllCountries);
    const statusRequest = useSelector(getStatusApi);
    const regionFilter = useSelector(getRegion);
    const countryName = useSelector(getCountryName);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        let countriesToRender = [...allCountries];

        if (regionFilter) {
            countriesToRender = countriesToRender.filter(
                (country) => country.region === regionFilter,
            );
        }

        if (countryName) {
            countriesToRender = countriesToRender.filter(({ name }) => name.includes(countryName));
        }

        setCountries(countriesToRender);
    }, [allCountries, regionFilter, countryName]);

    return (
        <div>
            {statusRequest !== 'loading' && (
                <Wrapper>
                    <WrapperContent>
                        <WrapperFilters>
                            <Search />
                            <Select />
                        </WrapperFilters>

                        <WrapperCards>
                            {countries.map(({ name, flag, population, region, capital }) => (
                                <Card
                                    key={name}
                                    name={name}
                                    flag={flag}
                                    population={Number(population).toLocaleString()}
                                    region={region}
                                    capital={capital}
                                />
                            ))}
                        </WrapperCards>
                    </WrapperContent>
                </Wrapper>
            )}
        </div>
    );
}

export default Home;
