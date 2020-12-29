import React from 'react';

import './form-input.styles.scss'

import { IFormInputProps } from '../../data-types/Form-types';

const FormInput: React.FC<IFormInputProps> = ({ handleChange, label, required, type, name, value, ...otherProps }) => {
    return (

        <div className="group">
            <input className="form-input" value={value} name={name} type={type} required={required} onChange={handleChange} />
            {
                label ?
                    (<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>)
                    : null
            }
        </div>
    )

}

export default FormInput;