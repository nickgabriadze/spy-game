import { useAppSelector } from "./hooks"
import words from "./words";

function generateArray(){

   
    const data = useAppSelector(state => state.gameReducer);
    let spies = data.numberOfSpies;
    if(data.numberOfSpies >= data.numberOfPlayers){
        spies = Math.ceil((data.numberOfPlayers * 20)/100);
    }
    
    const randomWord = words[Math.floor(Math.random() * (words.length))];
    let gameArray:string[] = [];
    
    for(let i = 0; i < data.numberOfPlayers; i++){
    
            gameArray.push("Tap")
            gameArray.push(randomWord);
        
    }
    
    while( spies > 0){
        let randomIndex = Math.floor(Math.random() * gameArray.length);
        if(randomIndex % 2 == 1){
            gameArray[randomIndex] = "Spy"
            spies--;
        }
    }
    gameArray.push("Start The Timer")
  
    return gameArray;
}

export default generateArray;