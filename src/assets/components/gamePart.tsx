import {useEffect, useState } from "react";
import gameStyles from '../css/gamePart.module.css';
import generateArray from "../generateArray";
import Clock from "./clock";
import {motion} from 'framer-motion';
import selectColor from "../selectColor";

export default function GamePart() {
       
   
    const [arrayPointer, setArrayPointer] = useState(0)
    const [arrayToPlayWith, setArrayToPlayWith] = useState(generateArray());
  
    let opacity = {opacity: [0,0.5,0.8,1]}

    let boxShadow = {boxShadow: `-1px 0 18px 18px ${selectColor(arrayPointer)}`}
    
    

    return (
        <>  
            {arrayPointer === arrayToPlayWith.length ? <Clock />:
            <motion.div className={gameStyles.words} 
            style={boxShadow}
            onClick={() => setArrayPointer(arrayPointer + 1)}>
                <motion.p whileTap={{scale: 0.8}} animate={opacity}>{arrayToPlayWith[arrayPointer]}</motion.p>
            </motion.div>}
        </>
    )
}
