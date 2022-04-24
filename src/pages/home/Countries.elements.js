import styled from 'styled-components';

import screens from '../../styles/breakpoints/screens';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const WrapperFilters = styled.div`
    max-width: 90rem;
    align-items: flex-start;
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 1.5rem;
    padding: 0 1rem;
    gap: 2.5rem;

    width: 100%;

    @media (min-width: ${screens.tablet}) {
        padding: 0 2.5rem;
    }
    @media (min-width: ${screens.laptop}) {
        padding: 0 5rem;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
`;
