import React from 'react';
import { useSelector } from 'react-redux';

import { Card, Header, Search, Select } from '../../components';
import { getAllCountries, getStatusApi } from '../../features/countries/countriesSlice';
import { Wrapper, WrapperFilters, WrapperContent, WrapperCards } from './Countries.elements';

function Home() {
    const countries = useSelector(getAllCountries);
    const statusRequest = useSelector(getStatusApi);

    return (
        <div>
            {statusRequest !== 'loading' && (
                <Wrapper>
                    <Header />

                    <WrapperContent>
                        <WrapperFilters>
                            <Search />
                            <Select />
                        </WrapperFilters>

                        <WrapperCards>
                            {countries.map(({ name, flag, population, region, capital }) => (
                                <Card
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
