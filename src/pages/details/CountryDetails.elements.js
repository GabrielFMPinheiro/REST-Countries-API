import styled from 'styled-components';
import { MdKeyboardBackspace } from 'react-icons/md';
import screens from '../../styles/breakpoints/screens';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3.125rem;
`;

export const WrapperContent = styled.div`
    width: 100%;
    max-width: 90rem;
    padding: 0 1.75rem;

    @media (min-width: ${screens.tablet}) {
        padding: 0 2.5rem;
    }
    @media (min-width: ${screens.laptop}) {
        padding: 0 5rem;
    }
`;

export const BackButton = styled.button`
    box-shadow: 0 0 0.4375rem rgba(0, 0, 0, 0.293139);
    font-size: 0.875rem;
    width: 6.5rem;
    padding: 0.375rem 1.5rem;
    display: flex;
    align-items: center;
    border-radius: 0.125rem;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.background.secundary};
    color: ${({ theme }) => theme['text-colors'].secundary};
    margin: 2.5rem 0 4rem 0;
`;

export const BackArrow = styled(MdKeyboardBackspace)`
    width: 1.125rem;
    height: 1.125rem;
`;

export const WrapperDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: ${screens.tablet}) {
        gap: 3rem;
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: ${screens.desktop}) {
        gap: 9rem;
    }
`;

export const ImgWrapper = styled.div``;

export const CountryImg = styled.img`
    border-radius: 0.3125rem 0.3125rem 0 0;
    width: 100%;
    height: 14.3125rem;
    object-fit: cover;
    border-radius: 0.36rem;

    @media (min-width: ${screens.tablet}) {
        width: 20rem;
        height: 12rem;
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

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme['text-colors'].secundary};
    gap: 2rem;

    @media (min-width: ${screens.tablet}) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const CountryName = styled.h2`
    font-weight: bolder;
    font-size: 1.375rem;
    margin: 2.75rem 0 1rem 0;
    width: 100%;
`;

export const Description = styled.span`
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const Information = styled.span`
    font-weight: 200;
    margin-left: 0.2rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: ${screens.laptop}) {
        &:nth-child(2) {
            margin-right: 4rem;
        }
    }
`;

export const BorderTitle = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    width: 100%;

    @media (min-width: ${screens.laptop}) {
        width: 9rem;
    }
`;

export const BorderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.625rem;
    margin-top: 1rem;
`;

export const Border = styled.button`
    font-size: 0.75rem;
    background-color: ${({ theme }) => theme.background.secundary};
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme['text-colors'].secundary};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0.4375rem rgba(0, 0, 0, 0.293139);
    border-radius: 0.125rem;
`;
