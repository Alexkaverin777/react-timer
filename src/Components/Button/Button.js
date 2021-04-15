import React from 'react';
import './Button.scss'

const Button = ({title, handleClick, btnStart}) => {

	return (
		<button className='btn' onClick={handleClick} ref={btnStart}>{title}</button>
	)
};

export default Button