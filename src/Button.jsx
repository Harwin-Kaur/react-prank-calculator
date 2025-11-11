import React from 'react'

export const Button = ({cls, label}) => {
  
    return <div className={'btn ' + cls}>{label}</div>; //reusable coponent
  
};

export default Button
