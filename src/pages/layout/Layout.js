import React from 'react';
import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';

import { dark, light } from '../../styles/theme';

import { getActualTheme } from '../../features/theme/themeSlice';
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
