/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

import screens from '../../styles/breakpoints/screens';

export const Wrapper = styled.div`
    width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const WrapperSelect = styled(motion.div)`
    padding: 0.875rem 1.25rem;
    background-color: ${({ theme }) => theme.background.secundary};
    border-radius: 0.3125rem;
    width: 100%;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export const SelectContainer = styled.div`
    caret-color: transparent;
    font-size: 0.75rem;
    color: ${({ theme }) => theme['text-colors'].secundary};
    width: 100%;
    font-weight: 600;

    &::placeholder {
        color: ${({ theme }) => theme['text-colors'].secundary};
        font-weight: 600;
    }

    @media (min-width: ${screens.tablet}) {
        font-size: 0.875rem;
    }
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
    color: ${({ theme }) => theme['text-colors'].secundary};
    width: 1rem;
    height: 1rem;
`;

export const ArrowUp = styled(MdKeyboardArrowUp)`
    color: ${({ theme }) => theme['text-colors'].secundary};
    width: 1rem;
    height: 1rem;
`;

export const Close = styled(IoClose)`
    color: #ab0003;
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.2rem;
    z-index: 1;
`;

export const WrapperOptions = styled.div`
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.background.secundary};
    width: 100%;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 0.3125rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Option = styled(motion.p)`
    color: ${({ theme }) => theme['text-colors'].secundary};
    font-weight: 600;
    font-size: 0.75rem;
    padding-left: 1.5rem;
    width: 100%;
    cursor: pointer;
`;