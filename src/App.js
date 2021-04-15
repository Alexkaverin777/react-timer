import React, {useState, useRef} from 'react'
// import  {Observable, timer, interval} from 'rxjs'
import Button from "./Components/Button/Button";
// import {from} from "rxjs";
import DisplayTimer from './Components/DisplayTimer/DisplayTimer';

function App() {
    const [timer, setTimer] = useState({
        hours: 0,
        minutes: 0,
        second: 0
    });
    const startBtn = useRef();
    const [interv, setInterv] = useState();

    let updatedSecond = timer.second,
        updatedMinutes = timer.minutes,
        updatedHours = timer.hours;

    const hendlerClick = (e) => {
        e.target.disabled = true;
        UpdateTimer();
        setInterv(setInterval(UpdateTimer, 1000));
    };
    const headlerClickStop = () => {
        startBtn.current.disabled = false;
        clearInterval(interv);
    };
    const headlerClickReset = () => {
        startBtn.current.disabled = false;
        clearInterval(interv);
        setTimer({
            hours: 0,
            minutes: 0,
            second: 0});
    };

    const UpdateTimer = () => {
        if(updatedMinutes === 60){
            updatedHours++;
            updatedMinutes = 0;
        }
        if(updatedSecond === 60){
            updatedMinutes++;
            updatedSecond = 0;
        }
        updatedSecond++;
        return setTimer({ second:updatedSecond, minutes:updatedMinutes, hours:updatedHours});
    };
  return (
    <div className="App">
      <header className="App-header">
        <DisplayTimer
            timer={timer}
        />
        <div className="wrapper-btn">
            <Button
                btnStart={startBtn}
                title={'Start'}
                handleClick={ hendlerClick}
            />
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