// Libs
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Icons
import { FiMoon } from 'react-icons/fi';
import { BsFillSunFill } from 'react-icons/bs';

// Media Queries
import screens from '../../styles/breakpoints/screens';

export const Wrapper = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.background.secundary};
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.0562443);
    color: ${({ theme }) => theme['text-colors'].secundary};
    display: flex;
    height: 5rem;
    justify-content: center;
    padding: 0 1rem;

    @media (min-width: ${screens.tablet}) {
        padding: 0 2.5rem;
    }

    @media (min-width: ${screens.laptop}) {
        padding: 0 5rem;
    }
`;

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 90rem;
    width: 100%;
`;

export const Title = styled(motion.h2)`
    font-size: 0.875rem;
    font-weight: bold;

    @media (min-width: ${screens.tablet}) {
        font-size: 1.5rem;
    }
`;

export const Button = styled(motion.button)`
    align-items: center;
    display: flex;
    gap: 0.625rem;
    justify-content: space-between;
`;

export const MoonIcon = styled(FiMoon)`
    height: 1rem;
    width: 1rem;
`;

export const SunIcon = styled(BsFillSunFill)`
    color: #ffffff;
    height: 1rem;
    width: 1rem;
`;

export const Content = styled.span`
    font-size: 0.75rem;
    font-weight: 600;

    @media (min-width: ${screens.tablet}) {
        font-size: 1rem;
    }
`;
