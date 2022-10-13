import timeStyles from '../css/timeStyles.module.css';
import { useState } from "react";
import { useAppSelector } from "../hooks";
import { setGameProcess } from '../store/gameInfoReducer';

// const reducer = (state:{minutes: number, seconds: number}, action: { type: any; }) => {
//     switch(action.type){
//         case action.type == "MINUTE":
//             return({
//                 minutes: state.seconds == 0 ? state.minutes - 1: state.minutes,
//                 seconds: state.seconds - 1
//             })

//     }   
// }

export function Clock() {
    const [over, setOver] = useState(false);
    const [minutes, setMinutes] = useState(useAppSelector(state => state.gameReducer.timeDuration));
    const [seconds, setSeconds] = useState(0);
    ///Audio file taken from FreeCodeCamp's Codepen Project
    const audioFile = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav")
    audioFile.currentTime = 2
    audioFile.volume = 0.1
    const time = setInterval(() => {
        clearInterval(time)
        if(minutes === 0 && seconds == 0){
            setMinutes(0);
            setSeconds(0);
            audioFile.play();
            clearInterval(time);
            setOver(true)
        }else{
            setSeconds(seconds-1);
        }
        if(seconds === 0 && minutes != 0){
            setMinutes(minutes-1);
            setSeconds(59);
        }
        
    }, 1000)

    return (
        <>
            <div className={timeStyles.time}>


                <div className={timeStyles.minutes} style={{color: minutes === 0? 'red':'#159f9f'}}>
                    {`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
                {over ? <div className={timeStyles.restart} onClick={()=>setGameProcess({
                    started: false
                })}>Restart</div> : ''}
            </div>
        </>
    )
}

export default Clock;