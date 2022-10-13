import timeStyles from '../css/timeStyles.module.css';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setGameProcess } from '../store/gameInfoReducer';


export function Clock() {
    const [over, setOver] = useState(false);
    const [minutes, setMinutes] = useState(useAppSelector(state => state.gameReducer.timeDuration));
    const [seconds, setSeconds] = useState(0);
    const dispatch = useAppDispatch();

  
        const time = setInterval(() => {
            clearInterval(time)
            if (minutes === 0 && seconds === 0) {
                setMinutes(0);
                setSeconds(0);
                setOver(true)
            } else {
                setSeconds(seconds - 1);
            }
            if (seconds === 0 && minutes != 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            }

        }, 1000)
    
    return (
        <>
            <div className={timeStyles.time}>


                <div className={timeStyles.minutes} style={{ color: minutes === 0 ? 'red' : '#159f9f' }}>
                    {`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
                {over ? <div className={timeStyles.restart} onClick={() => dispatch(setGameProcess({
                    started: false
                }))}>Restart</div> : ''}
            </div>
        </>
    )
}

export default Clock;