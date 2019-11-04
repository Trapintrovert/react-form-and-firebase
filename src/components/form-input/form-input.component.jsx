import React from 'react';


const FormInput = ({handleChange, ...otherProps}) => (
    <input className='form-control' onChange={handleChange} {...otherProps} />
)

export default FormInput;