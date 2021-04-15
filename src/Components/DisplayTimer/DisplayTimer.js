import React from 'react'
import './DisplayTimer.scss'
const DisplayTimer = ({timer}) =>{
	return(
		<>
			<h1>Timer</h1>
		<div className='displayTimer wrapper-display'>
			<span className='displayTimer__item displayTimer__item--hours'>{(timer.hours >=10) ? timer.hours : '0'+ timer.hours}</span>
			<span className='displayTimer__item displayTimer__item--min'>{(timer.minutes >=10) ? timer.minutes : '0'+ timer.minutes}</span>
			<span className='displayTimer__item displayTimer__item--sec'>{(timer.second >=10) ? timer.second : '0'+ timer.second }</span>
		</div>
		</>
	)
};

export  default DisplayTimer;