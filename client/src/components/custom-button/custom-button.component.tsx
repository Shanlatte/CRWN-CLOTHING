import React from 'react';

import './custom-button.styles.scss';

import { ICustomButtonProps } from '../../data-types/custom-button-types';

const CustomButton: React.FC<ICustomButtonProps> = ({ children, onClick, isGoogleSignIn, inverted, ...otherProps }) => {

    return (
        <button
            className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default CustomButton;