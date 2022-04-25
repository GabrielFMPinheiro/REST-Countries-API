// Libs
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    background-color: ${({ theme }) => theme.background.secundary};
    border-radius: 0.3125rem;
    box-shadow: 0 0 0.4375rem 0.125rem rgba(0, 0, 0, 0.0294384);
    color: ${({ theme }) => theme['text-colors'].secundary};
    cursor: pointer;
    height: 21.5rem;
    width: 16.5rem;
`;

export const Image = styled.img`
    border-radius: 0.3125rem 0.3125rem 0 0;
    height: 10rem;
    width: 16.5rem;
`;

export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
`;

export const Name = styled.h2`
    font-size: 1.125rem;
    font-weight: bolder;
    margin-bottom: 1rem;
`;
