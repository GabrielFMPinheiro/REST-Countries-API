// Libs
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Media Queries
import screens from '../../styles/breakpoints/screens';

export const DetailsContainer = styled(motion.section)`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media (min-width: ${screens.tablet}) {
        flex-direction: row;
        gap: 3rem;
        justify-content: space-between;
    }

    @media (min-width: ${screens.desktop}) {
        gap: 9rem;
    }
`;

export const Image = styled.img`
    border-radius: 0.36rem;
    height: 14.3125rem;
    width: 100%;

    @media (min-width: ${screens.tablet}) {
        width: 50%;
        height: 18rem;
    }

    @media (min-width: ${screens.laptop}) {
        width: 30rem;
        height: 20rem;
    }

    @media (min-width: ${screens.desktop}) {
        width: 35rem;
        height: 25.0625rem;
    }
`;

export const InformationContainer = styled.div`
    color: ${({ theme }) => theme['text-colors'].secundary};
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: ${screens.tablet}) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const Name = styled.h2`
    font-size: 1.375rem;
    font-weight: bolder;
    margin: 2.75rem 0 1rem 0;
    width: 100%;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${screens.laptop}) {
        &:nth-child(2) {
            margin-right: 5rem;
        }
    }
`;

export const BorderContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    margin-top: 1rem;
`;

export const Title = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    width: 100%;

    @media (min-width: ${screens.laptop}) {
        width: 9rem;
    }
`;

export const Border = styled(motion.button)`
    align-items: center;
    background-color: ${({ theme }) => theme.background.secundary};
    border-radius: 0.125rem;
    box-shadow: 0 0 0.4375rem rgba(0, 0, 0, 0.293139);
    color: ${({ theme }) => theme['text-colors'].secundary};
    display: flex;
    font-size: 0.75rem;
    justify-content: center;
    padding: 0.5rem 1rem;
`;
