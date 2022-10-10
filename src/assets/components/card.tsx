import cardStyles from '../css/card.module.css';
import { useState } from 'react';
export default function Card() {

    const [time, setTime] = useState(2);
    const [confirm, setConfirm] = useState(false);
    const [players, setPlayers] = useState(0);
    const [spies, setSpies] = useState(1);
    return (
        <>
            <div className={cardStyles.card}>
                <div className={cardStyles.welcome}>

                    <h1>How many Gentlemen/Gentlewomen do we got there?</h1>
                    {confirm ?
                        <div>
                            <h1>Time</h1>
                            <input type={'number'} min={2} max={10}

                                onChange={(e) => setTime(Number(e.target.value))}
                                className={cardStyles.players}></input>

                        </div> : <div style={{ width: 'fit-content', display:'flex', flexDirection:'column', alignItems:'center'}} >
                            <div style={{ display: 'flex', flexDirection: 'row', gap:10 }}>
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
                            <div className={cardStyles.playButton} onClick={() => setConfirm(true)}>Confirm</div>
                        </div>}
                    {confirm ? <p style={{ fontSize: '15px' }} className={cardStyles.smallNote}>
                        Small note: max number of time can't exceed 10 or go below 2
                    </p> : <p className={cardStyles.smallNote}>
                        Small note: max number of players can't exceed 99 or go below 3
                    </p>}
                    <div className={cardStyles.playButton}>
                        Start Game
                    </div>
                </div>


            </div>

        </>
    )
}