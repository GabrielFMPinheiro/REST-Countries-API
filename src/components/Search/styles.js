// Libs
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Icons
import { IoMdSearch } from 'react-icons/io';

// Media Queries
import screens from '../../styles/breakpoints/screens';

export const Wrapper = styled(motion.div)`
    align-items: center;
    background-color: ${({ theme }) => theme.background.secundary};
    border-radius: 0.3125rem;
    box-shadow: 0 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    padding: 0.875rem 0 0.875rem 2rem;
    width: 91%;

    @media (min-width: ${screens.mobile}) {
        width: 21.4375rem;
    }

    @media (min-width: ${screens.tablet}) {
        width: 30rem;
    }
`;

export const Input = styled.input`
    font-size: 0.75rem;
    font-weight: 600;
    width: 100%;

    &::placeholder {
        font-weight: 400;
    }

    @media (min-width: ${screens.tablet}) {
        font-size: 0.875rem;
    }
`;

export const SearchIcon = styled(IoMdSearch)`
    color: ${({ theme }) => theme['text-colors'].primary};
    height: 1.25rem;
    margin-right: 1.625rem;
    width: 1.25rem;
`;
