// Libs
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Navigate, BackArrowIcon } from './styles';

// Framer motion
import fade from '../../styles/motion/variants/fade';

function Button() {
    const navigate = useNavigate();

    return (
        <Navigate
            onClick={() => navigate('/')}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
            variants={fade.mode.leftRight}
            initial="hidden"
            animate="visible"
        >
            <BackArrowIcon />
            Back
        </Navigate>
    );
}

export default Button;
