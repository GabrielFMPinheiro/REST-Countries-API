import styled from 'styled-components';
import { motion } from 'framer-motion';

import { IoMdSearch } from 'react-icons/io';

import screens from '../../styles/breakpoints/screens';

export const Wrapper = styled(motion.div)`
    padding: 0.875rem 0 0.875rem 2rem;
    background-color: ${({ theme }) => theme.background.secundary};
    border-radius: 0.3125rem;
    width: 91%;
    box-shadow: 0 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439);
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    cursor: pointer;

    @media (min-width: ${screens.mobile}) {
        width: 21.4375rem;
    }

    @media (min-width: ${screens.tablet}) {
        width: 30rem;
    }
`;

export const Input = styled.input`
    font-size: 0.75rem;
    color: ${({ theme }) => theme['text-colors'].primary};
    width: 100%;
    font-weight: 600;

    &::placeholder {
        color: ${({ theme }) => theme['text-colors'].primary};
        font-weight: 400;
    }

    @media (min-width: ${screens.tablet}) {
        font-size: 0.875rem;
    }
`;

export const SearchIcon = styled(IoMdSearch)`
    color: ${({ theme }) => theme['text-colors'].primary};
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1.625rem;
`;
