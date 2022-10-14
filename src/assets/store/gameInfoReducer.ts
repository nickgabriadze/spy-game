import { createSlice } from "@reduxjs/toolkit";

interface GameInfo {
    numberOfPlayers: number,
    numberOfSpies: number,
    timeDuration: number,
    gameStarted: boolean
}

const initialState: GameInfo = {
    numberOfPlayers: 3,
    numberOfSpies: 1,
    timeDuration: 2,
    gameStarted: false
}

export const gameInfoReducer = createSlice({
    name: 'Game info',
    initialState,
    reducers: {
        setPlayerInfo: (state, action) => {
           return({
            ...state,
            numberOfPlayers: action.payload.numberOfPlayers,
            numberOfSpies: action.payload.numberOfSpies
           });
        },
        setTimeDuration: (state, action) => {
            return({
                ...state,
                timeDuration: action.payload.timeDuration > 10 ? 10: action.payload.timeDuration
            })
        },
        setGameProcess: (state, action) => {
            return({
                ...state,
                gameStarted: action.payload.started
            })
        }
    }
})

export const {setPlayerInfo, setTimeDuration, setGameProcess} = gameInfoReducer.actions;
export default gameInfoReducer.reducer;