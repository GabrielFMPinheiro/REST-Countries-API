import React from 'react';
import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';

import { dark, light } from '../../styles/theme';

import { getActualTheme } from '../../features/theme/themeSlice';

function Layout() {
    const theme = useSelector(getActualTheme);

    return (
        <div>
            <ThemeProvider theme={theme === 'light' ? light : dark}>
                <GlobalStyle />
                <Outlet />
            </ThemeProvider>
        </div>
    );
}

export default Layout;
