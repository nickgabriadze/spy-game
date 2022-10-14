import cardStyles from '../css/card.module.css';
import { useState } from 'react';
import { useAppDispatch } from '../store/store';
import { setGameProcess, setPlayerInfo, setTimeDuration } from '../store/gameInfoReducer';

export default function Card() {
    const dispatch = useAppDispatch();
    const [time, setTime] = useState(2);
    const [confirm, setConfirm] = useState(false);
    const [players, setPlayers] = useState(3);
    const [spies, setSpies] = useState(1);
   
    return (
        <>
            <div className={cardStyles.card}>
               {<div className={cardStyles.welcome}>

                    <h3 style={{wordBreak: 'break-word'}}>how many players do we have here?</h3>
                    {confirm ?
                        <div>
                            <h1>Time</h1>
                            <input type={'number'} min={2} max={10}

                                onChange={(e) => setTime(Number(e.target.value))}
                                className={cardStyles.players}></input>
                            <div className={cardStyles.playButton} onClick={() => setConfirm(false)}>Go Back</div>
                        </div> : <div style={{ width: 'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                <div>
                                    <p>Players</p>
                                    <input type={'number'} min={3} max={99}
                                        onChange={(e) => setPlayers(Number(e.target.value))}
                                        className={cardStyles.players}></input>
                                </div>
                                <div>
                                    <p>Spies</p>
                                    <input type={'number'} min={1} max={99}
                                        onChange={(e) => setSpies(Number(e.target.value))}
                                        className={cardStyles.players}></input>
                                </div>
                            </div>
                            <div className={cardStyles.playButton} onClick={() => {
                                setConfirm(true);
                                dispatch(setPlayerInfo({
                                    numberOfPlayers: players > 2 ? players : 3,
                                    numberOfSpies: spies > 1 ? spies : 1
                                }))
                            }}>Confirm</div>
                        </div>}
                    {confirm ? <p className={cardStyles.smallNote2}>
                        Small note: max amount of time can't exceed 10 or go below 2
                    </p> : <p className={cardStyles.smallNote1} >
                        Small note: max number of players can't exceed 99 or go below 3
                    </p>}
                    {confirm ? <div className={cardStyles.playButton} onClick={() => {
                        dispatch(setTimeDuration({
                            timeDuration: time > 1 ? time : 2
                        }));
                       
                        dispatch(setGameProcess({
                            started: true
                        }))

                    }}>
                        Start Game
                    </div> : ''}
                </div>
                }

            </div>

        </>
    )
}