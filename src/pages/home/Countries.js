import React from 'react';

import { Header, Search, Select } from '../../components';
import { Wrapper, WrapperFilters } from './Countries.elements';

function Home() {
    return (
        <Wrapper>
            <Header />

            <WrapperFilters>
                <Search />
                <Select />
            </WrapperFilters>
        </Wrapper>
    );
}

export default Home;
