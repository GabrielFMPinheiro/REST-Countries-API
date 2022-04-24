import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    width: 16.5rem;
    height: 21.5rem;
    box-shadow: 0 0 0.4375rem 0.125rem rgba(0, 0, 0, 0.0294384);
    border-radius: 0.3125rem;
    background-color: ${({ theme }) => theme.background.secundary};
    color: ${({ theme }) => theme['text-colors'].secundary};
    cursor: pointer;
`;

export const ImgWrapper = styled.div`
    width: 100%;
    height: 10rem;
`;

export const CountryImg = styled.img`
    border-radius: 0.3125rem 0.3125rem 0 0;
    width: 16.5rem;
    height: 10rem;
    object-fit: cover;
`;

export const InfoWrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;

export const CountryName = styled.h2`
    font-weight: bolder;
    font-size: 1.125rem;
    margin-bottom: 1rem;
`;

export const Description = styled.span`
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const Information = styled.span`
    font-weight: 300;
    margin-left: 0.2rem;
`;
