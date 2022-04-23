import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeTheme, getActualTheme } from '../../features/theme/themeSlice';

import {
    WrapperHeader,
    Title,
    ButtonTheme,
    Moon,
    ThemeText,
    Sun,
    WrapperContent,
} from './Header.elements';

const titleVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: 0.1,
        },
    },
};

const buttonVariants = {
    hidden: {
        opacity: 0,
        x: '200vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: 0.1,
        },
    },
};

function Header() {
    const theme = useSelector(getActualTheme);
    const dispatch = useDispatch();

    return (
        <WrapperHeader>
            <WrapperContent>
                <Title
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Where in the world?
                </Title>

                <ButtonTheme
                    onClick={() => dispatch(changeTheme())}
                    variants={buttonVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    initial="hidden"
                    animate="visible"
                >
                    {theme === 'light' ? (
                        <>
                            <Moon />
                            <ThemeText>Dark Mode</ThemeText>
                        </>
                    ) : (
                        <>
                            <Sun />
                            <ThemeText>Light Mode</ThemeText>
                        </>
                    )}
                </ButtonTheme>
            </WrapperContent>
        </WrapperHeader>
    );
}

export default Header;
