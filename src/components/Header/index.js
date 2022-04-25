// Libs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux aux functions
import { changeTheme, getActualTheme } from '../../redux/features/theme/themeSlice';

// Components
import { Wrapper, Title, Button, MoonIcon, Content, SunIcon, Container } from './styles';

// Framer motion
import fade from '../../styles/motion/variants/fade';

function Header() {
    const theme = useSelector(getActualTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Container>
                <Title variants={fade.mode.leftRight} initial="hidden" animate="visible">
                    Where in the world?
                </Title>

                <Button
                    onClick={() => dispatch(changeTheme())}
                    variants={fade.mode.rightLeft}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    initial="hidden"
                    animate="visible"
                >
                    {theme === 'light' ? (
                        <>
                            <MoonIcon />
                            <Content>Dark Mode</Content>
                        </>
                    ) : (
                        <>
                            <SunIcon />
                            <Content>Light Mode</Content>
                        </>
                    )}
                </Button>
            </Container>
        </Wrapper>
    );
}

export default Header;
