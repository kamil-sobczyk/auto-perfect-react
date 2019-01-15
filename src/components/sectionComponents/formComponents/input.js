import React from 'react';

const Input = props => (
  <div className='form-group'>
    <label htmlFor={props.name}>{props.title}</label>
    <input
      className='form-control form-control-sm'
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    />
  </div>
);

export default Input;
