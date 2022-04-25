// Libs
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';

// Themes styles
import { dark, light } from '../../styles/theme';

// Redux aux functions
import { getActualTheme } from '../../redux/features/theme/themeSlice';

// Components
import { Header } from '../../components';

function Layout() {
    const theme = useSelector(getActualTheme);

    return (
        <div>
            <ThemeProvider theme={theme === 'light' ? light : dark}>
                <GlobalStyle />
                <Header />
                <Outlet />
            </ThemeProvider>
        </div>
    );
}

export default Layout;
