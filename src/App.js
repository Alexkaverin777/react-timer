import React, {useState} from 'react'
import {Observable, interval} from 'rxjs'
import Button from "./Components/Button/Button";
// import {from} from "rxjs";
import DisplayTimer from './Components/DisplayTimer/DisplayTimer';

function App() {
	const data = {
		hours: 0,
		minutes: 0,
		second: 0
	};
	const [timer, setTimer] = useState(data);
	const [interv, setInterv] = useState(null);
	const [isStatus, setIsStatus] = useState(false);

	let updatedSecond = timer.second,
		updatedMinutes = timer.minutes,
		updatedHours = timer.hours;

	const hendlerClickStart = (e) => {
	    setIsStatus(true);
		UpdateTimer();
		setInterv(setInterval(UpdateTimer, 1000));
	};
	const headlerClickStop = () => {
        setIsStatus(false);
		clearInterval(interv);
	};
	const headlerClickReset = () => {
        setIsStatus(false);
		clearInterval(interv);
		setTimer(data);
	};
	const UpdateTimer = () => {
		if (updatedMinutes === 60) {
			updatedHours++;
			updatedMinutes = 0;
		}
		if (updatedSecond === 60) {
			updatedMinutes++;
			updatedSecond = 0;
		}
		updatedSecond++;
		return setTimer({second: updatedSecond, minutes: updatedMinutes, hours: updatedHours});
	};
	return (
		<div className="App">
			<header className="App-header">
				<DisplayTimer
					timer={timer}
				/>
				<div className="wrapper-btn">
					{(isStatus === false) ?
						<Button
							title={'Start'}
							handleClick={hendlerClickStart}
						/> : <button disabled className='btn'>Start</button>
					}
					<Button
						title={'Stop'}
						handleClick={headlerClickStop}
					/>
					<Button
						title={'Reset'}
						handleClick={headlerClickReset}
					/>
				</div>

			</header>
		</div>
	);
}

export default App;
/*
const stream$ = new Observable( observer => {
    observer.next('firs value');

    // setTimeout(()=> observer.next('after 1000 ms'), 1000);

    // setTimeout(()=> observer.error('Error'), 2000);

    // setTimeout(()=> observer.next('after 3000 ms'), 3000);

});
// stream$.subscribe(
//     (val)=> console.log('value: ', val),
//     (err) => console.log(err),
//     ()=> console.log('Complete') //
// );
// stream$.subscribe({
//     next(val){
//         console.log(val)
//     },
//     error(err){
//         console.log(err)
//     },
//     complete(){
//         console.log("Complete")
//     }
// })
    */