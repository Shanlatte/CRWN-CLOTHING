import React from 'react';

import './custom-button.styles.scss';

import { ICustomButtonProps } from '../../data-types/custom-button-types';

const CustomButton: React.FC<ICustomButtonProps> = ({ children, onClick, isGoogleSignIn, ...otherProps }) => {

    return (
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default CustomButton;