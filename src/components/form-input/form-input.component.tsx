import React from 'react';

import './form-input.styles.scss'

import { IFormInputProps } from '../../data-types/Form-types';

const FormInput: React.FC<IFormInputProps> = ({ handleChange, label, ...otherProps }) => {
    return (

        <div className="group">
            <input className="form-input" onChange={handleChange} />
            {
                label ?
                    (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>)
                    : null
            }
        </div>
    )

}

export default FormInput;