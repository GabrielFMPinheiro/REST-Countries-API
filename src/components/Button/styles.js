// Libs
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Icons
import { MdKeyboardBackspace } from 'react-icons/md';

export const Navigate = styled(motion.button)`
    align-items: center;
    background-color: ${({ theme }) => theme.background.secundary};
    border-radius: 0.125rem;
    box-shadow: 0 0 0.4375rem rgba(0, 0, 0, 0.293139);
    color: ${({ theme }) => theme['text-colors'].secundary};
    display: flex;
    font-size: 0.875rem;
    gap: 0.5rem;
    margin: 2.5rem 0 4rem 0;
    padding: 0.375rem 1.5rem;
    width: 6.5rem;
`;

export const BackArrowIcon = styled(MdKeyboardBackspace)`
    height: 1.125rem;
    width: 1.125rem;
`;
