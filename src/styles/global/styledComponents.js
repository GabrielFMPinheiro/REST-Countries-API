/* eslint-disable import/prefer-default-export */
// Libs
import styled from 'styled-components';

// Media Queries
import screens from '../breakpoints/screens';

export const Wrapper = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 3.125rem;
`;

export const Container = styled.div`
    max-width: 90rem;
    padding: 0 1rem;
    width: 100%;

    @media (min-width: ${screens.tablet}) {
        padding: 0 2.5rem;
    }
    @media (min-width: ${screens.laptop}) {
        padding: 0 5rem;
    }
`;

export const Specification = styled.span`
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const Content = styled.span`
    font-weight: 300;
    margin-left: 0.2rem;
`;
