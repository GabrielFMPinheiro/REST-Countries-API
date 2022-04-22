import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../features/theme/themeSlice';

function Home() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(changeTheme())} type="button">
                Entrar
            </button>
        </div>
    );
}

export default Home;
