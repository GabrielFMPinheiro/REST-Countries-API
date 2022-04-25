// Libs
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

// Media Queries
import screens from '../../styles/breakpoints/screens';

export const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 12.5rem;
    color: ${({ theme }) => theme['text-colors'].secundary};
    background-color: ${({ theme }) => theme.background.secundary};
    z-index: 999;
`;

export const Filter = styled.div`
    align-items: center;
    border-radius: 0.3125rem;
    box-shadow: 0 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    padding: 0.875rem 1.25rem;
    width: 100%;
`;

export const Name = styled.span`
    font-size: 0.75rem;
    font-weight: 600;
    width: 100%;

    @media (min-width: ${screens.tablet}) {
        font-size: 0.875rem;
    }
`;

export const ArrowDownIcon = styled(MdKeyboardArrowDown)`
    height: 1rem;
    width: 1rem;
`;

export const ArrowUpIcon = styled(MdKeyboardArrowUp)`
    height: 1rem;
    width: 1rem;
`;

export const CloseIcon = styled(IoClose)`
    color: #ab0003;
    height: 1.25rem;
    margin-right: 0.2rem;
    width: 1.25rem;
`;

export const Container = styled.div`
    background-color: ${({ theme }) => theme.background.secundary};
    border-radius: 0.3125rem;
    box-shadow: 0 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439);
    color: ${({ theme }) => theme['text-colors'].secundary};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
    position: absolute;
    top: 3.25rem;
    width: 100%;
`;

export const Option = styled(motion.p)`
    color: ${({ theme }) => theme['text-colors'].secundary};
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 600;
    padding-left: 1.5rem;
    width: 100%;
`;
