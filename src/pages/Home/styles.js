// Libs
import styled from 'styled-components';

// Media Queries
import screens from '../../styles/breakpoints/screens';

export const FiltersContainer = styled.section`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 1.5rem;
    width: 100%;

    @media (min-width: ${screens.laptop}) {
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const CardsContainer = styled.section`
    display: grid;
    gap: 4.5rem;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-top: 2rem;

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
