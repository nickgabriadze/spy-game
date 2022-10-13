import { useAppSelector } from "./hooks"
import words from "./words";

function generateArray(){
    const data = useAppSelector(state => state.gameReducer);
    const randomWord = words[Math.floor(Math.random() * (words.length))];
    let gameArray:string[] = [];
    
    for(let i = 0; i < data.numberOfPlayers; i++){
        gameArray.push(randomWord);
    }

    for(let i = 0; i< data.numberOfSpies; i++){
        let randomIndex = Math.floor(Math.random()* gameArray.length);
        gameArray[randomIndex] = 'Spy';
    }

    return gameArray;
}

export default generateArray;