import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

import { SpinnerProps } from '../../data-types/spinner-types';

const WithSpinner = (WrappedComponent: any): React.FC<SpinnerProps> => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
            <WrappedComponent {...otherProps} />
        )
}

export default WithSpinner;