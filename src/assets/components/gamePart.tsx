import {useState } from "react";
import gameStyles from '../css/gamePart.module.css';
import generateArray from "../generateArray";
import Clock from "./clock";

export default function GamePart() {
       
   
    const [arrayPointer, setArrayPointer] = useState(0)
    const [arrayToPlayWith, setArrayToPlayWith] = useState(generateArray());
    
    
    

    return (
        <>  
            {arrayPointer === arrayToPlayWith.length ? <Clock />:<div className={gameStyles.words} onClick={() => setArrayPointer(arrayPointer + 1)}>
                {arrayToPlayWith[arrayPointer]}
            </div>}
        </>
    )
}
