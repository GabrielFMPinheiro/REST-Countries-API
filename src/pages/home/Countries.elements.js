import styled from 'styled-components';

import screens from '../../styles/breakpoints/screens';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 3.125rem;
`;

export const WrapperContent = styled.div`
    width: 100%;
    max-width: 90rem;
    padding: 0 1rem;

    @media (min-width: ${screens.tablet}) {
        padding: 0 2.5rem;
    }
    @media (min-width: ${screens.laptop}) {
        padding: 0 5rem;
    }
`;

export const WrapperFilters = styled.div`
    align-items: flex-start;
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 2.5rem;

    @media (min-width: ${screens.laptop}) {
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const WrapperCards = styled.div`
    margin-top: 2rem;
    display: grid;
    gap: 4.5rem;
    grid-template-columns: 1fr;
    justify-items: center;

    @media (min-width: ${screens.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${screens.laptop}) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: ${screens.desktop}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;
