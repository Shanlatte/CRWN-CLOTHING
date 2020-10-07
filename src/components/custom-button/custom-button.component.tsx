import React from 'react';

import './custom-button.styles.scss';

import { ICustomButtonProps } from '../../data-types/custom-button-types';

const CustomButton: React.FC<ICustomButtonProps> = ({ children, ...otherProps }) => {
    return (
        <button className="custom-button">
            {children}
        </button>
    )
}

export default CustomButton;